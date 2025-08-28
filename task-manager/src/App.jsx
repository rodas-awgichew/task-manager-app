import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";


export default function App() {
  return (
    <TaskProvider>
      <div className="max-w-xl mx-auto p-16">
        <h1 className="text-2xl font-bold mb-4 p-15">📝 Personal Task Manager</h1>
        <TaskInput />
        
      
      </div>
    </TaskProvider>
  );
}
