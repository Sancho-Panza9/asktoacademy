import React from 'react';
import Sidebar from '../components/SideBar';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import UserProfile from '../components/UserProfile';
import { Typography } from 'antd';
import ChatHeader from '../components/ChatHeader';

const LayoutChat = () => {
  return (
    <div className="flex flex-col  w-full">
      <ChatHeader/>
    
      <div className="flex w-full overflow-hidden h-full">
          <ChatList />
          <ChatWindow />
          <UserProfile />
      </div>
  </div>
  );
};

export default LayoutChat;
