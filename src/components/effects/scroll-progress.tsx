"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 shadow-[0_0_22px_rgba(251,191,36,0.55)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
