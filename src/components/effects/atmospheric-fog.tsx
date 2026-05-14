"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * AtmosphericFog — upgraded volumetric atmospheric layers.
 * Includes a vertical god-ray column, denser wisps, and a subtle amber haze beam.
 * Zero external assets — all procedural CSS gradients.
 */
export function AtmosphericFog() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden>
      {/* Deep bottom fog pool */}
      <motion.div
        className="absolute -bottom-[20%] left-[-10%] right-[-10%] h-[65%] bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.95),transparent_70%)] will-change-[opacity]"
        animate={reduce ? undefined : { opacity: [0.65, 0.88, 0.65] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Gradient floor fill */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/70 to-transparent"
        animate={reduce ? undefined : { opacity: [0.85, 1, 0.88] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting fog sheets (Reduced to 1 for performance) */}
      <motion.div
        className="absolute inset-0 opacity-[0.08] will-change-[transform,opacity]"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(148,163,184,0.18) 48%, transparent 62%)",
        }}
        animate={
          reduce
            ? undefined
            : {
                x: ["-8%", "8%", "-4%"],
                opacity: [0.05, 0.12, 0.08],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Amber top haze */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(251,191,36,0.08),transparent_55%)]" />

      {/* Vertical god-ray column (centre) */}
      {!reduce && (
        <motion.div
          className="absolute left-1/2 top-0 h-[70%] w-[2px] -translate-x-1/2 opacity-[0.08] will-change-[opacity,transform]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(251,191,36,0.6) 0%, rgba(251,191,36,0.2) 55%, transparent 100%)",
          }}
          animate={{ opacity: [0.05, 0.14, 0.06], scaleX: [1, 2.5, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      )}

      {/* Smoke wisps */}
      <motion.div
        className="absolute bottom-[15%] left-[20%] h-40 w-[45%] rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent will-change-[transform,opacity]"
        animate={
          reduce
            ? undefined
            : { scaleX: [0.95, 1.1, 1], opacity: [0.04, 0.1, 0.05], x: ["-2%", "4%", "-1%"] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Second wisp — right side */}
      <motion.div
        className="absolute bottom-[25%] right-[10%] h-28 w-[30%] rounded-full bg-gradient-to-l from-transparent via-amber-200/[0.04] to-transparent will-change-[transform,opacity]"
        animate={
          reduce
            ? undefined
            : { scaleX: [1, 1.1, 0.9], opacity: [0.03, 0.08, 0.04], x: ["2%", "-3%", "1%"] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}
