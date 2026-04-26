"use client"

import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Competition BJJ Gi",
    category: "Jiu Jitsu",
    price: 6500,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    description: "Competition-ready BJJ gi with reinforced collar and knees. Pre-shrunk pearl weave fabric. IBJJF approved.",
    sizes: ["A1", "A2", "A3", "A4"],
    colors: ["White", "Black", "Blue"],
  },
  {
    id: 2,
    name: "Pearl Weave Pro Gi",
    category: "Jiu Jitsu",
    price: 7200,
    image: "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=600&q=80",
    description: "550GSM pearl weave jacket with ripstop trousers. Triple-reinforced seams at all stress points.",
    sizes: ["A1", "A2", "A3", "A4", "A5"],
    colors: ["White", "Black"],
  },
  {
    id: 3,
    name: "Lightweight Summer Gi",
    category: "Jiu Jitsu",
    price: 5800,
    image: "https://images.unsplash.com/photo-1609942072337-c3370e820005?w=600&q=80",
    description: "Ultra-light 350GSM weave for hot climate training. Stays cool and dry through the hardest rolls.",
    sizes: ["A1", "A2", "A3", "A4"],
    colors: ["White", "Blue"],
  },
  {
    id: 4,
    name: "No-Gi Rash Guard",
    category: "Jiu Jitsu",
    price: 2800,
    image: "https://images.unsplash.com/photo-1617714651738-4f8e2ccda6af?w=600&q=80",
    description: "Four-way stretch spandex rash guard. Flatlock stitching prevents mat burn. Anti-odour treated fabric.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy"],
  },
  {
    id: 5,
    name: "No-Gi Shorts",
    category: "Jiu Jitsu",
    price: 2200,
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=600&q=80",
    description: "Grappling shorts with internal compression liner. Hook-and-loop closure with no exposed metal.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
  },
  {
    id: 6,
    name: "Gold Weave Elite Gi",
    category: "Jiu Jitsu",
    price: 8500,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
    description: "Premium gold weave construction — the perfect balance of durability and weight. Embroidered patches throughout.",
    sizes: ["A1", "A2", "A3", "A4"],
    colors: ["White", "Black", "Blue"],
  },
  {
    id: 7,
    name: "Junior BJJ Gi",
    category: "Jiu Jitsu",
    price: 3200,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    description: "Durable kids gi for junior grapplers. Reinforced knees and collar. Grows with your child's game.",
    sizes: ["M0", "M1", "M2", "M3", "M4"],
    colors: ["White", "Blue"],
  },
  {
    id: 8,
    name: "Spats Compression Tights",
    category: "Jiu Jitsu",
    price: 2500,
    image: "https://images.unsplash.com/photo-1617714651703-5f7a31f2c3e4?w=600&q=80",
    description: "Full-length compression spats for no-gi training. Muscle support with four-way stretch and flatlock seams.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey"],
  },
]

type Product = typeof products[0]

export default function JiuJitsuPage() {
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
              Jiu Jitsu
            </h1>
            <p style={{ color: "#888", fontSize: "0.9rem", letterSpacing: "0.5px" }}>
              Reinforced stitching. Full range of motion. Built for the mat.
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