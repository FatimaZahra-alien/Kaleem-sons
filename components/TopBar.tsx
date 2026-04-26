"use client";

import { motion } from "framer-motion";

const items = [
 
  
  "FREE DELIVERY over $120",
 
];

export default function Ribbon() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-100">
      <span className="text-[13px] md:text-[14px] tracking-[2px] uppercase font-semibold text-white whitespace-nowrap">
        {item}
      </span>
      <span className="text-white/30 text-[10px]">|</span>
    </span>
  ));

  return (
    <div className="bg-black py-3 overflow-hidden border-b border-[#C9A84C]/30">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex items-center gap-120 whitespace-nowrap"
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