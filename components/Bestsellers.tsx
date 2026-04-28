'use client';

import Image from 'next/image';

const products = [
  { 
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80", 
    name: "Oversized Pigment Hoodie", 
    price: "£72",
    badge: "Best Seller" 
  },
  { 
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80", 
    name: "Archive Logo Tee", 
    price: "£45" 
  },
  { 
    img: "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600&q=80", 
    name: "Heavyweight Red shoes", 
    price: "£68",
    badge: "Trending" 
  },
  { 
    img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80", 
    name: "Vintage Pocket Tee", 
    price: "£42" 
  },
];

export default function Bestsellers() {
  return (
    <>
      <style>{`
        .bs-section {
          padding: 64px 24px;
          background: #ffffff;
        }
        .bs-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3.5vw, 3.2rem);
          letter-spacing: -0.01em;
          line-height: 1.2;
          text-align: center;
          margin-bottom: 32px;
          font-weight: 400;
        }
        .bs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .bs-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 14px -6px rgba(0,0,0,0.08);
          padding-bottom: 16px;
          text-align: center;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .bs-img-wrap {
          position: relative;
          aspect-ratio: 3 / 4;
          width: 100%;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
        }
        .bs-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #111;
          color: #fff;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
          z-index: 1;
        }
        .bs-info {
          margin-top: 12px;
          padding: 0 16px;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 0.88rem;
          line-height: 1.4;
        }
        .bs-price {
          font-weight: 600;
          color: var(--primary);
          font-size: 0.95rem;
          margin-top: 8px;
          display: block;
        }
        @media (max-width: 900px) {
          .bs-section { padding: 48px 16px; }
          .bs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 480px) {
          .bs-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .bs-info { font-size: 0.78rem; padding: 0 8px; }
          .bs-price { font-size: 0.85rem; }
        }
        @media (min-width: 1000px) {
          .bs-section { padding: 80px 24px; }
          .bs-heading { margin-bottom: 48px; }
          .bs-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }
      `}</style>

      <section className="bs-section">
        <h2 className="bs-heading">Our Bestsellers</h2>

        <div className="bs-grid">
          {products.map((p) => (
            <div key={p.name} className="bs-card">
              <div className="bs-img-wrap">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {p.badge && (
                  <div className="bs-badge">{p.badge}</div>
                )}
              </div>

              <div className="bs-info">
                <div>{p.name}</div>
                <div className="bs-price">{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}