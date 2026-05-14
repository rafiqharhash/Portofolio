"use client";

import { motion } from "framer-motion";
import { Rocket, Search, Target, Wrench, Zap } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";

const steps = [
  {
    title: "Programming Fundamentals",
    body: "Building a strong foundation in logic, algorithms, and structured thinking through consistent practice and problem solving.",
    icon: Zap,
  },
  {
    title: "Exploring Modern Web Development",
    body: "Learning how scalable web applications are designed—from responsive interfaces to interactive user experiences.",
    icon: Search,
  },
  {
    title: "Creating Real-World Projects",
    body: "Turning ideas into functional products while improving development workflow, UI polish, and technical execution.",
    icon: Wrench,
  },
  {
    title: "Competitive Problem Solving",
    body: "Strengthening analytical thinking through algorithms, edge cases, optimization, and coding challenges on platforms like Codeforces and LeetCode.",
    icon: Target,
  },
];

export function ExperienceSection() {
  return (
    <section id="journey" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience shaped by curiosity"
          subtitle="Every stage built the foundation for the next—driven by consistency, experimentation, and growth."
        />

        <div className="relative">
          <div className="pointer-events-none absolute left-[18px] top-3 hidden h-[calc(100%-24px)] w-px bg-gradient-to-b from-amber-400/50 via-white/15 to-orange-500/40 md:block" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.article
                key={s.title}
                className="relative md:pl-14"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <span className="absolute left-0 top-6 hidden h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-amber-200 shadow-[0_0_24px_-6px_rgba(251,191,36,0.55)] md:flex">
                  <s.icon className="h-4 w-4" />
                </span>
                <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-[1px]">
                  <div className="rounded-[22px] bg-black/45 p-6 backdrop-blur-xl md:p-8">
                    <div className="flex items-start gap-4 md:gap-6">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-amber-200 md:hidden">
                        <s.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                          Chapter {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">{s.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">{s.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
