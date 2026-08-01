"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  X, ChevronRight, Trophy, Clock, Users, Cpu, Globe, Shield,
  Layers, Send
} from "lucide-react";
import SuccessBadge from "./SuccessBadge";
import { useRegistration } from "@/context/RegistrationContext";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
interface Hackathon {
  id: number;
  title: string;
  tagline: string;
  poster: string;
  prize: string;
  duration: string;
  teamSize: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  domains: { icon: React.ReactNode; name: string; desc: string }[];
  rules: string[];
}

const hackathons: Hackathon[] = [
  {
    id: 1,
    title: "Cloud Innovation Challenge",
    tagline: "Build scalable cloud-native apps on AWS and compete for glory.",
    poster: "/hackathon_poster_1.png",
    prize: "₹50,000",
    duration: "24 Hours",
    teamSize: "2–4 Members",
    accentColor: "text-cyan-400",
    glowColor: "rgba(34,211,238,0.12)",
    borderColor: "border-cyan-500/30",
    domains: [
      { icon: <Layers size={15} />, name: "Cloud Architecture", desc: "Serverless, containers, and multi-region deployments." },
      { icon: <Cpu size={15} />, name: "AI & Machine Learning", desc: "LLM integrations, Amazon Bedrock, SageMaker." },
      { icon: <Globe size={15} />, name: "Web3 & Decentralized Apps", desc: "Blockchain meets cloud — hybrid dApps." },
      { icon: <Shield size={15} />, name: "Cloud Security", desc: "Zero-trust, IAM hardening, threat detection." },
    ],
    rules: [
      "Teams of 2–4 members from any college or institution.",
      "All solutions must be deployed on AWS services.",
      "Projects must be built from scratch within 24 hours.",
      "Open-source libraries are allowed; paid APIs (except AWS) are not.",
      "Each team must submit a 3-minute demo video with source code.",
      "Plagiarism or use of pre-built templates results in disqualification.",
      "Final judging based on innovation, scalability, and presentation.",
    ],
  },
];


