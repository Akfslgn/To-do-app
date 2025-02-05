import TaskForm from "./components/TaskForm.jsx";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList.jsx";
import ThemeToggler from "../src/ThemeToggler.jsx";
function App() {
  const [tasks, setTasks] = useState([]);
  const USER_ID = import.meta.env.VITE_USER_ID;

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/todos?user_id=" + USER_ID);
      const data = await response.json();
      console.log("data fetched", data);
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const [filter, setFilter] = useState("all");

  const handleClearCompleted = async () => {
    try {
      const completedTasks = tasks.filter((task) => task.completed);

      await Promise.all(
        completedTasks.map((task) =>
          fetch(`/api/todos/${task.id}?user_id=${USER_ID}`, {
            method: "DELETE",
          })
        )
      );

      console.log("Completed tasks cleared");
      fetchTasks();
    } catch (e) {
      console.log(e);
    }
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
        <TaskForm fetchTasks={fetchTasks} />
      </div>
      <div>
        <TaskList
          tasks={filteredTasks}
          fetchTasks={fetchTasks}
          handleClearCompleted={handleClearCompleted}
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
