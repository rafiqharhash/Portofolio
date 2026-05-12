export const site = {
  name: "Rafiq Harhash",
  title: "Computer Science & Engineering Student",
  tagline:
    "Currently learning Java, structured programming, and problem solving. Building projects step by step.",
  email: "rafeqnusr@icloud.com",
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "rafeqnusr",
  social: {
    facebook: "https://facebook.com/itsrafeq",
    instagram: "https://instagram.com/irafe9",
    linkedin: "https://linkedin.com/in/rafiq-harhash-6b5aa1389",
    twitter: "https://x.com/rafeeqnusr",
  },
  quote: "Know Your History.",
} as const;

export type Project = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Study Productivity Web App",
    description:
      "A focused workspace for sessions, tasks, and progress tracking—built to reinforce consistent study habits.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://vercel.com",
    accent: "from-cyan-500/20 to-blue-600/10",
  },
  {
    title: "Coffee Shop Website",
    description:
      "Warm brand-forward landing experience with menu highlights, hours, and a calm visual rhythm for a local café.",
    stack: ["React", "CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://vercel.com",
    accent: "from-amber-500/20 to-orange-600/10",
  },
  {
    title: "Quran & Prayer App Concept",
    description:
      "Concept UI for daily recitation, reminders, and prayer times—prioritizing clarity, respect, and calm interactions.",
    stack: ["UI Design", "Figma", "Mobile-first"],
    githubUrl: "https://github.com",
    liveUrl: "https://vercel.com",
    accent: "from-emerald-500/20 to-teal-600/10",
  },
  {
    title: "SAMP Police System",
    description:
      "Roleplay tooling concept for dispatch, records, and in-world workflows—structured for clarity under pressure.",
    stack: ["Pawn", "MySQL", "Game scripting"],
    githubUrl: "https://github.com",
    liveUrl: "https://vercel.com",
    accent: "from-violet-500/20 to-fuchsia-600/10",
  },
];
