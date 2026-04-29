 
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "../Components/CustomCursor";
import Marquee from "../Components/Marquee";
import Projects from "../Components/Projects";
import ProfileCard from "../Components/ProfileCard";
import Contact from "../Components/Contact";
import TechStack from "../Components/TechStack";
import MyAni from "../assets/Images/MyAni.jpg";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isLight, setIsLight] = useState(() => localStorage.getItem('theme') === 'light');
  const navRef = useRef(null);

  useEffect(() => {
    // Apply saved theme on mount
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // ScrollSpy logic
      const sections = ["work", "about", "contact"];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);

    const ctx = gsap.context(() => {
      gsap.fromTo(".nav-item", 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out", delay: 0.5 }
      );
    }, navRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  const toggleTheme = () => {
    const nextState = !isLight;
    setIsLight(nextState);
    if (nextState) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Update URL without jump
      window.history.pushState(null, null, href);
      setActiveSection(id);
    }
  };

  return (
    <nav 
      ref={navRef}
      style={{ paddingLeft: '6vw', paddingRight: '6vw' }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 flex items-center ${
        scrolled 
          ? "h-16 bg-[var(--bg-dark)]/90 backdrop-blur-md border-b border-[var(--text-primary)]/10" 
          : "h-16 md:h-20 bg-transparent"
      }`}
    >
      <div className="max-w-[1700px] mx-auto w-full flex justify-between items-center relative">
        {/* Logo */}
        <div 
          className="nav-item shimmer-text"
          style={{
            fontFamily: "var(--font-syncopate)",
            fontSize: "clamp(12px, 2vw, 16px)",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
          }}
        >
          Divine.Dev
        </div>
        
        {/* Links - Visible on mobile with small font */}
        <div className="flex gap-8 md:gap-20 items-center">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-item font-mono text-[10px] md:text-[12px] uppercase tracking-widest transition-all relative"
                style={{ 
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  opacity: isActive ? 1 : 0.4 
                }}
              >
                {link.name}
                {/* Underline for active section */}
                <div 
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: isActive ? "100%" : "0%",
                    height: "1px",
                    background: "var(--accent-readable)",
                    transition: "width 0.3s ease-out"
                  }}
                />
              </a>
            );
          })}
          
          <button 
            onClick={toggleTheme}
            className="nav-item p-3 md:p-4 rounded-full border border-[var(--text-primary)]/10 hover:border-[#c8f542] transition-all bg-[var(--text-primary)]/5 flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isLight ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const subRef = useRef(null);
  const marqueeContainerRef = useRef(null);

  useEffect(() => {
    // 1. Initial Headline land animation (words pop up)
    const text = "Hello there,";
    const words = text.split(" ");
    headlineRef.current.innerHTML = words.map(w => `<span class="inline-block overflow-hidden"><span class="inline-block">${w}</span></span>`).join(" ");
    const wordSpans = headlineRef.current.querySelectorAll("span > span");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(wordSpans, 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
      );
      tl.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
    });

    // 2. Continuous Typewriter Effect
    const phrases = ["I am a Frontend Developer", "my name is Divine Dilibe"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        charIndex--;
        typeSpeed /= 2;
      } else {
        charIndex++;
        typeSpeed = 100;
      }

      if (subheadlineRef.current) {
        subheadlineRef.current.textContent = currentPhrase.substring(0, charIndex);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    type();

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header 
        style={{ paddingTop: 'clamp(130px, 15vh, 180px)', paddingBottom: '60px' }}
        className="w-full relative overflow-hidden bg-[var(--bg-dark)]"
      >
        <div 
          style={{ paddingLeft: '6vw', paddingRight: '6vw' }}
          className="max-w-[1700px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-24 items-center"
        >
          
          <div className="order-first md:order-last relative group mx-auto md:mx-0 justify-self-center md:justify-self-auto w-full max-w-[260px] md:max-w-xs flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-3 px-4 py-2 border border-[var(--text-primary)]/10 rounded-full bg-[var(--bg-dark)]/50 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[var(--accent-readable)] rounded-full animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-primary)]">Open to work</span>
            </div>
            
            <div className="aspect-square md:aspect-[4/3] border border-[var(--text-primary)]/5 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
              <img src={MyAni} alt="Profile" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-[#c8f542]/30" />
          </div>
 
          <div className="order-last md:order-first z-10 transition-all">
            <h1 
              ref={headlineRef}
              className="text-[clamp(36px,6vw,80px)] leading-[1.05] tracking-tighter mb-4"
            >
              Hello there,
            </h1>
            <div className="text-[clamp(1.8rem,5vw,5rem)] leading-[1.1] mb-12 tracking-tighter text-[var(--text-primary)] min-h-[2.2em] md:min-h-0">
               <span ref={subheadlineRef}></span>
               <span className="inline-block w-[2px] md:w-[3px] h-[0.7em] bg-[var(--accent-readable)] ml-2 md:ml-4 animate-pulse align-middle" />
            </div>
            
            <div ref={subRef} className="max-w-xl" style={{ marginTop: '2rem' }}>
              <p 
                style={{ 
                  marginBottom: 0, 
                  lineHeight: 1.6,
                  color: "var(--bg-dark)",
                }}
                className="text-sm md:text-lg font-mono tracking-tight"
              >
                <span style={{ 
                  background: "var(--accent-color)", 
                  padding: "0.2em 0.4em",
                  boxShadow: "0.4em 0 0 var(--accent-color), -0.4em 0 0 var(--accent-color)",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                  color: "#0a0a0a",
                }}>
                  My focus is building modern, fast, accessible, user-friendly and engaging digital experiences using modern web standards and precise motion design.
                </span>
              </p>
              <div style={{ marginTop: '30px' }} className="flex gap-8">
                <a href="#work" className="group flex items-center gap-6">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--text-primary)]/10 flex items-center justify-center group-hover:border-[#c8f542] group-hover:bg-[#c8f542] transition-all duration-500">
                    <span className="text-[var(--text-primary)] group-hover:text-black transition-colors">↓</span>
                  </span>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] opacity-80">Selected Works</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

     
      <div className="w-full pt-4 md:pt-6 pb-16 md:pb-24">
        <Marquee />
      </div>
    </>
  );
}

export default function Portfolio() {
  return (
    <div className="bg-[var(--bg-dark)] text-[var(--text-primary)] selection:bg-[#c8f542] selection:text-black">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />

        
        <Projects />
        <TechStack />
        
        <section id="about">
           <ProfileCard />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
 
    </div>
  );
}
