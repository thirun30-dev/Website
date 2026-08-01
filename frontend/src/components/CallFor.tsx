"use client";

import React, { useState } from "react";
import { Mic, Building2, Send, CheckCircle2, X, Calendar, Clock, Handshake, Star, Award, Users } from "lucide-react";
import SuccessBadge from "./SuccessBadge";
import { useRegistration } from "@/context/RegistrationContext";
import { useEventData } from "@/context/EventDataContext";

/* ─────────────────────────────────────────────
   SHARED TYPES & HELPERS
───────────────────────────────────────────── */
type ModalType = "speaker" | "sponsor" | null;

const INPUT_BASE =
  "w-full bg-black/40 border border-slate-800 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all";

/* ─────────────────────────────────────────────
   SPEAKER FORM MODAL
───────────────────────────────────────────── */
function SpeakerModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", topic: "", abstract: "" });

  const { setBadgeData } = useRegistration();
  const { addSpeakerProposal } = useEventData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    addSpeakerProposal({
      name: formData.name,
      email: formData.email,
      role: "Speaker Applicant",
      company: "Pending Review",
      topic: formData.topic,
      bio: formData.abstract,
      linkedin: "",
    });

    setBadgeData({
      name: formData.name,
      email: formData.email,
      role: "Event Speaker (Pending Admin Confirmation)"
    });
    setTimeout(() => { onClose(); }, 8000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-lg border border-cyan-500/30 bg-[#06060f] shadow-[0_0_60px_rgba(34,211,238,0.12)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-cyan-500/15 bg-black/30">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">Speaker Proposal</span>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors p-1"><X size={17} /></button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-4">
              <SuccessBadge name={formData.name} email={formData.email} role="Event Speaker" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-white">Speaker Proposal Form</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Submit your topic & abstract for AWS Student Community Day.</p>
              </div>
              {[
                { label: "Full Name", key: "name", type: "text", ph: "e.g. Jane Doe" },
                { label: "Email Address", key: "email", type: "email", ph: "e.g. janedoe@rec.edu" },
                { label: "Session Title", key: "topic", type: "text", ph: "e.g. Scaling LLMs with Amazon Bedrock" },
              ].map(({ label, key, type, ph }) => (
                <div key={key} className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">{label}</label>
                  <input
                    type={type} required placeholder={ph}
                    value={(formData as Record<string, string>)[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className={`${INPUT_BASE} focus:border-cyan-500 focus:ring-cyan-500/20`}
                  />
                </div>
              ))}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">Abstract Summary</label>
                <textarea
                  required rows={3}
                  value={formData.abstract}
                  onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                  placeholder="What your talk covers, target audience, and live demo details."
                  className={`${INPUT_BASE} focus:border-cyan-500 focus:ring-cyan-500/20 resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-md text-xs font-extrabold uppercase tracking-widest text-white
                  bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500
                  shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                  transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={13} /> Submit Proposal
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SPONSOR FORM MODAL
───────────────────────────────────────────── */
function SponsorModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "", contact: "", email: "", tier: "", message: "",
  });

  const { setBadgeData } = useRegistration();
  const { addSponsorEnquiry } = useEventData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    addSponsorEnquiry({
      name: formData.company,
      category: formData.tier ? `${formData.tier.toUpperCase()} Partner` : "Sponsor Partner",
      desc: formData.message || "Sponsorship enquiry submitted",
      contactEmail: formData.email,
    });

    setBadgeData({
      name: formData.contact,
      email: formData.email,
      role: "Event Sponsor (Pending Admin Confirmation)"
    });
    setTimeout(() => { onClose(); }, 8000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-lg border border-amber-500/30 bg-[#06060f] shadow-[0_0_60px_rgba(251,191,36,0.10)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-amber-500/15 bg-black/30">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">Sponsorship Enquiry</span>
          </div>
          <button onClick={onClose} className="text-slate-550 hover:text-white transition-colors p-1"><X size={17} /></button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="py-4">
              <SuccessBadge name={formData.contact} email={formData.email} role="Event Sponsor" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-white">Sponsor Application</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Partner with us to support India's cloud student community.</p>
              </div>
              {[
                { label: "Company / Organisation Name", key: "company", type: "text", ph: "e.g. Acme Technologies" },
                { label: "Contact Person", key: "contact", type: "text", ph: "Your full name" },
                { label: "Business Email", key: "email", type: "email", ph: "partnerships@yourcompany.com" },
              ].map(({ label, key, type, ph }) => (
                <div key={key} className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">{label}</label>
                  <input
                    type={type} required placeholder={ph}
                    value={(formData as Record<string, string>)[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className={`${INPUT_BASE} focus:border-amber-500 focus:ring-amber-500/20`}
                  />
                </div>
              ))}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">Sponsorship Tier Interest</label>
                <select
                  required value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className={`${INPUT_BASE} focus:border-amber-500 focus:ring-amber-500/20`}
                >
                  <option value="">Select a tier</option>
                  <option value="title">Title Sponsor (Premium)</option>
                  <option value="gold">Gold Sponsor</option>
                  <option value="silver">Silver Sponsor</option>
                  <option value="community">Community Partner</option>
                  <option value="other">Other / Custom</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">Message (Optional)</label>
                <textarea
                  rows={2} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any specific requirements or questions about the partnership?"
                  className={`${INPUT_BASE} focus:border-amber-500 focus:ring-amber-500/20 resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-md text-xs font-extrabold uppercase tracking-widest text-white
                  bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500
                  shadow-[0_0_20px_rgba(251,191,36,0.18)] hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]
                  transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Handshake size={13} /> Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function CallFor() {
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <section id="cfs" className="py-10 sm:py-14 relative overflow-hidden bg-transparent border-y border-slate-900/40">
      {/* Background Grid & Ambient Glows (Matching Hero) */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[450px] h-60 rounded-3xl bg-cyan-600/10 blur-[130px] -rotate-12 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[450px] h-60 rounded-3xl bg-blue-600/10 blur-[140px] rotate-12 pointer-events-none" />

      <div className="w-[94%] max-w-[1440px] mx-auto relative z-10 space-y-8">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-6">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider text-[11px] px-3 py-0.5 rounded border border-cyan-500/20 bg-cyan-500/5">
            <Handshake size={13} className="text-cyan-400" /> Proposals & Partnerships
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Call for Proposals
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Apply as a speaker to present on stage or join as a sponsor to support the student builder community.
          </p>
        </div>

        {/* Split Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">

          {/* ── LEFT: Sponsors (Amber Theme) ── */}
          <div
            className="relative rounded-xl border border-amber-500/40
              bg-gradient-to-br from-[#1a1207]/95 via-[#0e0a16]/95 to-[#04060d]/95 backdrop-blur-xl flex flex-col overflow-hidden
              hover:border-amber-400/70 transition-all duration-500 group shadow-[0_0_40px_rgba(245,158,11,0.12)] hover:shadow-[0_0_50px_rgba(245,158,11,0.22)]"
          >
            {/* Top Accent Bar */}
            <div className="w-full h-[3px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]" />

            <div className="p-5 sm:p-7 flex flex-col flex-1 space-y-4">
              {/* Icon & Badge Header */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-lg bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-transform duration-300">
                  <Building2 size={20} />
                </div>
                <span className="text-[9.5px] font-sans font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md border border-amber-500/40 bg-amber-950/80 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                  PARTNER WITH US
                </span>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Call for Sponsors</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Partner with AWS Student Community Day 2026 and showcase your brand to a growing community of students, builders, developers, and future technology leaders.
                </p>
              </div>

              {/* Perks */}
              <ul className="space-y-2.5 border-y border-amber-500/15 py-3">
                {[
                  { icon: <Star size={13} />, text: "Brand visibility across event promotions and materials" },
                  { icon: <Award size={13} />, text: "Opportunity to engage with attendees and showcase solutions" },
                  { icon: <Users size={13} />, text: "Connect with emerging talent and future professionals" },
                  { icon: <Handshake size={13} />, text: "Support community-driven learning and innovation" },
                ].map((perk, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[11.5px] text-slate-200">
                    <span className="text-amber-400 flex-shrink-0 mt-0.5">{perk.icon}</span>
                    <span className="leading-snug font-medium">{perk.text}</span>
                  </li>
                ))}
              </ul>

              {/* Quick info chips */}
              <div className="space-y-2">
                <h5 className="text-[9.5px] text-amber-400/90 font-extrabold uppercase tracking-widest">Sponsorship Opportunities</h5>
                <div className="flex flex-wrap gap-1.5">
                  {["Gold Partner", "Silver Partner", "Community Partner"].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded text-[9.5px] font-sans font-black uppercase tracking-wider border border-amber-500/40 text-amber-300 bg-amber-950/80 backdrop-blur-md shadow-[0_0_8px_rgba(245,158,11,0.2)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed italic pt-0.5">
                Join us in empowering the next generation of cloud innovators while expanding your reach within the technology ecosystem.
              </p>

              {/* CTA */}
              <button
                onClick={() => setModal("sponsor")}
                className="mt-auto self-start flex items-center gap-2 px-6 py-2.5 rounded-md font-black text-[11px] uppercase tracking-widest
                  border border-amber-500/60 bg-gradient-to-r from-amber-500/20 via-orange-600/30 to-amber-500/20 text-amber-300
                  hover:bg-amber-500/30 hover:border-amber-400 hover:text-white
                  hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]
                  transition-all duration-300 cursor-pointer"
              >
                Apply as Sponsor <Handshake size={14} />
              </button>
            </div>
          </div>

          {/* ── RIGHT: Speakers (Cyan Theme) ── */}
          <div
            className="relative rounded-xl border border-cyan-500/40
              bg-gradient-to-br from-[#061838]/95 via-[#040924]/95 to-[#020617]/95 backdrop-blur-xl flex flex-col overflow-hidden
              hover:border-cyan-400/70 transition-all duration-500 group shadow-[0_0_40px_rgba(0,240,255,0.12)] hover:shadow-[0_0_50px_rgba(0,240,255,0.22)]"
          >
            {/* Top Accent Bar */}
            <div className="w-full h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />

            <div className="p-5 sm:p-7 flex flex-col flex-1 space-y-4">
              {/* Icon & Badge Header */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-lg bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform duration-300">
                  <Mic size={20} />
                </div>
                <span className="text-[9.5px] font-sans font-black uppercase tracking-widest px-2.5 py-0.5 rounded-md border border-cyan-500/40 bg-cyan-950/80 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                  SPEAK ON STAGE
                </span>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Call for Speakers</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Share your cloud expertise, AWS experiences, research insights, or innovative ideas with a vibrant community of students, developers, and technology enthusiasts at AWS Student Community Day 2026.
                </p>
              </div>

              {/* Perks */}
              <ul className="space-y-2.5 border-y border-cyan-500/15 py-3">
                {[
                  { icon: <Calendar size={13} />, text: "Deadline: August 10, 2026" },
                  { icon: <Clock size={13} />, text: "Duration: 30-minute speaking sessions" },
                  { icon: <Mic size={13} />, text: "Format: Presentation + Interactive Q&A" },
                ].map((perk, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[11.5px] text-slate-200">
                    <span className="text-cyan-400 flex-shrink-0 mt-0.5">{perk.icon}</span>
                    <span className="leading-snug font-medium">{perk.text}</span>
                  </li>
                ))}
              </ul>

              {/* Topic chips */}
              <div className="space-y-2">
                <h5 className="text-[9.5px] text-cyan-400/90 font-extrabold uppercase tracking-widest">Topics of Interest</h5>
                <div className="flex flex-wrap gap-1.5">
                  {["AWS Cloud", "Generative AI", "Serverless", "DevOps", "Security", "Emerging Tech"].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded text-[9.5px] font-sans font-black uppercase tracking-wider border border-cyan-500/40 text-cyan-300 bg-cyan-950/80 backdrop-blur-md shadow-[0_0_8px_rgba(0,240,255,0.2)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed italic pt-0.5">
                Inspire, educate, and help shape the future of the cloud community.
              </p>

              {/* CTA */}
              <button
                onClick={() => setModal("speaker")}
                className="mt-auto self-start flex items-center gap-2 px-6 py-2.5 rounded-md font-black text-[11px] uppercase tracking-widest
                  border border-cyan-500/60 bg-gradient-to-r from-cyan-500/20 via-blue-600/30 to-cyan-500/20 text-cyan-300
                  hover:bg-cyan-500/30 hover:border-cyan-400 hover:text-white
                  hover:shadow-[0_0_30px_rgba(0,240,255,0.35)]
                  transition-all duration-300 cursor-pointer"
              >
                Apply as Speaker <Mic size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {modal === "speaker" && <SpeakerModal onClose={() => setModal(null)} />}
      {modal === "sponsor" && <SponsorModal onClose={() => setModal(null)} />}
    </section>
  );
}
