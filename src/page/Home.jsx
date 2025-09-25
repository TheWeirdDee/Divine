import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Projects from "../Components/Projects";
import ProfileCard from "../Components/ProfileCard";
import Contact from "../Components/Contact";
import TechStack from "../Components/TechStack";
import MyAni from "../assets/Images/MyAni.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "/Resume.pdf" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full md:relative fixed md:top-10 top-0 flex justify-center pt-10 pb-7 z-50 backdrop-blur-sm bg-black/30">
      <div className="rounded-full border border-gray-700 px-6 py-4 flex items-center justify-between md:w-full md:max-w-2xl w-[450px] backdrop-blur-sm bg-black/30">
        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <React.Fragment key={i}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-white font-medium"
              >
                {link.name}
              </a>
              {i < navLinks.length - 1 && (
                <span className="text-gray-600">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

       <a href="mailto:divinenation1@gmail.com">
  <button className="bg-purple-700 text-black px-4 py-3 rounded-2xl font-semibold 
                     shadow-[0_8px_30px_rgba(34,197,94,0.18)] text-base md:text-sm
                     transition-transform duration-200 
                     hover:bg-purple-600 hover:scale-105 
                     active:scale-95">
    Let&apos;s Connect 💻
  </button>
</a>


      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[99px] mt-10 left-1/2 transform -translate-x-1/2 w-full bg-black shadow-md overflow-hidden transition-all duration-500 ease-in-out z-40 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="grid-cols-1 gap-x-4 gap-y-3 px-4 py-4">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center text-left px-4 py-3 text-lg font-medium rounded-lg ${
                index === 0 ? "mt-2 pt-4" : ""
              } ${
                window.location.hash === item.href
                  ? "bg-[hsla(214,11%,13%,1)] text-white"
                  : "text-[hsla(212,87%,97%,0.71)] hover:text-gray-300"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

 
function Hero() {
  const texts = ["I am Divine Dilibe", "I am a Frontend Developer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[loop % texts.length];
      const updatedText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoop(loop + 1);
      }

      setSpeed(isDeleting ? 100 : 150);
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, loop, speed]);

  return (
    <header className="md:top-10 top-40 flex flex-col items-center justify-center text-center relative overflow-hidden px-6">
      
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-80 h-36 rounded-full blur-3xl bg-gradient-to-t from-green-800/20 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        
        <div className="mx-auto mb-6 w-26 h-26 rounded-xl bg-green-50 grid place-items-center shadow-sm overflow-hidden animate-bounce">
          <img src={MyAni} alt="Profile Avatar" className="object-cover" />
        </div>

        
        <div className="relative">
          <h2 className="mb-16 text-[64px] md:text-[96px] lg:text-[75px] font-extrabold text-gray-700 opacity-40 leading-[0.85] tracking-tight">
            Hello there,
          </h2>
          <h1 className="-mt-6 md:-mt-10 text-[44px] md:text-[56px] lg:text-[75px] font-extrabold text-white leading-[0.85] tracking-tight">
            {text}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

         
        <p className="mt-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I am a Front-End Developer with hands-on experience building modern,
          user-friendly web applications. I focus on crafting fast, accessible,
          and engaging digital experiences. My goal is to keep growing as a
          developer while delivering innovative, user-focused solutions.
        </p>

       
        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="https://x.com/devineishuman?s=21&t=7TaJwu1nHCUEhZLkvcLEbQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/6 grid place-items-center hover:scale-105 transition"
          >
            <FaTwitter className="text-gray-300" />
          </a>

          <a
            href="https://wa.me/2349030129356"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/6 grid place-items-center hover:scale-105 transition"
          >
            <FaWhatsapp className="text-gray-300" />
          </a>

         
          <a
            href="https://www.linkedin.com/in/divine-nation-647a571b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/6 grid place-items-center hover:scale-105 transition"
          >
            <FaLinkedin className="text-gray-300" />
          </a>

           
          <a
            href="https://github.com/TheWeirdDee"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/6 grid place-items-center hover:scale-105 transition"
          >
            <FaGithub className="text-gray-300" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <Hero />

      <section id="projects" className="py-20">
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
