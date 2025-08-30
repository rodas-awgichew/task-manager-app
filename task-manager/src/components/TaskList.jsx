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
    return <p >No tasks yet. Add one above.</p>;
  }

  return (
    <ul >
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.text}</span>

          <div >
            <button
              onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
            >
              {task.done ? "Undo" : "Done"}
            </button>

            <button
              onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
