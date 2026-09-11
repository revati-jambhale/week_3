function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 mb-2 rounded">

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span
          className={
            task.completed
              ? "line-through text-gray-500"
              : ""
          }
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 font-bold"
      >
        Delete
      </button>

    </div>
  );
}

export default TaskItem;