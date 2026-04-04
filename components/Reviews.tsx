const reviews = [
  {
    name: "Ahmed K.",
    location: "Lahore",
    rating: 5,
    text: "Absolutely love the quality! The fabric is premium and the stitching is perfect. Will definitely order again.",
    product: "Classic Shalwar Kameez",
    avatar: "AK",
  },
  {
    name: "Sara M.",
    location: "Karachi",
    rating: 5,
    text: "Fast delivery and the clothes look even better in person. The sizing guide was really helpful too!",
    product: "Ash Grey Oversized",
    avatar: "SM",
  },
  {
    name: "Bilal R.",
    location: "Islamabad",
    rating: 5,
    text: "Ordered for Eid and received it on time. The packaging was beautiful and the outfit was stunning.",
    product: "Mocha Sherpa",
    avatar: "BR",
  },
  {
    name: "Fatima Z.",
    location: "Sialkot",
    rating: 4,
    text: "Great quality for the price. Customer support was also very helpful when I had a question about sizing.",
    product: "Navy Split Logo",
    avatar: "FZ",
  },
  {
    name: "Omar S.",
    location: "Peshawar",
    rating: 5,
    text: "Been buying from Kaleem Sons for 2 years now. Never disappointed. My go-to for formal wear.",
    product: "Black Forge",
    avatar: "OS",
  },
  {
    name: "Hina A.",
    location: "Multan",
    rating: 5,
    text: "The fabric quality is unmatched at this price point. Highly recommend to anyone looking for premium clothing.",
    product: "Ecru Pigment Dyed",
    avatar: "HA",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i <= count ? "#f5a623" : "none"}
          stroke={i <= count ? "#f5a623" : "#ddd"}
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section style={{ padding: "80px 24px", background: "#fff" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "8px" }}>
          Customer Reviews
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
          color: "var(--dark)",
          marginBottom: "16px",
        }}>
          What Our Customers Say
        </h2>

        {/* Overall rating */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          <Stars count={5} />
          <span style={{ fontSize: "0.9rem", color: "var(--gray)" }}>
            4.9 out of 5 — based on 200+ reviews
          </span>
        </div>
      </div>

      {/* Reviews grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
        className="reviews-grid"
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            style={{
              background: "var(--light)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {/* Stars */}
            <Stars count={review.rating} />

            {/* Review text */}
            <p style={{
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "#444",
              flex: 1,
            }}>
              "{review.text}"
            </p>

            {/* Product tag */}
            <p style={{
              fontSize: "0.72rem",
              color: "var(--primary)",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}>
              Purchased: {review.product}
            </p>

            {/* Reviewer */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "12px" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "var(--dark)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                flexShrink: 0,
              }}>
                {review.avatar}
              </div>
              <div>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>{review.name}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--gray)", margin: 0 }}>{review.location}</p>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#25D366" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}