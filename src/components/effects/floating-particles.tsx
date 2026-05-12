"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Particle = {
  id: number;
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
  tone: "cyan" | "amber";
};

export function FloatingParticles() {
  const reduce = useReducedMotion();
  const particles = useMemo<Particle[]>(() => {
    const base: Particle[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: `${(i * 37) % 100}%`,
      y: `${(i * 23) % 100}%`,
      size: 2 + (i % 4),
      delay: (i % 7) * 0.4,
      duration: 10 + (i % 5) * 2,
      tone: i % 3 === 0 ? "amber" : "cyan",
    }));
    const amber: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: 100 + i,
      x: `${(i * 41 + 11) % 100}%`,
      y: `${(i * 17 + 7) % 100}%`,
      size: 2 + (i % 3),
      delay: (i % 5) * 0.5,
      duration: 12 + (i % 4) * 2,
      tone: "amber",
    }));
    return [...base, ...amber];
  }, []);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={
            p.tone === "amber"
              ? "absolute rounded-full bg-amber-400/30 shadow-[0_0_14px_rgba(251,191,36,0.35)]"
              : "absolute rounded-full bg-cyan-400/25 shadow-[0_0_12px_rgba(34,211,238,0.35)]"
          }
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -28, 0],
            opacity: [0.12, p.tone === "amber" ? 0.48 : 0.52, 0.14],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
