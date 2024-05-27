import React from 'react';
import ChatBox from './ChatBox';
const ChatWindow = () => {
  return (
    <div className="w-2/4 text-white p-4 pb-8  flex flex-col">

      <div className="flex items-center bg-[#002047] p-4 rounded-lg  mx-auto w-full mb-4">
        
        <img
          src="empty-profile-picture2.jpg" // Replace with actual avatar URL
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />

        <div className="ml-4">
          <h2 className="text-white text-lg font-semibold">Leslie Alexander</h2>
          <p className="text-gray-400">Web Designer</p>
        </div>

        <div className="ml-auto">
          <button className="text-gray-400 focus:outline-none hover:stroke-2 hover:scale-110 transition-all ease-in-out duration-300 
            cursor-pointer disabled:pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01"
              />
            </svg>
          </button>
        </div>
      </div>
      <ChatBox />
{ false &&
      <div className=" bg-gray-900 text-white  flex-1 flex-col p-4 w-full overflow-auto">
        <div className="h-full">
          <div className="mb-4">Chat with Leslie Alexander</div>
          <div className="mb-4">
            <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse.</div>
            <div className="text-xs text-gray-400 text-right">10:15 pm</div>
          </div>
          <div className="mb-4">
            <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse.</div>
            <div className="text-xs text-gray-400 text-right">12:15 pm </div>
          </div>
        </div>
        <div className="mt-4 flex">
          <input className="flex-grow p-2 bg-gray-800 rounded-l-lg" type="text" placeholder="Write a message..." />
          <button className="bg-blue-500 p-2 rounded-r-lg">Send</button>
        </div>
      </div>
}
    </div>
  );
};

export default ChatWindow;
