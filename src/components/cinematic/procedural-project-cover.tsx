"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type Theme = "code" | "coffee" | "prayer" | "hud";

/* ─── Theme: CODE ──────────────────────────────────────────────────────────── */
function CoverCode() {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="cc-bg" cx="30%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#020510" />
        </radialGradient>
        <linearGradient id="cc-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cc-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#cc-bg)" />
      {Array.from({ length: 9 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={28 * i} x2="400" y2={28 * i} stroke="rgba(34,211,238,0.06)" strokeWidth="1" />
      ))}
      {Array.from({ length: 14 }, (_, i) => (
        <line key={`v${i}`} x1={30 * i} y1="0" x2={30 * i} y2="250" stroke="rgba(34,211,238,0.06)" strokeWidth="1" />
      ))}
      {[
        { x: 28, y: 38, w: 80, c: "#22d3ee", o: 0.8 },
        { x: 44, y: 58, w: 120, c: "#38bdf8", o: 0.65 },
        { x: 44, y: 78, w: 90, c: "#a5f3fc", o: 0.5 },
        { x: 28, y: 98, w: 140, c: "#22d3ee", o: 0.7 },
        { x: 44, y: 118, w: 60, c: "#67e8f9", o: 0.55 },
        { x: 44, y: 138, w: 100, c: "#38bdf8", o: 0.6 },
        { x: 28, y: 158, w: 70, c: "#22d3ee", o: 0.75 },
        { x: 44, y: 178, w: 110, c: "#a5f3fc", o: 0.5 },
        { x: 28, y: 198, w: 85, c: "#22d3ee", o: 0.65 },
      ].map((l, i) => (
        <rect key={i} x={l.x} y={l.y - 5} width={l.w} height={8} rx="2" fill={l.c} fillOpacity={l.o * 0.55} />
      ))}
      <text x="14" y="42" fontFamily="monospace" fontSize="11" fill="#22d3ee" fillOpacity="0.6">{"{"}</text>
      <text x="14" y="102" fontFamily="monospace" fontSize="11" fill="#22d3ee" fillOpacity="0.55">{"}"}</text>
      <text x="220" y="65" fontFamily="monospace" fontSize="10" fill="#67e8f9" fillOpacity="0.45">{"function()"}</text>
      <text x="220" y="92" fontFamily="monospace" fontSize="10" fill="#38bdf8" fillOpacity="0.5">{"return true"}</text>
      <text x="220" y="120" fontFamily="monospace" fontSize="10" fill="#a5f3fc" fillOpacity="0.4">{"const x = 0"}</text>
      <rect x="28" y="215" width="7" height="12" rx="1" fill="#22d3ee" fillOpacity="0.9" />
      <rect x="0" y="130" width="400" height="2" fill="url(#cc-line)" fillOpacity="0.6" />
      <rect x="0" y="0" width="400" height="2" fill="url(#cc-top)" />
    </svg>
  );
}

/* ─── Theme: COFFEE ────────────────────────────────────────────────────────── */
function CoverCoffee() {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="cof-bg" cx="50%" cy="60%" r="75%">
          <stop offset="0%" stopColor="#1c0e04" />
          <stop offset="100%" stopColor="#060200" />
        </radialGradient>
        <radialGradient id="cof-cup" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#92400e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#451a03" stopOpacity="0.1" />
        </radialGradient>
        <linearGradient id="cof-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#cof-bg)" />
      <ellipse cx="200" cy="180" rx="130" ry="70" fill="rgba(251,191,36,0.07)" />
      <ellipse cx="200" cy="200" rx="90" ry="45" fill="rgba(180,83,9,0.12)" />
      <path d="M150,140 L155,200 Q200,215 245,200 L250,140 Z"
        fill="url(#cof-cup)" stroke="rgba(251,191,36,0.25)" strokeWidth="1" />
      <ellipse cx="200" cy="140" rx="50" ry="10" fill="none"
        stroke="rgba(251,191,36,0.35)" strokeWidth="1.5" />
      <ellipse cx="200" cy="140" rx="46" ry="8" fill="rgba(120,53,15,0.55)" />
      <path d="M248,155 Q272,155 272,175 Q272,195 248,195"
        fill="none" stroke="rgba(251,191,36,0.3)" strokeWidth="2" />
      {[185, 200, 215].map((x, i) => (
        <path key={i}
          d={`M${x},132 Q${x + (i % 2 === 0 ? 8 : -8)},118 ${x},105 Q${x + (i % 2 === 0 ? -8 : 8)},92 ${x},80`}
          fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeLinecap="round" />
      ))}
      <ellipse cx="200" cy="215" rx="80" ry="12"
        fill="none" stroke="rgba(251,191,36,0.1)" strokeWidth="1" />
      <ellipse cx="200" cy="215" rx="100" ry="16"
        fill="none" stroke="rgba(251,191,36,0.06)" strokeWidth="1" />
      <path d="M165,155 Q170,148 177,152" fill="none"
        stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="0" y="0" width="400" height="2" fill="url(#cof-top)" />
      {[[60,180],[80,195],[310,178],[330,192],[90,160],[320,165]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="4" ry="2.5"
          fill="rgba(92,38,11,0.5)" transform={`rotate(${30 * i},${x},${y})`} />
      ))}
    </svg>
  );
}

