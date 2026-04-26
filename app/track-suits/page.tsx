"use client"

import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Elite Performance Track Suit",
    category: "Track Suits",
    price: 5500,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    description: "Matching jacket and jogger set. Moisture-wicking fabric with zippered side pockets. Built for the track and the street.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey"],
  },
  {
    id: 2,
    name: "Slim Fit Jogger Set",
    category: "Track Suits",
    price: 4800,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80",
    description: "Tapered joggers with a fitted zip jacket. Four-way stretch fabric for unrestricted movement.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Olive"],
  },
  {
    id: 3,
    name: "Retro Stripe Track Suit",
    category: "Track Suits",
    price: 5200,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80",
    description: "Bold side stripes on a classic track suit silhouette. Lightweight tricot fabric with a smooth finish.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black/White", "Navy/Red", "Grey/Black"],
  },
  {
    id: 4,
    name: "Oversized Street Track Suit",
    category: "Track Suits",
    price: 5900,
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&q=80",
    description: "Relaxed oversized cut with a boxy jacket and wide-leg trousers. Garment-washed for a lived-in feel.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Washed Black", "Stone", "Forest Green"],
  },
  {
    id: 5,
    name: "Thermal Winter Track Suit",
    category: "Track Suits",
    price: 6800,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    description: "Double-layer thermal fleece construction. Wind-resistant outer shell with sealed seams for cold-weather training.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal", "Dark Navy"],
  },
  {
    id: 6,
    name: "Lightweight Running Set",
    category: "Track Suits",
    price: 4200,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80",
    description: "Ultra-light ripstop nylon with ventilation panels. Packable design — folds into its own pocket.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Electric Blue", "Red"],
  },
  {
    id: 7,
    name: "Velour Luxe Track Suit",
    category: "Track Suits",
    price: 7200,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
    description: "Plush velour fabric with a premium drape. A luxury take on the classic track suit silhouette.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Burgundy", "Cobalt"],
  },
  {
    id: 8,
    name: "Tech Fleece Track Suit",
    category: "Track Suits",
    price: 6200,
    image: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?w=600&q=80",
    description: "Engineered tech fleece with bonded seams. Minimal design, maximum performance. A modern wardrobe staple.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Dark Grey", "Olive"],
  },
]

type Product = typeof products[0]

export default function TrackSuitsPage() {
  const [selected, setSelected] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  function openModal(product: Product) {
    setSelected(product)
    setSelectedSize("")
    setSelectedColor("")
  }

  function closeModal() {
    setSelected(null)
  }

  return (
    <>
      <main style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111",
        padding: "100px 0 80px",
        width: "100%",
      }}>

        {/* Inner wrapper */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 4%",
          background: "#ffffff",
        }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{
              fontSize: "0.7rem",
              letterSpacing: "4px",
              color: "#999",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              Collection
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              marginBottom: "14px",
              lineHeight: 1.1,
            }}>
              Track Suits
            </h1>
            <p style={{ color: "#888", fontSize: "0.9rem", letterSpacing: "0.5px" }}>
              Coordinated sets engineered for performance and street style.
            </p>
            <div style={{ width: "40px", height: "1px", background: "#ddd", margin: "20px auto 0" }} />
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "32px",
          }}>
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => openModal(product)}
                style={{ cursor: "pointer", background: "#ffffff" }}
                className="product-card"
              >
                {/* Image */}
                <div style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  background: "#f8f8f8",
                  position: "relative",
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                    className="product-img"
                  />
                  <div className="card-overlay" style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.3s ease",
                  }}>
                    <span className="card-label" style={{
                      color: "white",
                      fontSize: "0.7rem",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      background: "rgba(0,0,0,0.6)",
                      padding: "10px 20px",
                    }}>
                      View Details
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ paddingTop: "14px", background: "#ffffff" }}>
                  <p style={{
                    fontSize: "0.65rem",
                    letterSpacing: "2px",
                    color: "#aaa",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}>
                    {product.category}
                  </p>
                  <p style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "4px" }}>
                    {product.name}
                  </p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#111" }}>
                    PKR {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selected && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              maxWidth: "860px",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              maxHeight: "90vh",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "1.4rem",
                cursor: "pointer",
                zIndex: 10,
                color: "#111",
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            {/* Image */}
            <div style={{ overflow: "hidden" }}>
              <img
                src={selected.image}
                alt={selected.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Details */}
            <div style={{
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflowY: "auto",
              background: "#fff",
            }}>
              <p style={{
                fontSize: "0.65rem",
                letterSpacing: "3px",
                color: "#aaa",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}>
                {selected.category}
              </p>

              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                marginBottom: "10px",
                lineHeight: 1.2,
              }}>
                {selected.name}
              </h2>

              <p style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "20px" }}>
                PKR {selected.price.toLocaleString()}
              </p>

              <div style={{ height: "1px", background: "#eee", marginBottom: "20px" }} />

              <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.7, marginBottom: "24px" }}>
                {selected.description}
              </p>

              {/* Colors */}
              <div style={{ marginBottom: "20px" }}>
                <p style={{
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                  color: "#555",
                }}>
                  Color: <span style={{ color: "#111", fontWeight: 600 }}>{selectedColor || "Select"}</span>
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {selected.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        padding: "6px 14px",
                        border: selectedColor === color ? "1.5px solid #111" : "1px solid #ddd",
                        background: "none",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                        letterSpacing: "1px",
                        fontWeight: selectedColor === color ? 600 : 400,
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div style={{ marginBottom: "28px" }}>
                <p style={{
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                  color: "#555",
                }}>
                  Size: <span style={{ color: "#111", fontWeight: 600 }}>{selectedSize || "Select"}</span>
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {selected.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        width: "42px",
                        height: "42px",
                        border: selectedSize === size ? "1.5px solid #111" : "1px solid #ddd",
                        background: selectedSize === size ? "#111" : "none",
                        color: selectedSize === size ? "#fff" : "#111",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                        fontWeight: 500,
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button style={{
                background: "#111",
                color: "#fff",
                border: "none",
                padding: "16px",
                fontSize: "0.75rem",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 600,
                width: "100%",
              }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        body { background: #ffffff !important; }
        .product-card:hover .product-img { transform: scale(1.06); }
        .product-card:hover .card-overlay { background: rgba(0,0,0,0.25) !important; }
        .product-card:hover .card-label { opacity: 1 !important; }

        @media (max-width: 640px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}