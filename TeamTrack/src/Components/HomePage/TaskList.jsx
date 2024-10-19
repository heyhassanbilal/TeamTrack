import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { name: "English", completed: false },
    { name: "Hindi", completed: false },
    { name: "Maths", completed: false },
    { name: "Science", completed: false },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div
      id="TaskList"
      className="bg-gray-900 rounded-2xl p-6 max-w-lg mx-auto mt-8 shadow-lg col-start-3 col-span-2 row-span-3"
    >
      <h2 className="text-white text-2xl font-bold mb-4 text-center">
        <img src="https://via.placeholder.com/50" alt="g" className="w-9" />
        Task List
      </h2>
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg shadow-md ${
              task.completed ? "bg-green-500" : "bg-gray-700"
            } hover:bg-gray-600`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
                className="h-5 w-5 text-green-600 rounded-full focus:ring-2 focus:ring-green-400 cursor-pointer"
              />
              <span
                className={`ml-3 text-lg text-white ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
