export default function DiscussionPool() {
  return(
    <>
      {/* Main Content */}
      <div className="h-full w-[65%] bg-white"></div>

      {/* Task Pool and  Discussion Pool*/}
      <div className="h-full w-[17.5%] bg-[#EEEEEE]">
        {/* Tasks Pool */}
        <div className="h-2/5">
          {/* Heading */}
          <h1 className="font-bold ml-4 mt-3 w-1/2 inline-block">
            Tasks Pool
            <i className="text-sm fa-solid fa-chevron-up ml-1"></i>
          </h1>
          <i className="fa-solid fa-arrow-right float-end mt-4 mr-3"></i>
          <hr className="border-1 border-[#E1E1E1] w-[90%] mx-auto" />

          {/* Search Bar */}
          <div className="w-full text-center">
            <div className="bg-[#E1E1E1] w-[90%] rounded-2xl ml-3 mt-2">
                <label  htmlFor="PoolSearch" className="fa-solid fa-magnifying-glass pr-2"></label>
              <input
                type="text"
                placeholder="Search"
                id = "PoolSearch"
                name = "PoolSearch"
                className="h-9 bg-[#E1E1E1]"
              />
            </div>
          </div>
        </div>

        <hr className="border-1 border-[#E1E1E1] w-[90%] mx-auto" />

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
                <i className="fa-solid fa-circle-plus text-[#ABABAB]"></i>
              </button>
              <input
                type="text"
                placeholder="type a message"
                className="ml-1 bg-[#E1E1E1]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
