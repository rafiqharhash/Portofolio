"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/layout/section-heading";

const user = site.githubUsername;

// Dark Guardian Theme: Amber/Gold/Orange
const statsUrl = `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=fbbf24&icon_color=f59e0b&text_color=e5e7eb&rank_icon=github&border_radius=20`;
const streakUrl = `https://streak-stats.demolab.com?user=${user}&theme=dark&hide_border=true&background=00000000&ring=fbbf24&currStreakLabel=fbbf24&fire=fbbf24&sideNums=e5e7eb&sideLabels=e5e7eb&dates=9ca3af&stroke=fbbf24`;
const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=donut&theme=dark&hide_border=true&bg_color=00000000&title_color=fbbf24&text_color=e5e7eb&border_radius=20&langs_count=8`;

export function GithubStatsSection() {
  return (
    <section id="github" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Public Signal & Pulse"
          subtitle="A live snapshot of consistency and craft—where code meets commitment."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Main Stats Card */}
          <motion.div
            className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-amber-500/25 hover:shadow-amber-500/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.04),transparent_70%)]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30 group-hover:text-amber-400/40 transition-colors">Overall Performance</p>
            <Image
              src={statsUrl}
              alt={`GitHub stats for ${user}`}
              width={495}
              height={195}
              className="relative z-10 h-auto w-full filter transition-all duration-500 group-hover:saturate-[1.2]"
              unoptimized
            />
          </motion.div>

          {/* Streak Card */}
          <motion.div
            className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-amber-500/25 hover:shadow-amber-500/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.06 }}
          >
            <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.04),transparent_70%)]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30 group-hover:text-amber-400/40 transition-colors">Commit Pulse</p>
            <Image
              src={streakUrl}
              alt={`GitHub streak stats for ${user}`}
              width={495}
              height={195}
              className="relative z-10 h-auto w-full filter transition-all duration-500 group-hover:saturate-[1.2]"
              unoptimized
            />
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            className="group relative flex flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-amber-500/25 hover:shadow-amber-500/5 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_70%)]" />
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/30 group-hover:text-amber-400/40 transition-colors">Technology Distribution</p>
            <Image
              src={langsUrl}
              alt={`Top languages for ${user}`}
              width={600}
              height={300}
              className="relative z-10 h-auto w-full max-w-2xl filter transition-all duration-500 group-hover:saturate-[1.2]"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
