import React from "react";
import { data } from "../collections/projects.jsx";
import { FaCode } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";
const Project = () => {
  //project data with info
  const project = data;

  return (
    <div
      name="projects"
      className="w-full min-h-screen text-gray-300 bg-[#0f0f0f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Projects
          </p>
          <p className="py-4">// Check out some of my recent project</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-[2rem]">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.path})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col align-center">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center flex justify-center mt-auto">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank"className="flex items-center text-center rounded-lg 
                        text-green-400 font-bold text-lg mr-5">
                    <div className="mr-2"><FaCode /></div>
                    <button>
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank"  className="flex items-center text-center rounded-lg 
                        text-blue-400 font-bold text-lg">
                    <div className="mr-2"><SlGlobe /></div>
                    <button className="font-bold">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
