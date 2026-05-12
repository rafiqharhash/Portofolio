"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Enhanced GridBackground — procedural Gotham-city-inspired dark-tech grid.
 * Includes: subtle SVG cityscape silhouette, animated scan-line pulse, grid fade.
 * Zero external assets.
 */
export function GridBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top amber haze */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.07),transparent)]" />
      {/* Bottom orange haze */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_120%,rgba(249,115,22,0.06),transparent)]" />

      {/* Perspective grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.30]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.30 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.034) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.034) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 10%, transparent 72%)",
        }}
      />

      {/* Horizontal scan-line pulse */}
      {!reduce && (
        <motion.div
          className="absolute inset-x-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(251,191,36,0.12) 30%, rgba(251,191,36,0.22) 50%, rgba(251,191,36,0.12) 70%, transparent)",
          }}
          animate={{ y: ["-10vh", "110vh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
          aria-hidden
        />
      )}

      {/* Procedural SVG cityscape silhouette */}
      <div
        className="absolute inset-x-0 bottom-0 h-[32vh] opacity-[0.18]"
        aria-hidden
      >
        <svg
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          fill="currentColor"
        >
          {/* Dark city fill */}
          <path
            d="
              M0,260 L0,200
              L60,200 L60,160 L80,160 L80,140 L100,140 L100,160 L120,160 L120,200
              L160,200 L160,130 L175,130 L175,110 L185,110 L185,90 L195,90 L195,110 L205,110 L205,130 L220,130 L220,200
              L260,200 L260,170 L275,170 L275,155 L285,155 L285,145 L295,145 L295,155 L305,155 L305,170 L320,170 L320,200
              L350,200 L350,115 L360,115 L360,95 L368,95 L368,80 L376,80 L376,95 L384,95 L384,115 L394,115 L394,200
              L420,200 L420,175 L435,175 L435,160 L450,160 L450,175 L465,175 L465,200
              L500,200 L500,145 L510,145 L510,125 L520,125 L520,105 L530,105 L530,125 L540,125 L540,145 L550,145 L550,200
              L580,200 L580,180 L590,180 L590,165 L600,165 L600,180 L610,180 L610,200
              L640,200 L640,120 L652,120 L652,100 L662,100 L662,85 L672,85 L672,100 L682,100 L682,120 L694,120 L694,200
              L720,200 L720,170 L730,170 L730,150 L740,150 L740,170 L750,170 L750,200
              L780,200 L780,130 L790,130 L790,110 L800,110 L800,95 L810,95 L810,110 L820,110 L820,130 L830,130 L830,200
              L860,200 L860,175 L870,175 L870,160 L880,160 L880,175 L890,175 L890,200
              L920,200 L920,140 L930,140 L930,120 L940,120 L940,105 L950,105 L950,120 L960,120 L960,140 L970,140 L970,200
              L1000,200 L1000,180 L1010,180 L1010,165 L1020,165 L1020,180 L1030,180 L1030,200
              L1060,200 L1060,125 L1070,125 L1070,105 L1082,105 L1082,88 L1092,88 L1092,105 L1104,105 L1104,125 L1114,125 L1114,200
              L1140,200 L1140,165 L1150,165 L1150,150 L1160,150 L1160,165 L1170,165 L1170,200
              L1200,200 L1200,135 L1212,135 L1212,115 L1222,115 L1222,98 L1232,98 L1232,115 L1242,115 L1242,135 L1254,135 L1254,200
              L1280,200 L1280,175 L1292,175 L1292,158 L1302,158 L1302,175 L1312,175 L1312,200
              L1340,200 L1340,145 L1350,145 L1350,128 L1360,128 L1360,112 L1370,112 L1370,128 L1380,128 L1380,145 L1390,145 L1390,200
              L1440,200 L1440,260 Z
            "
            fill="rgba(0,0,0,0.95)"
          />
          {/* Window lights — tiny bright squares */}
          {[
            [90, 152], [170, 145], [190, 102], [365, 108], [525, 135], [527, 118],
            [658, 108], [665, 92], [798, 120], [812, 98], [935, 128], [948, 108],
            [1074, 118], [1086, 100], [1218, 120], [1228, 102], [1355, 138], [1362, 120],
            [185, 120], [375, 88], [672, 88], [810, 100], [940, 112], [1082, 92], [1222, 102],
          ].map(([x, y], i) => (
            <motion.rect
              key={i}
              x={x - 2}
              y={y - 3}
              width={4}
              height={5}
              fill={i % 3 === 0 ? "rgba(251,191,36,0.65)" : "rgba(251,191,36,0.45)"}
              animate={reduce ? undefined : { opacity: [0.4, 1, 0.5, 0.9, 0.4] }}
              transition={{
                duration: 3 + (i % 5) * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 7) * 0.3,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Dark-to-transparent base fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/45 to-[#050508]" />
    </div>
  );
}
