"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";
import { projects } from "@/lib/site";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work & concepts"
          subtitle="Each card is a direction—some shipped, some in motion—all built with care for clarity and craft."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <Card className="group h-full overflow-hidden border-white/[0.09] bg-black/35 transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_-40px_rgba(34,211,238,0.35)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-90`}
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 10px)",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/35 to-transparent transition-transform duration-700 group-hover:scale-[1.02]" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white/75 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                    Concept / Build
                  </div>
                </div>
                <CardContent className="space-y-3 p-7">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{p.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-3 px-7 pb-7 pt-0">
                  <Button variant="outline" size="sm" asChild>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GitFork className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
