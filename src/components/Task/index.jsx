import { useState } from "react";

export const Task = () => {
  const [addTask, setTask] = useState([]);
  const addNameHandler = () => {
    const inputName = document.getElementById("name").value;
    console.log("first inputName", inputName);
    setTask([...addTask, { task: inputName }]);
    console.log("setter variable", addTask);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        id="name"
        placeholder="Enter Task"
        className="border border-gray-300 p-2 rounded-md mr-2"
      />
      <button
        onClick={addNameHandler}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Add Task
      </button>
      {addTask.map((items, index) => {
        return (
          <div key={index} className="flex items-center mt-2">
            <h3 className="text-2xl font-semibold underline">{items.task}</h3>
          </div>
        );
      })}
    </div>
  );
};
