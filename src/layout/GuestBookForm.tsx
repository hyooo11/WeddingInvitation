"use client";
import React, { useState } from "react";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
import Button from "@/components/Button";

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
    <div className="GuestbookForm">
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <input
            type="text"
            placeholder="닉네임"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNickName(e.target.value)
            }
            required
          />
        </div>
        <div className="input_box">
          <input
            type="text"
            placeholder="축하메세지를 남겨주세요."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
            required
          />
        </div>
        <Button text="등록" />
      </form>
    </div>
  );
};

export default GuestbookForm;
