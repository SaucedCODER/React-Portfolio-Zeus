import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Accordion from "./Accordion";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0f0f0f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Zeus Miguel Orilla, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              My journey involves crafting digital solutions, ranging from
              personal projects to collaborative efforts, with the aim of making
              a positive impact. I thrive on challenges, love turning ideas into
              reality, and I'm eager to contribute my skills to diverse and
              exciting projects. Let's embark on this journey together!
              <span class="text-blue-400 cursor-pointer"> Read more...</span>
            </p>
          </div>
          <div>
            <h2 className="sm:text-left text-2xl text-gray-400 my-3 mt-5 font-bold">
              What Sets Me Apart
            </h2>
            <div>
              <Accordion
                title="Eager Learner"
                content="Passion fuels my journey. I'm diving headfirst into the world of CRUD applications and website cloning, eagerly absorbing every bit of knowledge to enhance my skills."
              />
              <Accordion
                title="Collaboration Fueled"
                content="I thrive in collaborative environments. Learning from experienced developers and contributing to team projects are experiences I'm eager to embrace."
              />
              <Accordion
                title="Adaptability"
                content="As a recent graduate, I bring adaptability and a fresh perspective. Every project is an opportunity to learn, innovate, and make a positive impact."
              />
            </div>
          </div>
          <div>
            <h2 class="sm:text-left text-2xl text-gray-400 my-3 mt-5 font-bold">
              My Vision
            </h2>
            <p>
              Imagine having a dedicated and motivated developer ready to take
              on challenges, transform ideas into reality, and contribute to
              innovative projects. My commitment is to continuous improvement,
              ensuring I evolve alongside the dynamic field of web development.
            </p>
            <h2 class="sm:text-left text-2xl text-blue-500 mb-4 mt-7 font-bold">
              Follow Me On
            </h2>
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <FaLinkedin size={30} />
              </div>
              <span className="font-bold">Linkedin</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <FaGithub size={30} />
              </div>
              <span className="font-bold">Github</span>
            </div>
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <FaFacebook size={30} />
              </div>
              <span className="font-bold">Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
