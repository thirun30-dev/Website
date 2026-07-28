"use client";

import React, { useState } from "react";
import { Terminal, Users, Coffee, Mic, CalendarDays, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
  description: string;
  type: "keynote" | "technical" | "break" | "general";
}

const agenda: AgendaItem[] = [
  {
    time: "08:00 AM – 09:00 AM",
    title: "Registration & Networking",
    speaker: "REC Organizers",
    description: "Collect your ID badges, welcome kits, and networking pass.",
    type: "general",
  },
  {
    time: "09:00 AM – 09:15 AM",
    title: "Welcome Address",
    speaker: "REC Faculty & Student Leads",
    description: "Welcome speech, lamp lighting, and briefing of Community Day goals.",
    type: "general",
  },
  {
    time: "09:15 AM – 09:30 AM",
    title: "Sponsor Speech 1",
    speaker: "Industry Partner",
    description: "Insights on cloud careers and industry requirements.",
    type: "keynote",
  },
  {
    time: "09:30 AM – 09:45 AM",
    title: "Sponsor Speech 2",
    speaker: "Industry Partner",
    description: "Technological trends and internship opportunities.",
    type: "keynote",
  },
  {
    time: "09:45 AM – 10:15 AM",
    title: "Track Allocation & Networking",
    speaker: "Volunteers",
    description: "Guidance on halls and setup for parallel tracks.",
    type: "general",
  },
  {
    time: "10:15 AM – 10:45 AM",
    title: "Technical Session 1",
    speaker: "Parallel Session Speakers",
    description: "Session 1 running in parallel: Track 1, Track 2, and Track 3.",
    type: "technical",
  },
  {
    time: "10:45 AM – 11:00 AM",
    title: "Tea Break & Hall Transition",
    speaker: "Attendees & Experts",
    description: "Refuel and move to the respective track halls.",
    type: "break",
  },
  {
    time: "11:00 AM – 11:30 AM",
    title: "Technical Session 2",
    speaker: "Parallel Session Speakers",
    description: "Session 2 running in parallel: Track 1, Track 2, and Track 3.",
    type: "technical",
  },
  {
    time: "11:30 AM – 12:00 PM",
    title: "Technical Session 3",
    speaker: "Parallel Session Speakers",
    description: "Session 3 running in parallel: Track 1, Track 2, and Track 3.",
    type: "technical",
  },
  {
    time: "12:00 PM – 01:00 PM",
    title: "Lunch Break",
    speaker: "Attendees & Partner Desk",
    description: "Complimentary buffet lunch and partner desk visits.",
    type: "break",
  },
  {
    time: "01:00 PM – 01:30 PM",
    title: "Technical Session 4",
    speaker: "Parallel Session Speakers",
    description: "Session 4 running in parallel: Track 1, Track 2, and Track 3.",
    type: "technical",
  },
  {
    time: "01:30 PM – 02:00 PM",
    title: "Technical Session 5",
    speaker: "Parallel Session Speakers",
    description: "Session 5 running in parallel: Track 1, Track 2, and Track 3.",
    type: "technical",
  },
  {
    time: "02:00 PM – 02:30 PM",
    title: "Tea Break & Networking",
    speaker: "Attendees & Experts",
    description: "Refuel with snacks and network with builders.",
    type: "break",
  },
  {
    time: "02:30 PM – 03:00 PM",
    title: "Quiz / Sponsor Activity",
    speaker: "Quiz Masters",
    description: "AWS trivia quiz and exciting sponsor engagement challenges.",
    type: "general",
  },
  {
    time: "03:00 PM – 03:45 PM",
    title: "Closing Ceremony",
    speaker: "REC Faculty & Student Leads",
    description: "Closing address, raffle draws, and community builder announcements.",
    type: "keynote",
  },
  {
    time: "03:45 PM – 04:00 PM",
    title: "Group Photo Session",
    speaker: "All Attendees",
    description: "Capturing memories of AWS Student Community Day 2026.",
    type: "general",
  },
  {
    time: "04:00 PM – 04:30 PM",
    title: "Goodies & Swag Distribution",
    speaker: "Volunteers",
    description: "Collect your event certificates and custom community swags.",
    type: "general",
  },
  {
    time: "05:00 PM onwards",
    title: "College Closing Time",
    speaker: "Organizers & Attendees",
    description: "End of AWS Student Community Day 2026. Have a safe journey back!",
    type: "general",
  },
];

