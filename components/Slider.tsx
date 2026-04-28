"use client";

import { useState, useEffect } from "react";

const hoodies = [
  { img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=900&q=80", name: "Ash Grey Oversized" },
  { img: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=900&q=80", name: "Black Forge" },
  { img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&q=80", name: "Mocha Sherpa" },
  { img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&q=80", name: "Archive Graphic" },
  { img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&q=80", name: "Ecru Pigment Dyed" },
  { img: "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?w=900&q=80", name: "Navy Split Logo" },
  { img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=900&q=80", name: "Olive Utility" },
  { img: "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=900&q=80", name: "Two-Tone Panel" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const total = hoodies.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, []);

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  return (
    <section className="hoodie-showcase">
      
      <div className="special-heading">OUR COLLECTION</div>

      <div className="slider-wrapper">
        
        <div className="circle-slider">
          <div className="slide-stack">

            <div className="slide-item prev">
              <img src={hoodies[prevIndex].img} alt={hoodies[prevIndex].name} />
              <div className="slide-tag">{hoodies[prevIndex].name}</div>
            </div>

            <div className="slide-item front">
              <img src={hoodies[current].img} alt={hoodies[current].name} />
              <div className="slide-tag">{hoodies[current].name}</div>
            </div>

            <div className="slide-item next">
              <img src={hoodies[nextIndex].img} alt={hoodies[nextIndex].name} />
              <div className="slide-tag">{hoodies[nextIndex].name}</div>
            </div>

          </div>
        </div>

      </div>

      <div className="slider-indicators">
        {hoodies.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      {/* ✅ UPDATED STYLES */}
      <style jsx>{`
        .hoodie-showcase {
          padding: 100px 4%;
          text-align: center;
        }

        .special-heading {
          font-size: 2.4rem; /* 🔥 increased */
          font-weight: 600;
          margin-bottom: 50px;
          letter-spacing: -0.5px;
        }

        .slider-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle-slider {
          position: relative;
          width: 420px;
          height: 560px;
        }

        .slide-stack {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide-item {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: all 0.4s ease;
          border-radius: 0px;
          overflow: hidden;
        }

        .slide-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-item.front {
          z-index: 3;
          transform: scale(1);
        }

        .slide-item.prev {
          z-index: 2;
          transform: translateX(-60%) scale(0.85);
          opacity: 0.6;
        }

        .slide-item.next {
          z-index: 2;
          transform: translateX(60%) scale(0.85);
          opacity: 0.6;
        }

        .slide-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 6px 10px;
          font-size: 0.75rem;
          border-radius: 6px;
        }

        .slider-indicators {
          margin-top: 25px;
        }

        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          margin: 0 4px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
        }

        .dot.active {
          background: #111;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .circle-slider {
            width: 300px;
            height: 400px;
          }

          .special-heading {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
}