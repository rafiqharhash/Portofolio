"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function LoadingScreen() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), reduce ? 0 : 1400);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030306]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="relative h-16 w-16"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45 }}
            >
              <motion.span
                className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-1 rounded-xl bg-gradient-to-br from-cyan-400/30 to-violet-500/20"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <div className="text-center">
              <p className="text-sm font-medium tracking-[0.35em] text-white/70">
                RAFIQ HARHASH
              </p>
              <p className="mt-2 text-xs text-white/40">Preparing experience…</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
