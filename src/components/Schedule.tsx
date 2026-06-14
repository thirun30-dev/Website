"use client";

import React, { useState } from "react";
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

const COLS = 3;
const FILTERS = ["all", "keynote", "technical", "break", "general"] as const;

export default function Schedule() {
  const [filter, setFilter] = useState<string>("all");
  const filtered = agenda.filter((item) => filter === "all" || item.type === filter);

  // Group into rows of COLS
  const rows: AgendaItem[][] = [];
  for (let i = 0; i < filtered.length; i += COLS) {
    rows.push(filtered.slice(i, i + COLS));
  }

  return (
    <section id="schedule" className="py-20 relative overflow-hidden">
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
            Schedule Timeline
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
            /**
             * Even rows  (0, 2, …) → items flow Left → Right
             * Odd rows   (1, 3, …) → items flow Right → Left
             *   so we reverse the visual order, keeping seq-numbers in flow order
             */
            const isReversed = rowIdx % 2 === 1;
            const visualItems = isReversed ? [...row].reverse() : row;
            const globalStart = rowIdx * COLS;

            return (
              <React.Fragment key={rowIdx}>
                {/* ── 3-column row ── */}
                <div className="relative">
                  {/* Horizontal animated line through all three dots */}
                  <svg
                    className="absolute h-9 pointer-events-none w-full"
                    style={{ top: 0, left: 0, right: 0 }}
                  >
                    {/* Background track */}
                    <line
                      x1="16.67%"
                      y1="18"
                      x2="83.33%"
                      y2="18"
                      className="stroke-slate-800/40"
                      strokeWidth="2"
                    />
                    {/* Animated path */}
                    <line
                      x1={isReversed ? "83.33%" : "16.67%"}
                      y1="18"
                      x2={isReversed ? "16.67%" : "83.33%"}
                      y2="18"
                      className="stroke-cyan-400/80 timeline-dash-flow"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="grid grid-cols-3 gap-5">
                    {visualItems.map((item, colIdx) => {
                      // Sequential number in the snake flow
                      const seqNum = isReversed
                        ? globalStart + (row.length - 1 - colIdx) + 1
                        : globalStart + colIdx + 1;
                      return <SnakeCard key={colIdx} item={item} number={seqNum} />;
                    })}
                  </div>
                </div>

                {/* ── U-curve connector between rows ── */}
                {rowIdx < rows.length - 1 && (
                  <div
                    className="relative h-10"
                    style={{
                      width: "calc(100% / 6)",
                      marginLeft: isReversed ? "0" : "auto",
                    }}
                  >
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                    >
                      {isReversed ? (
                        <>
                          {/* Left-bending path background */}
                          <path
                            d="M 100,0 C 30,0 0,10 0,20 C 0,30 30,40 100,40"
                            fill="none"
                            className="stroke-slate-800/40"
                            strokeWidth="2"
                          />
                          {/* Left-bending path animated */}
                          <path
                            d="M 100,0 C 30,0 0,10 0,20 C 0,30 30,40 100,40"
                            fill="none"
                            className="stroke-cyan-400/80 timeline-dash-flow"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </>
                      ) : (
                        <>
                          {/* Right-bending path background */}
                          <path
                            d="M 0,0 C 70,0 100,10 100,20 C 100,30 70,40 0,40"
                            fill="none"
                            className="stroke-slate-800/40"
                            strokeWidth="2"
                          />
                          {/* Right-bending path animated */}
                          <path
                            d="M 0,0 C 70,0 100,10 100,20 C 100,30 70,40 0,40"
                            fill="none"
                            className="stroke-cyan-400/80 timeline-dash-flow"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </>
                      )}
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* ─── Vertical list — Mobile ──────────────────────────── */}
        <div className="md:hidden relative">
          {/* Left rail animated */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none">
              {/* Background track */}
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                className="stroke-slate-800/40"
                strokeWidth="2"
              />
              {/* Animated path */}
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                className="stroke-cyan-400/80 timeline-dash-flow"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="space-y-3 pl-2">
            {filtered.map((item, idx) => {
              const cfg = TYPE_CONFIG[item.type];
              return (
                <div key={idx} className="flex items-start gap-4 group">
                  {/* Mobile dot */}
                  <div
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
