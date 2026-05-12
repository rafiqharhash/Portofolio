"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/layout/section-heading";

const user = site.githubUsername;

const statsUrl = `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=67e8f9&icon_color=a78bfa&text_color=e5e7eb`;
const streakUrl = `https://streak-stats.demolab.com?user=${user}&theme=tokyonight&hide_border=true&background=00000000&ring=22d3ee&currStreakLabel=67e8f9&fire=22d3ee`;
const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=67e8f9&text_color=e5e7eb`;

export function GithubStatsSection() {
  return (
    <section id="github" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Public signal, private discipline"
          subtitle="Stats are a snapshot—what matters is consistency. Swap the username in code or set NEXT_PUBLIC_GITHUB_USERNAME."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-4 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <Image
              src={statsUrl}
              alt={`GitHub stats for ${user}`}
              width={495}
              height={195}
              className="h-auto w-full"
              unoptimized
            />
          </motion.div>

          <motion.div
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-4 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.06 }}
          >
            <Image
              src={streakUrl}
              alt={`GitHub streak stats for ${user}`}
              width={495}
              height={195}
              className="h-auto w-full"
              unoptimized
            />
          </motion.div>

          <motion.div
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-4 shadow-2xl backdrop-blur-xl lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <Image
              src={langsUrl}
              alt={`Top languages for ${user}`}
              width={495}
              height={195}
              className="mx-auto h-auto w-full max-w-xl"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
