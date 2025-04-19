"use client";

import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";


interface GuestBook {
  name: string;
  id: number;
  message: string;
  createAt: string
}

const GuestbookList = () => {
  const [messages, setMessages] = useState<GuestBook[]>([]);

  console.log(messages)

  useEffect(() => {
    const messagesRef = ref(database, "messageList");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];

      const newData = messagesArray.sort((a, b) => {
        return new Date(b.createAt).getTime() - new Date(a.createAt).getTime();
      });


      setMessages(newData);
    });
  }, []);

  return (
    <div className="GuestbookList">
      {messages.map((message) => (
        <li key={message.id}>
          <div className="w_info">
            <p className="name">{message.name}</p>
            <p className="date">{message.createAt}</p>
          </div>
          <div className="msg">
            <p>{message.message}</p>
          </div>
        </li>
      ))}

    </div>
  );
};

export default GuestbookList;
