"use client";

import { motion } from "framer-motion";

export default function Ribbon() {
  return (
    <div className="bg-black py-3 overflow-hidden border-b border-[#C9A84C]/30">
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-2"
          animate={{ x: [1500, 0, 0, -1500] }}
          transition={{
            duration: 5,
            times: [0, 0.15, 0.75, 1],
            repeat: Infinity,
            ease: ["easeOut", "linear", "easeIn"],
          }}
        >
          <span className="text-[13px] md:text-[14px] tracking-[2px] uppercase font-semibold text-white whitespace-nowrap">
            FREE DELIVERY over $120
          </span>
        </motion.div>
      </div>
    </div>
  );
}