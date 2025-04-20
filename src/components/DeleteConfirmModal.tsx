// components/DeleteConfirmModal.tsx
import React, { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (password: string, setError: (msg: string) => void) => void;
}

const DeleteConfirmModal: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setPassword("");
      setError("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!password.trim()) {
      setError("비밀번호를 입력해주세요.");
      return;
    }

    onConfirm(password, setError);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>비밀번호 확인</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); // 입력시 에러 초기화
            }}
          />
          {error && <p className="error_txt">{error}</p>}
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              취소
            </button>
            <button type="submit">삭제</button>
          </div>
        </form>
      </div>
    </div >
  );
};

export default DeleteConfirmModal;
