"use client";

import { motion } from "framer-motion";
import { BookOpen, Cpu, Palette, Target } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  {
    year: "2025",
    title: "University foundations",
    body: "Diving into structured programming, discrete thinking, and disciplined practice.",
  },
  {
    year: "Now",
    title: "Hands-on building",
    body: "Turning concepts into interfaces—small projects, clear goals, steady iteration.",
  },
  {
    year: "Next",
    title: "Depth + breadth",
    body: "Sharpening problem solving while exploring web stacks and thoughtful UI craft.",
  },
];

const chips = ["Java", "C++", "Problem Solving", "UI Design", "Learning mindset"];

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
                  I am a first-year Computer Science & Engineering student focused on fundamentals
                  that compound: strong programming habits, structured problem solving, and design
                  intuition that respects the user. I learn publicly, ship quietly, and iterate with
                  intention.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Cpu, t: "Engineering mindset", d: "Precision, debugging, and patience." },
                    { icon: Palette, t: "Design sensitivity", d: "Hierarchy, spacing, and motion." },
                    { icon: BookOpen, t: "Continuous study", d: "Notes, drills, and real projects." },
                    { icon: Target, t: "Outcome aware", d: "Small wins that stack into skill." },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="rounded-2xl border border-white/[0.07] bg-black/25 p-4"
                    >
                      <item.icon className="mb-3 h-5 w-5 text-cyan-300/90" />
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
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-b from-cyan-500/10 via-transparent to-violet-500/10 blur-2xl" />
            <Card className="relative border-white/[0.09] bg-black/35">
              <CardContent className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                  Learning journey
                </p>
                <ol className="mt-8 space-y-8">
                  {timeline.map((row, idx) => (
                    <li key={row.title} className="relative pl-8">
                      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 shadow-[0_0_18px_rgba(34,211,238,0.55)]" />
                      {idx !== timeline.length - 1 ? (
                        <span className="absolute left-[4px] top-5 h-[calc(100%+1.25rem)] w-px bg-gradient-to-b from-white/25 to-transparent" />
                      ) : null}
                      <p className="text-xs font-semibold text-cyan-200/80">{row.year}</p>
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
