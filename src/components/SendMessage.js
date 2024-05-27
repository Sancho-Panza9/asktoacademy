import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      sender_name: displayName,
      receiver_name: "felix fox",
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex  px-4 pb-4 h-20">

    { false && <form onSubmit={(event) => sendMessage(event)} className="">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>}
    
    <form onSubmit={(event) => sendMessage(event)} className="flex   flex-grow rounded-lg  bg-gray-800 border-2
     border-white "
    >
      <div  className="flex flex-grow pl-2">
      <input  type="text" placeholder="Write a message..." 
        id="messageInput"
        name="messageInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-gray-800 flex-grow form-input__input border-none outline-none"
      />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 hover: p-2 rounded-md m-1">Send</button>
    </form>
  </div>

  );
};

export default SendMessage;
