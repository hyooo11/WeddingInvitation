"use client";
import React, { useState } from "react";
import { database } from "../firebase";
import { ref, push } from "firebase/database";

const GuestbookForm = () => {
  const [nickName, setNickName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messagesRef = ref(database, "messages");
    push(messagesRef, { nickName, message });
    setNickName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="닉네임"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNickName(e.target.value)
        }
        required
      />
      <input
        type="text"
        placeholder="축하메세지를 남겨주세요."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default GuestbookForm;
