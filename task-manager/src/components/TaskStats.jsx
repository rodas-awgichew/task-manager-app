import { useTasks } from "../context/TaskContext";

export default function TaskStats() {
  const { tasks } = useTasks();
  const completed = tasks.filter((t) => t.done).length;
  const pending = tasks.length - completed;

  return (
    <div  className="task-stats">
      <p >✅ Completed: {completed}</p>
      <p >⏳ Pending: {pending}</p>
    </div>
  );
}
