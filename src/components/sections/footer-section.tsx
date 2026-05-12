"use client";

import { motion } from "framer-motion";
import { GuardianEmblem } from "@/components/icons/guardian-emblem";
import { site } from "@/lib/site";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <motion.div
          className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Original guardian emblem — replaces Batman logo */}
          <motion.div
            className="relative h-11 w-11 shrink-0"
            animate={{ opacity: [0.45, 0.75, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 blur-xl bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.35),transparent_70%)]" />
            <div className="relative flex h-full w-full items-center justify-center">
              <GuardianEmblem size={40} animate={false} />
            </div>
          </motion.div>
          <div>
            <p className="text-sm font-medium text-white/80">{site.name}</p>
            <p className="mt-2 max-w-md text-sm italic text-white/50">"{site.quote}"</p>
          </div>
        </motion.div>
        <motion.p
          className="text-xs text-white/35"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          © {year} {site.name}. Crafted with Next.js &amp; Tailwind.
        </motion.p>
      </div>
    </footer>
  );
}
