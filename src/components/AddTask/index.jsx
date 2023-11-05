export const AddTask = (props) => {
  const onClickHandler = () => {
    const updatedTasks = [
      ...props.task,
      { task: props.inputString, isChecked: false },
    ];
    props.setTask(updatedTasks);
    props.setInputString("");

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="p-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter Task"
          value={props.inputString}
          onChange={(e) => {
            props.setInputString(e.target.value);
          }}
          className="border border-gray-300 p-2 rounded-md mr-2"
        />
        <button
          onClick={onClickHandler}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          ✅
        </button>
      </div>
    </div>
  );
};
