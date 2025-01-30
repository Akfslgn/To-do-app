import React from "react";
function TaskFooter({
  allTasks,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  clearCompleted,
  filter,
}) {
  return (
    <div className="task-bottom d-flex justify-content-between align-items-center px-2">
      <div>
        <span id="task-count" className="">
          {allTasks} Tasks Left
        </span>
      </div>
      <div>
        <button
          className={`btn btn-sm p-1  ${filter === "all" ? "active-btn" : ""}`}
          onClick={showAllTasks}
        >
          All
        </button>
        <button
          className={`btn btn-sm  p-1 ${
            filter === "active" ? "active-btn" : ""
          }`}
          onClick={showActiveTasks}
        >
          Active
        </button>
        <button
          className={`btn btn-sm p-1 ${
            filter === "completed" ? "active-btn" : ""
          }`}
          onClick={showCompletedTasks}
        >
          Completed
        </button>
      </div>

      <div>
        <button
          type="button"
          id="clear-completed"
          className="btn btn-sm"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TaskFooter;
