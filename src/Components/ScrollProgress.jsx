import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        height: '100vh',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }, lineRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed right-0 top-0 w-[2px] h-0 bg-[#c8f542] z-[300] origin-top opacity-30 pointer-events-none" ref={lineRef} />
  );
};

export default ScrollProgress;
