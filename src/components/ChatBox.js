import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {

  const [messages, setMessages] = useState([]);
  const [peers, setPeers] = useState(["kaan kocaturk", "felix fox"]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      console.log(sortedMessages);
      const current_chat = sortedMessages.filter(item => {
        return item.hasOwnProperty("receiver_name") && 
               (
                 (item.receiver_name === peers[0] && item.sender_name === peers[1]) ||
                 (item.receiver_name === peers[1] && item.sender_name === peers[0])
               );
      });
      // fetch profile photos
      current_chat.forEach(item => item.profile_img = "./empty-profile-picture2.jpg")
      setMessages(current_chat);


    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="chat-box w-full bg-[#002047] flex flex-col flex-1  justify-between rounded-lg overflow-auto">
      <div className="px-4 custom-scrollbar pt-2">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>

        <SendMessage scroll={scroll} />
    </div>
  );
};

export default ChatBox;

