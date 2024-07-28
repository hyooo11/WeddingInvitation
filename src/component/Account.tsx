"use client";
import { ReactNode, useState } from "react";

interface IAccordionProps {
  title: string;
  children: ReactNode;
}

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <p>신랑측 계좌번호</p>
      <p>신부측 계좌번호</p>
      <p>신랑에게 연락하기</p>
      <p>신부에게 연락하기</p>
      <p>혼주에게 연락하기</p>
      {/* <div>
        <div onClick={toggleAccordion}>
          <p>신랑측 계좌번호</p>
        </div>
        {isOpen && <div>내용</div>}
      </div> */}
    </div>
  );
};
export default Account;
