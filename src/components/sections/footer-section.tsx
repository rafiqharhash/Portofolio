"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-white/80">{site.name}</p>
          <p className="mt-2 max-w-md text-sm italic text-white/50">“{site.quote}”</p>
        </motion.div>
        <motion.p
          className="text-xs text-white/35"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          © {year} {site.name}. Crafted with Next.js & Tailwind.
        </motion.p>
      </div>
    </footer>
  );
}
