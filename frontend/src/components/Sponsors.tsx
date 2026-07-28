"use client";

import React from "react";
import { Award, Users, Globe, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEventData } from "@/context/EventDataContext";

const AWSSmile = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#ff9900] fill-current">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"/>
  </svg>
);

const HashiCorpLogo = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#ffffff] fill-current">
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1 4.5h2v3h-2v-3zm0 5h2v3h-2v-3z"/>
  </svg>
);

const MongoDBLogo = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#00ed64] fill-current">
    <path d="M12 2C11.5 2 7 6 7 12c0 4.5 3.5 8 5 8s5-3.5 5-8c0-6-4.5-10-5-10zm0 15c-1.5 0-3-2-3-5s1.5-5 3-5 3 2 3 5-1.5 5-3 5z"/>
  </svg>
);

const DatadogLogo = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="text-[#632ca6] fill-current">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
  </svg>
);

export default function Sponsors() {
  const { sponsors } = useEventData();

  const scrollToCFS = () => {
    const el = document.getElementById("cfs");
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = rect.top + window.scrollY;
      window.scrollTo({
        top: scrollTop - 80,
        behavior: "smooth",
      });
    }
  };

  const getSponsorLogo = (logoKey: string, name: string) => {
    if (logoKey === "mongodb") return <MongoDBLogo />;
    if (logoKey === "hashicorp") return <HashiCorpLogo />;
    if (logoKey === "datadog") return <DatadogLogo />;
    if (logoKey.startsWith("/")) {
      return (
        <div className="relative w-10 h-10">
          <Image src={logoKey} alt={name} fill className="object-contain" />
        </div>
      );
    }
    return <Building2 className="text-cyan-400 w-8 h-8" />;
  };

  // Only confirmed sponsors show logos/images
  const confirmedSponsors = sponsors.filter((s) => s.confirmed && s.name !== "Amazon Web Services");
  const unconfirmedSponsors = sponsors.filter((s) => !s.confirmed);

  const partners = [
    { name: "AWS User Group Chennai", role: "Official Community Partner" },
    { name: "AWS Student Builder Groups REC", role: "Hosting Student Group" },
    { name: "Rajalakshmi Engineering College", role: "Academic Host Venue" }
  ];

  return (
    <section id="sponsors" className="py-10 relative overflow-hidden bg-black/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <div className="text-cyan-400 font-semibold uppercase tracking-wider text-xs">
            Partners & Sponsors
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Supporting the Builders
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Empowering the cloud student community in Chennai to learn, build, and deploy.
          </p>
        </div>

        {/* 1. Title Sponsor Box (AWS) */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Title Cloud Partner
          </h3>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass-panel rounded-[24px] p-8 md:p-10 border border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#070712]/80 shadow-[0_0_50px_rgba(255,153,0,0.08)] hover:border-[#ff9900]/30 hover:shadow-[0_0_50px_rgba(255,153,0,0.18)] transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-[#ff9900]/20 shadow-inner">
                <AWSSmile />
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-black text-white tracking-tight">Amazon Web Services</h4>
                <p className="text-xs text-[#ff9900] font-bold uppercase tracking-wider mt-0.5">Cloud Computing Services Provider</p>
              </div>
            </div>
            <div className="text-slate-400 text-xs sm:text-sm text-center sm:text-right max-w-xs leading-relaxed">
              Providing technical mentoring, builder credits, and exclusive training resources for AWS Community Day.
            </div>
          </motion.div>
        </div>

        {/* 2. Confirmed Sponsors Image / Logo Gallery */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Confirmed Event Sponsors
            </h3>
            <span className="text-[10px] text-cyan-400 font-mono">
              {confirmedSponsors.length} Confirmed
            </span>
          </div>
          
          {confirmedSponsors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Confirmed Sponsors: Only images/logos display */}
              {confirmedSponsors.map((sponsor) => (
                <motion.div
                  key={sponsor.id}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-panel p-6 rounded-2xl border border-slate-800 bg-[#070712]/90 flex flex-col items-center justify-center text-center space-y-4 h-48 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group"
                >
                  {/* Logo Image */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {getSponsorLogo(sponsor.logo, sponsor.name)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white tracking-wide">{sponsor.name}</h4>
                    <p className="text-[11px] text-cyan-400 font-semibold mt-0.5">{sponsor.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty space until admin confirms sponsors */
            <div className="h-28 flex items-center justify-center border border-dashed border-amber-500/20 rounded-2xl max-w-xl mx-auto bg-[#070712]/50 px-6 text-center">
              <p className="text-sm font-bold text-amber-400/90 tracking-wider uppercase">
                Sponsor details will be displayed soon
              </p>
            </div>
          )}
        </div>

        {/* 3. Community Partners Grid */}
        <div className="space-y-8 max-w-5xl mx-auto pt-4">
          <h3 className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest">
            Community Partners
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-6 rounded-xl border border-slate-800/80 bg-[#070712]/70 flex items-center gap-4 hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-blue-950/30 border border-blue-500/20 flex items-center justify-center text-[#00f0ff] flex-shrink-0">
                  {idx === 0 ? <Globe size={16} /> : idx === 1 ? <Users size={16} /> : <Award size={16} />}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">{partner.name}</h4>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">{partner.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
