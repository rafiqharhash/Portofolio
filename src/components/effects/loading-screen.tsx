"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GuardianEmblem } from "@/components/icons/guardian-emblem";

export function LoadingScreen() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), reduce ? 0 : 2200);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020203]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          {/* Ambient radial haze */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(251,191,36,0.13),transparent_55%)]" />

          {/* Slow vertical scanline sweep */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(251,191,36,0.03) 48%, transparent 100%)",
            }}
            animate={reduce ? undefined : { y: ["-100%", "100%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            aria-hidden
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Emblem ring assembly */}
            <motion.div
              className="relative flex h-28 w-28 items-center justify-center"
              initial={{ scale: 0.8, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Pulsing glow base */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.38),transparent_68%)] blur-2xl"
                animate={reduce ? undefined : { opacity: [0.4, 0.85, 0.45], scale: [0.92, 1.12, 0.95] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Rotating outer ring */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid transparent",
                  background:
                    "linear-gradient(#020203,#020203) padding-box, conic-gradient(from 0deg, rgba(251,191,36,0.6), transparent 40%, rgba(251,191,36,0.2) 70%, transparent) border-box",
                }}
                animate={reduce ? undefined : { rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Counter-rotating inner ring */}
              <motion.span
                className="absolute inset-[8px] rounded-full border border-amber-500/20"
                animate={reduce ? undefined : { rotate: [0, -360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* The emblem itself */}
              <motion.div
                className="relative z-10"
                animate={reduce ? undefined : { opacity: [0.82, 1, 0.85] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <GuardianEmblem size={68} animate={false} />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-sm font-medium tracking-[0.38em] text-amber-100/85">
                RAFIQ HARHASH
              </p>
              <motion.p
                className="mt-3 text-xs text-white/40"
                animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                Initializing the system…
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