const TYPE_CONFIG = {
  keynote: {
    icon: <Mic size={11} />,
    label: "Keynote",
    dotBg: "bg-cyan-400",
    dotGlow: "shadow-[0_0_14px_rgba(34,211,238,0.6)]",
    badge: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
    cardBorder: "border-cyan-500/20 hover:border-cyan-500/50",
    cardGlow: "hover:shadow-[0_8px_30px_rgba(34,211,238,0.12)]",
    timeCls: "text-cyan-400",
    topAccent: "bg-gradient-to-r from-cyan-500/60 to-cyan-400/20",
  },
  technical: {
    icon: <Terminal size={11} />,
    label: "Tech",
    dotBg: "bg-blue-400",
    dotGlow: "shadow-[0_0_14px_rgba(96,165,250,0.6)]",
    badge: "bg-blue-500/10 border-blue-500/25 text-blue-400",
    cardBorder: "border-blue-500/20 hover:border-blue-500/50",
    cardGlow: "hover:shadow-[0_8px_30px_rgba(96,165,250,0.12)]",
    timeCls: "text-blue-400",
    topAccent: "bg-gradient-to-r from-blue-500/60 to-blue-400/20",
  },
  break: {
    icon: <Coffee size={11} />,
    label: "Break",
    dotBg: "bg-amber-400",
    dotGlow: "shadow-[0_0_14px_rgba(251,191,36,0.5)]",
    badge: "bg-amber-500/10 border-amber-500/25 text-amber-400",
    cardBorder: "border-amber-500/20 hover:border-amber-500/50",
    cardGlow: "hover:shadow-[0_8px_30px_rgba(251,191,36,0.10)]",
    timeCls: "text-amber-400",
    topAccent: "bg-gradient-to-r from-amber-500/60 to-amber-400/20",
  },
  general: {
    icon: <Users size={11} />,
    label: "General",
    dotBg: "bg-slate-400",
    dotGlow: "shadow-[0_0_10px_rgba(148,163,184,0.35)]",
    badge: "bg-slate-500/10 border-slate-500/25 text-slate-400",
    cardBorder: "border-slate-700/40 hover:border-slate-500/60",
    cardGlow: "hover:shadow-[0_8px_30px_rgba(148,163,184,0.08)]",
    timeCls: "text-slate-400",
    topAccent: "bg-gradient-to-r from-slate-600/50 to-slate-500/10",
  },
};

interface TrackSession {
  session: string;
  time: string;
  topic: string;
  speaker: string;
}

interface TrackInfo {
  name: string;
  badge: string;
  glow: string;
  border: string;
  textBadge: string;
  sessions: TrackSession[];
}

