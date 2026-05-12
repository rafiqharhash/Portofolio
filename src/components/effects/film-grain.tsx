"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * FilmGrain — canvas-based procedural film grain overlay.
 * Runs at a low frame rate (12 fps) to stay performant.
 */
export function FilmGrain({ opacity = 0.045 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const lastRef = useRef<number>(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GRAIN_FPS = 14;
    const FRAME_MS = 1000 / GRAIN_FPS;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw(ts: number) {
      if (!canvas || !ctx) return;
      rafRef.current = requestAnimationFrame(draw);
      if (ts - lastRef.current < FRAME_MS) return;
      lastRef.current = ts;

      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = (Math.random() * 28) | 0; // very light per-pixel
      }
      ctx.putImageData(imageData, 0, 0);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[18] h-full w-full"
      style={{ opacity, mixBlendMode: "overlay" }}
      aria-hidden
    />
  );
}

/** Subtle animated ember/spark particles inside the portrait frame */
export function PortraitEmbers({ count = 6 }: { count?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[17] overflow-hidden" aria-hidden>
      {Array.from({ length: count }, (_, i) => {
        const left = 15 + (i * 71 + 13) % 70;
        const startY = 65 + (i * 37) % 30;
        const delay = (i * 0.55) % 3;
        const dur = 4 + (i % 3) * 1.2;
        const size = 1.5 + (i % 3) * 0.8;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-amber-300"
            style={{
              left: `${left}%`,
              bottom: `${startY - 65}%`,
              width: size,
              height: size,
              boxShadow: `0 0 ${size * 4}px rgba(251,191,36,0.8)`,
            }}
            animate={{
              y: [0, -(60 + i * 12)],
              x: [0, (i % 2 === 0 ? 1 : -1) * (4 + i * 2)],
              opacity: [0, 0.75, 0.5, 0],
              scale: [1, 0.8, 0.4, 0],
            }}
            transition={{
              duration: dur,
              repeat: Infinity,
              delay,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}
