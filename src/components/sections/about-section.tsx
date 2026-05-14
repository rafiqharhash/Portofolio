"use client";

import { motion } from "framer-motion";
import { BookOpen, Cpu, Palette, Target } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  {
    year: "2025",
    title: "University Foundations",
    body: "Establishing core computer science principles through structured programming, logical thinking, and disciplined problem-solving habits.",
  },
  {
    year: "Now",
    title: "Hands-on Building",
    body: "Applying knowledge through real projects—translating concepts into interfaces, improving through iteration, and focusing on shipping functional work.",
  },
  {
    year: "Next",
    title: "Depth & Breadth",
    body: "Strengthening algorithmic thinking while expanding into modern web development, scalable systems, and refined UI/UX design principles.",
  },
];

const chips = [
  "Java",
  "C++",
  "Problem Solving",
  "UI/UX Design",
  "Software Engineering Mindset",
  "Continuous Learning",
];

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Curious builder, calm learner"
          subtitle="I like systems that make sense—clean logic on the inside, clear experience on the outside."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <Card className="overflow-hidden border-white/[0.09] bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
              <CardContent className="space-y-6 p-8">
                <div className="flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/65 md:text-base">
                  I am a Computer Science & Engineering student focused on building strong,
                  compounding fundamentals in software development. My focus lies in writing clean,
                  structured code, developing consistent problem-solving habits, and cultivating a
                  strong sense of design and user experience.
                </p>
                <p className="text-sm leading-relaxed text-white/65 md:text-base">
                  I approach learning with discipline and intention—breaking down complex problems,
                  building small but meaningful projects, and continuously improving through
                  iteration and practice. I value clarity over complexity, and long-term skill
                  growth over short-term output.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: Cpu,
                      t: "Engineering Mindset",
                      d: "Strong focus on clean logic, debugging, and building structured, scalable solutions.",
                    },
                    {
                      icon: Palette,
                      t: "Design Awareness",
                      d: "Attention to hierarchy, spacing, and smooth user experience in interfaces.",
                    },
                    {
                      icon: BookOpen,
                      t: "Continuous Learning",
                      d: "Constant improvement through practice, projects, and real-world problem solving.",
                    },
                    {
                      icon: Target,
                      t: "Execution Driven",
                      d: "Turning ideas into small, consistent projects and improving through iteration.",
                    },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="rounded-2xl border border-white/[0.07] bg-black/25 p-4"
                    >
                      <item.icon className="mb-3 h-5 w-5 text-amber-300/90" />
                      <p className="text-sm font-medium text-white">{item.t}</p>
                      <p className="mt-1 text-xs text-white/55">{item.d}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-b from-amber-500/10 via-transparent to-orange-500/10 blur-2xl" />
            <Card className="relative border-white/[0.09] bg-black/35">
              <CardContent className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                  Learning Journey
                </p>
                <p className="mt-2 text-xs text-white/35">
                  A progression built on consistency, curiosity, and deliberate practice.
                </p>
                <ol className="mt-8 space-y-8">
                  {timeline.map((row, idx) => (
                    <li key={row.title} className="relative pl-8">
                      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-[0_0_18px_rgba(251,191,36,0.55)]" />
                      {idx !== timeline.length - 1 ? (
                        <span className="absolute left-[4px] top-5 h-[calc(100%+1.25rem)] w-px bg-gradient-to-b from-white/25 to-transparent" />
                      ) : null}
                      <p className="text-xs font-semibold text-amber-200/80">{row.year}</p>
                      <p className="mt-1 text-base font-medium text-white">{row.title}</p>
                      <p className="mt-2 text-sm text-white/55">{row.body}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
