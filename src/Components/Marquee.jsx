import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Marquee = () => {
  const marqueeRef = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const items = marquee.children;
  
    let totalWidth = 0;
    Array.from(items).forEach(item => {
      totalWidth += item.offsetWidth;
    });

    timeline.current = gsap.to(marquee, {
      x: `-${totalWidth / 2}px`,
      duration: 18,
      ease: "none",
      repeat: -1,
    });

    return () => {
      if (timeline.current) timeline.current.kill();
    };
  }, []);

  const handleMouseEnter = () => timeline.current.pause();
  const handleMouseLeave = () => timeline.current.play();

  const content = (
    <>
      <span className="inline-block px-8 text-2xl md:text-4xl font-serif">
        Got a project? Let&apos;s hear it!
      </span>
      <span className="inline-block px-8 text-2xl md:text-4xl text-[var(--accent-readable)]">◆</span>
      <span className="inline-block px-8 text-2xl md:text-4xl font-serif">
        Currently open to new roles
      </span>
      <span className="inline-block px-8 text-2xl md:text-4xl text-[#c8f542]">◆</span>
    </>
  );

  return (
    <div 
      className="w-full border-y border-[var(--text-primary)]/10 py-6 overflow-hidden bg-transparent marquee-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={marqueeRef} 
        className="flex whitespace-nowrap grayscale hover:grayscale-0 transition-all duration-500"
      >
      
        <div className="flex flex-row items-center">{content}</div>
        <div className="flex flex-row items-center">{content}</div>
        <div className="flex flex-row items-center">{content}</div>
        <div className="flex flex-row items-center">{content}</div>
      </div>
    </div>
  );
};

export default Marquee;
