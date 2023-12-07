// Toast.js
import React from "react";

const Toast = ({ message, type, onClose }) => {
  const toastClass = type === "success" ? "bg-green-600" : "bg-red-600";
  const iconClass = type === "success" ? "text-green-600" : "text-red-600";

  return (
    <div
      className={`fixed top-0 right-0 m-4 ${toastClass} z-[9999] text-white p-3 rounded-lg border border-white shadow-lg`}
    >
      <div className="flex items-center">
        <div className="px-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 1792 1792"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
          </svg>
        </div>
        <div className="ml-2 mr-6">
          <span className="font-semibold">
            {type === "success" ? "Success!" : "Error!"}
          </span>
          <span className="block">{message}</span>
        </div>
        <button className="ml-auto" onClick={onClose}>
          <span className={iconClass}>&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Toast;
