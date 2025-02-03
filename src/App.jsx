import TaskForm from "./components/TaskForm.jsx";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList.jsx";
import ThemeToggler from "../src/ThemeToggler.jsx";
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, createdDate: Date.now() }]);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const clearCompleted = () => {
    const uncompletedTasks = tasks.filter((task) => !task.completed);
    setTasks(uncompletedTasks);
  };

  const showAllTasks = () => {
    setFilter("all");
  };

  const showActiveTasks = () => {
    setFilter("active");
  };

  const showCompletedTasks = () => {
    setFilter("completed");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="container max-width col-lg-8 col-md-9 col-sm-11 ">
      <div className="position-absolute me-1 top-0 end-0">
        <ThemeToggler className="theme-toggler" />
      </div>
      <div className="mt-5">
        <TaskForm addTask={addTask} />
      </div>
      <div>
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          clearCompleted={clearCompleted}
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showCompletedTasks={showCompletedTasks}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default App;