/* ─── Theme: PRAYER ────────────────────────────────────────────────────────── */
function CoverPrayer() {
  function star8(cx: number, cy: number, r1: number, r2: number) {
    const pts: string[] = [];
    for (let i = 0; i < 16; i++) {
      const angle = (i * Math.PI) / 8 - Math.PI / 2;
      const r = i % 2 === 0 ? r1 : r2;
      pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
    }
    return pts.join(" ");
  }
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="pr-bg" cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#022c22" />
          <stop offset="100%" stopColor="#010c08" />
        </radialGradient>
        <linearGradient id="pr-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
          <stop offset="50%" stopColor="#34d399" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#pr-bg)" />
      <ellipse cx="200" cy="110" rx="120" ry="90" fill="rgba(16,185,129,0.08)" />
      <polygon points={star8(200, 115, 72, 38)} fill="none"
        stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
      <polygon points={star8(200, 115, 58, 30)} fill="rgba(16,185,129,0.06)" />
      <circle cx="200" cy="115" r="28" fill="none"
        stroke="rgba(52,211,153,0.25)" strokeWidth="1" />
      <circle cx="200" cy="115" r="16" fill="rgba(16,185,129,0.12)" />
      <polygon points={star8(60, 50, 22, 11)} fill="none"
        stroke="rgba(52,211,153,0.2)" strokeWidth="0.75" />
      <polygon points={star8(340, 50, 22, 11)} fill="none"
        stroke="rgba(52,211,153,0.2)" strokeWidth="0.75" />
      <polygon points={star8(60, 200, 18, 9)} fill="none"
        stroke="rgba(52,211,153,0.15)" strokeWidth="0.75" />
      <polygon points={star8(340, 200, 18, 9)} fill="none"
        stroke="rgba(52,211,153,0.15)" strokeWidth="0.75" />
      <path d="M 184 60 A 40 40 0 1 1 184 170 A 28 32 0 1 0 184 60"
        fill="rgba(52,211,153,0.08)" stroke="none" />
      <line x1="80" y1="200" x2="320" y2="200"
        stroke="rgba(52,211,153,0.2)" strokeWidth="0.75" />
      <rect x="0" y="0" width="400" height="2" fill="url(#pr-top)" />
      {[[115,165],[145,165],[175,165],[225,165],[255,165],[285,165]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="rgba(52,211,153,0.22)" />
      ))}
    </svg>
  );
}

