import React from "react";
import { FaTrash } from "react-icons/fa";

function TaskCard({ task, fetchTasks }) {
  const USER_ID = import.meta.env.VITE_USER_ID;

  const handleDelete = async () => {
    console.log("Deleting the task through API");
    try {
      const response = await fetch(`/api/todos/${task.id}?user_id=${USER_ID}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error deleting the task: ${task.id}`);
      }

      console.log("Fetching the tasks");
      fetchTasks();
    } catch (e) {
      console.log(e);
    }
  };

  const handleToggleCompletion = async () => {
    try {
      const response = await fetch(`/api/todos/${task.id}?user_id=${USER_ID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: task.title,
          completed: !task.completed,
          user_id: USER_ID,
          created_at: task.created_at,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error updating task completion: ${task.id}`);
      }

      const data = await response.json();
      console.log("Updated task:", data);

      fetchTasks();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="card rounded-0 shadow border-bottom">
      <div className="card-body d-flex justify-content-between">
        <div className="d-flex align-items-left align-self-center">
          <span className="position-absolute top-0 end-0 translate-top badge text-muted opacity-50">
            {<>Created: {new Date(task.created_at).toLocaleString()}</>}
          </span>
          <input
            id="task-checkbox"
            type="checkbox"
            className="form-check-input rounded-5 fs-5 ms-0"
            checked={task.completed}
            onChange={handleToggleCompletion}
          />
          <h5
            className={`card-title d-flex mt-1 ms-2 ${
              task.completed ? "completed" : ""
            }`}
          >
            {task.title}
          </h5>
        </div>
        <button
          type="button"
          className="btn"
          aria-label="Close"
          onClick={handleDelete}
        >
          <FaTrash className="text-secondary opacity-40" />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
