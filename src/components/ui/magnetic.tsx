"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength = 0.28 }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 320, damping: 22 });
  const sy = useSpring(y, { stiffness: 320, damping: 22 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || reduce) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left - r.width / 2) * strength;
    const py = (e.clientY - r.top - r.height / 2) * strength;
    x.set(px);
    y.set(py);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: reduce ? 0 : sx, y: reduce ? 0 : sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}
