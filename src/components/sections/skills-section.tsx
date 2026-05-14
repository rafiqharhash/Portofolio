"use client";

import { motion } from "framer-motion";
import { Activity, Blocks, Box, Braces, BrainCircuit, Command, Cpu, Database, FileCode2, Flame, GitBranch, Globe, HardDrive, Layers, Paintbrush, PenTool, Target, Terminal, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Languages",
    items: [
      { label: "Java", icon: Braces, hint: "Object-oriented development and backend foundations" },
      { label: "C / C++ / C#", icon: Terminal, hint: "Efficient problem solving and system-level logic" },
      { label: "JavaScript / TypeScript", icon: FileCode2, hint: "Building immersive and modern web experiences" },
      { label: "HTML & CSS", icon: Globe, hint: "Designing responsive interfaces with precision and creativity" },
      { label: "R", icon: Activity, hint: "Statistical computing, data analysis, and visualization fundamentals" },
      { label: "Bash", icon: Command, hint: "Command-line automation and development workflow management" },
    ],
  },
  {
    name: "Frameworks & Data",
    items: [
      { label: "React", icon: Box, hint: "Interactive UI engineering with modern component architecture" },
      { label: "Next.js", icon: Blocks, hint: "Production-ready full-stack web experiences" },
      { label: "Node.js", icon: Layers, hint: "Backend systems and API development" },
      { label: "MongoDB", icon: Database, hint: "Scalable NoSQL data management" },
      { label: "SQLite", icon: HardDrive, hint: "Lightweight relational database management for local applications" },
      { label: "Firebase", icon: Flame, hint: "Real-time backend services, authentication, and cloud integration" },
    ],
  },
  {
    name: "Ecosystem & Workflow",
    items: [
      { label: "AI-Augmented Engineering", icon: BrainCircuit, hint: "Leveraging AI to accelerate development and creative workflows" },
      { label: "Cursor • Claude • Antigravity", icon: Cpu, hint: "Advanced AI ecosystems for coding, architecture, and experimentation" },
      { label: "Git & GitHub", icon: GitBranch, hint: "Professional collaboration and scalable version control workflows" },
      { label: "Developer Ecosystem", icon: Wrench, hint: "Modern tooling, deployment pipelines, and productivity optimization" },
      { label: "Competitive Problem Solving", icon: Target, hint: "Analytical thinking through algorithms and coding challenges" },
      { label: "Design Sensibility", icon: Paintbrush, hint: "Balancing engineering with cinematic user experiences" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit that grows with the work"
          subtitle="Icons are labels, not limits—everything here is backed by reps, notes, and shipped experiments."
        />

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-90px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={item}
              className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-1"
            >
              <div className="rounded-[22px] bg-black/40 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">{cat.name}</p>
                  <PenTool className="h-4 w-4 text-white/25" aria-hidden />
                </div>
                <div className="mt-6 space-y-4">
                  {cat.items.map((s) => (
                    <motion.div
                      key={s.label}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 420, damping: 24 }}
                      className={cn(
                        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                      )}
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />
                        <div className="absolute -right-24 bottom-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
                      </div>
                      <div className="relative flex items-start gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-amber-200">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{s.label}</p>
                          <p className="mt-1 text-xs text-white/50">{s.hint}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
