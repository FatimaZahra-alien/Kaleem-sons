"use client"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useCart } from "@/context/CartContext"

const products = [
  { id: "1", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80", name: "Ash Grey Oversized", desc: "Heavy cotton fleece, dropped shoulders.", price: 72 },
  { id: "2", img: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&q=80", name: "Black Forge", desc: "Minimalist signature, premium french terry.", price: 68 },
  { id: "3", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80", name: "Mocha Sherpa", desc: "Warm sherpa lining, perfect for winter.", price: 89 },
  { id: "4", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80", name: "Archive Graphic", desc: "Limited run, screen printed artwork.", price: 79 },
  { id: "5", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80", name: "Ecru Pigment Dyed", desc: "Garment washed, soft hand-feel.", price: 74 },
  { id: "6", img: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?w=600&q=80", name: "Navy Split Logo", desc: "Embossed print, heavyweight fabric.", price: 77 },
]

const SIZES = ["XS", "S", "M", "L", "XL"]

function ProductCard({ product }: { product: typeof products[0] }) {
  const { data: session } = useSession()
  const { addItem, setIsAuthModalOpen, setPendingItem } = useCart()
  const [selectedSize, setSelectedSize] = useState("M")
  const [added, setAdded] = useState(false)

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
      return
    }

    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div
      className="grid-2x3-card"
      style={{
        background: "white",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 12px 20px -8px rgba(0,0,0,0.12)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          style={{ width: "100%", display: "block", transition: "transform 0.4s ease" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      <div style={{ padding: "0.8rem 0.9rem 1rem" }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.05rem",
          fontWeight: 600,
          marginBottom: "0.2rem",
          lineHeight: 1.2,
        }}>{product.name}</h3>

        <p style={{ color: "var(--gray)", fontSize: "0.75rem", marginBottom: "0.6rem" }}>
          {product.desc}
        </p>

        <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--dark)", marginBottom: "0.7rem" }}>
          £{product.price}
        </div>

        {/* Size selector */}
        <div style={{ display: "flex", gap: "5px", marginBottom: "0.8rem", flexWrap: "wrap" }}>
          {SIZES.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: selectedSize === size ? "2px solid #111" : "1px solid #ddd",
                background: selectedSize === size ? "#111" : "#fff",
                color: selectedSize === size ? "#fff" : "#555",
                fontSize: "0.65rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          style={{
            width: "100%",
            background: added ? "#2a7a2a" : "var(--dark, #111)",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "40px",
            fontWeight: 500,
            fontSize: "0.7rem",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
            transition: "all 0.2s",
            letterSpacing: "0.5px",
          }}
        >
          {added ? "✓ Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}

export default function ProductGrid() {
  return (
    <section style={{ padding: "2rem 4% 1.5rem", background: "var(--light)" }}>
      <div className="grid-2x3">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}