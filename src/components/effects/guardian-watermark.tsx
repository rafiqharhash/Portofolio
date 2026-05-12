"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * GuardianWatermark — ambient background marks.
 * Uses two procedural SVG guardian emblems as subtle ambient marks.
 * Zero external assets.
 */
export function GuardianWatermark() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-[3] overflow-hidden" aria-hidden>
      {/* Large watermark — bottom right */}
      <motion.div
        className="absolute -right-[8%] bottom-[5%] w-[min(48vw,380px)] opacity-[0.04]"
        animate={reduce ? undefined : { rotate: [0, 3, -2, 0], opacity: [0.03, 0.052, 0.036] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
          <path d="M50,30 L50,54 L5,78 L9,68 L44,51 Z" fill="white" />
          <path d="M50,54 L5,78 L8,84 L50,59 Z" fill="white" fillOpacity="0.3" />
          <path d="M50,30 L50,54 L95,78 L91,68 L56,51 Z" fill="white" />
          <path d="M50,54 L95,78 L92,84 L50,59 Z" fill="white" fillOpacity="0.3" />
          <path d="M50,14 L57,37 L50,61 L43,37 Z" fill="white" />
          <path d="M50,7 L54,17 L50,25 L46,17 Z" fill="white" fillOpacity="0.9" />
        </svg>
      </motion.div>

      {/* Small watermark — upper left */}
      <motion.div
        className="absolute left-[4%] top-[22%] w-[min(22vw,160px)] opacity-[0.025]"
        animate={reduce ? undefined : { rotate: [0, -5, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
          <path d="M50,30 L50,54 L5,78 L9,68 L44,51 Z" fill="white" />
          <path d="M50,30 L50,54 L95,78 L91,68 L56,51 Z" fill="white" />
          <path d="M50,14 L57,37 L50,61 L43,37 Z" fill="white" />
          <path d="M50,7 L54,17 L50,25 L46,17 Z" fill="white" />
        </svg>
      </motion.div>
    </div>
  );
}
