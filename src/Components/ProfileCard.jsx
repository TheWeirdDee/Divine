/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Divine from "../assets/Images/Divineee.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ProfileCard() {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative mr-0 md:mr-10 flex items-center justify-center">
      {/* Glow */}
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
        {/* TEXT */}
        <div ref={textRef} className="max-w-xl text-center md:text-left">
          <h1 className="reveal-text mb-6 md:mb-20 text-3xl font-extrabold tracking-tight">
            About Me
          </h1>

          <h2 className="reveal-text inline-block px-5 py-3 text-3xl font-extrabold tracking-tight rounded-lg backdrop-blur-md bg-purple-700/10 border border-white/20 shadow-sm">
            Divine Dilibe
          </h2>

          <p className="reveal-text text-purple-300 mt-3">
            Frontend Developer • UI Enthusiast
          </p>

          <p className="reveal-text mt-6 text-gray-300 leading-relaxed">
            Hi! I am Divine, a Frontend Web Developer who loves turning designs
            into smooth, responsive web applications. Most of my work is with
            React, HTML, Tailwind CSS, and JavaScript but I also have a solid
            foundation in Next.js, Typescript, and Node.js.
          </p>

          <p className="reveal-text mt-6 text-gray-300 leading-relaxed">
            I enjoy building clean, reusable components and making sure apps
            look great and work well on any device. Collaboration is a big
            part of how I work — I like solving problems with teammates and
            shipping products that feel intuitive and reliable. Right now,
            my focus is on growing as a developer while creating digital
            experiences that people actually enjoy using. <strong>HIRE ME!</strong>
          </p>

          <div className="reveal-text mt-8 flex flex-wrap gap-4">
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
        </div>

        {/* IMAGE */}
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
