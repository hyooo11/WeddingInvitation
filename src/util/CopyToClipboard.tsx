import React from "react";

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("텍스트가 복사되었습니다!");
      })
      .catch((err) => {
        console.error("텍스트 복사 실패:", err);
      });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>{text}</span>
      <button onClick={copyToClipboard} style={{ marginLeft: "10px" }}>
        복사하기
      </button>
    </div>
  );
};

export default CopyToClipboard;
