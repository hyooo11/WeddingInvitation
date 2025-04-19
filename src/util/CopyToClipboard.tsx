import React from "react";
import Toast from "@/components/Toast";
import { useToast } from "@/hook/useToast";


interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const { toast, showToast, hideToast } = useToast();
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast("주소가 복사되었습니다.", "success");
      })
      .catch((err) => {
        console.error("텍스트 복사 실패:", err);
      });
  };

  return (
    <div className="addressCopy">
      <p className="address">{text}</p>
      <button onClick={copyToClipboard}>
        주소 복사하기
      </button>
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

export default CopyToClipboard;
