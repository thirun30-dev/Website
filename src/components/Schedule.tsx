"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Users, Coffee, Mic } from "lucide-react";

interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
  description: string;
  type: "keynote" | "technical" | "break" | "general";
}

const agenda: AgendaItem[] = [
  {
    time: "08:30 – 09:30",
    title: "Registrations & Networking",
    speaker: "REC Organizers",
    description: "Collect your ID badges, welcome kits, and networking pass.",
    type: "general",
  },
  {
    time: "09:30 – 10:00",
    title: "Inauguration & Welcome Address",
    speaker: "REC Faculty & SBG Student Leads",
    description: "Welcome speech, lamp lighting, and briefing of Community Day goals.",
    type: "general",
  },
  {
    time: "10:00 – 11:00",
    title: "Keynote: Stepping Into The Agentic Web",
    speaker: "Shubham Londhe (AWS Dev Advocate)",
    description: "Building smart applications using Strands Agents and MCP on AWS.",
    type: "keynote",
  },
  {
    time: "11:00 – 11:15",
    title: "High Tea & Networking Break",
    speaker: "Attendees & Experts",
    description: "Connect with sponsors and speakers in the networking lounge.",
    type: "break",
  },
  {
    time: "11:15 – 12:00",
    title: "Keynote 2: Be A Builder On Campus",
    speaker: "Arkodyuti Saha (AWS Developer Experience)",
    description: "Kickstarting cloud builders groups, hackathons, and AI research on campus.",
    type: "keynote",
  },
  {
    time: "12:00 – 12:45",
    title: "Agentic AI on AWS – Next Era of Cloud Intelligence",
    speaker: "Abishek Subramanian & A.V. Karthik",
    description: "Collaborative systems, autonomous cloud management, and Bedrock orchestrators.",
    type: "technical",
  },
  {
    time: "12:45 – 01:45",
    title: "Buffet Lunch & Partner Networking",
    speaker: "Attendees & Recruiters",
    description: "Complimentary lunch, explore partner desks, and resume review booths.",
    type: "break",
  },
  {
    time: "01:45 – 02:30",
    title: "Build Structured AI Agent Systems with AWS Strands SDK",
    speaker: "Aadhityaa SB (AI Developer @ EY)",
    description: "Hands-on walk-through of the Strands SDK for building stateful AI agents.",
    type: "technical",
  },
  {
    time: "02:30 – 03:15",
    title: "Deploying Foundation Models at Scale with Amazon Bedrock",
    speaker: "Jeevitha M (AWS Community Builder)",
    description: "Model response drift, latency optimization, and scaling LLM requests.",
    type: "technical",
  },
  {
    time: "03:15 – 03:30",
    title: "Tea & Networking Session",
    speaker: "Attendees & Student Groups",
    description: "Refuel with snacks and connect with community builder groups.",
    type: "break",
  },
  {
    time: "03:30 – 04:15",
    title: "Panel: Careers in Cloud & AI in 2026 and Beyond",
    speaker: "AWS Architects & EY, Databricks Leads",
    description: "Expert tips on portfolios, what companies look for, and key trends.",
    type: "keynote",
  },
  {
    time: "04:15 – 04:45",
    title: "Valedictory Ceremony & Swag Distribution",
    speaker: "AWS SBG REC Team",
    description: "Certificates, raffle draw winners, and the group photo session.",
    type: "general",
  },
];

