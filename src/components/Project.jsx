import React from "react";
import { data } from "../collections/projects.jsx";

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
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank"className="text-center rounded-lg px-4 py-3 m-2
                        text-green-400 font-bold text-lg">
                    <button
                
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank"  className="text-center rounded-lg px-4 py-3 m-2
                        text-blue-400 font-bold text-lg">
                    <button
                     
                    >
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
