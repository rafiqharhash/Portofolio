"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CursorSpotlight() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches || reduce) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  if (!enabled || reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[5] mix-blend-screen"
      aria-hidden
      initial={false}
      animate={{ opacity: 1 }}
    >
      <div
        className="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_62%)] blur-2xl"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="absolute h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.12),transparent_65%)] blur-xl"
        style={{ left: pos.x + 40, top: pos.y - 20 }}
      />
    </motion.div>
  );
}
