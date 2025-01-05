import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import admindashboard from "@/public/admindashboard.png";
import landing_page from "@/public/landing_page_light_modern.png";

import devFlowApp from "@/public/devFlowApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    // title: "Economics and Accounting",
    // location: "Jizzakh Politechnical Institute",
    // description: "I graduated Bachelors degree on Accounting and Management.",
    id: "economics_and_accounting",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    // title: "Udemy Courses",
    // location: "Online Learning Platform",
    // description:
    // "I attended online courses and learnt full stack web development",
    id: "udemy_courses",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    // title: "Web developer",
    // location: "Codevision.uz IT Park Jizzakh",
    // description:
    // "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    id: "web_developer",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    id: "adminDashboard", // Add id for translation key
    tags: ["React.Js", "Next.js", "Tailwind", "Typescript"],
    imageUrl: admindashboard,
    link: "https://nextjs-tailwindcss-admindashboard.vercel.app/",
  },
  {
    id: "modernLanding",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer-motion"],
    imageUrl: landing_page,
    link: "https://light-saas-landing-page-nextjs-tailwindcss-framer-motion.vercel.app/",
  },
  {
    id: "devFlowApp",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: devFlowApp,
    link: "https://devflow-nextjs-tailwindcss-typescript.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;

export const contactData = {
  email: "zubaydullacoder@gmail.com",
} as const;
