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

  const chooseAllTasks = () => {
    setFilter("all");
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
    <div className="App">
      <div className="text-end position-absolute me-1 top-0 end-0">
        <ThemeToggler className="theme-toggler" />
      </div>
      <div className="container col-lg-6 col-md-8 col-sm-10 mt-5 max-width">
        <TaskForm addTask={addTask} />
      </div>
      <div className=" container col-lg-6 col-md-8 col-sm-10 mt-1 max-width">
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          clearCompleted={clearCompleted}
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showCompletedTasks={showCompletedTasks}
          filter={filter}
          chooseAllTasks={chooseAllTasks}
        />
      </div>
    </div>
  );
}

export default App;