const TRACKS_DATA: TrackInfo[] = [
  {
    name: "Track 1: Cloud & DevOps",
    badge: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    glow: "shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]",
    border: "border-blue-500/20 hover:border-blue-500/40",
    textBadge: "text-blue-400",
    sessions: [
      { session: "Session 1", time: "10:15 AM – 10:45 AM", topic: "Track 1: Session Details To Be Announced", speaker: "" },
      { session: "Break", time: "10:45 AM – 11:00 AM", topic: "Tea Break & Hall Transition", speaker: "" },
      { session: "Session 2", time: "11:00 AM – 11:30 AM", topic: "Track 1: Session Details To Be Announced", speaker: "" },
      { session: "Session 3", time: "11:30 AM – 12:00 PM", topic: "Track 1: Session Details To Be Announced", speaker: "" },
      { session: "Break", time: "12:00 PM – 01:00 PM", topic: "Lunch Break & Networking", speaker: "" },
      { session: "Session 4", time: "01:00 PM – 01:30 PM", topic: "Track 1: Session Details To Be Announced", speaker: "" },
      { session: "Session 5", time: "01:30 PM – 02:00 PM", topic: "Track 1: Session Details To Be Announced", speaker: "" },
    ],
  },
  {
    name: "Track 2: AI & Generative AI",
    badge: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    glow: "shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    textBadge: "text-cyan-400",
    sessions: [
      { session: "Session 1", time: "10:15 AM – 10:45 AM", topic: "Track 2: Session Details To Be Announced", speaker: "" },
      { session: "Break", time: "10:45 AM – 11:00 AM", topic: "Tea Break & Hall Transition", speaker: "" },
      { session: "Session 2", time: "11:00 AM – 11:30 AM", topic: "Track 2: Session Details To Be Announced", speaker: "" },
      { session: "Session 3", time: "11:30 AM – 12:00 PM", topic: "Track 2: Session Details To Be Announced", speaker: "" },
      { session: "Break", time: "12:00 PM – 01:00 PM", topic: "Lunch Break & Networking", speaker: "" },
      { session: "Session 4", time: "01:00 PM – 01:30 PM", topic: "Track 2: Session Details To Be Announced", speaker: "" },
      { session: "Session 5", time: "01:30 PM – 02:00 PM", topic: "Track 2: Session Details To Be Announced", speaker: "" },
    ],
  },
  {
    name: "Track 3: Career & Community",
    badge: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    glow: "shadow-[0_0_25px_rgba(245,158,11,0.12)] hover:shadow-[0_0_35px_rgba(245,158,11,0.22)]",
    border: "border-amber-500/20 hover:border-amber-500/40",
    textBadge: "text-amber-400",
    sessions: [
      { session: "Session 1", time: "10:15 AM – 10:45 AM", topic: "Track 3: Session Details To Be Announced", speaker: "" },
      { session: "Break", time: "10:45 AM – 11:00 AM", topic: "Tea Break & Hall Transition", speaker: "" },
      { session: "Session 2", time: "11:00 AM – 11:30 AM", topic: "Track 3: Session Details To Be Announced", speaker: "" },
      { session: "Session 3", time: "11:30 AM – 12:00 PM", topic: "Track 3: Session Details To Be Announced", speaker: "" },
      { session: "Break", time: "12:00 PM – 01:00 PM", topic: "Lunch Break & Networking", speaker: "" },
      { session: "Session 4", time: "01:00 PM – 01:30 PM", topic: "Track 3: Session Details To Be Announced", speaker: "" },
      { session: "Session 5", time: "01:30 PM – 02:00 PM", topic: "Track 3: Session Details To Be Announced", speaker: "" },
    ],
  },
];

const FILTERS = ["all", "keynote", "technical", "break", "general"] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 16 },
  },
};

