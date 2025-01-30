import { MdOutlineAdd } from "react-icons/md";
import React, { useState } from "react";
import { isValidTask } from "../utils";

function TaskForm({ addTask, toggleTaskCompletion }) {
  const [task, setTask] = useState("");
  const [validTask, setValidTask] = useState("");

  const handleTaskInput = (e) => {
    const value = e.target.value;
    setTask(value);
    setValidTask(isValidTask(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validTask) {
      return;
    }

    const newTask = {
      id: Date.now(),
      task: task,
    };
    addTask(newTask);
    setTask("");
    setValidTask(false);
  };

  return (
    <div className="max-width">
      <h2 className="text-center fw-bold opacity-75">To Do List</h2>
      <form
        id="task-form"
        className="z-1 form-control m-0  rounded-0 border-0 d-flex justify-content-between shadow max-width"
        onSubmit={handleSubmit}
      >
        <input
          onChange={() => toggleTaskCompletion(task.id)}
          onClick={toggleTaskCompletion}
          id="task-checkbox"
          type="checkbox"
          className="form-check-input align-self-center me-2 ms-1 fs-5 rounded-5"
        />
        <input
          placeholder="Create a new task... "
          onChange={handleTaskInput}
          value={task}
          id="task-input"
          className={
            "form-control border-0 mt-1 text-start ${validTask ? `` : `is-invalid`}"
          }
        />
        <button
          type="submit"
          id="add-btn"
          className="btn pe-2 ms-2 fs-2"
          disabled={!validTask}
        >
          <MdOutlineAdd />
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
