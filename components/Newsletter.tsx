"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    
    <section  className="newsletter" style={{ background: "#111111", color: "white" }}>
      <h2>Join the House of Kaleem Sons</h2>
      <p>Get 10% off your first order + exclusive launches</p>
      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button">Subscribe</button>
      </div>
    </section>
  );
}