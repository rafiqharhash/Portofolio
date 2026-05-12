"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconX,
} from "@/components/icons/brand-icons";

const social = [
  { href: site.social.facebook, Icon: IconFacebook, label: "Facebook" },
  { href: site.social.instagram, Icon: IconInstagram, label: "Instagram" },
  { href: site.social.linkedin, Icon: IconLinkedIn, label: "LinkedIn" },
  { href: site.social.twitter, Icon: IconX, label: "X (Twitter)" },
];

function useTypewriter(text: string, active: boolean, ms = 28) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!active) return;
    setOut("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, ms);
    return () => window.clearInterval(id);
  }, [text, active, ms]);
  return out;
}

export function HeroSection() {
  const typed = useTypewriter(site.tagline, true, 22);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/25 via-sky-500/10 to-violet-600/25 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70 backdrop-blur-md"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" aria-hidden />
          First-year CSE · Building in public
        </motion.div>

        <motion.h1
          className="font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
        >
          <span className="block bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
            {site.name}
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-lg text-cyan-100/80 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          {site.title}
        </motion.p>

        <motion.p
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
        >
          <span className="text-white/85">{typed}</span>
          <span className="ml-0.5 inline-block h-5 w-px translate-y-0.5 bg-cyan-300/80 animate-pulse" />
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.26 }}
        >
          <Button size="lg" asChild>
            <a href="#projects" className="group">
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-white/35">
            Connect
          </span>
          <div className="flex flex-wrap gap-2">
            {social.map((s, i) => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/35 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.55)]"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                <s.Icon className="h-4 w-4" />
              </motion.a>
            ))}
            <motion.a
              href={`mailto:${site.email}`}
              className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-xs font-medium text-white/75 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/35 hover:text-white"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <Mail className="h-4 w-4 text-cyan-300/90" />
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-hidden
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            className="mt-1 h-2 w-1 rounded-full bg-cyan-300/80"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
