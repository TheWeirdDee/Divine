
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Divine from "../assets/Images/Divineee.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ProfileCard() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".reveal-text", { y: 80, opacity: 0 });

      gsap.to(".reveal-text", {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        stagger: 0.25,
        scrollTrigger: {
  trigger: containerRef.current,
  start: "top 80%",
  end: "bottom 50%",
  scrub: 0.6,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-20 flex justify-center"
    >
      
      <motion.div
        className="absolute -right-20 -top-20 w-52 h-72 rounded-3xl blur-3xl rotate-12 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,0.35), rgba(147,51,234,0.12))",
        }}
      />

      <div className="relative z-10 max-w-6xl px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        
        <div className="max-w-xl text-left space-y-6">
          <div className="overflow-hidden">
            <h1 className="reveal-text text-3xl font-extrabold">
              About Me
            </h1>
          </div>

          <div className="overflow-hidden">
            <h2 className="reveal-text inline-block px-5 py-3 text-3xl font-extrabold rounded-lg bg-purple-700/10 border border-white/20 backdrop-blur-md">
              Divine Dilibe
            </h2>
          </div>

          <div className="overflow-hidden">
            <p className="reveal-text text-purple-300">
              Frontend Developer • UI Enthusiast
            </p>
          </div>

          <div className="overflow-hidden">
            <p className="reveal-text text-gray-300 leading-relaxed">
              Hi! I am Divine, a Frontend Web Developer who loves turning designs
              into smooth, responsive web applications. Most of my work is with
              React, HTML, Tailwind CSS, and JavaScript but I also have a solid
              foundation in Next.js, Typescript, and Node.js.
            </p>
          </div>

          <div className="overflow-hidden">
            <p className="reveal-text text-gray-300 leading-relaxed">
              I enjoy building clean, reusable components and making sure apps
              look great and work well on any device. Collaboration is a big
              part of how I work — I like solving problems with teammates and
              shipping products that feel intuitive and reliable. Right now,
              my focus is on growing as a developer while creating digital
              experiences that people actually enjoy using.{" "}
              <strong>HIRE ME!</strong>
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="reveal-text flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/10 transition"
              >
                View projects
              </a>
              <a
                href="mailto:divinenation1@gmail.com"
                className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/10 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative shrink-0"
        >
          <motion.div
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="w-64 h-80 md:w-80 md:h-96 rounded-3xl p-3 border bg-white/5 backdrop-blur-md rotate-6"
          >
            <img
              src={Divine}
              alt="Divine"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
