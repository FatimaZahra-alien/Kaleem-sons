export default function Hero() {
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
    }}>
      {/* Background overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(circle at 30% 40%, rgba(220,140,80,0.2) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(190,120,200,0.15) 0%, transparent 45%),
          repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 2px, transparent 2px, transparent 8px)
        `,
        mixBlendMode: "overlay",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      {/* Content box */}
      <div style={{
        position: "relative",
        zIndex: 5,
        maxWidth: "800px",
        background: "rgba(0,0,0,0.25)",
        backdropFilter: "blur(3px)",
        padding: "1.5rem 1.2rem",
        borderRadius: "60px 20px 60px 20px",
        border: "1px solid rgba(255,255,240,0.15)",
        boxShadow: "0 20px 30px rgba(0,0,0,0.4)",
      }}>
        <h1 style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(2.8rem, 10vw, 5rem)",
          lineHeight: 0.9,
          marginBottom: "0.4rem",
          textTransform: "uppercase",
          color: "#ffffff",
          letterSpacing: "-1px",
        }}>
          NEW <br /> ARRIVAL
        </h1>

        <p style={{
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
        }}>
          Elegant Design. Smart Solutions.
        </p>

        <a href="#" style={{
          display: "inline-block",
          background: "white",
          color: "black",
          padding: "0.5rem 1.4rem",
          borderRadius: "50px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.7px",
          fontSize: "0.75rem",
          border: "2px solid transparent",
          transition: "all 0.2s",
        }}>
          Explore
        </a>
      </div>
    </section>
  );
}