"use client";

import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import Marquee from "react-fast-marquee";

interface GuestBook {
  nickName: string;
  id: number;
  message: string;
}

const GuestbookList = () => {
  const [messages, setMessages] = useState<GuestBook[]>([]);

  useEffect(() => {
    const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setMessages(messagesArray);
    });
  }, []);

  return (
    <div className="GuestbookList">
      <Marquee>
        {messages.map((message) => (
          <li key={message.id}>
            <p>{message.message}</p>
            <p>- {message.nickName} -</p>
          </li>
        ))}
      </Marquee>
    </div>
  );
};

export default GuestbookList;
