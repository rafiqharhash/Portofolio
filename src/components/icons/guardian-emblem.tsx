"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  size?: number;
  className?: string;
  /** If true, the emblem pulses with an animated glow */
  animate?: boolean;
  /** Glow color override */
  glowColor?: string;
};

/**
 * GuardianEmblem — an original abstract dark-tech vigilante symbol.
 * Two swept geometric wings + central spine blade.
 * Fully procedural SVG, zero external assets.
 */
export function GuardianEmblem({
  size = 64,
  className = "",
  animate: doAnimate = false,
  glowColor = "rgba(251,191,36,0.55)",
}: Props) {
  const reduce = useReducedMotion();
  const shouldAnimate = doAnimate && !reduce;

  const Wrap = shouldAnimate ? motion.div : "div";
  const wrapProps = shouldAnimate
    ? {
        animate: { opacity: [0.8, 1, 0.82], scale: [1, 1.04, 1] },
        transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
      }
    : {};

  return (
    <Wrap
      className={`relative inline-flex shrink-0 ${className}`}
      style={{ width: size, height: size }}
      {...(wrapProps as object)}
    >
      {/* Procedural glow halo */}
      {doAnimate && (
        <span
          className="pointer-events-none absolute inset-0 rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle at 50% 45%, ${glowColor}, transparent 68%)`,
          }}
          aria-hidden
        />
      )}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        aria-hidden
      >
        <defs>
          <linearGradient id="ge-wing-l" x1="5" y1="78" x2="50" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="ge-wing-r" x1="95" y1="78" x2="50" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="ge-spine" x1="50" y1="8" x2="50" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="55%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Left wing */}
        <path
          d="M50,30 L50,54 L5,78 L9,68 L44,51 Z"
          fill="url(#ge-wing-l)"
        />
        {/* Left wing lower shadow accent */}
        <path
          d="M50,54 L5,78 L8,84 L50,59 Z"
          fill="#fbbf24"
          fillOpacity="0.28"
        />

        {/* Right wing */}
        <path
          d="M50,30 L50,54 L95,78 L91,68 L56,51 Z"
          fill="url(#ge-wing-r)"
        />
        {/* Right wing lower shadow accent */}
        <path
          d="M50,54 L95,78 L92,84 L50,59 Z"
          fill="#fbbf24"
          fillOpacity="0.28"
        />

        {/* Central spine blade */}
        <path
          d="M50,14 L57,37 L50,61 L43,37 Z"
          fill="url(#ge-spine)"
        />

        {/* Apex apex spark */}
        <path
          d="M50,7 L54,17 L50,25 L46,17 Z"
          fill="#fef3c7"
          fillOpacity="0.92"
        />

        {/* Inner wing highlight lines */}
        <line
          x1="50" y1="40" x2="22" y2="62"
          stroke="#fde68a"
          strokeWidth="0.6"
          strokeOpacity="0.45"
        />
        <line
          x1="50" y1="40" x2="78" y2="62"
          stroke="#fde68a"
          strokeWidth="0.6"
          strokeOpacity="0.45"
        />
      </svg>
    </Wrap>
  );
}
