"use client"

import { useState } from "react"
import AddToCart from "@/components/AddToCart"

const products = [
  {
    id: 1,
    name: "Pro Karate Gi",
    category: "Karate",
    price: 4200,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
    description: "Tournament-grade karate uniform. Lightweight yet durable with double-stitched seams throughout. WKF approved.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White"],
  },
  {
    id: 2,
    name: "Kumite Fighter Gi",
    category: "Karate",
    price: 4800,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    description: "Ultra-lightweight kumite gi designed for speed and agility. Breathable fabric keeps you cool under pressure.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue"],
  },
  {
    id: 3,
    name: "Kata Precision Gi",
    category: "Karate",
    price: 5500,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    description: "Heavyweight kata gi with a crisp clean finish. Structured fabric holds its shape through every sequence.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White"],
  },
  {
    id: 4,
    name: "Junior Karate Uniform",
    category: "Karate",
    price: 2800,
    image: "https://images.unsplash.com/photo-1566821582954-98de1a6c71d0?w=600&q=80",
    description: "Durable student gi for junior practitioners. Pre-shrunk cotton blend with reinforced stress points.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White"],
  },
  {
    id: 5,
    name: "Black Belt Elite Gi",
    category: "Karate",
    price: 7500,
    image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=600&q=80",
    description: "Premium black gi for advanced practitioners. Pearl weave construction with embroidered detailing.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
  },
  {
    id: 6,
    name: "Training Karate Set",
    category: "Karate",
    price: 3500,
    image: "https://images.unsplash.com/photo-1599744331096-94f3e4bcff50?w=600&q=80",
    description: "Everyday training gi with a relaxed fit. Cotton-poly blend for easy care and long-lasting durability.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black"],
  },
]

type Product = typeof products[0]

export default function KaratePage() {
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
      <main style={{ minHeight: "100vh", background: "#ffffff", color: "#111", padding: "100px 0 80px", width: "100%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4%", background: "#ffffff" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "4px", color: "#999", textTransform: "uppercase", marginBottom: "12px" }}>
              Collection
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.03em", marginBottom: "14px", lineHeight: 1.1 }}>
              Karate
            </h1>
            <p style={{ color: "#888", fontSize: "0.9rem", letterSpacing: "0.5px" }}>
              Traditional craftsmanship meets modern performance. Built for discipline.
            </p>
            <div style={{ width: "40px", height: "1px", background: "#ddd", margin: "20px auto 0" }} />
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "32px" }}>
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => openModal(product)}
                style={{ cursor: "pointer", background: "#ffffff" }}
                className="product-card"
              >
                <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", background: "#f8f8f8", position: "relative" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                    className="product-img"
                  />
                  <div className="card-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                    <span className="card-label" style={{ color: "white", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", opacity: 0, transition: "opacity 0.3s ease", background: "rgba(0,0,0,0.6)", padding: "10px 20px" }}>
                      View Details
                    </span>
                  </div>
                </div>

                <div style={{ paddingTop: "14px", background: "#ffffff" }}>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "2px", color: "#aaa", textTransform: "uppercase", marginBottom: "4px" }}>{product.category}</p>
                  <p style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "4px" }}>{product.name}</p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#111" }}>PKR {product.price.toLocaleString()}</p>
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
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", backdropFilter: "blur(4px)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#fff", maxWidth: "860px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", maxHeight: "90vh", overflow: "hidden", position: "relative" }}
          >
            <button
              onClick={closeModal}
              style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", fontSize: "1.4rem", cursor: "pointer", zIndex: 10, color: "#111", lineHeight: 1 }}
            >
              ✕
            </button>

            <div style={{ overflow: "hidden" }}>
              <img src={selected.image} alt={selected.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", overflowY: "auto", background: "#fff" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "3px", color: "#aaa", textTransform: "uppercase", marginBottom: "10px" }}>
                {selected.category}
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: "10px", lineHeight: 1.2 }}>
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
                      style={{ padding: "6px 14px", border: selectedColor === color ? "1.5px solid #111" : "1px solid #ddd", background: "none", fontSize: "0.75rem", cursor: "pointer", letterSpacing: "1px", fontWeight: selectedColor === color ? 600 : 400 }}
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
                      style={{ width: "42px", height: "42px", border: selectedSize === size ? "1.5px solid #111" : "1px solid #ddd", background: selectedSize === size ? "#111" : "none", color: selectedSize === size ? "#fff" : "#111", fontSize: "0.75rem", cursor: "pointer", fontWeight: 500 }}
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
                  style={{ background: "#ccc", color: "#fff", border: "none", padding: "16px", fontSize: "0.75rem", letterSpacing: "2.5px", textTransform: "uppercase", cursor: "not-allowed", fontWeight: 600, width: "100%" }}
                >
                  Add to Cart
                </button>
              )}
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