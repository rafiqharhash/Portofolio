"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

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
    const base: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: `${(i * 37) % 100}%`,
      y: `${(i * 23) % 100}%`,
      size: 2 + (i % 4),
      delay: (i % 7) * 0.4,
      duration: 10 + (i % 5) * 2,
      tone: i % 3 === 0 ? "amber" : "cyan",
    }));
    return base;
  }, []);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0); opacity: 0.1; }
          50% { transform: translateY(-28px); opacity: 0.45; }
        }
      `}</style>
      {particles.map((p) => (
        <span
          key={p.id}
          className={
            p.tone === "amber"
              ? "absolute rounded-full bg-amber-400/25 will-change-[transform,opacity]"
              : "absolute rounded-full bg-cyan-400/20 will-change-[transform,opacity]"
          }
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            animation: `float-particle ${p.duration}s ease-in-out infinite ${p.delay}s`
          }}
        />
      ))}
    </div>
  );
}
