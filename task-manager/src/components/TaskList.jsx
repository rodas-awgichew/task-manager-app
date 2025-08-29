import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskList() {
  const { tasks, dispatch } = useTasks();


  // Highlight tasks after 5s if not interacted
  useEffect(() => {
    const timers = tasks.map((task) =>
      setTimeout(() => {
        if (!task.done) {
          dispatch({ type: "HIGHLIGHT_TASK", payload: task.id });
        }
      }, 5000)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, [tasks, dispatch]);
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet. Add one above.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-2 border rounded ${
            task.done ? "bg-green-100 line-through" : ""
          } ${task.highlighted && !task.done ? "bg-yellow-100" : ""}`}
        >
          <span>{task.text}</span>
          <div className="space-x-2">
            <button
              onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
              className="px-2 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600"
            >
              {task.done ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
              className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
