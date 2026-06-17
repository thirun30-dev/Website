"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X, ChevronRight, Trophy, Clock, Users, Cpu, Globe, Shield,
  Cloud, Send, UserPlus
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
      { icon: <Cloud size={15} />, name: "Cloud Architecture", desc: "Serverless, containers, and multi-region deployments." },
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
  onOpenDetails,
  onOpenTeam,
}: {
  hack: Hackathon;
  onOpenDetails: () => void;
  onOpenTeam: () => void;
}) {
  return (
    <div
      className="group flex flex-col md:flex-row rounded-3xl border border-slate-800 bg-[#070712]/90 overflow-hidden
        hover:border-cyan-500/20 transition-all duration-500"
      style={{ boxShadow: `0 0 40px ${hack.glowColor}` }}
    >
      {/* LEFT — Poster */}
      <div className="relative w-full md:w-5/12 aspect-video md:aspect-auto min-h-[200px] overflow-hidden flex-shrink-0">
        <Image
          src={hack.poster}
          alt={hack.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#070712] hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070712] via-transparent to-transparent md:hidden" />

        {/* Prize badge */}
        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-amber-500/30 flex items-center gap-1.5">
          <Trophy size={12} className="text-amber-400" />
          <span className="text-xs font-black text-amber-400">{hack.prize} Prize Pool</span>
        </div>
      </div>

      {/* RIGHT — Details */}
      <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
        <div className="space-y-4">
          <div>
            <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${hack.accentColor}`}>
              Hackathon
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {hack.title}
            </h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">{hack.tagline}</p>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300">
              <Clock size={12} className={hack.accentColor} />
              {hack.duration}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300">
              <Users size={12} className={hack.accentColor} />
              {hack.teamSize}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300">
              <Cpu size={12} className={hack.accentColor} />
              {hack.domains.length} Domains
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            suppressHydrationWarning
            onClick={onOpenDetails}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest
              border transition-all duration-300 text-white
              ${hack.id === 1
                ? "border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                : "border-violet-500/50 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(167,139,250,0.25)]"
              }`}
          >
            View Details <ChevronRight size={14} />
          </button>
          <button
            suppressHydrationWarning
            onClick={onOpenTeam}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest
              border transition-all duration-300 text-white
              ${hack.id === 1
                ? "border-cyan-500/50 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 hover:from-cyan-500 hover:to-blue-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                : "border-violet-500/50 bg-gradient-to-r from-violet-600/80 to-purple-600/80 hover:from-violet-500 hover:to-purple-500 hover:shadow-[0_0_20px_rgba(167,139,250,0.35)]"
              }`}
          >
            <UserPlus size={14} /> Join / Create Team
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HACKATHON DETAILS MODAL
───────────────────────────────────────────── */
function HackathonDetailsModal({
  hack,
  onClose,
}: {
  hack: Hackathon;
  onClose: () => void;
}) {
  const isFirst = hack.id === 1;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      {/* Panel */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border bg-[#06060f]"
        style={{
          borderColor: isFirst ? "rgba(34,211,238,0.35)" : "rgba(167,139,250,0.35)",
          boxShadow: `0 0 60px ${hack.glowColor}, 0 0 120px ${hack.glowColor}`,
        }}
      >
        {/* Top title bar */}
        <div
          className="flex items-center justify-between px-6 py-3 border-b"
          style={{ borderColor: isFirst ? "rgba(34,211,238,0.2)" : "rgba(167,139,250,0.2)", background: "rgba(0,0,0,0.4)" }}
        >
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full animate-pulse ${isFirst ? "bg-cyan-400" : "bg-violet-400"}`} />
            <span className={`text-xs font-black uppercase tracking-[0.25em] ${isFirst ? "text-cyan-400" : "text-violet-400"}`}>
              {hack.title} - Details
            </span>
          </div>
          <button suppressHydrationWarning onClick={onClose} className="text-slate-500 hover:text-white transition-colors p-1">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-8 space-y-8 overflow-y-auto max-h-[calc(90vh-52px)]">
          {/* Domains */}
          <div>
            <h4 className={`text-[10px] font-black uppercase tracking-widest mb-4 ${isFirst ? "text-cyan-400" : "text-violet-400"}`}>
              ◈ Challenge Domains
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hack.domains.map((d, i) => (
                <div key={i} className={`flex gap-3 p-4 rounded-xl border bg-black/30 ${isFirst ? "border-cyan-500/15" : "border-violet-500/15"}`}>
                  <div className={`flex-shrink-0 mt-0.5 ${isFirst ? "text-cyan-400" : "text-violet-400"}`}>{d.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-white">{d.name}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div>
            <h4 className={`text-[10px] font-black uppercase tracking-widest mb-4 ${isFirst ? "text-cyan-400" : "text-violet-400"}`}>
              ◈ Rules & Guidelines
            </h4>
            <ul className="space-y-3">
              {hack.rules.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 text-[10px] font-black mt-0.5 w-6 h-6 rounded flex items-center justify-center border ${isFirst ? "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" : "border-violet-500/30 text-violet-400 bg-violet-500/5"}`}>
                    {i + 1}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed pt-0.5">{r}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TEAM REGISTRATION MODAL
───────────────────────────────────────────── */
function TeamRegistrationModal({
  hack,
  onClose,
}: {
  hack: Hackathon;
  onClose: () => void;
}) {
  const { badgeData, setBadgeData } = useRegistration();
  const [activeTab, setActiveTab] = useState<"create" | "join">("create");
  const [formData, setFormData] = useState({
    name: badgeData?.name || "", 
    email: badgeData?.email || "", 
    college: "", 
    team: "", 
    domain: "", 
    size: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [generatedTeamId, setGeneratedTeamId] = useState<string | null>(null);

  // removed useEffect to avoid react-hooks/set-state-in-effect error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const isCreating = activeTab === "create";
    const code = isCreating ? "TM-" + Math.random().toString(36).substring(2, 6).toUpperCase() : formData.team;

    try {
      const res = await fetch("/api/hackathon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Append the Team ID to the team name if creating
        body: JSON.stringify({ 
          ...formData, 
          team: isCreating ? `${formData.team} (ID: ${code})` : formData.team,
          teamName: formData.team,
          isCreating 
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setSubmitError(json.message ?? "Registration failed.");
        setSubmitting(false);
        return;
      }
      setGeneratedTeamId(code);
      setSubmitted(true);
      setBadgeData({
        name: formData.name,
        email: formData.email,
        role: isCreating ? "Team Lead" : "Team Member"
      });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 10000); // Increased timeout to give them time to copy the ID
    } catch {
      setSubmitError("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  const isFirst = hack.id === 1;
  const inputFocus = isFirst ? "focus:border-cyan-500 focus:ring-cyan-500/20" : "focus:border-violet-500 focus:ring-violet-500/20";
  const btnClass = isFirst
    ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
    : "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-[0_0_20px_rgba(167,139,250,0.25)] hover:shadow-[0_0_30px_rgba(167,139,250,0.4)]";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-hidden rounded-2xl border bg-[#06060f] flex flex-col"
        style={{
          borderColor: isFirst ? "rgba(34,211,238,0.35)" : "rgba(167,139,250,0.35)",
          boxShadow: `0 0 60px ${hack.glowColor}, 0 0 120px ${hack.glowColor}`,
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: isFirst ? "rgba(34,211,238,0.2)" : "rgba(167,139,250,0.2)", background: "rgba(0,0,0,0.4)" }}
        >
          <div className="flex items-center gap-3">
            <span className={`text-xs font-black uppercase tracking-[0.25em] ${isFirst ? "text-cyan-400" : "text-violet-400"}`}>
              Team Registration
            </span>
          </div>
          <button suppressHydrationWarning onClick={onClose} className="text-slate-500 hover:text-white transition-colors p-1">
            <X size={18} />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-4">
              <SuccessBadge name={formData.name} email={formData.email} role={activeTab === "create" ? "Team Lead" : "Team Member"} teamId={generatedTeamId || undefined} />
              {activeTab === "create" && (
                <p className="mt-4 text-xs text-slate-400 text-center animate-pulse">
                  Share this Team ID with your friends so they can join!
                </p>
              )}
            </div>
          ) : (
            <>
              {/* Toggle Create / Join */}
              <div className="flex mb-6 p-1 bg-slate-900/50 rounded-lg border border-slate-800">
                <button
                  suppressHydrationWarning
                  onClick={() => setActiveTab("create")}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
                    activeTab === "create" ? "bg-slate-800 text-white shadow-md" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  Create Team
                </button>
                <button
                  suppressHydrationWarning
                  onClick={() => setActiveTab("join")}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest rounded-md transition-all ${
                    activeTab === "join" ? "bg-slate-800 text-white shadow-md" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  Join Team
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      suppressHydrationWarning
                      required
                      value={formData.name}
                      readOnly
                      className="w-full bg-slate-900/40 border border-slate-800/50 rounded-xl px-3.5 py-2.5 text-sm text-slate-400 cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      suppressHydrationWarning
                      required
                      value={formData.email}
                      readOnly
                      className="w-full bg-slate-900/40 border border-slate-800/50 rounded-xl px-3.5 py-2.5 text-sm text-slate-400 cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">College / Institution</label>
                    <input
                      type="text"
                      suppressHydrationWarning
                      required
                      placeholder="e.g. Rajalakshmi Engineering College"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className={`w-full bg-black/40 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-1 ${inputFocus} transition-all`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">
                      {activeTab === "create" ? "Team Name" : "Team Name / Join Code"}
                    </label>
                    <input
                      type="text"
                      suppressHydrationWarning
                      required
                      placeholder={activeTab === "create" ? "e.g. ByteBusters" : "Enter team to join"}
                      value={formData.team}
                      onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                      className={`w-full bg-black/40 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none focus:ring-1 ${inputFocus} transition-all`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Domain</label>
                      <select
                        required
                        suppressHydrationWarning
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className={`w-full bg-black/40 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 ${inputFocus} transition-all`}
                      >
                        <option value="">Select</option>
                        {hack.domains.map((d) => (
                          <option key={d.name} value={d.name}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Team Size</label>
                      <select
                        required
                        suppressHydrationWarning
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className={`w-full bg-black/40 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 ${inputFocus} transition-all`}
                      >
                        <option value="">Select</option>
                        {["1", "2", "3", "4"].map((n) => (
                          <option key={n} value={n}>{n} member{n !== "1" ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {submitError && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-[11px]">
                    <span className="shrink-0">⚠</span> {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={submitting}
                  className={`w-full mt-4 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 flex items-center justify-center gap-2 ${btnClass} disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  <Send size={13} /> {submitting ? "Processing..." : activeTab === "create" ? "Create Team" : "Join Team"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function Hackathons() {
  const [detailsHack, setDetailsHack] = useState<Hackathon | null>(null);
  const [teamHack, setTeamHack] = useState<Hackathon | null>(null);
  const { badgeData } = useRegistration();

  const handleOpenTeam = (hack: Hackathon) => {
    if (!badgeData) {
      alert("Please register for the main event first to join the hackathon!");
      const formEl = document.getElementById("register-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    setTeamHack(hack);
  };

  return (
    <section id="hackathons" className="py-10 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-96 h-80 rounded-full bg-cyan-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-violet-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center space-y-3 mb-12">
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Compete & Win</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Hackathons</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Push your limits, build something extraordinary, and compete against the best student builders.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {hackathons.map((hack) => (
            <HackathonCard 
              key={hack.id} 
              hack={hack} 
              onOpenDetails={() => setDetailsHack(hack)} 
              onOpenTeam={() => handleOpenTeam(hack)}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      {detailsHack && (
        <HackathonDetailsModal hack={detailsHack} onClose={() => setDetailsHack(null)} />
      )}
      {teamHack && (
        <TeamRegistrationModal hack={teamHack} onClose={() => setTeamHack(null)} />
      )}
    </section>
  );
}
