import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export const TaskList = (props) => {
  const [searchItem, setSearchItem] = useState(props.task);

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...props.task];
    updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
    props.setTask(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...props.task];
    updatedTasks.splice(index, 1);
    props.setTask(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  useEffect(() => {
    if (props.inputString) {
      const filterSearch = props.task.filter((item) => {
        return item.task
          .toLowerCase()
          .includes(props.inputString.toLowerCase());
      });
      setSearchItem(filterSearch);
    } else {
      setSearchItem(props.task);
    }
  }, [props.inputString, props.task]);

  return (
    <div>
      {searchItem.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-3 p-2 border-2 border-gray-400 rounded-md mb-2"
          >
            <h3
              className={`text-xl font-semibold ${
                item.isChecked ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.task}
            </h3>
            <Checkbox
              color="indigo"
              checked={item.isChecked}
              onChange={() => handleCheckboxChange(index)}
              className="ml-2"
            />
            <Button
              className="bg-blue-600 text-white px-2 py-1 border-2 border-black"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
};
