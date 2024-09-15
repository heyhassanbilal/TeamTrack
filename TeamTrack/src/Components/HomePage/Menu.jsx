import { useState } from "react";
import createTask from "../../assets/createTask.svg";
import setting from "../../assets/setting.svg";
import signout from "../../assets/signout.svg";
import hambuger from "../../assets/hambuger.svg";
export default function Menu() {
  const [hidden, setHidden] = useState(false);

  function dropDown() {
    setHidden(!hidden);
  }

  return (
    <>
      <div className="h-full w-[17.5%] flex flex-col bg-[#EEEEEE] rounded-md">
        {/* Title, Closing sign, */}
        <div className="w-full mt-2 flex justify-between ">
          <h1 className="text-2xl ml-3 font-bold font-inter">Menu</h1>
          <img src={hambuger} className="text-2xl mr-2" />
        </div>

        {/* Search bar */}
        <div className="w-full text-center">
          <div className="bg-[#E1E1E1] w-[90%] rounded-2xl ml-3 mt-2">
            <label
              htmlFor="menuSearch"
              className="fa-solid fa-magnifying-glass pr-2"
            ></label>
            <input
              type="text"
              placeholder="Search"
              id="menuSearch"
              className="h-9 bg-[#E1E1E1]"
            />
          </div>
        </div>

        {/* Task */}
        <div className="flex flex-col h-1/4 mt-9">
          {/* Heading */}

          <h1 className="font-bold ml-4">
            Tasks
            <i
              className={
                hidden
                  ? "text-sm fa-solid fa-chevron-down ml-1"
                  : "text-sm fa-solid fa-chevron-up ml-1"
              }
              onClick={dropDown}
            ></i>
          </h1>
          <hr className="border-1 border-[#E1E1E1] w-[90%] mx-auto" />

          <div className={hidden ? "hidden" : "p-1"}>
            <Button ButtonIcon={createTask} ButtonText={"Create Task"} />
            <Button ButtonIcon={createTask} ButtonText={"Create Task"} />
            <Button ButtonIcon={createTask} ButtonText={"Create Task"} />
            <Button ButtonIcon={createTask} ButtonText={"Create Task"} />
          </div>
        </div>

        {/* Groups */}
        <div className="flex flex-col h-2/5 mt-9 bg-[EEEEEE]">
          {/* heading */}
          <h1 className="font-bold ml-4">Groups</h1>
          <hr className="border-1 border-[#E1E1E1] w-[90%] my-1 mx-auto" />

          {/* Group List */}
          <div className="flex flex-col h-full bg-[#EEEEEE] w-full justify-center">
            <Group groupName="ClassRoom" />
            <Group groupName="ScienceClub" />
            <Group groupName="School" />
            <Group groupName="Something" />
          </div>
        </div>
        <hr className="border-1 border-[#E1E1E1] w-[90%] my-1 mx-auto" />
        <div className="flex flex-col h-1/6 mt-9">
          {/* Settings */}
          <Button ButtonIcon={setting} ButtonText={"Setting"} />
          {/* Sign Out */}
          <Button ButtonIcon={signout} ButtonText={"Sign Out"} />
        </div>
      </div>
    </>
  );
}

function Group({ groupIcon = "", groupName = "GroupName", grpupNotif = "0" }) {
  return (
    <div className="flex items-center h-1/4 w-[95%] rounded-xl ml-1 hover:bg-[#979797]">
      {/* Profile Icon */}
      {groupIcon === "" ? (
        <div className="m-2 h-[50px] w-[50px] rounded-full bg-white"></div>
      ) : (
        <img src={groupIcon} alt="G"></img>
      )}

      {/* Group Name */}
      <h1 className="font-bold">{groupName}</h1>

      {/* Number of Task */}
      <div className="bg-[#D9D9D9] rounded-xl ml-auto mr-2">
        <h2 className="px-5">{grpupNotif}</h2>
      </div>
    </div>
  );
}

function Button({ ButtonIcon, ButtonText, ButtonFunction }) {
  return (
    <>
      <div
        className="font-bold text-sm flex ml-6 mb-2"
        onClick={ButtonFunction}
      >
        <img src={ButtonIcon} className="mt-[0.2rem] mr-4 w-4" alt=""></img>
        {ButtonText}
      </div>
    </>
  );
}
