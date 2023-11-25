import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbDownload } from "react-icons/tb";
import { Link } from "react-scroll";
{
  /* <img
loading="lazy"
src="./assets/skills/bootstrap.png"
alt="Ideacraft"
className="logo hidden scale-40 -translate-y-32 transition-all duration-2400 ease-cubic"
/> */
}
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0f0f0f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ffffff]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#d0f6cc]">
          MIGUEL ORILLA
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8fb088]">
          I'm a Web Developer.
        </h2>
        <p className="text-[#88b095] py-4 max-w-[700px]">
          I'm your down-to-earth Full-stack Web Developer. No flashy landing
          pages, just a few modest projects I've worked on. Picture me cloning
          websites and putting together some CRUD apps from scratch — just
          keeping it real.
        </p>
        <div className="flex">
          <Link to="projects" smooth={true} duration={800}>
            <button className="text-white group border-1 px-6 py-3 my-2 flex items-center bg-green-600 hover:btn-hover mr-3 border-[1px] border-green-600">
              Resume
              <TbDownload className="ml-3" />
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={800}>
            <button className="text-white group border-[1px] border-gray-500 px-6 py-3 my-2 flex items-center  hover:border-green-600">
              See my Project
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
