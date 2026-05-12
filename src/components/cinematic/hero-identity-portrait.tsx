"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { IMAGES } from "@/lib/images";
import { GuardianEmblem } from "@/components/icons/guardian-emblem";
import { FilmGrain, PortraitEmbers } from "@/components/effects/film-grain";

export function HeroIdentityPortrait() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [shinePos, setShinePos] = useState({ x: 50, y: 35 });
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), {
    stiffness: 260,
    damping: 24,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!wrapRef.current || reduce) return;
    const r = wrapRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
    setShinePos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
    setShinePos({ x: 50, y: 35 });
    setHovered(false);
  }

  return (
    <div
      ref={wrapRef}
      className="group relative mx-auto w-full max-w-[min(100%,380px)] perspective-[1400px] lg:max-w-[420px]"
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
    >
      {/* ── Ambient atmospheric glow ── */}
      <motion.div
        className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(251,191,36,0.30),rgba(180,83,9,0.08)_35%,transparent_68%)] blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.45, 0.76, 0.45],
                scale: [1, 1.06, 1],
              }
        }
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Procedural cape silhouette (CSS only) ── */}
      {/* Centre spread */}
      <div
        className="pointer-events-none absolute -bottom-6 left-1/2 h-[38%] w-[140%] -translate-x-1/2 rounded-[100%] bg-black/90 blur-2xl"
        style={{ maskImage: "linear-gradient(to top, black, transparent)" }}
        aria-hidden
      />
      {/* Left wing drape */}
      <motion.div
        className="pointer-events-none absolute -bottom-10 left-[12%] h-28 w-[48%] rounded-full bg-black/65 blur-xl"
        animate={
          reduce
            ? undefined
            : { rotate: [-8, -11, -7], scaleY: [1, 1.08, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      {/* Right wing drape */}
      <motion.div
        className="pointer-events-none absolute -bottom-10 right-[12%] h-28 w-[48%] rounded-full bg-black/65 blur-xl"
        animate={
          reduce
            ? undefined
            : { rotate: [8, 11, 7], scaleY: [1, 1.08, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        aria-hidden
      />

      {/* ── Slow float + 3D tilt ── */}
      <motion.div
        className="relative"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* ── Animated conic rim light ── */}
        <motion.div
          className="pointer-events-none absolute -inset-[3px] rounded-[28px] opacity-90"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(251,191,36,0.60), transparent 28%, rgba(251,191,36,0.18) 52%, transparent 72%, rgba(251,191,36,0.50))",
          }}
          animate={reduce ? undefined : { rotate: [0, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          aria-hidden
        />

        {/* ── Light sweep (volumetric-style) ── */}
        <motion.div
          className="pointer-events-none absolute -inset-[2px] rounded-[28px] z-[20]"
          style={{
            background:
              "linear-gradient(110deg, transparent 20%, rgba(251,191,36,0.08) 48%, transparent 72%)",
            mixBlendMode: "screen",
          }}
          animate={reduce ? undefined : { x: ["-60%", "60%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
          aria-hidden
        />

        {/* ── Main card ── */}
        <div className="relative overflow-hidden rounded-[26px] border border-amber-500/25 bg-[#070709] shadow-[0_0_0_1px_rgba(251,191,36,0.12),0_40px_120px_-40px_rgba(0,0,0,0.95),0_0_80px_-20px_rgba(251,191,36,0.28)]">
          <div className="relative aspect-[3/4] w-full overflow-hidden">

            {/* ── Interactive shine layer ── */}
            <motion.div
              className="absolute inset-0 z-10 transition-[background] duration-300"
              initial={false}
              style={{
                background: `radial-gradient(520px circle at ${shinePos.x}% ${shinePos.y}%, rgba(251,191,36,0.32), transparent 55%)`,
                mixBlendMode: "soft-light",
              }}
              aria-hidden
            />

            {/* ── Personal portrait ── */}
            <motion.div
              initial={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative h-full w-full overflow-hidden"
            >
              <motion.div
                className="relative h-full w-full"
                whileHover={{ scale: reduce ? 1 : 1.04 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <Image
                  src={IMAGES.formalPortrait}
                  alt="Rafiq Harhash — formal portrait"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 85vw"
                  className="object-cover object-[center_18%] saturate-[0.88] contrast-[1.08] brightness-[0.96] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </motion.div>
            </motion.div>

            {/* ── Cinematic colour grades ── */}
            {/* Deep dark vignette from bottom */}
            <div
              className="pointer-events-none absolute inset-0 z-[11] bg-gradient-to-t from-[#030306] via-[#030306]/60 to-transparent"
              aria-hidden
            />
            {/* Amber/violet overlay */}
            <div
              className="pointer-events-none absolute inset-0 z-[11] bg-gradient-to-br from-amber-500/18 via-transparent to-violet-950/30 mix-blend-overlay"
              aria-hidden
            />
            {/* Radial shadow base */}
            <div
              className="pointer-events-none absolute inset-0 z-[11] bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(0,0,0,0.88),transparent)]"
              aria-hidden
            />
            {/* Subtle blue-teal shadow top-left */}
            <div
              className="pointer-events-none absolute inset-0 z-[11] bg-[radial-gradient(ellipse_60%_45%_at_0%_0%,rgba(15,23,42,0.55),transparent)]"
              aria-hidden
            />

            {/* ── Procedural fog / smoke wisps ── */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-[12] mix-blend-soft-light"
              animate={
                reduce
                  ? undefined
                  : { x: ["-8%", "8%", "-5%"], opacity: [0.25, 0.44, 0.30] }
              }
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.07) 45%, transparent 70%)",
              }}
              aria-hidden
            />
            <motion.div
              className="pointer-events-none absolute inset-0 z-[12] opacity-30 mix-blend-screen"
              animate={
                reduce
                  ? undefined
                  : { y: ["6%", "-4%", "5%"], opacity: [0.15, 0.30, 0.18] }
              }
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{
                background:
                  "radial-gradient(ellipse 80% 50% at 30% 90%, rgba(148,163,184,0.38), transparent 55%)",
              }}
              aria-hidden
            />
            {/* Dense bottom fog */}
            <motion.div
              className="pointer-events-none absolute bottom-0 left-0 right-0 z-[13] h-[28%]"
              animate={
                reduce
                  ? undefined
                  : { opacity: [0.7, 0.95, 0.72] }
              }
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "linear-gradient(to top, rgba(3,3,6,0.92) 0%, rgba(3,3,6,0.55) 55%, transparent 100%)",
              }}
              aria-hidden
            />

            {/* ── Glowing eye effect (subtle rim highlights around upper face area) ── */}
            {hovered && !reduce && (
              <motion.div
                className="pointer-events-none absolute z-[14]"
                style={{
                  top: "18%",
                  left: "28%",
                  right: "28%",
                  height: "6%",
                  background:
                    "radial-gradient(ellipse at center, rgba(251,191,36,0.22), transparent 70%)",
                  filter: "blur(6px)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.7] }}
                transition={{ duration: 0.6 }}
                aria-hidden
              />
            )}

            {/* ── Ember particles ── */}
            <PortraitEmbers count={7} />

            {/* ── Film grain ── */}
            <FilmGrain opacity={0.04} />

            {/* ── Bottom accent line ── */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 z-[15] h-[2px] bg-gradient-to-r from-transparent via-amber-400/90 to-transparent shadow-[0_0_24px_rgba(251,191,36,0.75)]"
              aria-hidden
            />

            {/* ── Identity label ── */}
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-[16]">
              <p className="font-[family-name:var(--font-syne)] text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-200/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Identity
              </p>
              <p className="mt-1 text-xs text-white/55 drop-shadow-md">
                Engineer · solver · night-shift builder
              </p>
            </div>
          </div>

          {/* ── Inner glow on hover ── */}
          <div className="pointer-events-none absolute inset-0 z-[17] opacity-0 shadow-[inset_0_0_80px_rgba(251,191,36,0.14)] transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* ── Guardian emblem badge (bottom-right of card) ── */}
        <motion.div
          className="absolute -bottom-4 -right-4 z-[20] flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/30 bg-black/80 backdrop-blur-sm shadow-[0_0_24px_rgba(251,191,36,0.3)]"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <GuardianEmblem size={28} animate={!reduce} />
        </motion.div>
      </motion.div>

      {/* ── Ground mist ── */}
      <div
        className="pointer-events-none absolute -bottom-12 left-1/2 h-16 w-[110%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.12),transparent_70%)] blur-2xl"
        aria-hidden
      />
    </div>
  );
}
