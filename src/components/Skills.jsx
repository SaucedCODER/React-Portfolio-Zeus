import React from "react";

import { data } from "../collections/skills.jsx";
import LogoRotating from "./LogoRotating.jsx";

const Skills = () => {
  const project = data;
  return (
    <div name="skills" className="w-full min-h-screen bg-[#0f0f0f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-green-600 ">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies I've explored and utilized
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {project.map((item, index) => (
            <div
              key={item.name + index}
              className="hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={item.path} alt="HTML icon" />
              <p className="my-4 text-gray-300">
                {item.name.toLocaleUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
      <LogoRotating />
    </div>
  );
};

export default Skills;
