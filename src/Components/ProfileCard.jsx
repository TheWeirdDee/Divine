import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Divine from "../assets/Images/Divineee.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ProfileCard() {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal-text", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(imageContainerRef.current,
        { scale: 1.1, filter: "grayscale(100%)" },
        {
          scale: 1,
          filter: "grayscale(0%)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom center",
            scrub: 0.5,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ paddingLeft: '6vw', paddingRight: '6vw' }}
      className="relative py-32 md:py-48 bg-[#0a0a0a] border-t border-white/5"
    >
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div className="space-y-10 md:space-y-16">
          <div>
            <span className="section-label mb-8 block reveal-text">Who I am</span>
            <h2 className="reveal-text text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
              Divine Dilibe
            </h2>
            <p className="reveal-text font-mono text-xs tracking-[0.4em] uppercase text-[#c8f542]">
              Frontend Developer • Web3 Enthusiast
            </p>
          </div>

          <div className="space-y-6 md:space-y-10">
          
            <p className="reveal-text text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
              I enjoy building clean, reusable components and making sure apps
              look great and work well on any device. Collaboration is a big
              part of how I work — I like solving problems with teammates and
              shipping products that feel intuitive and reliable.
            </p>
          </div>

          <div className="reveal-text pt-6">
            <a
              href="mailto:divinenation1@gmail.com"
              className="inline-flex items-center gap-6 group"
            >
              <span className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c8f542] group-hover:bg-[#c8f542] transition-all duration-300">
                <span className="text-white group-hover:text-black transition-colors text-xl">→</span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] group-hover:text-[#c8f542] transition-colors">Start a conversation</span>
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-[450px] mx-auto md:ml-auto md:mr-0">
          <div 
            ref={imageContainerRef}
            className="aspect-[4/5] border border-white/10 overflow-hidden relative group"
          >
            <img
              src={Divine}
              alt="Divine"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          {/* Accent Border */}
          <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-[#c8f542] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
