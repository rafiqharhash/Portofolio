"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * CursorSpotlight — upgraded with mouse-reactive dual glow + subtle volumetric cone.
 * Zero external assets.
 */
export function CursorSpotlight() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const rafRef = useRef<number>(0);
  const pendingRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches || reduce) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      pendingRef.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: pendingRef.current.x, y: pendingRef.current.y });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reduce]);

  if (!enabled || reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[6] mix-blend-screen"
      aria-hidden
      initial={false}
      animate={{ opacity: 1 }}
    >
      {/* Large cool halo */}
      <div
        className="absolute h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.10),transparent_62%)] blur-2xl will-change-transform"
        style={{ left: pos.x, top: pos.y }}
      />
      {/* Warm amber core */}
      <div
        className="absolute h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.16),transparent_60%)] blur-xl will-change-transform"
        style={{ left: pos.x + 20, top: pos.y - 10 }}
      />
      {/* Violet ambient offset */}
      <div
        className="absolute h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.08),transparent_65%)] blur-xl will-change-transform"
        style={{ left: pos.x + 38, top: pos.y - 18 }}
      />
      {/* Tight bright center point */}
      <div
        className="absolute h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.22),transparent_60%)] blur-md will-change-transform"
        style={{ left: pos.x, top: pos.y }}
      />
    </motion.div>
  );
}
