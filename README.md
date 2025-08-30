# 📌 Personal Task Manager (React Hooks Project)

A simple **Task Management Application** built with **React Hooks** (`useState`, `useEffect`, `useRef`, `useReducer`, and `useContext`).
This app allows users to add, manage, and track tasks with automatic **timed reminders** and persistent storage.

---

## 🚀 Features

* **Add Tasks** → Create new tasks easily.
* **Mark as Done / Undo** → Toggle task completion.
* **Delete Tasks** → Remove tasks permanently.
* **Real-time Task Stats** → Shows total **completed** vs **pending** tasks.
* **Automatic Input Focus** → The input field is auto-focused when the page loads and after adding a task (via `useRef`).
* **Highlight Reminders** → Any pending task is automatically highlighted after **5 seconds** of inactivity.
* **Global State Management** → Powered by `useContext` and `useReducer` (no Redux needed).
* **Persistent Storage** → Tasks are saved in **localStorage** and stay even after page refresh.
* **Clean UI** → Minimal design with plain CSS (no Tailwind).

---

## 🛠️ Tech Stack

* **React (Vite or CRA)**
* **React Hooks**:

  * `useState` – Local state handling
  * `useReducer` – Task state management
  * `useContext` – Global state sharing
  * `useEffect` – Side effects (localStorage + timers)
  * `useRef` – Input focus
* **CSS** – Custom styling (no Tailwind)

---

## 📂 Project Structure

```
src/
│── components/
│   ├── TaskInput.jsx   # Input field & add/clear buttons
│   ├── TaskList.jsx    # Displays tasks, handles toggle/delete/highlight
│   ├── TaskStats.jsx   # Shows pending vs completed count
│
│── context/
│   └── TaskContext.jsx # useContext + useReducer (global state)
│
│── App.jsx             # Main app layout
│── index.css           # Custom CSS (no Tailwind)
│── main.jsx            # App entry point
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open your browser at:

   ```
   http://localhost:5173/
   ```

---

## 📸 Demo (Example Layout)

```
+-----------------------------------------+
|  Add a task: [___________] (Add) (Clear)|
|-----------------------------------------|
|  ⏳ Buy groceries      [Done] [Delete]   |
|  ⏳ Read book          [Done] [Delete]   |
|  ✅ Finish project     [Undo] [Delete]   |
|-----------------------------------------|
| ✅ Completed: 1   ⏳ Pending: 2          |
+-----------------------------------------+
```

* Pending tasks turn **yellow** after 5s (reminder).
* Completed tasks are shown with a **line-through**.

---

## 📝 License

This project is open-source and free to use under the **MIT License**.

