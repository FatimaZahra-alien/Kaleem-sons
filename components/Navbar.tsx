"use client"
import { useSession, signOut } from "next-auth/react"
import { useCart } from "@/context/CartContext"
import Link from "next/link"

export default function Header() {
  const { data: session } = useSession()
  const { totalItems, setIsCartOpen, setIsAuthModalOpen } = useCart()

  return (
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
      <div className="hamburger" style={{ display: "none" }} id="hamburger-btn">
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "1.7rem", fontVariationSettings: "'FILL' 0, 'wght' 300", cursor: "pointer" }}
        >
          menu
        </span>
      </div>

      {/* ✅ Logo (NOW CLICKABLE) */}
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
          
          <li><Link href="/new-in" style={{ textDecoration: "none", color: "inherit" }}>New In</Link></li>
          <li><Link href="/suits" style={{ textDecoration: "none", color: "inherit" }}>Suits</Link></li>
          <li><Link href="/casual" style={{ textDecoration: "none", color: "inherit" }}>Casual</Link></li>
          <li><Link href="/shop" style={{ textDecoration: "none", color: "inherit" }}>Shop All</Link></li>
          <li><Link href="/outlet" style={{ textDecoration: "none", color: "inherit" }}>Outlet</Link></li>

        </ul>
      </nav>

      {/* Icons */}
      <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>

        {/* Search */}
        <a href="#" aria-label="Search" style={{ display: "flex", alignItems: "center", color: "#232323" }}>
          <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>
            search
          </span>
        </a>

        {/* Account */}
        {session ? (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "0.8rem", color: "#555", maxWidth: "90px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {session.user?.name?.split(" ")[0]}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", color: "#232323" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>
                logout
              </span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsAuthModalOpen(true)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", color: "#232323" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>
              account_circle
            </span>
          </button>
        )}

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          style={{ position: "relative", display: "flex", alignItems: "center", background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>
            shopping_bag
          </span>
          {totalItems > 0 && (
            <span style={{
              position: "absolute",
              top: "-5px",
              right: "-6px",
              background: "#111",
              color: "white",
              fontSize: "0.55rem",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid white",
              fontWeight: 700,
            }}>
              {totalItems > 9 ? "9+" : totalItems}
            </span>
          )}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hamburger-btn { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  )
}