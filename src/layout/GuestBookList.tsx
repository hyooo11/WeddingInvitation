"use client";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, onValue, remove } from "firebase/database";
import { IoClose } from "react-icons/io5";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";
import Toast from "@/components/Toast";
import { useToast } from "@/hook/useToast";

interface GuestBook {
  name: string;
  id: string;
  message: string;
  createAt: string;
  password: string;
}

const GuestbookList = () => {
  const [messages, setMessages] = useState<GuestBook[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedMessage, setSelectedMessage] = useState<GuestBook | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast, showToast, hideToast } = useToast();

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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const openDeleteModal = (message: GuestBook) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = (
    inputPassword: string,
    setError: (msg: string) => void
  ) => {
    if (selectedMessage) {
      if (inputPassword === selectedMessage.password) {
        const messageRef = ref(database, `messageList/${selectedMessage.id}`);
        remove(messageRef)
          .then(() => {
            showToast("삭제되었습니다.");
            setMessages((prev) => prev.filter((msg) => msg.id !== selectedMessage.id));
            setIsModalOpen(false);
            setSelectedMessage(null);
          })
          .catch((err) => {
            console.error(err);
            setError("삭제 중 오류가 발생했습니다.");
          });
      } else {
        setError("비밀번호가 일치하지 않습니다.");
      }
    }
  };


  const isAllLoaded = visibleCount >= messages.length;

  return (
    <div className="GuestbookList">
      {messages.slice(0, visibleCount).map((message) => (
        <li key={message.id}>
          <div className="w_info">
            <p className="name">{message.name}</p>
            <p className="date">{message.createAt}</p>
            <button
              className="del_btn"
              onClick={() => openDeleteModal(message)}
            >
              <IoClose />
            </button>
          </div>
          <div className="msg">
            <p>{message.message}</p>
          </div>
        </li>
      ))}

      {!isAllLoaded && (
        <button type="button" className="showmore" onClick={handleLoadMore}>
          show more
        </button>
      )}

      <DeleteConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export default GuestbookList;
