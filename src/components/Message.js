import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <div className={`chat-bubblee ${message.uid === user.uid ? "right" : ""}`}>
      <ChatMessage 
          avatar={message.profile_img} 
          message={message.text}
          time="10:15 pm" 
          isSender={message.uid === user.uid} 
        />
    </div>
  );
};


function ChatMessage({ avatar, message, time, isSender }) {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isSender && (
        <img 
          src={avatar} 
          alt="avatar" 
          className="w-10 h-10 rounded-full mr-4" 
        />
      )}
      <div className={`max-w-md p-4 rounded-lg ${isSender ? 'bg-blue-700 text-white' : 'bg-gray-800 text-white border border-blue-500'}`}>
        <p className="mb-2">{message}</p>
        <div className={`text-xs text-gray-400 ${isSender ? 'text-right' : ''}`}>
          {time}
        </div>
      </div>
      {isSender && (
        <img 
          src={avatar} 
          alt="avatar" 
          className="w-10 h-10 rounded-full ml-4" 
        />
      )}
    </div>
  );
}

export default Message;
