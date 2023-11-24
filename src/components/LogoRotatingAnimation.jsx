import React, { useEffect } from "react";
import bootstrap from "../assets/skills/bootstrap.png";
import css from "../assets/skills/css-3.png";
import tailwind from "../assets/skills/tailwindcss.png";
const LogoRotatingAnimation = () => {
  useEffect(() => {
    const logosWrappers = document.querySelectorAll(".logo-group");

    const sleep = (number) => new Promise((res) => setTimeout(res, number));

    logosWrappers.forEach(async (logoWrapper, i) => {
      const logos = Array.from(logoWrapper.children);
      await sleep(1400 * i);
      setInterval(() => {
        let temp = logos[0];
        logos[0] = logos[1];
        logos[1] = logos[2];
        logos[2] = temp;
        logos[0].classList.add("hide", "to-top");
        logos[1].classList.remove("hide", "to-top", "to-bottom");
        logos[2].classList.add("hide", "to-bottom");
      }, 5600);
    });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="logos min-h-[50vh] flex justify-around items-start md:py-10 lg:py-[var(--spacing-x-large)] bg-[#0f0f0f] text-3xl">
      <div className="logo-group flex flex-col items-center justify-center relative">
        <div className="logo hide to-top absolute top-0 max-h-14 max-w-[150px] logos-transition hide to-top">
          {/* <img loading="lazy" src={bootstrap} alt="bootstrap" /> */}
          <h1 className="font-extrabold">Bootstrap</h1>
        </div>
        <div className="logo absolute top-0 max-h-14 max-w-[150px] logos-transition">
          {/* <img loading="lazy" src={css} alt="css" /> */}
          <h1 className="font-extrabold">CSS3</h1>
        </div>
        <div className="logo hide to-bottom absolute top-0 max-h-14 max-w-[150px] logos-transition hide to-bottom">
          <h1 className="font-extrabold">Tailwind</h1>
          {/* <img loading="lazy" src={tailwind} alt="tailwind" /> */}
        </div>
      </div>

      <div className="logo-group flex flex-col items-center justify-center relative">
        <div className="logo hide to-top absolute top-0 max-h-14 max-w-[150px] logos-transition hide to-top">
          {/* <img loading="lazy" src={bootstrap} alt="bootstrap" /> */}
          <h1 className="font-extrabold">Mysql</h1>
        </div>
        <div className="logo absolute top-0 max-h-14 max-w-[150px] logos-transition">
          {/* <img loading="lazy" src={css} alt="css" /> */}
          <h1 className="font-extrabold">PHP</h1>
        </div>
        <div className="logo hide to-bottom absolute top-0 max-h-14 max-w-[150px] logos-transition hide to-bottom">
          <h1 className="font-extrabold">MongoDB</h1>
          {/* <img loading="lazy" src={tailwind} alt="tailwind" /> */}
        </div>
      </div>

      <div className="logo-group flex flex-col items-center justify-center relative">
        <div className="logo hide to-top absolute top-0 max-h-14 max-w-[150px] logos-transition hide to-top">
          {/* <img loading="lazy" src={bootstrap} alt="bootstrap" /> */}
          <h1 className="font-extrabold">ExpressJS</h1>
        </div>
        <div className="logo absolute top-0 max-h-14 max-w-[150px] logos-transition">
          {/* <img loading="lazy" src={css} alt="css" /> */}
          <h1 className="font-extrabold">Javascript</h1>
        </div>
        <div className="logo hide to-bottom absolute top-0 max-h-14 max-w-[150px] logos-transition hide to-bottom">
          <h1 className="font-extrabold">ReactJs</h1>
          {/* <img loading="lazy" src={tailwind} alt="tailwind" /> */}
        </div>
      </div>
    </div>
  );
};

export default LogoRotatingAnimation;
