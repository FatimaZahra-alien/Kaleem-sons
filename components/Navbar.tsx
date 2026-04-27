"use client"
import { useSession, signOut } from "next-auth/react"
import { useCart } from "@/context/CartContext"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const { data: session } = useSession()
  const { totalItems, setIsCartOpen, setIsAuthModalOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: "/new-in", label: "New In" },
    { href: "/t-shirts", label: "T-Shirts" },
    { href: "/hoodies", label: "Hoodies" },
    { href: "/track-suits", label: "Track Suits" },
    { href: "/karate", label: "Karate" },
    { href: "/jiu-jitsu", label: "Jiu Jitsu" },
  ]

  return (
    <>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        padding: "0.3rem 4%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

        {/* Hamburger - mobile only */}
        <div className="hamburger" style={{ display: "none" }}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1.7rem", fontVariationSettings: "'FILL' 0, 'wght' 300", cursor: "pointer" }}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? "close" : "menu"}
          </span>
        </div>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            letterSpacing: "-0.2px",
            lineHeight: 1,
            cursor: "pointer"
          }}>
            Kaleem Sons
          </div>
        </Link>

        {/* Nav - desktop only */}
        <nav className="desktop-nav">
          <ul style={{ display: "flex", gap: "2.2rem", fontSize: "0.95rem", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} style={{ textDecoration: "none", color: "inherit" }}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons */}
        <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
          <a href="#" aria-label="Search" style={{ display: "flex", alignItems: "center", color: "#232323" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>search</span>
          </a>

          {session ? (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.8rem", color: "#555", maxWidth: "90px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {session.user?.name?.split(" ")[0]}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", color: "#232323" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", color: "#232323" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>account_circle</span>
            </button>
          )}

          <button
            onClick={() => setIsCartOpen(true)}
            style={{ position: "relative", display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>shopping_bag</span>
            {totalItems > 0 && (
              <span style={{
                position: "absolute", top: "-5px", right: "-6px",
                background: "#111", color: "white", fontSize: "0.55rem",
                width: "15px", height: "15px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid white", fontWeight: 700,
              }}>
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </button>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hamburger { display: flex !important; }
            .desktop-nav { display: none !important; }
          }
        `}</style>
      </header>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <nav style={{
          position: "fixed",
          top: "52px",
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          padding: "1rem 0",
          display: "none",
        }} className="mobile-nav">
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.85rem 6%",
                    textDecoration: "none",
                    color: "#232323",
                    fontSize: "1rem",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-nav { display: block !important; }
        }
      `}</style>
    </>
  )
}