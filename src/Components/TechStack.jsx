/* eslint-disable no-unused-vars */
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript,
  SiTailwindcss, SiNodedotjs, SiNextdotjs, SiGreensock, SiFramer,
  SiGithub, SiBootstrap, SiReactquery, SiJira, SiShadcnui, SiSolidity,
  SiEthereum, SiPostman
} from "react-icons/si";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Git & GitHub", icon: SiGithub },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Framer Motion", icon: SiFramer },
  { name: "React Query", icon: SiReactquery },
  { name: "Jira", icon: SiJira },
  { name: "shadcn/ui", icon: SiShadcnui },
  { name: "GSAP", icon: SiGreensock },
  { name: "Solidity", icon: SiSolidity },
  { name: "Smart Contracts", icon: SiEthereum },
  { name: "REST APIs", icon: SiPostman },
];

const softSkills = ["Collaboration", "Critical Thinking", "Problem Solving", "Adaptability"];

export default function TechSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".tech-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="tech-section"
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "8rem 6vw",
      }}
    >
      <div 
        className="tech-layout"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "6rem",
          alignItems: "start",
      }}>

        {/* LEFT COLUMN */}
        <div>
          {/* Section label */}
          <p style={{
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#c8f542",
            textTransform: "uppercase",
            margin: "0 0 3rem 0",
          }}>
            Technical Proficiency
          </p>

          {/* Big headline */}
          <h2 style={{
            fontFamily: "serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            color: "#f0ede8",
            lineHeight: 1.05,
            margin: "0 0 4rem 0",
          }}>
            My versatile toolkit for the modern web.
          </h2>

          {/* Education */}
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "rgba(200,245,66,0.5)",
              textTransform: "uppercase",
              margin: "0 0 0.75rem 0",
            }}>
              Education
            </p>
            <p style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
              margin: 0,
              fontFamily: "monospace",
            }}>
              Codar Academy —{" "}
              <span style={{ color: "#c8f542" }}>Full Stack Web Development</span>
              {" "}(2023 – 2024)
            </p>
          </div>

          {/* Language */}
          <div style={{ marginBottom: "3rem" }}>
            <p style={{
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "rgba(200,245,66,0.5)",
              textTransform: "uppercase",
              margin: "0 0 0.75rem 0",
            }}>
              Language
            </p>
            <p style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              fontFamily: "monospace",
            }}>
              English (Professional Proficiency)
            </p>
          </div>

          {/* Soft skills */}
          <div>
            <p style={{
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "rgba(200,245,66,0.5)",
              textTransform: "uppercase",
              margin: "0 0 1rem 0",
            }}>
              Soft Skills
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {softSkills.map(skill => (
                <span key={skill} style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "monospace",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  paddingBottom: "0.6rem",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — tech grid */}
        <div 
          className="tech-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
        }}>
          {techStack.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="tech-card"
              style={{
                background: "#000",
                padding: "2rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.85rem",
                cursor: "default",
                transition: "background 0.25s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
              onMouseLeave={e => e.currentTarget.style.background = "#000"}
            >
              <Icon
                size={28}
                style={{ color: "rgba(255,255,255,0.3)", transition: "color 0.25s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c8f542"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
              />
              <span style={{
                fontFamily: "monospace",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                textAlign: "center",
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}