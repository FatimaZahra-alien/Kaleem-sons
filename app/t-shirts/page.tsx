"use client"

import { useState } from "react"
import AddToCart from "@/components/AddToCart"

const products = [
  {
    id: 1,
    name: "Oversized Drop Tee",
    category: "T-Shirts",
    price: 1800,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    description: "Premium oversized fit with dropped shoulders. 100% cotton. Perfect for training or casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"],
  },
  {
    id: 2,
    name: "Compression Training Tee",
    category: "T-Shirts",
    price: 2200,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
    description: "Body-mapped compression with four-way stretch. Ideal for high-intensity sessions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red"],
  },
  {
    id: 3,
    name: "Essential Crew Tee",
    category: "T-Shirts",
    price: 1500,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    description: "Classic crew neck with a relaxed fit. Soft-touch fabric that gets better with every wash.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy"],
  },
  {
    id: 4,
    name: "Muscle Fit Tee",
    category: "T-Shirts",
    price: 1900,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
    description: "Tailored muscle fit that hugs the right places. Moisture-wicking blend for all-day wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "White"],
  },
  {
    id: 5,
    name: "Longline Performance Tee",
    category: "T-Shirts",
    price: 2000,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    description: "Extended length design with side slits. Breathable mesh panels for ventilation.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "White"],
  },
  {
    id: 6,
    name: "Graphic Sport Tee",
    category: "T-Shirts",
    price: 2100,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",
    description: "Bold graphic print on premium heavyweight cotton. A statement piece for the streets.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
  },
]

type Product = typeof products[0]

export default function TShirtsPage() {
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

  const bothSelected = selectedSize !== "" && selectedColor !== ""

  return (
    <>
      <main style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#111",
        padding: "100px 4% 80px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "4px", color: "#999", textTransform: "uppercase", marginBottom: "12px" }}>
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
            T-Shirts
          </h1>
          <p style={{ color: "#888", fontSize: "0.9rem", letterSpacing: "0.5px" }}>
            Premium tees built for performance and everyday style.
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
              style={{ cursor: "pointer" }}
              className="product-card"
            >
              <div style={{
                width: "100%",
                aspectRatio: "3/4",
                overflow: "hidden",
                background: "#f5f5f5",
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

              <div style={{ paddingTop: "14px" }}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "2px", color: "#aaa", textTransform: "uppercase", marginBottom: "4px" }}>
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
            }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "3px", color: "#aaa", textTransform: "uppercase", marginBottom: "10px" }}>
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
                <p style={{ fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", color: "#555" }}>
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
              <div style={{ marginBottom: "16px" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", color: "#555" }}>
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

              {/* Validation hint */}
              {!bothSelected && (
                <p style={{ fontSize: "0.72rem", color: "#e00", marginBottom: "12px", letterSpacing: "0.5px" }}>
                  Please select a size and color.
                </p>
              )}

              {/* Add to Cart */}
              {bothSelected ? (
                <AddToCart
                  product={{
                    id: String(selected.id),
                    name: selected.name,
                    price: selected.price,
                    image: selected.image,
                    size: selectedSize,
                    color: selectedColor,
                  }}
                />
              ) : (
                <button
                  disabled
                  style={{
                    background: "#ccc",
                    color: "#fff",
                    border: "none",
                    padding: "16px",
                    fontSize: "0.75rem",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    cursor: "not-allowed",
                    fontWeight: 600,
                    width: "100%",
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
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