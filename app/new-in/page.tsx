import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function NewInPage() {
  return (
    <>
    

      <main style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#111",
        padding: "100px 4% 60px"
      }}>
        
        <h1 style={{
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "10px"
        }}>
          New In
        </h1>

        <p style={{
          color: "#666",
          fontSize: "0.9rem",
          marginBottom: "40px"
        }}>
          Discover the latest arrivals.
        </p>

        {/* Simple Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          
          {[1,2,3,4].map((item) => (
            <div key={item} style={{ cursor: "pointer" }}>
              
              <div style={{
                width: "100%",
                height: "250px",
                background: "#f2f2f2",
                borderRadius: "12px"
              }} />

              <div style={{ marginTop: "10px" }}>
                <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                  Product {item}
                </p>
                <p style={{ fontSize: "0.8rem", color: "#777" }}>
                  Category
                </p>
                <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                  $50
                </p>
              </div>

            </div>
          ))}

        </div>

      </main>

      
    </>
  )
}