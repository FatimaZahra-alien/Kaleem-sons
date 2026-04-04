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
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

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
        {/* Prev button */}
        <div className="nav-icon" onClick={prev}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        {/* Slides */}
        <div className="circle-slider">
          <div className="slide-stack">
            {/* Prev slide */}
            <div className="slide-item prev">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={hoodies[prevIndex].img} alt={hoodies[prevIndex].name} />
              <div className="slide-tag">{hoodies[prevIndex].name}</div>
            </div>

            {/* Front slide */}
            <div className="slide-item front">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={hoodies[current].img} alt={hoodies[current].name} />
              <div className="slide-tag">{hoodies[current].name}</div>
            </div>

            {/* Next slide */}
            <div className="slide-item next">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={hoodies[nextIndex].img} alt={hoodies[nextIndex].name} />
              <div className="slide-tag">{hoodies[nextIndex].name}</div>
            </div>
          </div>
        </div>

        {/* Next button */}
        <div className="nav-icon" onClick={next}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>

      {/* Dots - hidden on mobile via CSS */}
      <div className="slider-indicators">
        {hoodies.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}