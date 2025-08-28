import { createContext, useReducer, useContext, useEffect } from "react";

const TaskContext = createContext();

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload, done: false, highlighted: false }];
    case "TOGGLE_TASK":
      return state.map(task =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    case "HIGHLIGHT_TASK":
      return state.map(task =>
        task.id === action.payload ? { ...task, highlighted: true } : task
      );
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

