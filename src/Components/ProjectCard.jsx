import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { useProjectStore } from "../store/projectStore"

export default function ProjectCard() {
  const cardRef = useRef(null)
  const { hovered, mouseX, mouseY } = useProjectStore()
  const rafRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    gsap.set(cardRef.current, { opacity: 0, x: -999 })

    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", move)

    const tick = () => {
      if (cardRef.current && hovered !== null) {
        gsap.to(cardRef.current, {
          x: mouse.current.x + 40,
          y: mouse.current.y - 200,
          duration: 0.18,
          ease: "power2.out",
          overwrite: true,
        })
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(rafRef.current)
    }
  }, [hovered])

  useEffect(() => {
    if (!cardRef.current) return
    if (hovered !== null) {
      gsap.killTweensOf(cardRef.current)
      gsap.fromTo(cardRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" }
      )
    } else {
      gsap.killTweensOf(cardRef.current)
      gsap.to(cardRef.current, { opacity: 0, scale: 0.92, duration: 0.15, ease: "power2.in" })
    }
  }, [hovered])

  return (
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
            src={hovered.preview}
            alt=""
            style={{
              width: "100%",
              height: "170px",
              objectFit: "cover",
              display: "block",
              opacity: 1,
              filter: "none",
              mixBlendMode: "normal",
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
              {hovered.name}
            </span>
            <p style={{
              margin: "0 0 0.65rem",
              fontSize: "11px",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "monospace",
              lineHeight: 1.55,
            }}>
              {hovered.description}
            </p>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "0.75rem" }}>
              {hovered.tags.slice(0, 3).map(tag => (
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
          {/* Gold contacts */}
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
    </div>
  )
}