/* ─── Theme: HUD ───────────────────────────────────────────────────────────── */
function CoverHud() {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="hud-bg" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#0e0520" />
          <stop offset="100%" stopColor="#04010d" />
        </radialGradient>
        <linearGradient id="hud-scan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.18" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="hud-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill="url(#hud-bg)" />
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x="0" y={20 * i} width="400" height="1" fill="rgba(168,85,247,0.05)" />
      ))}
      <path d="M20,20 L20,50 M20,20 L50,20" fill="none" stroke="rgba(168,85,247,0.6)" strokeWidth="2" />
      <path d="M380,20 L380,50 M380,20 L350,20" fill="none" stroke="rgba(168,85,247,0.6)" strokeWidth="2" />
      <path d="M20,230 L20,200 M20,230 L50,230" fill="none" stroke="rgba(168,85,247,0.6)" strokeWidth="2" />
      <path d="M380,230 L380,200 M380,230 L350,230" fill="none" stroke="rgba(168,85,247,0.6)" strokeWidth="2" />
      <circle cx="200" cy="125" r="36" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
      <circle cx="200" cy="125" r="22" fill="none" stroke="rgba(168,85,247,0.45)" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="200" cy="125" r="5" fill="rgba(168,85,247,0.6)" />
      <line x1="200" y1="88" x2="200" y2="103" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
      <line x1="200" y1="147" x2="200" y2="162" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
      <line x1="163" y1="125" x2="178" y2="125" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
      <line x1="222" y1="125" x2="237" y2="125" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
      <text x="28" y="75" fontFamily="monospace" fontSize="8" fill="rgba(216,180,254,0.55)">SYS STATUS: ACTIVE</text>
      <text x="28" y="90" fontFamily="monospace" fontSize="8" fill="rgba(216,180,254,0.4)">UNIT: RH-01</text>
      <text x="28" y="105" fontFamily="monospace" fontSize="8" fill="rgba(216,180,254,0.35)">MODE: DISPATCH</text>
      <text x="290" y="75" fontFamily="monospace" fontSize="8" fill="rgba(216,180,254,0.55)">LAT 31.77</text>
      <text x="290" y="90" fontFamily="monospace" fontSize="8" fill="rgba(216,180,254,0.4)">LON 35.21</text>
      <rect x="30" y="210" width="340" height="6" rx="2" fill="rgba(168,85,247,0.12)" />
      <rect x="30" y="210" width="210" height="6" rx="2" fill="rgba(168,85,247,0.45)" />
      <text x="30" y="225" fontFamily="monospace" fontSize="7" fill="rgba(216,180,254,0.4)">THREAT LEVEL: LOW</text>
      <text x="310" y="225" fontFamily="monospace" fontSize="7" fill="rgba(216,180,254,0.4)">62%</text>
      {[[90,70],[310,155],[150,190],[270,80]].map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3" fill="rgba(168,85,247,0.7)" />
          <circle cx={x} cy={y} r="7" fill="none" stroke="rgba(168,85,247,0.25)" strokeWidth="1" />
        </g>
      ))}
      <rect x="0" y="0" width="400" height="2" fill="url(#hud-top)" />
    </svg>
  );
}

/* ─── Main component ────────────────────────────────────────────────────────── */
const COVERS: Record<Theme, React.FC> = {
  code: CoverCode,
  coffee: CoverCoffee,
  prayer: CoverPrayer,
  hud: CoverHud,
};

type Props = {
  theme: Theme;
  accent?: string;
  priority?: boolean;
  fillContainer?: boolean;
};

export function ProceduralProjectCover({ theme, accent = "", fillContainer = false }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 240, damping: 26 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 240, damping: 26 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || reduce) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() { mx.set(0); my.set(0); }

  const CoverSVG = COVERS[theme];

  return (
    <div
      ref={ref}
      className={fillContainer ? "group/card absolute inset-0 overflow-hidden" : "group/card relative aspect-[16/10] overflow-hidden"}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {accent && (
        <div className={`absolute inset-0 z-0 bg-gradient-to-br ${accent} opacity-60`} aria-hidden />
      )}

      <motion.div
        className="relative h-full w-full"
        style={{
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-[1] transition-transform duration-700 group-hover/card:scale-[1.04]"
        >
          <CoverSVG />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-[20] bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
        <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-br from-amber-500/[0.05] via-transparent to-violet-950/20 mix-blend-overlay" />
        <motion.div
          className="pointer-events-none absolute inset-0 z-[16] opacity-0 shadow-[inset_0_0_60px_rgba(251,191,36,0.10)] transition-opacity duration-500 group-hover/card:opacity-100"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[17] h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
      </motion.div>
    </div>
  );
}
