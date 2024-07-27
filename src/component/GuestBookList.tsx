"use client";

import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

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
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          <strong>{message.nickName}</strong>: {message.message}
        </li>
      ))}
    </ul>
  );
};

export default GuestbookList;
