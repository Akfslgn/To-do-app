import React from "react";
import { FaTrash } from "react-icons/fa";

function TaskCard({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="card rounded-0 shadow border-bottom">
      <div className="card-body d-flex justify-content-between">
        <div className="d-flex align-items-left align-self-center">
          <span className="position-absolute top-0 end-0 translate-top badge text-muted opacity-50 ">
            {<>Created: {new Date(task.createdDate).toLocaleString()}</>}
          </span>
          <input
            id="task-checkbox"
            type="checkbox"
            className="form-check-input rounded-5 fs-5 ms-0"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <h5
            className={`card-title d-flex mt-1 ms-2 ${
              task.completed ? "completed" : ""
            }`}
          >
            {task.task}
          </h5>
        </div>
        <button
          type="button"
          className="btn"
          aria-label="Close"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash className="text-secondary opacity-40" />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
