"use client"

import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Heavyweight Pullover Hoodie",
    category: "Hoodies",
    price: 3200,
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    description: "Thick 400GSM fleece with a kangaroo pocket and adjustable drawstring. Brushed interior for extra warmth.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal", "Navy"],
  },
  {
    id: 2,
    name: "Oversized Fleece Hoodie",
    category: "Hoodies",
    price: 3500,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&q=80",
    description: "Dropped shoulders, boxy silhouette. Ultra-soft fleece lining — the hoodie you'll live in.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Cream", "Black"],
  },
  {
    id: 3,
    name: "Zip-Up Training Hoodie",
    category: "Hoodies",
    price: 3800,
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80",
    description: "Full-zip design with moisture-wicking fabric. Twin zip pockets and a fitted hood for training sessions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Olive"],
  },
  {
    id: 4,
    name: "Essential Slim Hoodie",
    category: "Hoodies",
    price: 2800,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80",
    description: "Slim tapered cut for a sharp silhouette. Lightweight French terry blend, perfect for layering.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy"],
  },
  {
    id: 5,
    name: "Streetwear Drop Hoodie",
    category: "Hoodies",
    price: 4000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    description: "Street-ready oversized hoodie with extended back hem. Premium garment-washed finish.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Washed Black", "Stone", "Burgundy"],
  },
  {
    id: 6,
    name: "Thermal Lined Hoodie",
    category: "Hoodies",
    price: 4500,
    image: "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?w=600&q=80",
    description: "Double-lined thermal construction for cold days. Ribbed cuffs and hem seal in heat.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Dark Grey"],
  },
]

type Product = typeof products[0]

export default function HoodiesPage() {
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
              Hoodies
            </h1>
            <p style={{ color: "#888", fontSize: "0.9rem", letterSpacing: "0.5px" }}>
              Heavyweight fleece. Oversized silhouettes. Built for all-day comfort.
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
                <div style={{ paddingTop: "14px", background: "#fff" }}>
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