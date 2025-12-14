import React from "react";
import { motion } from "framer-motion";

import TradeFlix from "../assets/Images/TradeFlix.png";
import Hunch from "../assets/Images/Hunch.png";
import Resend from "../assets/Images/Resend.png";
import StudyLoop from "../assets/Images/StudyLoop.png";
import HomeLutions from "../assets/Images/HomeLutions.png";
import MitchKitchen from "../assets/Images/MitchKitchenn.png";

const projects = [
  {
    id: 1,
    title: "TradeFlix",
    description:
      "TradeFlix is an MVP-stage trading platform built to support beginner traders through affordable trade journaling, AI-driven recommendations, mentor comparison tools, and a unified dashboard for progress tracking.",
    image: TradeFlix,
    tech: [
      "React",
      "Context API",
      "TailwindCSS",
      "Framer Motion",
      "React Query",
      "MERN",
    ],
    live: "https://tradeflix-eosin.vercel.app/",
  },
  {
    id: 2,
    title: "Hunch",
    description:
      "Hunch is a personalized nutrition and meal-planning platform that helps users find the right meals for their goals, preferences, and lifestyle. It asks a few simple questions about your health goals, dietary needs, and habits, then it recommends a personalized meal plan.",
    image: Hunch,
    tech: [
      "React",
      "Context API",
      "TailwindCSS",
      "Framer Motion",
      "Leaflet",
    ],
    live: "https://www.hunch.ng/",
  },
  {
    id: 3,
    title: "Resend",
    description:
      "A full frontend clone of Resend, a developer-friendly email platform that lets you send, receive, and manage emails through a simple API. I recreated the UI including the landing page, feature pages, and overall user flow with a focus on responsiveness, accessibility, and pixel-perfect design.",
    image: Resend,
    tech: ["React", "React Router", "TailwindCSS", "Framer Motion"],
    live: "https://resend-tau.vercel.app/",
    repo: "https://github.com/TheWeirdDee/Resend",
  },
  {
    id: 4,
    title: "StudyLoop",
    description:
      "StudyLoop is a full-stack MERN (MongoDB, Express, React, Node.js) web app that helps users learn in an interactive environment, earn achievements, connect with study partners, and build consistent learning streaks.",
    image: StudyLoop,
    tech: [
      "React",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Framer Motion",
    ],
    live: "https://study-loop-seven.vercel.app/",
    repo: "https://github.com/faykey/studyLoop",
  },
  {
    id: 5,
    title: "HomeLutions",
    description:
      "Need a HandyMan? HomeLutions connect busy homeowners with skilled professionals who take pride in quality work and exceptional handyman services.",
    image: HomeLutions,
    tech: ["React", "TailwindCSS", "Framer Motion"],
    live: "https://home-lutions.vercel.app/",
    repo: "https://github.com/TheWeirdDee/HomeLutions",
  },
  {
    id: 6,
    title: "MitchKitchen",
    description:
      "Mitch Kitchen, a gourmet food truck, is a luxury brand that offer customizable menus for events and people in need.",
    image: MitchKitchen,
    tech: ["React", "Vite", "TailwindCSS"],
    live: "https://mitch-kitchen.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-10 text-left bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 mb-16">
          A showcase of my recent work, featuring modern web applications built
          with cutting-edge technologies and crafted with attention to detail.
        </p>

        <div className="flex flex-col gap-4 md:gap-24">
          {projects.map((project, index) => (
           <motion.div
  key={project.id}
  initial={{
    opacity: 0,
    x: index % 2 === 0 ? -80 : 80,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    y: 0,
  }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  viewport={{ once: true, amount: 0.25 }}
  className={`flex flex-col lg:flex-row items-center gap-12
      bg-[#161616] rounded-3xl p-6
      lg:bg-transparent lg:p-0
    ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
  `}
>

              
   <div className="flex-1 order-2 md:order-1">
  <img
    src={project.image}
    alt={project.title}
    className="rounded-2xl shadow-lg w-full h-full object-cover
      hover:scale-[1.02] transition-transform duration-500"
  />
</div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-sm font-semibold
                        tracking-wide text-white/80 bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-700 hover:bg-purple-800
                      rounded-lg text-sm font-medium transition-transform
                      hover:scale-105"
                  >
                    View Live
                  </a>

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-800
                        rounded-lg text-sm font-medium transition-transform
                        hover:scale-105"
                    >
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
