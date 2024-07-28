"use client";
import React, { ReactNode, useState } from "react";

interface AccordionProps {
  children: ReactNode;
}

interface AccordionItemProps {
  title: string;
  isOpen?: boolean;
  onToggle?: () => void;
  children: ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) && child.type === AccordionItem
          ? React.cloneElement(
              child as React.ReactElement<AccordionItemProps>,
              {
                isOpen: openIndex === index,
                onToggle: () => handleToggle(index),
              }
            )
          : child
      )}
    </div>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div>
      <button onClick={onToggle} style={{ display: "block", width: "100%" }}>
        {title}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
