import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

export default function App() {
  return (
    <TaskProvider>
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">📝 Personal Task Manager</h1>
        <TaskInput />
        <TaskList />
        <TaskStats />
      </div>
    </TaskProvider>
  );
}
