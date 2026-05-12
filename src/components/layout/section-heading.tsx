"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <motion.p
        className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/85"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-white md:text-4xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-4 text-sm leading-relaxed text-white/55 md:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
