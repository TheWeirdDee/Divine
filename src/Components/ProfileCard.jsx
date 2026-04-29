import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Divine from "../assets/Images/Divineee.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ProfileCard() {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {

      // Heading reveal — clip path wipe (shimmer-text must stay whole, no SplitType)
      gsap.fromTo(headingRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Fade up blocks
      gsap.fromTo(".reveal-block",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Image reveal
      gsap.fromTo(imageContainerRef.current,
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 80%",
          },
        }
      );

      // Image grayscale scrub
      gsap.fromTo(".inner-img",
        { filter: "grayscale(100%) brightness(0.7)", scale: 1.08 },
        {
          filter: "grayscale(0%) brightness(1)",
          scale: 1,
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 0.8,
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      style={{
        background: "var(--bg-dark)",
        borderTop: "1px solid rgba(var(--text-rgb), 0.05)",
        padding: "3rem 6vw",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
      }}
        className="about-grid"
      >

        <div>

          <p className="reveal-block section-label highlight-on-light">
            Who I Am
          </p>

          
          <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
            <h2
              ref={headingRef}
              className="shimmer-text"
              style={{
                fontFamily: "serif",
                fontSize: "clamp(40px, 6vw, 80px)",
                fontWeight: 700,
                lineHeight: 1.0,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Divine Dilibe
            </h2>
          </div>

          {/* Role */}
          <p
            className="reveal-block"
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "var(--accent-readable)",
              textTransform: "uppercase",
              margin: "0 0 3.5rem 0",
            }}
          >
            Frontend Developer • Web3 Enthusiast
          </p>

          {/* Divider */}
          <div
            className="reveal-block"
            style={{
              borderTop: "1px solid rgba(var(--text-rgb), 0.06)",
              marginBottom: "1rem",
            }}
          />

          {/* Bio */}
          <p
            className="reveal-block"
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              color: "rgba(var(--text-rgb), 0.5)",
              lineHeight: 1.8,
              margin: "0 0 3rem 0",
              maxWidth: "48ch",
            }}
          >
            I enjoy building clean, reusable components and making sure apps
            look great on any device. Collaboration is core to how I work —
            I like solving problems with teammates and shipping products that
            feel intuitive and reliable.
          </p>

          {/* CTA */}
          <a
            className="reveal-block"
            href="mailto:divinenation1@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.querySelector(".cta-circle").style.background = "var(--accent-color)"
              e.currentTarget.querySelector(".cta-circle").style.borderColor = "var(--accent-color)"
              e.currentTarget.querySelector(".cta-arrow").style.color = "var(--bg-dark)"
              e.currentTarget.querySelector(".cta-label").style.color = "var(--accent-color)"
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector(".cta-circle").style.background = "transparent"
              e.currentTarget.querySelector(".cta-circle").style.borderColor = "rgba(var(--text-rgb), 0.2)"
              e.currentTarget.querySelector(".cta-arrow").style.color = "var(--text-primary)"
              e.currentTarget.querySelector(".cta-label").style.color = "rgba(var(--text-rgb), 0.5)"
            }}
          >
            <span
              className="cta-circle"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                border: "1px solid rgba(var(--text-rgb), 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
                flexShrink: 0,
              }}
            >
              <span
                className="cta-arrow"
                style={{ color: "var(--text-primary)", fontSize: "18px", transition: "color 0.3s" }}
              >
                →
              </span>
            </span>
            <span
              className="cta-label"
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(var(--text-rgb), 0.5)",
                transition: "color 0.3s",
              }}
            >
              Start a conversation
            </span>
          </a>
        </div>

        {/* RIGHT — image */}
        <div style={{ position: "relative" }}>
          <div
            ref={imageContainerRef}
            style={{
              aspectRatio: "4/5",
              overflow: "hidden",
              border: "1px solid rgba(var(--text-rgb), 0.08)",
              position: "relative",
            }}
          >
            <img
              src={Divine}
              alt="Divine Dilibe"
              className="inner-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transformOrigin: "center center",
              }}
            />
          </div>

          {/* Accent corner */}
          <div style={{
            position: "absolute",
            top: "-16px",
            right: "-16px",
            width: "80px",
            height: "80px",
            borderTop: "2px solid var(--accent-color)",
            borderRight: "2px solid var(--accent-color)",
            pointerEvents: "none",
          }} />

           
        </div>

      </div>
    </section>
  );
}