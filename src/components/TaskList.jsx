import TaskCard from "./TaskCard";
import TaskFooter from "./TaskFooter";
function TaskList({
  tasks,
  fetchTasks,
  handleToggleCompletion,
  handleClearCompleted,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
  filter,
}) {
  return tasks.length < 1 ? (
    <div className="">
      <div className="text-center mt-1  bg-body shadow text-secondary">
        No Tasks Available
      </div>
      <div className="bg-body card-footer rounded-0 shadow border border-1">
        <TaskFooter
          allTasks={tasks.length}
          handleClearCompleted={handleClearCompleted}
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showCompletedTasks={showCompletedTasks}
          filter={filter}
        />
      </div>
    </div>
  ) : (
    <div className="mt-1 ">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          fetchTasks={fetchTasks}
          handleToggleCompletion={handleToggleCompletion}
        />
      ))}
      <div className="bg-body card-footer rounded-0 shadow border border-1">
        <TaskFooter
          allTasks={tasks.length}
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showCompletedTasks={showCompletedTasks}
          filter={filter}
          handleClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}
export default TaskList;
