import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createPortal } from "react-dom";


gsap.registerPlugin(ScrollTrigger);
import TradeFlix from "../assets/Images/TradeFlix.png";
import Hunch from "../assets/Images/Hunch.png";
import Resend from "../assets/Images/Resend.png";
import StudyLoop from "../assets/Images/StudyLoop.png";
import HomeLutions from "../assets/Images/HomeLutions.png";
import MitchKitchen from "../assets/Images/MitchKitchenn.png";
import Amante from "../assets/Images/Amante.png";
import Inklune from "../assets/Images/InkluneImage.png";
import Roomy from "../assets/Images/Roomy.png";
import GrainArchive from "../assets/Images/Grain.png";
import Stretchee from "../assets/Images/Stretchee.png";
import Remlo from "../assets/Images/Remlo.png";
import BlindMarkets from "../assets/Images/Blindmarkets.png";
import Swarmpay from "../assets/Images/Swarmpay.png";
import GmDapp from "../assets/Images/Gm-Dapp.png";

const projects = [
  {
    name: "SwarmPay",
    letter: "S",
    description: "An autonomous AI agent economy where agents competitively bid on work, execute in parallel, and settle 60+ micropayments per task as a single atomic on-chain transaction on Arc.",
    tags: ["Next.js", "Solidity", "Supabase", "Arc L1"],
    live: "https://swarm-pay.vercel.app/",
    github: "https://github.com/TheWeirdDee/SwarmPay",
    preview: Swarmpay,
  },
  {
    name: "Gm Social Protocol",
    letter: "G",
    description: "An on-chain social reputation and engagement system built on the Stacks blockchain, combining interaction, token incentives, and DAO governance into a unified protocol.",
    tags: ["Next.js", "Clarity", "Stacks", "Supabase"],
    live: "https://gm-dapp-bjz8.vercel.app/",
    github: "https://github.com/TheWeirdDee/gm-dapp",
    preview: GmDapp,
  },
  {
    name: "BlindMarkets",
    letter: "B",
    description: "Privacy-preserving Bitcoin intent execution with a frontend control console, gateway API, coordinator, observer, reference solver, and Starknet contracts.",
    tags: ["Next.js", "Rust", "Cairo", "Starknet"],
    live: "https://www.blindmarkets.xyz/",
    github: "https://github.com/TheWeirdDee/blindmarkets",
    preview: BlindMarkets,
  },
  {
    name: "Remlo",
    letter: "R",
    description: "Remlo is a borderless enterprise payroll and yield routing protocol. It looks and feels like a modern B2B SaaS product — not a crypto dApp. The blockchain layer is invisible to employees. The stablecoin settlement layer is invisible to non-technical employers.",
    tags: ["Next.js", "TypeScript", "Smart Contracts", "Viem", "Privy"],
    live: "https://www.remlo.xyz/",
    github: "https://github.com/TheWeirdDee/remlo",
    preview: Remlo,
  },
  {
    name: "Stretchee",
    letter: "S",
    description: "Stretchee is a modern fitness and wellness web application designed to help users stay consistent with their workouts.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Supabase"],
    live: "https://stretchee.vercel.app/",
    github: null,
    preview: Stretchee,
  },
  {
    name: "TradeFlix",
    letter: "T",
    description: "TradeFlix is an MVP-stage trading platform built to support beginner traders through affordable trade journaling.",
    tags: ["React", "Context API", "Framer Motion", "React Query", "MERN"],
    live: "https://tradeflix-eosin.vercel.app/",
    github: null,
    preview: TradeFlix,
  },
  {
    name: "Grain Archive",
    letter: "G",
    description: "Grain Archive is an editorial platform documenting the fuzz, fragments, and forgotten textures of music, film, and visual culture.",
    tags: ["React", "TailwindCSS", "GSAP", "Framer Motion", "React Router"],
    live: "https://grain-archive.vercel.app/",
    github: "https://github.com/TheWeirdDee/grain-archive",
    preview: GrainArchive,
  },
  {
    name: "Resend",
    letter: "R",
    description: "Full frontend clone of Resend, a developer-friendly email platform.",
    tags: ["React.js", "TailwindCSS", "Framer Motion"],
    live: "https://resend-tau.vercel.app/",
    github: "https://github.com/TheWeirdDee/Resend",
    preview: Resend,
  },
  {
    name: "Amante",
    letter: "A",
    description: "Luxury sofa brand landing page with smooth scroll animations.",
    tags: ["Next.js", "TailwindCSS", "GSAP"],
    live: "https://amante-virid.vercel.app/",
    github: "https://github.com/TheWeirdDee/Amante",
    preview: Amante,
  },
  {
    name: "Roomy",
    letter: "R",
    description: "Modern housing platform for finding rooms and flatmates in Ireland.",
    tags: ["K6", "Postman", "DevTools"],
    live: "https://roomy.ie/",
    github: null,
    preview: Roomy,
  },
  {
    name: "StudyLoop",
    letter: "S",
    description: "Full-stack MERN web app for interactive learning environments.",
    tags: ["React", "MERN", "TailwindCSS", "Framer Motion"],
    live: "https://study-loop-seven.vercel.app/",
    github: "https://github.com/faykey/studyLoop",
    preview: StudyLoop,
  },
  {
    name: "Inklune",
    letter: "I",
    description: "Modern blog landing page with clean typography and content hierarchy.",
    tags: ["Next.js", "TailwindCSS"],
    live: "https://inklune-indol.vercel.app/",
    github: "https://github.com/TheWeirdDee/Inklune",
    preview: Inklune,
  },
  {
    name: "Hunch",
    letter: "H",
    description: "Personalized nutrition and meal-planning platform.",
    tags: ["React", "Context API", "TailwindCSS", "Framer Motion", "Leaflet"],
    live: "https://www.hunch.ng/",
    github: null,
    preview: Hunch,
  },
  {
    name: "HomeLutions",
    letter: "H",
    description: "Connecting homeowners with skilled professionals for quality work.",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    live: "https://home-lutions.vercel.app/",
    github: "https://github.com/TheWeirdDee/HomeLutions",
    preview: HomeLutions,
  },
  {
    name: "MitchKitchen",
    letter: "M",
    description: "Gourmet food truck brand with customizable menus for events.",
    tags: ["React", "TailwindCSS"],
    live: "https://mitch-kitchen.vercel.app/",
    github: null,
    preview: MitchKitchen,
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const rafRef = useRef(null)
  const hoveredRef = useRef(null)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    if (!cardRef.current) return
    gsap.set(cardRef.current, { opacity: 0, xPercent: 0, yPercent: 0 })

    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const move = (e) => {
      targetX = e.clientX + 24
      targetY = e.clientY - 200
    }
    window.addEventListener("mousemove", move)

    const tick = () => {
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1

      if (cardRef.current) {
        cardRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleEnter = (i) => {
    hoveredRef.current = i
    setHovered(i)
    if (cardRef.current) {
      gsap.killTweensOf(cardRef.current)
      gsap.to(cardRef.current, { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" })
    }
  }

  const handleLeave = () => {
    hoveredRef.current = null
    if (cardRef.current) {
      gsap.killTweensOf(cardRef.current)
      gsap.to(cardRef.current, {
        opacity: 0,
        duration: 0.15,
        ease: "power2.in",
        onComplete: () => setHovered(null),
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        padding: "4rem 5vw",
        maxWidth: "1200px",
        margin: "0 auto",
        cursor: "none",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Section label */}
      <p style={{
        fontFamily: "monospace",
        fontSize: "11px",
        letterSpacing: "0.2em",
        color: "#c8f542",
        marginBottom: "1rem",
        textTransform: "uppercase",
        margin: "0 0 1rem 0",
      }}>
        Selected Works
      </p>

      {/* Section headline */}
      <h2 style={{
        fontFamily: "serif",
        fontSize: "clamp(28px, 4vw, 52px)",
        fontWeight: 700,
        color: "#f0ede8",
        marginBottom: "4rem",
        lineHeight: 1.1,
        margin: "0 0 4rem 0",
      }}>
        Redefining the digital landscape with intent.
      </h2>

      {/* Project list */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {projects.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={handleLeave}
            className="project-row"
            style={{
              display: "grid",
              gridTemplateColumns: "52px 1fr auto",
              gap: "2rem",
              alignItems: "center",
              padding: "2rem 1rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              transition: "background 0.2s",
              background: hovered === i ? "rgba(255,255,255,0.025)" : "transparent",
              borderRadius: "6px",
            }}
          >
            {/* Letter avatar */}
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "15px",
              color: "#f0ede8",
              flexShrink: 0,
            }}>
              {p.letter}
            </div>

            {/* Center: name + links + description */}
            <div style={{ minWidth: 0 }}>
              {/* Name */}
              <div className="name-row" style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.4rem",
                flexWrap: "wrap",
              }}>
                <span style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#f0ede8",
                }}>
                  {p.name}
                </span>

                {/* Links inline with name */}
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      style={{
                        fontSize: "9px",
                        padding: "2px 8px",
                        border: "1px solid rgba(200,245,66,0.4)",
                        borderRadius: "4px",
                        color: "#c8f542",
                        textDecoration: "none",
                        fontFamily: "monospace",
                        background: "rgba(200,245,66,0.06)",
                        whiteSpace: "nowrap",
                        position: "relative",
                        zIndex: 10,
                      }}>
                      Live ↗
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      style={{
                        fontSize: "9px",
                        padding: "2px 8px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "4px",
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        fontFamily: "monospace",
                        background: "rgba(255,255,255,0.03)",
                        whiteSpace: "nowrap",
                        position: "relative",
                        zIndex: 10,
                      }}>
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p style={{
                margin: 0,
                fontSize: "12px",
                color: "rgba(255,255,255,0.38)",
                fontFamily: "monospace",
                lineHeight: 1.6,
              }}>
                {p.description}
              </p>

              {/* Tags — visible only on mobile, hidden on desktop via CSS */}
              <div className="mobile-tags" style={{
                display: "flex",
                gap: "0.4rem",
                flexWrap: "wrap",
                marginTop: "0.75rem",
              }}>
                {p.tags.slice(0, 2).map(tag => (
                  <span key={tag} style={{
                    fontSize: "9px",
                    padding: "2px 7px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "3px",
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "monospace",
                    background: "rgba(255,255,255,0.02)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: tags — hidden on mobile */}
            <div className="project-tags" style={{
              display: "flex",
              gap: "0.5rem",
              flexShrink: 0,
              flexWrap: "nowrap",
            }}>
              {p.tags.slice(0, 3).map(tag => (
                <span key={tag} style={{
                  fontSize: "10px",
                  padding: "3px 10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "4px",
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "monospace",
                  whiteSpace: "nowrap",
                  background: "rgba(255,255,255,0.02)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* React Portal: Unconstrained fixed layer */}
      {document.getElementById("card-portal") && createPortal(
        <div
          ref={cardRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "300px",
            pointerEvents: "none",
            zIndex: 99999,
            opacity: 0,
            willChange: "transform",
          }}
        >
          {hovered !== null && (
            <div style={{
              background: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 24px 48px rgba(0,0,0,0.7)",
            }}>
              <img
                src={projects[hovered].preview}
                alt=""
                style={{
                  width: "100%",
                  height: "170px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{ padding: "0.85rem 1rem 0.25rem" }}>
                <span style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#f0ede8",
                  display: "block",
                  marginBottom: "0.4rem",
                }}>
                  {projects[hovered].name}
                </span>
                <p style={{
                  margin: "0 0 0.65rem",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "monospace",
                  lineHeight: 1.55,
                }}>
                  {projects[hovered].description}
                </p>
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                  {projects[hovered].tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "3px",
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "monospace",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: "3px", padding: "0 1rem 0.75rem" }}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: "7px",
                    background: "linear-gradient(180deg, #e8c84a 0%, #8b6914 100%)",
                    borderRadius: "2px 2px 0 0",
                    opacity: 0.8,
                  }} />
                ))}
              </div>
            </div>
          )}
        </div>,
        document.getElementById("card-portal")
      )}
    </section>
  );
}