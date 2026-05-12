"use client";

import { motion } from "framer-motion";
import { GuardianEmblem } from "@/components/icons/guardian-emblem";

/** Cinematic section divider with original guardian emblem — zero IP assets */
export function SectionDivider() {
  return (
    <div className="relative py-10 sm:py-12" aria-hidden>
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-4 px-6">
        {/* Left line */}
        <motion.div
          className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-transparent via-amber-500/35 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 1 }}
        />

        {/* Centre emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Pulsing glow behind emblem */}
          <motion.div
            className="absolute inset-0 blur-xl"
            animate={{ opacity: [0.22, 0.52, 0.26], scale: [1, 1.25, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(251,191,36,0.35), transparent 65%)",
            }}
          />
          <div className="relative opacity-50">
            <GuardianEmblem size={36} animate={false} />
          </div>
        </motion.div>

        {/* Right line */}
        <motion.div
          className="h-px flex-1 max-w-[180px] bg-gradient-to-l from-transparent via-amber-500/35 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
        />
      </div>
    </div>
  );
}
