import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";


export default function App() {
  return (
    <TaskProvider>
      <div className="app-container">
      <h1>📝 Personal Task Manager</h1>
        <TaskInput />
        <TaskList />
        <TaskStats />
   </div>

    </TaskProvider>
  );
}
