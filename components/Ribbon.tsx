"use client";

import { motion } from "framer-motion";

const items = [
  "KALEEM & SONS",
  "HOODIES & SPORTSWEAR",
  "PAKISTANI LUXURY",
  "NEW ARRIVALS",
  "PREMIUM QUALITY",
  "SS 2026",
];

export default function Ribbon() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8">
      <span className="text-[15px] md:text-[16px] tracking-[4px] uppercase font-bold text-white whitespace-nowrap">
        {item}
      </span>
      <span className="text-[#C9A84C] text-[20px] leading-none">◆</span>
    </span>
  ));

  return (
    <div className="bg-black py-5 overflow-hidden border-b border-[#C9A84C]/30">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {content}
          {content}
          {content}
          {content}
          {content}
        </motion.div>
      </div>
    </div>
  );
}