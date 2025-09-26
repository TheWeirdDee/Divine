/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Divine from "../assets/Images/Divineee.jpg";

export default function ProfileCard() {
  return (
    <div className="relative mr-0 md:mr-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -right-30 -top-20 w-48 h-64 rounded-3xl blur-3xl transform rotate-12 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.35), rgba(147,51,234,0.12))",
        }}
      />

      <div className="relative z-10 bg-transparent p-6 md:p-10 rounded-2xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="mb-6 md:mb-20 text-3xl font-extrabold tracking-tight rounded-lg shadow-sm">
            About Me
          </h1>
          <h1 className="inline-block px-5 py-3 text-3xl font-extrabold tracking-tight rounded-lg backdrop-blur-md bg-purple-700/10 border border-white/20 shadow-sm">
            Divine Dilibe
          </h1>
          <p className="text-purple-300 mt-3">
            Frontend Developer • UI Enthusiast
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed text-left">
            Hi! I am Divine, a Frontend Web Developer who loves turning designs
            into smooth, responsive web applications. Most of my work is with
            React, HTML, Tailwind CSS, and JavaScript but I also have a solid
            foundation in, Next.js, Typescript and Node.js. 
          </p>
          <p className="mt-6 text-gray-300 leading-relaxed text-left">
               I enjoy building
            clean, reusable components and making sure apps look great and work
            well on any device. Collaboration is a big part of how I work, I
            like solving problems with teammates and shipping products that feel
            intuitive and reliable. Right now, my focus is on growing as a
            developer while creating digital experiences that people actually
            enjoy using. HIRE ME!
            </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm px-4 py-2 bg-white/6 border border-white rounded-lg hover:bg-white/8 transition"
              href="#projects"
            >
              View projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm px-4 py-2 bg-transparent border border-white/8 rounded-lg hover:bg-white/6 transition"
               href="mailto:divinenation1@gmail.com"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative shrink-0"
        >
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="w-68 h-70 md:w-86 md:h-92 rounded-3xl p-3 md:p-4 border bg-white/6 border-white/10 backdrop-blur-md shadow-inner-soft flex items-center justify-center transform rotate-6"
          >
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <img
                src={Divine}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.6), 0 0 30px rgba(124,58,237,0.06)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
