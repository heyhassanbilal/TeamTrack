import { useState } from "react";

export default function DiscussionPool() {
  const [messages, setMessages] = useState([
    { sender: "Hassan", text: "Hello everyone!", time: new Date() },
    { sender: "Anuj", text: "Hi!👋", time: new Date() },
    { sender: "User", text: "Hi!😁", time: new Date() },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        sender: "User",
        text: inputValue,
        time: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputValue(""); // Clear input after sending message
    }
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <>
      {/* Main Content */}
      <div className="h-full w-[65%] bg-white"></div>

      {/* Task Pool and Discussion Pool */}
      <div className="h-full w-[17.5%] bg-[#EEEEEE]">
        {/* Tasks Pool */}
        <div className="h-2/5">
          {/* Heading */}
          <h1 className="font-bold ml-4 mt-3 w-1/2 inline-block">
            Tasks Pool
            <i className="text-sm fa-solid fa-chevron-up ml-1"></i>
          </h1>
          <button className="fa-solid fa-arrow-right float-end mt-4 mr-3"></button>
          <hr className="border-1 border-[#E1E1E1] w-[90%] mx-auto" />

          {/* Search Bar */}
          <div className="w-full text-center">
            <div className="bg-[#E1E1E1] w-[90%] rounded-2xl ml-3 mt-2">
              <label
                htmlFor="PoolSearch"
                className="fa-solid fa-magnifying-glass pr-2"
              ></label>
              <input
                type="text"
                placeholder="Search"
                id="PoolSearch"
                name="PoolSearch"
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
          <div className="flex flex-col  bg-[#393E46] w-[90%] h-[90%] p-3 ml-4 rounded-2xl">
            {/* Chats */}
            <div
              className="overflow-auto h-[90%] mb-3 scroll"
              style={{
                scrollbarWidth: "none",
              }}
            >
              {messages.map((message, index) => (
                <MessageBubble
                  key={index}
                  messageSender={message.sender}
                  message={message.text}
                  time={formatTime(message.time)}
                />
              ))}
            </div>

            {/* Type a Message */}
            <form
              onSubmit={handleSendMessage}
              className="w-full bg-[#E1E1E1] rounded-lg p-2 flex items-center self-end "
            >
              {/* Insert A File */}
              <input type="file" id="insert-file" className="hidden"></input>
              <label
                htmlFor="insert-file"
                className="fa-solid fa-circle-plus text-[#ABABAB]"
              ></label>

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message"
                className="ml-1 bg-[#E1E1E1] w-full"
              />
              <button type="submit" className="ml-2">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function MessageBubble({ messageSender, message, time }) {
  const isUser = messageSender === "User";
  const bubbleClass = isUser
    ? " bg-[#1D2D27] rounded-tl-lg rounded-tr-lg rounded-bl-lg self-end "
    : " bg-[#222831] rounded-tl-lg rounded-tr-lg rounded-br-lg self-start ";

  return (
    <div className={`${bubbleClass} mb-3 p-2`}>
      <div className="flex justify-between text-white text-[0.7rem] ">
        <p>{messageSender}</p>
        <p>{time}</p>
      </div>
      <h4 className="text-white ml-3">{message}</h4>
    </div>
  );
}
