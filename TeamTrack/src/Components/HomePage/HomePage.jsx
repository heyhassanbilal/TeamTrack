import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden flex">
        {/* MENU */}
        <div className="h-full w-[17.5%] flex flex-col bg-[#EEEEEE] rounded-md">
          {/* Title, Closing sign, */}
          <div className="w-full mt-2 flex justify-between ">
            <h1 className="text-2xl ml-3 font-bold font-inter">Menu</h1>
            <i class="fa-solid fa-bars text-2xl mr-2"></i>
          </div>

          {/* Search bar */}
          <div className="w-full text-center">
            <div className="bg-[#E1E1E1] w-[90%] rounded-2xl ml-3 mt-2">
              <button className="">
                <i class="fa-solid fa-magnifying-glass pr-2"></i>
              </button>
              <input
                type="text"
                placeholder="Search"
                className="h-9 bg-[#E1E1E1]"
              />
            </div>
          </div>

          {/* Task */}
          <div className="flex flex-col h-1/4 mt-9">
            {/* Heading */}

            <h1 className="font-bold ml-4">
              Tasks
              <i class=" text-sm fa-solid fa-chevron-up ml-1"></i>
            </h1>

            <hr class="border-1 border-[#E1E1E1] w-[90%] mx-auto" />

            {/* Create Task */}
            <div className="">
              <h1 className="flex w-[80%] ml-10 mt-2 text-sm">
                <svg
                  className="mt-[0.2rem] mr-2"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2L20 8M14 2V8H20M12 18V12M9 15H15"
                    stroke="#1E1E1E"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Create Task
              </h1>
            </div>
          </div>

          {/* Groups */}
          <div className="flex flex-col h-2/5 mt-9 bg-[EEEEEE]">
            {/* heading */}
            <h1 className="font-bold ml-4">Groups</h1>
            <hr class="border-1 border-[#E1E1E1] w-[90%] my-1 mx-auto" />

            {/* Group List */}
            <div className="flex flex-col h-full bg-[#EEEEEE] w-full justify-center">
              <div className="flex items-center h-1/4 w-[95%] bg-[#979797] rounded-xl">
                {/* Profile Icon */}
                <div className="m-2 h-[50px] w-[50px] rounded-full bg-white"></div>

                {/* Group Name */}
                <h1 className="font-bold">School</h1>

                {/* Number of Task */}
                <div className="bg-[#D9D9D9] rounded-xl ml-auto mr-2">
                  <h2 className="px-5">2</h2>
                </div>
              </div>
              <div className="flex items-center h-1/4 w-[95%] rounded-xl">
                {/* Profile Icon */}
                <div className="m-2 h-[50px] w-[50px] rounded-full bg-white"></div>

                {/* Group Name */}
                <h1 className="font-bold">School</h1>

                {/* Number of Task */}
                <div className="bg-[#D9D9D9] rounded-xl ml-auto mr-2">
                  <h2 className="px-5">2</h2>
                </div>
              </div>
              <div className="flex items-center h-1/4 w-[95%] rounded-xl">
                {/* Profile Icon */}
                <div className="m-2 h-[50px] w-[50px] rounded-full bg-white"></div>

                {/* Group Name */}
                <h1 className="font-bold">School</h1>

                {/* Number of Task */}
                <div className="bg-[#D9D9D9] rounded-xl ml-auto mr-2">
                  <h2 className="px-5">2</h2>
                </div>
              </div>
              <div className="flex items-center h-1/4 w-[95%] rounded-xl">
                {/* Profile Icon */}
                <div className="m-2 h-[50px] w-[50px] rounded-full bg-white"></div>

                {/* Group Name */}
                <h1 className="font-bold">School</h1>

                {/* Number of Task */}
                <div className="bg-[#D9D9D9] rounded-xl ml-auto mr-2">
                  <h2 className="px-5">2</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Settings, Sign Out */}
          <div className="flex flex-col h-1/6 mt-9">
            <div>
              <h6 className="font-bold text-sm">
                <i class="fa-solid fa-gear ml-4 mr-4 mb-4"></i>Settings
              </h6>
            </div>
            <div>
              <h6 className="font-bold text-sm">
                <i class="fa-solid fa-arrow-right-from-bracket ml-4 mr-4"></i>
                Sign Out
              </h6>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="h-full w-[65%] bg-white"></div>

        {/* Task Pool and  Discussion Pool*/}
        <div className="h-full w-[17.5%] bg-[#EEEEEE]">
          {/* Tasks Pool */}
          <div className="h-2/5">
            {/* Heading */}
            <h1 className="font-bold ml-4 mt-3 w-1/2 inline-block">
              Tasks Pool
              <i class="text-sm fa-solid fa-chevron-up ml-1"></i>
            </h1>
            <i class="fa-solid fa-arrow-right float-end mt-4 mr-3"></i>
            <hr class="border-1 border-[#E1E1E1] w-[90%] mx-auto" />

            {/* Search Bar */}
            <div className="w-full text-center">
              <div className="bg-[#E1E1E1] w-[90%] rounded-2xl ml-3 mt-2">
                <button className="">
                  <i class="fa-solid fa-magnifying-glass pr-2"></i>
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className="h-9 bg-[#E1E1E1]"
                />
              </div>
            </div>
          </div>
          
          <hr class="border-1 border-[#E1E1E1] w-[90%] mx-auto" />

          {/* Discussion Pool */}
          <div className="h-3/5">
                {/* Heading */}
                <h1 className="font-bold ml-4 mt-2">Discussion pool</h1>

                {/* Chat box */}
                <div className="flex flex-col justify-between bg-[#393E46] w-[90%] h-[90%] p-4 ml-4 rounded-2xl">

                    {/* Chats */}
                    <div className="">
                        <div className="w-1/2 h-11 rounded-tl-lg rounded-tr-lg rounded-br-lg mb-3 bg-[#222831]">
                            <p className="text-white text-[0.7rem] ml-3 pt-1">Hassan</p>
                            <h4 className="text-white ml-3">Hi Robin</h4>
                        </div>

                        <div className="w-1/2 h-11 rounded-tl-lg rounded-tr-lg rounded-bl-lg mb-3 float-end bg-[#1D2D27]">
                            <p className="text-white text-[0.7rem] ml-3 pt-1">you</p>
                            <h4 className="text-white ml-3">Hi Hassan!</h4>
                        </div>
                    </div>

                    {/* Type a Message */}
                    <div className="w-full bg-[#E1E1E1] rounded-lg p-1">

                        <button>
                            <i class="fa-solid fa-circle-plus text-[#ABABAB]"></i>
                        </button>
                        <input type="text" placeholder="type a message" className="ml-1 bg-[#E1E1E1]" />
                        
                    </div>
                    
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
