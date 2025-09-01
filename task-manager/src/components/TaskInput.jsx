import { useRef, useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";

export default function TaskInput() {
  const { dispatch } = useTasks();
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTask = () => {
    if (!input.trim()) 
    return ;
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
    inputRef.current.focus();
    

  };
  const ClearTask = () => {
    setInput("");
    inputRef.current.focus();
  }

  return (
    <div className="input-row" >
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task..."
      />
      <button onClick={addTask}>
        Add Task
      </button>
      <button onClick={ClearTask}>
        clear Task
      </button>
    </div>
  );
}




