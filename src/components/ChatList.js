import { Typography } from '@material-tailwind/react';
import { ConfigProvider, Divider, List, Skeleton } from 'antd';
import Search from 'antd/es/transfer/search';
import React from 'react';

const ChatList = () => {
  let chats = [
    { name: 'Jacob Jones', message: 'Lorem ipsum dolor sit amet', time: '5m' },
    { name: 'Leslie Alexander', message: 'Lorem ipsum dolor sit amet', time: '5m' },
    { name: 'Eleanor Pena', message: 'Lorem ipsum dolor sit amet', time: '5m' },
    { name: 'Kathryn Murphy', message: 'Lorem ipsum dolor sit amet', time: '5m' },
    { name: 'Wade Warren', message: 'Lorem ipsum dolor sit amet', time: '5m' },
    { name: 'Marvin McKinney', message: 'Lorem ipsum dolor sit amet', time: '5m' },
  ];
  chats = [...chats, ...chats, ...chats, ...chats, ...chats, ...chats]

  return (
    <div className="w-1/4  text-white  px-4 pb-8 overflow-y-auto flex flex-col">
      
      <div className=" py-4 px-1 flex items-center justify-between rounded-md w-full">
        <div className="text-white text-lg font-semibold">Inbox</div>
        <div className="bg-blue-700 text-white rounded-full px-3 py-1 text-sm font-medium ml-1">2 New</div>
        <div className="ml-auto hover:stroke-2 hover:scale-110 transition-all ease-in-out duration-300 
          cursor-pointer disabled:pointer-events-none"
        >
          <svg className="text-white w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
      </div>
      
      <div  className="py-4 " >
      
        <Search placeholder="input search text" onSearch={"onSearch"} enterButton className="" 
        colorBgContainer="#002047" 
          size="large"
          ref={null}
        />

      </div>

      <div className='flex-1 overflow-auto'>
      <List className=' h-full rounded-lg  bg-[#002047] text-white w-full  custom-scrollbar '
        dataSource={[...chats]}
        renderItem={ (chat, index)  =>
        <div  className={ (index < (chats.length -1)) && ` border-b border-b-gray-400` }>
          <div key={index} className="mb-1 p-2">
          <div className="text-sm font-bold">{chat.name}</div>
          <div className="text-xs">{chat.message}</div>
          <div className="text-xs text-gray-400">{chat.time}</div>
          </div>
          </div>
       }
      />
      </div>
      </div>
  );
};

export default ChatList;
