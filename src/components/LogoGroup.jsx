import React from "react";

const LogoGroup = ({ logos }) => (
  <div className="logo-group flex flex-col items-center justify-center relative">
    {logos.map((item, index) => (
      <div
        key={item[0] + "-" + index}
        className={`logo ${item[2]} absolute top-0 max-h-14 max-w-[150px]`}
      >
        <div className="flex items-center">
          <div className="mr-2">{item[1]}</div>
          <span className="font-bold">{item[0]}</span>
        </div>
      </div>
    ))}
  </div>
);

export default LogoGroup;