const TYPE_CONFIG = {
  keynote: {
    icon: <Mic size={11} />,
    label: "Keynote",
    dotBg: "bg-cyan-400",
    dotGlow: "shadow-[0_0_14px_rgba(34,211,238,0.6)]",
    dotRing: "ring-cyan-400/25",
    badge: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
    cardBorder: "border-cyan-500/20 hover:border-cyan-500/40",
    cardGlow: "hover:shadow-[0_0_22px_rgba(34,211,238,0.07)]",
    timeCls: "text-cyan-400",
    lineCls: "bg-cyan-500/30",
    curveCls: "border-cyan-500/20",
  },
  technical: {
    icon: <Terminal size={11} />,
    label: "Tech",
    dotBg: "bg-blue-400",
    dotGlow: "shadow-[0_0_14px_rgba(96,165,250,0.6)]",
    dotRing: "ring-blue-400/25",
    badge: "bg-blue-500/10 border-blue-500/25 text-blue-400",
    cardBorder: "border-blue-500/20 hover:border-blue-500/40",
    cardGlow: "hover:shadow-[0_0_22px_rgba(96,165,250,0.07)]",
    timeCls: "text-blue-400",
    lineCls: "bg-blue-500/30",
    curveCls: "border-blue-500/20",
  },
  break: {
    icon: <Coffee size={11} />,
    label: "Break",
    dotBg: "bg-amber-400",
    dotGlow: "shadow-[0_0_14px_rgba(251,191,36,0.5)]",
    dotRing: "ring-amber-400/25",
    badge: "bg-amber-500/10 border-amber-500/25 text-amber-400",
    cardBorder: "border-amber-500/20 hover:border-amber-500/40",
    cardGlow: "hover:shadow-[0_0_22px_rgba(251,191,36,0.06)]",
    timeCls: "text-amber-400",
    lineCls: "bg-amber-500/30",
    curveCls: "border-amber-500/20",
  },
  general: {
    icon: <Users size={11} />,
    label: "General",
    dotBg: "bg-slate-400",
    dotGlow: "shadow-[0_0_10px_rgba(148,163,184,0.35)]",
    dotRing: "ring-slate-400/20",
    badge: "bg-slate-500/10 border-slate-500/25 text-slate-400",
    cardBorder: "border-slate-700/40 hover:border-slate-600/60",
    cardGlow: "hover:shadow-[0_0_22px_rgba(148,163,184,0.05)]",
    timeCls: "text-slate-400",
    lineCls: "bg-slate-500/30",
    curveCls: "border-slate-600/20",
  },
};

/** Single card in the snake grid */
function SnakeCard({ item, number }: { item: AgendaItem; number: number }) {
  const cfg = TYPE_CONFIG[item.type];
  return (
    <div className="flex flex-col items-center group">
      {/* Numbered node */}
      <div
        data-timeline-node={number}
        className={`relative z-10 mb-3 w-9 h-9 rounded-full flex items-center justify-center
          ${cfg.dotBg} ${cfg.dotGlow} ring-4 ${cfg.dotRing}
          transition-all duration-300 group-hover:scale-110`}
      >
        <span className="text-xs font-black text-slate-950 leading-none">{number}</span>
      </div>

      {/* Card */}
      <div
        className={`w-full rounded-2xl border bg-[#070712]/90 px-4 py-3.5 space-y-1.5
          transition-all duration-300 ${cfg.cardBorder} ${cfg.cardGlow}`}
      >
        <p className={`text-[10px] font-mono font-bold tracking-widest ${cfg.timeCls} opacity-80`}>
          {item.time}
        </p>
        <div className="flex items-start gap-2">
          <span
            className={`flex-shrink-0 inline-flex items-center gap-0.5 px-1.5 py-0.5
              rounded text-[9px] font-black uppercase tracking-wider border mt-0.5 ${cfg.badge}`}
          >
            {cfg.icon}
            <span className="hidden sm:inline ml-0.5">{cfg.label}</span>
          </span>
          <h3 className="text-[13px] font-bold text-white leading-snug">{item.title}</h3>
        </div>
        <p className="text-[11px] text-slate-500 line-clamp-1 pl-6">{item.speaker}</p>
      </div>
    </div>
  );
}

