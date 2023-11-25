import React, { useState } from "react";

const Accordion = ({ title, content, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center bg-gray-800 p-3 cursor-pointer transition duration-300 ease-in-out transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-semibold text-white">{title}</p>
        <svg
          className={`w-6 h-6 text-white ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div
        className={` bg-gray-700 text-white transition-max-height duration-300 ease-in-out${
          isOpen ? " max-h-screen " : " max-h-0 overflow-hidden "
        }`}
      >
        <p className="mb-0 p-3">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