/* ─────────────────────────────────────────────
   HACKATHON CARD
───────────────────────────────────────────── */
function HackathonCard({
  hack,
  onOpen,
}: {
  hack: Hackathon;
  onOpen: () => void;
}) {
  return (
    <div className="rounded-md border border-cyan-500/25 bg-[#030712]/90 backdrop-blur-xl p-5 sm:p-6 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.12)] transition-all duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* LEFT — Flush Poster (Zero Empty Side Space) */}
        <div className="lg:col-span-4 relative rounded-md overflow-hidden shrink-0 aspect-square border border-slate-800/80">
          <Image
            src={hack.poster}
            alt={hack.title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 1024px) 100vw, 30vw"
            priority
          />
        </div>

        {/* RIGHT — Event Details Panel */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
          {/* Header Row: Status Badges, Title & Tagline */}
          <div className="space-y-1.5 border-b border-slate-800/80 pb-3.5">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold tracking-widest uppercase">
                  FEATURED HACKATHON
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase">
                  • AWS SBG REC
                </span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open for Registrations
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
              {hack.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {hack.tagline}
            </p>
          </div>

          {/* 3-Column Metrics Bar with Heavy Stamp Punch Slam Effect Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-slate-800/80 border-b border-slate-800/80 pb-3.5 gap-y-3">
            <div className="space-y-1 sm:pr-4">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <Trophy size={12} className="text-amber-400" /> Total Prize Pool
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.15, y: -35 }}
                whileInView={{
                  opacity: [0, 1, 1, 1],
                  scale: [0.15, 1.45, 0.92, 1],
                  y: [-35, 6, -2, 0],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  times: [0, 0.5, 0.75, 1],
                  ease: "easeInOut",
                  delay: 0.1,
                }}
                className="text-xl sm:text-2xl font-extrabold text-amber-300 tracking-tight transform-gpu origin-left"
              >
                {hack.prize}
              </motion.div>
            </div>

            <div className="space-y-1 sm:px-5">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <Clock size={12} className="text-cyan-400" /> Event Duration
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.15, y: -35 }}
                whileInView={{
                  opacity: [0, 1, 1, 1],
                  scale: [0.15, 1.45, 0.92, 1],
                  y: [-35, 6, -2, 0],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  times: [0, 0.5, 0.75, 1],
                  ease: "easeInOut",
                  delay: 0.25,
                }}
                className="text-xl sm:text-2xl font-extrabold text-cyan-300 tracking-tight transform-gpu origin-left"
              >
                {hack.duration}
              </motion.div>
            </div>

            <div className="space-y-1 sm:pl-5">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <Users size={12} className="text-purple-400" /> Team Size
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.15, y: -35 }}
                whileInView={{
                  opacity: [0, 1, 1, 1],
                  scale: [0.15, 1.45, 0.92, 1],
                  y: [-35, 6, -2, 0],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  times: [0, 0.5, 0.75, 1],
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="text-xl sm:text-2xl font-extrabold text-purple-300 tracking-tight transform-gpu origin-left"
              >
                {hack.teamSize}
              </motion.div>
            </div>
          </div>

          {/* Track Domains */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <Layers size={13} className="text-cyan-400" />
              <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                Challenge Tracks
              </h4>
              <div className="h-px flex-1 bg-slate-800/80" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {hack.domains.map((domain, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-md bg-[#04091a]/80 border border-slate-800/80 flex items-center gap-2.5"
                >
                  <span className="text-cyan-400 shrink-0">{domain.icon}</span>
                  <h5 className="text-xs font-bold text-white truncate">{domain.name}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-1 flex items-center justify-between flex-wrap gap-3">
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Built & Deployed on AWS</span>
            </div>

            <button
              onClick={onOpen}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-300 cursor-pointer"
            >
              <Trophy size={13} className="text-cyan-400 group-hover:text-cyan-300" />
              <span>Register Team & View Details</span>
              <ChevronRight size={14} className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HACKATHON MODAL
───────────────────────────────────────────── */
function HackathonModal({
  hack,
  onClose,
}: {
  hack: Hackathon;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    team: "",
    domain: "",
    size: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { setBadgeData } = useRegistration();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setBadgeData({
      name: formData.name,
      email: formData.email,
      role: "Hackathon Builder"
    });
    setSubmitted(true);
  };

  const isFirst = hack.id === 1;
  const accentBorder = isFirst ? "border-cyan-500/30" : "border-violet-500/30";
  const badgeBg = isFirst ? "bg-cyan-500/10 text-cyan-400" : "bg-violet-500/10 text-violet-400";
  const btnClass = isFirst
    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.35)]"
    : "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 shadow-[0_0_25px_rgba(139,92,246,0.35)]";
  const inputFocus = isFirst ? "focus:border-cyan-500 focus:ring-cyan-500/30" : "focus:border-violet-500 focus:ring-violet-500/30";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-4xl bg-[#070913] border ${accentBorder} rounded-md shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#04050b]">
          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded ${badgeBg}`}>
              {hack.title}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Registration Form
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80 overflow-y-auto">
          {/* ── LEFT: Hackathon Details ── */}
          <div className="w-full lg:w-[55%] p-5 sm:p-6 space-y-5 overflow-y-auto">
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">{hack.title}</h3>
              <p className="text-xs text-slate-350 leading-relaxed">{hack.tagline}</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded-md bg-[#040612] border border-slate-800/80 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Prize Pool</p>
                <p className="text-sm font-extrabold text-amber-400 mt-0.5">{hack.prize}</p>
              </div>
              <div className="p-3 rounded-md bg-[#040612] border border-slate-800/80 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duration</p>
                <p className="text-sm font-extrabold text-cyan-400 mt-0.5">{hack.duration}</p>
              </div>
              <div className="p-3 rounded-md bg-[#040612] border border-slate-800/80 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Team Size</p>
                <p className="text-sm font-extrabold text-slate-200 mt-0.5">{hack.teamSize}</p>
              </div>
            </div>

            {/* Domains */}
            <div>
              <h4 className={`text-[10px] font-black uppercase tracking-widest mb-3 ${isFirst ? "text-cyan-400" : "text-violet-400"}`}>
                ◈ Track Domains
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {hack.domains.map((d, i) => (
                  <div key={i} className="p-3 rounded-md bg-[#040612] border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={isFirst ? "text-cyan-400" : "text-violet-400"}>{d.icon}</span>
                      <p className="text-xs font-bold text-white">{d.name}</p>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div>
              <h4 className={`text-[10px] font-black uppercase tracking-widest mb-3 ${isFirst ? "text-cyan-400" : "text-violet-400"}`}>
                ◈ Rules & Guidelines
              </h4>
              <ul className="space-y-2">
                {hack.rules.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className={`flex-shrink-0 text-[10px] font-black mt-0.5 w-5 h-5 rounded-sm flex items-center justify-center border ${isFirst ? "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" : "border-violet-500/30 text-violet-400 bg-violet-500/5"}`}>
                      {i + 1}
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{r}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Registration Form ── */}
          <div className="w-full lg:w-[45%] p-5 sm:p-6 flex flex-col bg-[#040409]">
            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center py-4">
                <SuccessBadge name={formData.name} email={formData.email} role="Hackathon Builder" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
                <div>
                  <h4 className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isFirst ? "text-cyan-400" : "text-violet-400"}`}>
                    ◈ Register Your Team
                  </h4>
                  <p className="text-[11px] text-slate-400">Fill in the details below to secure your spot.</p>
                </div>

                <div className="space-y-3 flex-1">
                  {[
                    { label: "Full Name", key: "name", type: "text", ph: "Your full name" },
                    { label: "Email Address", key: "email", type: "email", ph: "you@example.com" },
                    { label: "College / Institution", key: "college", type: "text", ph: "e.g. Rajalakshmi Engineering College" },
                    { label: "Team Name", key: "team", type: "text", ph: "e.g. ByteBusters" },
                  ].map(({ label, key, type, ph }) => (
                    <div key={key} className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">{label}</label>
                      <input
                        type={type}
                        required
                        placeholder={ph}
                        value={(formData as Record<string, string>)[key]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        className={`w-full bg-[#05060c] border border-slate-800 rounded-md px-3.5 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${inputFocus} transition-all`}
                      />
                    </div>
                  ))}

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">Domain</label>
                      <select
                        required
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className={`w-full bg-[#05060c] border border-slate-800 rounded-md px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-1 ${inputFocus} transition-all`}
                      >
                        <option value="">Select</option>
                        {hack.domains.map((d) => (
                          <option key={d.name} value={d.name}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">Team Size</label>
                      <select
                        required
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className={`w-full bg-[#05060c] border border-slate-800 rounded-md px-3.5 py-3 text-sm text-white focus:outline-none focus:ring-1 ${inputFocus} transition-all`}
                      >
                        <option value="">Select</option>
                        {["1", "2", "3", "4"].map((n) => (
                          <option key={n} value={n}>{n} member{n !== "1" ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-md text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 flex items-center justify-center gap-2 ${btnClass}`}
                >
                  <Send size={13} /> Register Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function Hackathons() {
  const [activeHack, setActiveHack] = useState<Hackathon | null>(null);

  return (
    <section id="hackathons" className="py-10 sm:py-14 relative overflow-hidden bg-transparent">
      {/* Background Grid & Ambient Glows (Matching Hero) */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[500px] h-64 rounded-3xl bg-cyan-600/10 blur-[130px] -rotate-12 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-64 rounded-3xl bg-blue-600/10 blur-[140px] rotate-12 pointer-events-none" />

      <div className="w-[94%] max-w-[1440px] mx-auto relative z-10 space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2.5 max-w-xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md">
            <Trophy size={13} className="text-cyan-400" />
            <span className="text-[11px] font-semibold text-cyan-300 tracking-wide uppercase">
              Compete & Win
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight uppercase tracking-tight">
            Hackathons
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Push your limits, build something extraordinary, and compete against the best student builders.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {hackathons.map((hack) => (
            <HackathonCard key={hack.id} hack={hack} onOpen={() => setActiveHack(hack)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeHack && (
        <HackathonModal hack={activeHack} onClose={() => setActiveHack(null)} />
      )}
    </section>
  );
}
