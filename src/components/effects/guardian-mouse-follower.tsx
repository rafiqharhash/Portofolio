"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * GuardianMouseFollower — trails the cursor with an original symbol.
 * A tiny inline SVG guardian emblem that trails the cursor.
 * Zero external assets.
 */
export function GuardianMouseFollower() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches || reduce) return;

    let reqId: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(reqId);
      reqId = requestAnimationFrame(() => {
        x.set(e.clientX - 16);
        y.set(e.clientY - 16);
      });
    };

    const onPointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onPointerOver, { passive: true });

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onPointerOver);
    };
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 mix-blend-screen will-change-transform"
      style={{ x, y }}
      animate={{
        scale: hovered ? 1.4 : 1,
        opacity: hovered ? 1 : 0.6,
      }}
      transition={{ duration: 0.2 }}
      aria-hidden
    >
      <motion.div
        animate={{ opacity: [0.15, 0.30, 0.18], rotate: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-8 w-8"
      >
        {/* Tiny glow */}
        <span
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 45%, rgba(251,191,36,0.6), transparent 70%)",
          }}
        />
        {/* Inline SVG guardian emblem */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <defs>
            <linearGradient id="mc-wing" x1="0" y1="78" x2="50" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fde68a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M50,30 L50,54 L5,78 L9,68 L44,51 Z" fill="url(#mc-wing)" />
          <path d="M50,54 L5,78 L8,84 L50,59 Z" fill="#fbbf24" fillOpacity="0.3" />
          <path d="M50,30 L50,54 L95,78 L91,68 L56,51 Z" fill="url(#mc-wing)" />
          <path d="M50,54 L95,78 L92,84 L50,59 Z" fill="#fbbf24" fillOpacity="0.3" />
          <path d="M50,14 L57,37 L50,61 L43,37 Z" fill="#fef3c7" fillOpacity="1" />
          <path d="M50,7 L54,17 L50,25 L46,17 Z" fill="#fef3c7" fillOpacity="0.9" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
