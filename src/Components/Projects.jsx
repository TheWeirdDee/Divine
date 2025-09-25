import React from "react";
import Hunch from "../assets/Images/Hunch.png";
import Resend from "../assets/Images/Resend.png";
import StudyLoop from "../assets/Images/StudyLoop.png";
import HomeLutions from "../assets/Images/HomeLutions.png";
import MitchKitchen from "../assets/Images/MitchKitchenn.png";

const projects = [
  {
    id: 1,
    title: "Hunch",
    description:
      "Hunch is a personalized nutrition and meal-planning platform that helps users find the right meals for their goals, preferences, and lifestyle. It asks a few simple questions about your health goals, dietary needs, and habits, then it recommends a personalized meal plan.",
    image: Hunch,
    tech: [
      "React",
      "Vite",
      "React Router",
      "React Query",
      "React Hook Form + Yup",
      "TailwindCSS",
      "Framer Motion",
      "Leaflet",
    ],
    live: "https://www.hunch.ng/",
    repo: "https://www.hunch.ng/",
  },
  {
    id: 2,
    title: "Resend",
    description:
      "A full frontend clone of Resend, a developer-friendly email platform that lets you send, receive, and manage emails through a simple API. I recreated the UI including the landing page, feature pages, and overall user flow with a focus on responsiveness, accessibility, and pixel-perfect design.",
    image: Resend,
    tech: ["React", "Vite", "React Router", "TailwindCSS", "Framer Motion"],
    live: "https://resend-tau.vercel.app/",
    repo: "https://github.com/TheWeirdDee/Resend",
  },
  {
    id: 3,
    title: "StudyLoop",
    description:
      "StudyLoop is a full-stack MERN (MongoDB, Express, React, Node.js) web app that helps users learn in an interactive environment, earn achievements, connect with study partners, and build consistent learning streaks. Sign up to access features.",
    image: StudyLoop,
    tech: [
      "React",
      "Vite",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Framer Motion",
    ],
    live: "https://study-loop-henna.vercel.app/",
    repo: "https://github.com/faykey/studyLoop?tab=readme-ov-file",
  },
  {
    id: 4,
    title: "HomeLutions",
    description:
      "Need a HandyMan? HomeLutions connect busy homeowners with skilled professionals who take pride in quality work and exceptional handyman services.",
    image: HomeLutions,
    tech: ["React", "Vite", "TailwindCSS", "Framer Motion", "AOS"],
    live: "https://home-lutions.vercel.app/",
    repo: "https://github.com/TheWeirdDee/HomeLutions",
  },
  {
    id: 5,
    title: "MitchKitchen",
    description:
      "Mitch Kitchen, a gourmet food truck, is a luxury brand that offer customizable menus for events, and people in need.",
    image: MitchKitchen,
    tech: ["React", "Vite", "TailwindCSS", "AOS"],
    live: "https://your-mitchkitchen-live-link.com",
    repo: "https://github.com/TheWeirdDee/MitchKitchen",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-5 md:mt-0  text-left bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 mb-16">
          A showcase of my recent work, featuring modern web applications built
          with cutting-edge technologies and crafted with attention to detail.
        </p>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-lg h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex gap-4 flex-wrap mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border-1 bg-white/10 rounded-lg text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2   bg-purple-700 hover:bg-purple-800 rounded-lg text-sm font-medium"
                  >
                    View Live
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg text-sm font-medium"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
