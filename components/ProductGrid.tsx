"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useCart } from "@/context/CartContext"

const products = [
  { id: "1", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80", name: "Ash Grey Oversized", desc: "Heavy cotton fleece, dropped shoulders.", price: 72, colors: ["#C4BFBA", "#111111", "#4A4A4A"] },
  { id: "2", img: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&q=80", name: "Black Forge", desc: "Minimalist signature, premium french terry.", price: 68, colors: ["#111111", "#2C2C2C", "#5C5C5C"] },
  { id: "3", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80", name: "Mocha Sherpa", desc: "Warm sherpa lining, perfect for winter.", price: 89, colors: ["#8B6B4A", "#C4956A", "#4A3728"] },
  { id: "4", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80", name: "Archive Graphic", desc: "Limited run, screen printed artwork.", price: 79, colors: ["#E8E0D5", "#111111", "#8B7355"] },
  { id: "5", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80", name: "Ecru Pigment Dyed", desc: "Garment washed, soft hand-feel.", price: 74, colors: ["#F0EAD6", "#D4C5A9", "#A89880"] },
  { id: "6", img: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?w=600&q=80", name: "Navy Split Logo", desc: "Embossed print, heavyweight fabric.", price: 77, colors: ["#1B2A4A", "#2C3E6B", "#4A5B80"] },
]

const SIZES = ["XS", "S", "M", "L", "XL"]

type Product = typeof products[0]

/* ── tiny hook to detect mobile ── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  return isMobile
}

/* ══════════════════════════════════════
   MODAL
══════════════════════════════════════ */
function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { data: session } = useSession()
  const { addItem, setIsAuthModalOpen, setPendingItem } = useCart()
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [added, setAdded] = useState(false)
  const isMobile = useIsMobile()

  /* prevent body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  function handleAddToCart() {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.img,
      size: selectedSize,
      quantity: 1,
    }
    if (!session) {
      setPendingItem(item)
      setIsAuthModalOpen(true)
      onClose()
      return
    }
    addItem(item)
    setAdded(true)
    setTimeout(() => { setAdded(false); onClose() }, 1200)
  }

  return (
    /* ── Backdrop ── */
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(5px)",
        zIndex: 9999,
        display: "flex",
        alignItems: isMobile ? "flex-end" : "center",
        justifyContent: "center",
        padding: isMobile ? 0 : "1rem",
        animation: "pgFadeIn 0.2s ease",
      }}
    >
      {/* ── Panel ── */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: isMobile ? "24px 24px 0 0" : "24px",
          width: "100%",
          maxWidth: isMobile ? "100%" : "780px",
          maxHeight: isMobile ? "92dvh" : "88vh",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          overflow: "hidden",
          boxShadow: "0 32px 64px -12px rgba(0,0,0,0.35)",
          animation: isMobile
            ? "pgSlideUp 0.3s cubic-bezier(0.34,1.1,0.64,1)"
            : "pgPopIn 0.28s cubic-bezier(0.34,1.2,0.64,1)",
          position: "relative",
        }}
      >
        {/* ── Close button ── */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 12, right: 14, zIndex: 10,
            background: "rgba(255,255,255,0.92)", border: "none",
            borderRadius: "50%", width: 34, height: 34,
            fontSize: "0.95rem", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          }}
        >✕</button>

        {/* ── Product image ── */}
        <div style={{
          flexShrink: 0,
          width: isMobile ? "100%" : "46%",
          height: isMobile ? "min(55vw, 260px)" : "auto",
          overflow: "hidden",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* ── Details panel ── */}
        <div style={{
          flex: 1,
          padding: isMobile ? "1.1rem 1.2rem 1.8rem" : "2rem 1.8rem",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "0.75rem" : "1rem",
          overflowY: "auto",
        }}>
          {/* Name + desc */}
          <div>
            <p style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "2px", color: "#aaa", marginBottom: "0.25rem" }}>
              Kaleem Sons
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "1.25rem" : "1.55rem",
              fontWeight: 700, lineHeight: 1.2, color: "#111",
              marginBottom: "0.35rem",
            }}>{product.name}</h2>
            <p style={{ color: "#777", fontSize: "0.78rem", lineHeight: 1.6 }}>{product.desc}</p>
          </div>

          {/* Price */}
          <div style={{ fontSize: isMobile ? "1.35rem" : "1.6rem", fontWeight: 800, color: "#111", letterSpacing: "-0.5px" }}>
            £{product.price}
          </div>

          {/* Colour */}
          <div>
            <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "#999", marginBottom: "0.4rem" }}>
              Colour
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {product.colors.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  title={c}
                  style={{
                    width: 26, height: 26, borderRadius: "50%", background: c,
                    border: selectedColor === c ? "3px solid #111" : "2px solid transparent",
                    outline: selectedColor === c ? "2px solid #fff" : "none",
                    outlineOffset: "-4px", cursor: "pointer", transition: "all 0.15s",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "#999", marginBottom: "0.4rem" }}>
              Size
            </p>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {SIZES.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    width: isMobile ? 36 : 42, height: isMobile ? 36 : 42,
                    borderRadius: "10px",
                    border: selectedSize === size ? "2px solid #111" : "1.5px solid #ddd",
                    background: selectedSize === size ? "#111" : "#fafafa",
                    color: selectedSize === size ? "#fff" : "#555",
                    fontSize: "0.7rem", fontWeight: 600, cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            style={{
              marginTop: "auto",
              width: "100%",
              padding: isMobile ? "0.78rem" : "0.88rem",
              borderRadius: "50px", border: "none",
              background: added ? "#2a7a2a" : "#111",
              color: "#fff",
              fontSize: "0.73rem", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "1.5px",
              cursor: "pointer", transition: "background 0.2s ease",
            }}
          >
            {added ? "✓ Added to Cart!" : "Add to Cart"}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pgFadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes pgSlideUp { from { opacity:0; transform:translateY(50px) } to { opacity:1; transform:translateY(0) } }
        @keyframes pgPopIn   { from { opacity:0; transform:scale(0.96) translateY(10px) } to { opacity:1; transform:scale(1) translateY(0) } }
      `}</style>
    </div>
  )
}

/* ══════════════════════════════════════
   CARD
══════════════════════════════════════ */
function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px", overflow: "hidden",
        cursor: "pointer", position: "relative", aspectRatio: "3/4",
        boxShadow: hovered
          ? "0 20px 40px -10px rgba(0,0,0,0.22)"
          : "0 4px 16px -4px rgba(0,0,0,0.12)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s cubic-bezier(0.34,1.2,0.64,1)",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.img}
        alt={product.name}
        style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />

      {/* Gradient overlay: name + price */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "2.5rem 0.8rem 0.8rem",
        background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        gap: "4px",
      }}>
        <span style={{
          color: "#fff", fontSize: "0.7rem", fontWeight: 500,
          maxWidth: "62%", lineHeight: 1.3,
          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
        }}>{product.name}</span>

        <span style={{
          background: "rgba(255,255,255,0.95)", color: "#111",
          fontSize: "0.7rem", fontWeight: 700,
          borderRadius: "20px", padding: "3px 9px",
          flexShrink: 0,
        }}>£{product.price}</span>
      </div>

      {/* Quick View pill — visible on hover (desktop) */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: `translate(-50%, -50%) scale(${hovered ? 1 : 0.85})`,
        opacity: hovered ? 1 : 0,
        background: "rgba(255,255,255,0.92)", color: "#111",
        fontSize: "0.63rem", fontWeight: 700,
        textTransform: "uppercase", letterSpacing: "1.5px",
        padding: "7px 18px", borderRadius: "30px",
        transition: "all 0.2s ease",
        pointerEvents: "none", backdropFilter: "blur(4px)",
      }}>Quick View</div>
    </div>
  )
}

/* ══════════════════════════════════════
   GRID (replaces the old <section> wrapper)
   — uses its own responsive CSS via <style> tag
══════════════════════════════════════ */
export default function ProductGrid() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)

  return (
    <>
      <style>{`
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding: 2rem 4% 3rem;
          background: var(--light);
        }
        /* tablet */
        @media (max-width: 900px) {
          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
            padding: 1.2rem 3% 2rem;
          }
        }
        /* mobile */
        @media (max-width: 480px) {
          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            padding: 0.8rem 3% 2rem;
          }
        }
      `}</style>

      <div className="pg-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onClick={() => setActiveProduct(p)} />
        ))}
      </div>

      {activeProduct && (
        <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}
    </>
  )
}
