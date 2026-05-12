"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  /** When true, fills a positioned parent (use with aspect-ratio wrapper) */
  fillContainer?: boolean;
};

export function CinematicProjectCover({ src, alt, priority = false, fillContainer = false }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
    stiffness: 240,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 240,
    damping: 26,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || reduce) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      className={
        fillContainer
          ? "group/card absolute inset-0 overflow-hidden"
          : "group/card relative aspect-[16/10] overflow-hidden"
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="relative h-full w-full"
        style={{
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glass reflection */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />

        <motion.div
          initial={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover saturate-[0.85] transition-all duration-700 group-hover/card:scale-[1.06] group-hover/card:saturate-[0.95]"
            loading={priority ? "eager" : "lazy"}
            priority={priority}
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-t from-[#050508] via-[#050508]/45 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-br from-amber-500/[0.07] via-transparent to-violet-950/25 mix-blend-overlay" />

        <motion.div
          className="pointer-events-none absolute inset-0 z-[16] opacity-0 shadow-[inset_0_0_60px_rgba(251,191,36,0.12)] transition-opacity duration-500 group-hover/card:opacity-100"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[17] h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
      </motion.div>
    </div>
  );
}
