import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

 
import Projects from "../Components/Projects";
import ProfileCard from "../Components/ProfileCard";
import Contact from "../Components/Contact";
import TechStack from "../Components/TechStack";
import MyAni from "../assets/Images/MyAni.jpg";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const texts = ["I am Divine Dilibe", "I am a Frontend Developer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [speed, setSpeed] = useState(150);
  const paragraphRef = useRef(null);

   
  useEffect(() => {
    const handleTyping = () => {
      const current = texts[loop % texts.length];
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(updatedText);

      if (!isDeleting && updatedText === current) setTimeout(() => setIsDeleting(true), 1000);
      else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
      }
      setSpeed(isDeleting ? 100 : 150);
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loop, speed]);

 
  useEffect(() => {
    if (!paragraphRef.current) return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        paragraphRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <header className="md:top-10 top-40 flex flex-col items-center justify-center text-center relative overflow-hidden px-6">
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-36 rounded-full blur-3xl bg-gradient-to-t from-green-800/20 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          className="mx-auto mb-6 w-26 h-26 rounded-xl bg-green-50 grid place-items-center shadow-sm overflow-hidden"
        >
          <img src={MyAni} alt="Profile Avatar" className="object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -120 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <h2 className="mb-16 text-[64px] md:text-[96px] lg:text-[75px] font-extrabold text-gray-700 opacity-40 leading-[0.85] tracking-tight">
            Hello there,
          </h2>
          <h1 className="-mt-6 md:-mt-10 text-[44px] md:text-[56px] lg:text-[75px] font-extrabold text-white leading-[1.02] tracking-tight min-h-[100px]">
            {text}<span className="animate-pulse">|</span>
          </h1>
        </motion.div>

        <p ref={paragraphRef} className="mt-10 text-gray-300 max-w-2xl mx-auto leading-relaxed text-left md:text-center">
          I am a Front-End Developer with hands-on experience building modern, user-friendly web applications. I focus on crafting fast, accessible, and engaging digital experiences. My goal is to keep growing as a developer while delivering innovative, user-focused solutions.
        </p>
      </div>
    </header>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <section id="projects" className="md:pt-20 pt-48">
        <Projects />
      </section>
      <section id="about" className="py-5">
        <ProfileCard />
      </section>
      <TechStack />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
