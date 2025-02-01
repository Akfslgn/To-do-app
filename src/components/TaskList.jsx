import TaskCard from "./TaskCard";
import TaskFooter from "./TaskFooter";
function TaskList({
  tasks,
  deleteTask,
  toggleTaskCompletion,
  clearCompleted,
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
          clearCompleted={clearCompleted}
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
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          createdDate={task.createdDate}
        />
      ))}
      <div className="bg-body card-footer rounded-0 shadow border border-1">
        <TaskFooter
          allTasks={tasks.length}
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
export default TaskList;
