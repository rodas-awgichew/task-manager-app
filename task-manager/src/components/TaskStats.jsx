import { useTasks } from "../context/TaskContext";

export default function TaskStats() {
  const { tasks } = useTasks();
  const completed = tasks.filter((t) => t.done).length;
  const pending = tasks.length - completed;

  return (
    <div className="mt-4 flex gap-4">
      <p className="font-medium">✅ Completed: {completed}</p>
      <p className="font-medium">⏳ Pending: {pending}</p>
    </div>
  );
}
