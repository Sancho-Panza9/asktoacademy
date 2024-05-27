import React from 'react';

const UserProfile = () => {
  return (
    <div className="w-1/4  text-white  p-4  pb-8 flex">
      <div className=" bg-[#002047] rounded-lg p-4 w-full  overflow-auto custom-scrollbar">
      <div className="relative flex flex-col items-center">
        <img 
          className="w-28 h-28 rounded-full border-4 border-blue-700"
          src="empty-profile-picture2.jpg"
          alt="Profile"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg font-bold">Leslie Alexander</h2>
        <p className="text-gray-300">Web Designer</p>
        <div className="flex items-center justify-center mt-2 ">
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927C9.767 1.444 11.233 1.444 11.951 2.927L13.614 6.322L17.393 6.905C18.956 7.163 19.623 9.083 18.445 10.149L15.787 12.453L16.337 16.2C16.533 17.716 14.995 18.787 13.614 18.08L10.5 16.409L7.386 18.08C6.005 18.787 4.467 17.716 4.663 16.2L5.213 12.453L2.555 10.149C1.377 9.083 2.044 7.163 3.607 6.905L7.386 6.322L9.049 2.927ZM10.5 13.584L12.82 14.82L12.272 12.265L14.136 10.7L11.526 10.292L10.5 7.958L9.474 10.292L6.864 10.7L8.728 12.265L8.18 14.82L10.5 13.584Z"/>
          </svg>
          <span className="ml-2 text-gray-300 text-xs">4.7 (Rating)</span>
        </div>
      </div>        
<ChatProfile/>
      
             
      </div>
    </div>
  );
};

export default UserProfile;

const ChatProfile = () => {
  return (
    <div className=" text-white px-1 py-4 space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <button className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg">
          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/>
          </svg>
          <span className="mt-2">Audio</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg">
          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10l4.5-4.5-1.4-1.4L13.5 8.6V2h-2v8H8v2h3.5V18h2v-6h3.5l4.5 4.5-1.4 1.4L15 10z"/>
          </svg>
          <span className="mt-2">Video</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg">
          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3H7a1 1 0 000 2h10a1 1 0 010 2H7a1 1 0 100 2h10a1 1 0 010 2H7a1 1 0 000 2h10a1 1 0 110 2H7a1 1 0 010-2H5a3 3 0 100 6h12a3 3 0 100-6H9a1 1 0 010-2h10a3 3 0 000-6z"/>
          </svg>
          <span className="mt-2">Search</span>
        </button>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-lg">God of time <span role="img" aria-label="saturn">🪐</span></p>
        <p className="text-gray-400">Sep 26, 2020</p>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 3a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V3z"/>
            </svg>
            <span>Media, Links, and Docs</span>
          </div>
          <span>369</span>
        </div>
        
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927C9.767 1.444 11.233 1.444 11.951 2.927L13.614 6.322L17.393 6.905C18.956 7.163 19.623 9.083 18.445 10.149L15.787 12.453L16.337 16.2C16.533 17.716 14.995 18.787 13.614 18.08L10.5 16.409L7.386 18.08C6.005 18.787 4.467 17.716 4.663 16.2L5.213 12.453L2.555 10.149C1.377 9.083 2.044 7.163 3.607 6.905L7.386 6.322L9.049 2.927ZM10.5 13.584L12.82 14.82L12.272 12.265L14.136 10.7L11.526 10.292L10.5 7.958L9.474 10.292L6.864 10.7L8.728 12.265L8.18 14.82L10.5 13.584Z"/>
            </svg>
            <span>Starred Messages</span>
          </div>
          <span>None</span>
        </div>

        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a8 8 0 018 8v1.09a7 7 0 01-5 6.64V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1.27a7 7 0 01-5-6.64V10a8 8 0 018-8zm0-2a10 10 0 00-8.95 5.91A4.992 4.992 0 015 10v1a10 10 0 008 9.95V22h2v-1.05A10 10 0 0020 11v-1a4.992 4.992 0 013.95-4.09A10 10 0 0010 0z"/>
            </svg>
            <span>Notifications and Sounds</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a8 8 0 018 8v1.09a7 7 0 01-5 6.64V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1.27a7 7 0 01-5-6.64V10a8 8 0 018-8zm0-2a10 10 0 00-8.95 5.91A4.992 4.992 0 015 10v1a10 10 0 008 9.95V22h2v-1.05A10 10 0 0020 11v-1a4.992 4.992 0 013.95-4.09A10 10 0 0010 0z"/>
            </svg>
            <span>Wallpaper</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 3a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V3z"/>
            </svg>
            <span>Save to Photos</span>
          </div>
          <span>Default</span>
        </div>
      </div>
    </div>
  );
};

