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
    <section className="bestsellers-section">
      <h2 className="bestsellers-heading">Our Bestsellers</h2>
      
      <div className="bestseller-grid">
        {products.map((p) => (
          <div key={p.name} className="product-card">
            <div className="image-container">
              <Image
                src={p.img}
                alt={p.name}
                width={600}
                height={600}
                className="product-image"
              />
              
              {/* Badge */}
              {p.badge && (
                <div className="product-badge">
                  {p.badge}
                </div>
              )}
            </div>
            
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <div className="price">{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}