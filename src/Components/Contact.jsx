import React from "react";
import { FiArrowDownLeft } from "react-icons/fi";

const Contact = () => {
  return (
    <section style={{
      background: "#000",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "8rem 6vw 5rem",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "3rem",
        }}>
          <div>
            <p style={{
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#c8f542",
              textTransform: "uppercase",
              margin: "0 0 1.25rem 0",
            }}>
              Contact
            </p>
            <h2 style={{
              fontFamily: "serif",
              fontSize: "clamp(32px, 4.5vw, 60px)",
              fontWeight: 700,
              color: "#f0ede8",
              lineHeight: 1.1,
              margin: "0 0 1rem 0",
            }}>
              Need A Frontend Developer?
            </h2>
            <p style={{
              fontFamily: "monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.4)",
              margin: 0,
            }}>
              I am available. Let's work together.
            </p>
          </div>

          <FiArrowDownLeft style={{
            fontSize: "clamp(48px, 6vw, 80px)",
            color: "rgba(255,255,255,0.15)",
            flexShrink: 0,
            marginTop: "0.5rem",
          }} />
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: "3rem" }} />

        {/* Email + socials */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}>
          <a
            href="mailto:divinenation1@gmail.com"
            style={{
              fontFamily: "monospace",
              fontSize: "clamp(22px, 4vw, 52px)",
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#f0ede8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
          >
            divinenation1@gmail.com
          </a>

          <div style={{ display: "flex", gap: "2.5rem", paddingBottom: "0.4rem" }}>
            {[
              { label: "GitHub", href: "https://github.com/TheWeirdDee" },
              { label: "LinkedIn", href: "#" },
              { label: "Twitter", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#c8f542"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          marginTop: "5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <p style={{
            fontFamily: "monospace",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
            margin: 0,
          }}>
            © {new Date().getFullYear()} Divine Dilibe. All rights reserved.
          </p>
          <p style={{
            fontFamily: "monospace",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.15)",
            margin: 0,
          }}>
            Based in Lagos, Nigeria
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;