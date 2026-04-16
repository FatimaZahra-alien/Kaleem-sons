"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 2,
  left: Math.random() * 100,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * -10,
  opacity: Math.random() * 0.35 + 0.15,
}));

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section style={{
      minHeight: "400px",
      height: "60vh",
      background: "#2b1e16",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 4%",
      position: "relative",
      isolation: "isolate",
      overflow: "hidden",
    }}>

      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(circle at 25% 40%, rgba(220,140,80,0.12) 0%, transparent 50%),
          radial-gradient(circle at 78% 65%, rgba(190,100,50,0.08) 0%, transparent 50%)
        `,
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* ===================== CIRCLE SKETCHES ONLY ===================== */}

      {/* Top left — 3 ring cluster */}
      <svg style={{ position:"absolute", top:"6%", left:"2%", width:"90px", height:"90px", zIndex:2, opacity:0.55 }} viewBox="0 0 90 90">
        <circle cx="45" cy="45" r="40" fill="none" stroke="rgba(190,145,95,0.18)" strokeWidth="0.9" />
        <circle cx="45" cy="45" r="27" fill="none" stroke="rgba(190,145,95,0.12)" strokeWidth="0.8" />
        <circle cx="45" cy="45" r="13" fill="none" stroke="rgba(190,145,95,0.07)" strokeWidth="0.6" />
      </svg>

      {/* Top left area — small offset pair */}
      <svg style={{ position:"absolute", top:"30%", left:"8%", width:"55px", height:"55px", zIndex:2, opacity:0.45 }} viewBox="0 0 55 55">
        <circle cx="27" cy="27" r="24" fill="none" stroke="rgba(190,145,95,0.13)" strokeWidth="0.8" />
        <circle cx="27" cy="27" r="14" fill="none" stroke="rgba(190,145,95,0.08)" strokeWidth="0.6" />
      </svg>

      {/* Left middle — single large faint ring */}
      <svg style={{ position:"absolute", top:"52%", left:"-3%", width:"100px", height:"100px", zIndex:2, opacity:0.35 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(190,145,95,0.1)" strokeWidth="0.7" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(190,145,95,0.06)" strokeWidth="0.5" />
      </svg>

      {/* Bottom left — tight trio */}
      <svg style={{ position:"absolute", bottom:"8%", left:"5%", width:"65px", height:"65px", zIndex:2, opacity:0.5 }} viewBox="0 0 65 65">
        <circle cx="32" cy="32" r="29" fill="none" stroke="rgba(190,145,95,0.14)" strokeWidth="0.8" />
        <circle cx="32" cy="32" r="19" fill="none" stroke="rgba(190,145,95,0.09)" strokeWidth="0.7" />
        <circle cx="32" cy="32" r="8"  fill="none" stroke="rgba(190,145,95,0.05)" strokeWidth="0.5" />
      </svg>

      {/* Top center — tiny ghost pair */}
      <svg style={{ position:"absolute", top:"5%", left:"41%", width:"48px", height:"48px", zIndex:2, opacity:0.3 }} viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(190,145,95,0.1)" strokeWidth="0.7" />
        <circle cx="24" cy="24" r="11" fill="none" stroke="rgba(190,145,95,0.06)" strokeWidth="0.5" />
      </svg>

      {/* Top right — large partially clipped rings */}
      <svg style={{ position:"absolute", top:"4%", right:"-6%", width:"130px", height:"130px", zIndex:2, opacity:0.45 }} viewBox="0 0 130 130">
        <circle cx="65" cy="65" r="60" fill="none" stroke="rgba(190,145,95,0.12)" strokeWidth="0.9" />
        <circle cx="65" cy="65" r="42" fill="none" stroke="rgba(190,145,95,0.08)" strokeWidth="0.7" />
        <circle cx="65" cy="65" r="22" fill="none" stroke="rgba(190,145,95,0.05)" strokeWidth="0.5" />
      </svg>

      {/* Right middle — offset double */}
      <svg style={{ position:"absolute", top:"35%", right:"3%", width:"70px", height:"70px", zIndex:2, opacity:0.4 }} viewBox="0 0 70 70">
        <circle cx="35" cy="35" r="31" fill="none" stroke="rgba(190,145,95,0.11)" strokeWidth="0.8" />
        <circle cx="35" cy="35" r="18" fill="none" stroke="rgba(190,145,95,0.07)" strokeWidth="0.6" />
      </svg>

      {/* Bottom right — your original image 2 style, two rings */}
      <svg style={{ position:"absolute", bottom:"5%", right:"4%", width:"100px", height:"100px", zIndex:2, opacity:0.55 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(190,145,95,0.18)" strokeWidth="1" />
        <circle cx="50" cy="50" r="29" fill="none" stroke="rgba(190,145,95,0.12)" strokeWidth="0.8" />
      </svg>

      {/* Bottom center — small single */}
      <svg style={{ position:"absolute", bottom:"4%", left:"37%", width:"52px", height:"52px", zIndex:2, opacity:0.38 }} viewBox="0 0 52 52">
        <circle cx="26" cy="26" r="23" fill="none" stroke="rgba(190,145,95,0.11)" strokeWidth="0.7" />
        <circle cx="26" cy="26" r="13" fill="none" stroke="rgba(190,145,95,0.07)" strokeWidth="0.5" />
      </svg>

      {/* Right lower — tiny ghost single */}
      <svg style={{ position:"absolute", top:"68%", right:"14%", width:"38px", height:"38px", zIndex:2, opacity:0.3 }} viewBox="0 0 38 38">
        <circle cx="19" cy="19" r="16" fill="none" stroke="rgba(190,145,95,0.09)" strokeWidth="0.6" />
      </svg>

      {/* ===================== LIGHT SWEEP ===================== */}
      <motion.div
        animate={{ x: ["-30%", "140%"] }}
        transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }}
        style={{
          position: "absolute", top: "-50%", left: 0,
          width: "16%", height: "200%",
          background: "linear-gradient(90deg, transparent, rgba(245,220,180,0.07), transparent)",
          transform: "skewX(-20deg)",
          pointerEvents: "none", zIndex: 3,
        }}
      />

      {/* ===================== PARTICLES ===================== */}
      {mounted && particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{ y: ["100vh", "-20vh"], opacity: [0, p.opacity, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            width: p.size, height: p.size,
            borderRadius: "50%",
            background: "rgba(210,170,120,0.5)",
            left: `${p.left}%`,
            pointerEvents: "none", zIndex: 3,
          }}
        />
      ))}

      {/* ===================== CONTENT BOX — UNTOUCHED ===================== */}
      <div style={{
        position: "relative", zIndex: 5,
        maxWidth: "800px", width: "100%",
        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(3px)",
        padding: "1.5rem 1.2rem",
        borderRadius: "60px 20px 60px 20px",
        border: "1px solid rgba(255,255,240,0.15)",
        boxShadow: "0 20px 30px rgba(0,0,0,0.4)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 10vw, 5rem)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              color: "#ffffff",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            NEW
          </motion.h1>
        </div>

        <div style={{ overflow: "hidden", marginBottom: "0.4rem" }}>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 10vw, 5rem)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              color: "#ffffff",
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            ARRIVAL
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{
            fontFamily: "'Prata', serif",
            fontSize: "0.95rem",
            marginBottom: "1rem",
            maxWidth: "320px",
            marginLeft: "auto",
            marginRight: "auto",
            background: "rgba(0,0,0,0.3)",
            padding: "0.4rem 1rem",
            borderRadius: "60px",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,215,140,0.3)",
            color: "rgba(220,195,160,0.9)",
          }}
        >
          Crafted for Modern Men.
        </motion.p>

        <motion.a
          href="/components/ProductGrid"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.15 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-block",
            background: "white",
            color: "black",
            padding: "0.5rem 1.4rem",
            borderRadius: "50px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.7px",
            fontSize: "0.75rem",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          SHOP NOW
        </motion.a>
      </div>
    </section>
  );
}