import { Typography } from "antd";
import React from "react";

const ChatHeader = () =>{
    return(
        <div className="flex justify-between items-center p-4">
      <Typography variant="h2" className="mb-4 text-4xl text-white font-bold">Chat</Typography>
      <div className="flex items-center space-x-6 pr-8">
        <button className="bg-blue-600 text-black px-6 py-2 rounded-lg">+ Chat</button>
        
        <div className="relative">
          <button className="text-white focus:outline-none">
            <svg  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 15V7a2.03 2.03 0 01.595-1.405L20 4H4l1.405 1.405A2.032 2.032 0 016 7v8c0 .522-.195 1.02-.595 1.405L4 17h5m6 0v2a2 2 0 11-4 0v-2m4 0H9" />
            </svg>
          </button>
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </div>

        <div className=" relative flex items-center text-white">
          <img className="w-8 h-8 rounded-full" src="empty-profile-picture2.jpg" alt="Profile" />
          <span className="ml-2">Leslie Alexander</span>
        </div>
      </div>
      </div>
    )
}


export default ChatHeader;