/** 3D Futuristic Toy Component */
function ThreeDToy({ x, y, angle }: { x: number; y: number; angle: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
        pointerEvents: "none",
        zIndex: 30,
        transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
      className="perspective-container flex items-center justify-center w-16 h-16"
    >
      {/* Floating animation */}
      <div className="animate-float-toy w-full h-full flex items-center justify-center">
        {/* Tilt in movement direction */}
        <div
          style={{
            transform: `rotate(${angle}deg)`,
            transition: "transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
          className="preserve-3d w-full h-full relative flex items-center justify-center"
        >
          {/* Particle tail / Jet glow */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-7 h-3 bg-gradient-to-r from-cyan-400 to-transparent rounded-full blur-[3px] shadow-[0_0_12px_rgba(0,240,255,0.7)]" style={{ transform: 'rotateY(45deg)' }} />
          
          {/* Reactor core */}
          <div className="absolute w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(0,240,255,0.8)] border border-cyan-300/45 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
          </div>

          {/* Orbiting Ring 1 */}
          <div className="absolute w-11 h-11 rounded-full border border-cyan-400/50 preserve-3d animate-spin-ring-1" />
          
          {/* Orbiting Ring 2 */}
          <div className="absolute w-13 h-13 rounded-full border border-blue-500/40 preserve-3d animate-spin-ring-2" />
        </div>
      </div>
    </div>
  );
}

const COLS = 3;
const FILTERS = ["all", "keynote", "technical", "break", "general"] as const;

export default function Schedule() {
  const [filter, setFilter] = useState<string>("all");
  const filtered = agenda.filter((item) => filter === "all" || item.type === filter);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [toyPos, setToyPos] = useState<{ x: number; y: number; angle: number } | null>(null);


  const [nodeCoords, setNodeCoords] = useState<{ x: number; y: number }[]>([]);

  // Group into rows of COLS
  const rows: AgendaItem[][] = [];
  for (let i = 0; i < filtered.length; i += COLS) {
    rows.push(filtered.slice(i, i + COLS));
  }

  // Effect to measure static layout node coordinates
  useEffect(() => {
    const measureCoords = () => {
      if (!sectionRef.current) return;
      const isMobile = window.innerWidth < 768;
      const nodes = Array.from(document.querySelectorAll("[data-timeline-node]"))
        .filter((el) => {
          const inMobile = el.closest(".md\\:hidden") !== null;
          return isMobile ? inMobile : !inMobile;
        })
        .map((el) => {
          const num = parseInt(el.getAttribute("data-timeline-node") || "0", 10);
          return { el, num };
        })
        .sort((a, b) => a.num - b.num);

      if (nodes.length === 0) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const coords = nodes.map(({ el }) => {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left - sectionRect.left + rect.width / 2,
          y: rect.top - sectionRect.top + rect.height / 2,
        };
      });
      setNodeCoords(coords);
    };

    window.addEventListener("resize", measureCoords, { passive: true });
    // Execute after mount and font loading stabilizes layout
    const timer = setTimeout(measureCoords, 200);

    return () => {
      window.removeEventListener("resize", measureCoords);
      clearTimeout(timer);
    };
  }, [filter, filtered.length]);

  // Effect to track scroll and translate toy along the continuous path
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (!sectionRef.current || nodeCoords.length === 0) return;

        const isMobile = window.innerWidth < 768;
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const progress = Math.max(0, Math.min(1, (centerY - sectionRect.top) / sectionRect.height));

        const N = nodeCoords.length;
        if (N <= 1) {
          if (N === 1) {
            setToyPos({ x: nodeCoords[0].x, y: nodeCoords[0].y, angle: 0 });
          }
          return;
        }

        const floatIdx = progress * (N - 1);
        const idx = Math.floor(floatIdx);
        const segProgress = floatIdx - idx;

        if (idx >= N - 1) {
          const last = nodeCoords[N - 1];
          const secondLast = nodeCoords[N - 2];
          const dx = last.x - secondLast.x;
          const dy = last.y - secondLast.y;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          setToyPos({ x: last.x, y: last.y, angle });
        } else {
          const start = nodeCoords[idx];
          const end = nodeCoords[idx + 1];

          const isRowTransition = !isMobile && Math.abs(start.y - end.y) > 40 && Math.abs(start.x - end.x) < 40;

          if (isRowTransition) {
            const isRightBend = start.x > sectionRect.width / 2;
            const colStep = nodeCoords.length > 1 ? Math.abs(nodeCoords[1].x - nodeCoords[0].x) : 0;
            const offset = colStep ? (colStep * 2) / 3 + 15 : 150;
            const horizontalOffset = isRightBend ? offset : -offset;

            const cp1 = { x: start.x + horizontalOffset, y: start.y };
            const cp2 = { x: end.x + horizontalOffset, y: end.y };

            const t = segProgress;
            const mt = 1 - t;
            const w0 = mt * mt * mt;
            const w1 = 3 * mt * mt * t;
            const w2 = 3 * mt * t * t;
            const w3 = t * t * t;

            const x = w0 * start.x + w1 * cp1.x + w2 * cp2.x + w3 * end.x;
            const y = w0 * start.y + w1 * cp1.y + w2 * cp2.y + w3 * end.y;

            const dx = 3 * mt * mt * (cp1.x - start.x) + 6 * mt * t * (cp2.x - cp1.x) + 3 * t * t * (end.x - cp2.x);
            const dy = 3 * mt * mt * (cp1.y - start.y) + 6 * mt * t * (cp2.y - cp1.y) + 3 * t * t * (end.y - cp2.y);

            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            setToyPos({ x, y, angle });
          } else {
            const x = start.x + (end.x - start.x) * segProgress;
            const y = start.y + (end.y - start.y) * segProgress;
            const dx = end.x - start.x;
            const dy = end.y - start.y;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            setToyPos({ x, y, angle });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(handleScroll, 250);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [nodeCoords]);

  // Compute continuous path string
  const pathD = (() => {
    if (nodeCoords.length === 0 || !sectionRef.current) return "";
    const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
    const sectionWidth = sectionRef.current.clientWidth;

    let d = `M ${nodeCoords[0].x} ${nodeCoords[0].y}`;

    for (let i = 0; i < nodeCoords.length - 1; i++) {
      const start = nodeCoords[i];
      const end = nodeCoords[i + 1];

      const isRowTransition = !isMobile && Math.abs(start.y - end.y) > 40 && Math.abs(start.x - end.x) < 40;

      if (isRowTransition) {
        const isRightBend = start.x > sectionWidth / 2;
        const colStep = nodeCoords.length > 1 ? Math.abs(nodeCoords[1].x - nodeCoords[0].x) : 0;
        const offset = colStep ? (colStep * 2) / 3 + 15 : 150;
        const horizontalOffset = isRightBend ? offset : -offset;

        const cp1x = start.x + horizontalOffset;
        const cp1y = start.y;
        const cp2x = end.x + horizontalOffset;
        const cp2y = end.y;

        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
      } else {
        d += ` L ${end.x} ${end.y}`;
      }
    }
    return d;
  })();

  return (
    <section ref={sectionRef} id="schedule" className="py-10 relative overflow-hidden">
      {/* Continuous Timeline Overlay Path SVG */}
      {pathD && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Background track path */}
          <path
            d={pathD}
            fill="none"
            className="stroke-slate-800/40"
            strokeWidth="2"
          />
          {/* Glowing foreground path */}
          <path
            d={pathD}
            fill="none"
            className="stroke-cyan-400/80 timeline-dash-flow"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}

      {toyPos && <ThreeDToy x={toyPos.x} y={toyPos.y} angle={toyPos.angle} />}

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-cyan-600/5 blur-[150px]" />
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─────────────────────────────────────────── */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">
            Event Agenda
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Event Schedule
          </h2>
          <p className="text-slate-400 text-sm max-w-sm mx-auto">
            Follow the path — a full day of cloud, AI, and community sessions.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {FILTERS.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider
                  border transition-all duration-200 ${
                    filter === t
                      ? "bg-[#00f0ff]/10 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                      : "border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Snake Timeline — Desktop ────────────────────────── */}
        <div className="hidden md:block">
          {rows.map((row, rowIdx) => {
            const isReversed = rowIdx % 2 === 1;
            const visualItems = isReversed ? [...row].reverse() : row;
            const globalStart = rowIdx * COLS;

            return (
              <React.Fragment key={rowIdx}>
                {/* ── 3-column row ── */}
                <div className="relative">
                  <div className="grid grid-cols-3 gap-5">
                    {visualItems.map((item, colIdx) => {
                      const seqNum = isReversed
                        ? globalStart + (row.length - 1 - colIdx) + 1
                        : globalStart + colIdx + 1;
                      return <SnakeCard key={colIdx} item={item} number={seqNum} />;
                    })}
                  </div>
                </div>

                {/* ── U-curve spacing spacer ── */}
                {rowIdx < rows.length - 1 && (
                  <div className="h-10" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* ─── Vertical list — Mobile ──────────────────────────── */}
        <div className="md:hidden relative">
          <div className="space-y-3 pl-2">
            {filtered.map((item, idx) => {
              const cfg = TYPE_CONFIG[item.type];
              return (
                <div key={idx} className="flex items-start gap-4 group">
                  {/* Mobile dot */}
                  <div
                    data-timeline-node={idx + 1}
                    className={`relative z-10 flex-shrink-0 mt-3 w-5 h-5 rounded-full
                      flex items-center justify-center ${cfg.dotBg} ${cfg.dotGlow}`}
                  >
                    <span className="text-[8px] font-black text-slate-950">{idx + 1}</span>
                  </div>

                  {/* Mobile card */}
                  <div
                    className={`flex-1 rounded-xl border bg-[#070712]/80 px-4 py-3
                      transition-all duration-300 ${cfg.cardBorder}`}
                  >
                    <p className={`text-[9px] font-mono font-bold tracking-wider mb-0.5 ${cfg.timeCls} opacity-80`}>
                      {item.time}
                    </p>
                    <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.speaker}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