/** Single agenda card — box style */
function AgendaCard({ item, number }: { item: AgendaItem; number: number }) {
  const cfg = TYPE_CONFIG[item.type];
  return (
    <motion.div
      variants={cardVariants}
      className={`group relative flex flex-col rounded-2xl border bg-[#070712]/90
        transition-all duration-300 overflow-hidden ${cfg.cardBorder} ${cfg.cardGlow}`}
    >
      {/* Coloured top accent stripe */}
      <div className={`h-[3px] w-full ${cfg.topAccent}`} />

      <div className="px-4 pt-4 pb-5 flex flex-col gap-2 flex-1">
        {/* Row: number badge + time */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-slate-950 flex-shrink-0
              ${cfg.dotBg} ${cfg.dotGlow}`}
          >
            {number}
          </span>
          <span
            className={`text-[10px] sm:text-[11px] font-mono font-black tracking-wide ${cfg.timeCls}
              px-2 py-0.5 rounded bg-slate-950/70 border border-current/15 leading-none`}
          >
            {item.time}
          </span>
        </div>

        {/* Type badge + title */}
        <div className="flex items-start gap-2 mt-1">
          <span
            className={`flex-shrink-0 inline-flex items-center gap-0.5 px-1.5 py-0.5
              rounded text-[9px] font-black uppercase tracking-wider border mt-0.5 ${cfg.badge}`}
          >
            {cfg.icon}
            <span className="hidden sm:inline ml-0.5">{cfg.label}</span>
          </span>
          <h3 className="text-[13px] font-bold text-white leading-snug">{item.title}</h3>
        </div>

        {/* Description */}
        <p className="text-[11px] text-slate-400 leading-relaxed mt-auto">{item.description}</p>

        {/* Speaker */}
        {item.speaker && (
          <p className="text-[10px] text-slate-600 font-medium">{item.speaker}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Schedule({ isPreview = false }: { isPreview?: boolean }) {
  const [filter, setFilter] = useState<string>("all");
  const filtered = agenda.filter((item) => filter === "all" || item.type === filter);

  // In preview mode show only first 6 items from the base agenda (no filter)
  const displayItems = isPreview ? agenda.slice(0, 6) : filtered;

  return (
    <section id="schedule" className="py-10 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-cyan-600/5 blur-[150px]" />
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="text-center space-y-3 mb-12"
        >
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">
            Event Agenda
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Event Schedule</h2>
          <p className="text-slate-400 text-sm max-w-sm mx-auto">
            {isPreview
              ? "A sneak peek at the day — 6 of 18 sessions shown."
              : "A full day of cloud, AI, and community sessions packed into one timeline."}
          </p>

          {/* Filter pills — full page only */}
          {!isPreview && (
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
          )}
        </motion.div>

        {/* ─── Box Grid ─────────────────────────────────────────── */}
        <motion.div
          key={isPreview ? "preview" : filter}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {displayItems.map((item, idx) => (
            <AgendaCard key={`${item.title}-${idx}`} item={item} number={idx + 1} />
          ))}
        </motion.div>

        {/* ─── Preview CTA — big hero-style redirect button ─── */}
        {isPreview && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, type: "spring", stiffness: 80, damping: 14 }}
            className="mt-12 relative"
          >
            {/* Glow halo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-24 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            {/* Card-style CTA block */}
            <div className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#070712] to-[#020d1a] overflow-hidden">
              {/* Top accent line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              <div className="px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Left text */}
                <div className="text-center sm:text-left space-y-1.5">
                  <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">Full Agenda</p>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    18 Sessions · 3 Tracks · 1 Day
                  </h3>
                  <p className="text-slate-400 text-sm">
                    See the complete schedule with filters, speakers, and parallel track breakdowns.
                  </p>
                </div>

                {/* Right button */}
                <Link
                  href="/schedule"
                  className="group flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl
                    bg-gradient-to-r from-cyan-500 to-blue-600
                    hover:from-cyan-400 hover:to-blue-500
                    text-white font-extrabold text-sm uppercase tracking-wider
                    shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.55)]
                    transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <CalendarDays size={18} />
                  View Full Schedule
                  <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 flex gap-1 opacity-20">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ─── Parallel Session Tracks Breakout ─────────────────── */}
        {!isPreview && (
          <div className="mt-24 pt-16 border-t border-slate-900/60 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center space-y-3 mb-12"
            >
              <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">
                Event Tracks
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Technical Tracks</h3>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                Session details for each of our three parallel technical tracks.
              </p>
            </motion.div>

            {/* 3-column track grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              {TRACKS_DATA.map((track, tIdx) => (
                <motion.div
                  key={tIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: tIdx * 0.08 }}
                  className="space-y-4"
                >
                  {/* Track header */}
                  <div className="space-y-1.5 px-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider uppercase ${track.badge}`}>
                      Track {tIdx + 1}
                    </span>
                    <h4 className="text-xl font-extrabold text-white tracking-tight">
                      {track.name.split(": ")[1]}
                    </h4>
                  </div>

                  {/* Session list */}
                  <div className="space-y-4">
                    {track.sessions.map((sess, sIdx) => {
                      const isBreak = sess.session.toLowerCase().includes("break");
                      return (
                        <motion.div
                          key={sIdx}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                          className={`rounded-2xl border p-5 space-y-3.5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${
                            isBreak
                              ? "bg-[#120a2b]/80 border-purple-500/25 shadow-[0_0_15px_rgba(168,85,247,0.12)]"
                              : `bg-[#070712]/90 ${track.border} ${track.glow}`
                          }`}
                        >
                          {/* Time & badge row */}
                          <div className="flex items-center justify-between gap-3">
                            <span className={`text-xs font-bold font-mono ${isBreak ? "text-purple-400" : track.textBadge}`}>
                              {sess.time}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border uppercase tracking-wider ${
                                isBreak
                                  ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                                  : track.badge
                              }`}
                            >
                              {isBreak && <Coffee className="w-3 h-3 text-purple-400 animate-pulse" />}
                              {sess.session}
                            </span>
                          </div>

                          {/* Topic */}
                          <h5 className="text-[15px] font-bold text-slate-100 leading-snug line-clamp-2">
                            {sess.topic}
                          </h5>

                          {/* Speaker */}
                          {sess.speaker && (
                            <div className="pt-0.5">
                              <p className="text-[11px] font-medium text-slate-500">{sess.speaker}</p>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
