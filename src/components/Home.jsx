import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0f0f0f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ffffff]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#d0f6cc]">
          ZEUS ORILLA
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8fb088]">
          I'm a Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building exceptional
          digital experiences. Currently, I’m focused on building responsive
          full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
