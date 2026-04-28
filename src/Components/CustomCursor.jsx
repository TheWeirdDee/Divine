import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Rely on CSS pointer query rather than strict window width to handle DevTools testing
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice && window.innerWidth < 1024) return;

    const cursor = cursorRef.current;
    
    // QuickTo for high performance
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 4,
        mixBlendMode: 'difference',
        backgroundColor: '#f0ede8',
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        mixBlendMode: 'normal',
        backgroundColor: '#c8f542',
        opacity: 1,
        duration: 0.3
      });
    };

    const handleProjectEnter = () => {
      // Hide the default dot cursor entirely when hovering over projects so the SD card looks clean
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };

    const handleProjectLeave = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    };

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const projectRows = document.querySelectorAll('.project-row');
    projectRows.forEach((el) => {
      el.addEventListener('mouseenter', handleProjectEnter);
      el.addEventListener('mouseleave', handleProjectLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      projectRows.forEach((el) => {
        el.removeEventListener('mouseenter', handleProjectEnter);
        el.removeEventListener('mouseleave', handleProjectLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-[#c8f542] rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: 'transform' }}
    />
  );
};

export default CustomCursor;
