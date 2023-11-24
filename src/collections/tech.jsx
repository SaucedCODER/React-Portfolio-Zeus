// logosData.js
import React from "react";
import {
  FaGit,
  FaHtml5,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaPhp,
  FaNode,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiTailwindcss, SiDjango } from "react-icons/si";

export const data = [
  [
    ["Bootstrap", <FaBootstrap size={35} />, "hide to-top"],
    ["CSS", <FaCss3Alt size={35} />, ""],
    ["Tailwind", <SiTailwindcss size={35} />, "hide to-bottom"],
  ],
  [
    ["Mysql", <FaDatabase size={35} />, "hide to-top"],
    ["PHP", <FaPhp size={35} />, ""],
    ["MongoDB", <FaDatabase size={35} />, "hide to-bottom"],
  ],
  [
    ["ExpressJS", <FaNode size={35} />, "hide to-top"],
    ["Javascript", <FaJs size={35} />, ""],
    ["ReactJs", <FaReact size={35} />, "hide to-bottom"],
  ],
  [
    ["Git", <FaGitAlt size={35} />, "hide to-top"],
    ["HTML", <FaHtml5 size={35} />, ""],
    ["Django", <SiDjango size={35} />, "hide to-bottom"],
  ],
];
