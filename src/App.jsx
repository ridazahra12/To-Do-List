import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { useState, useEffect } from "react";

function App() {
  const [inputString, setInputString] = useState("");
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      { task: "Task 1", isChecked: true },
      { task: "Task 2", isChecked: false },
      { task: "Task 3", isChecked: false },
    ]
  );

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTask(savedTasks);
    }
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold text-white mb-4">To-Do-List</h1>
        <AddTask
          setTask={setTask}
          task={task}
          inputString={inputString}
          setInputString={setInputString}
        />
        <TaskList
          task={task}
          setTask={setTask}
          inputString={inputString}
          setInputString={setInputString}
        />
      </div>
    </>
  );
}

export default App;
