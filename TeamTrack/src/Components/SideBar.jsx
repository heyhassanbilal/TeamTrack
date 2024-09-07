import React from "react";

function SideBar() {
  // Sample group icons (placeholder images for now)
  const groups = [
    "https://via.placeholder.com/50", // Replace with actual group icons
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
  ];

  return (
    <div className="flex bg-gray-900 row-start-2 row-end-12 rounded-xl ">
      {/* Groups Icon Bar */}
      <div className="flex flex-col items-center w-16 bg-gray-800 py-4 space-y-4 rounded-xl">
        {/* User Page*/}
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-white font-bold text-xl">User</span>
        </div>

        {/* Group Icons */}
        {groups.map((server, index) => (
          <div
            key={index}
            className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer flex items-center justify-center"
          >
            <img
              src={server}
              alt={`Server ${index + 1}`}
              className="rounded-full"
            />
          </div>
        ))}
        {/* Add Group Button */}
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
          <span className="text-green-500 font-bold text-2xl">+</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
