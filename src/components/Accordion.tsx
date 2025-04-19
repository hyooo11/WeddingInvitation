"use client";
import React, { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface AccordionProps {
  children: ReactNode;
}

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className="Accordion">{children}</div>;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="AccordionItem">
      <button
        className="btn "
        onClick={handleToggle}
      >
        <span>{title}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className={`item_panel ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};
