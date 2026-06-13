"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MapPin, Sparkles, Server, Cpu, Cloud, Database } from "lucide-react";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Dynamic Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Decorative Neon Blue Glowing Circles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-cyan-600/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-blue-600/10 blur-[150px] animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} />
              3rd Industry Academia Tech Conference
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              AWS Student <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-[#00f0ff] bg-clip-text text-transparent text-glow">
                Community Day 2026
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              The premier gathering for student cloud builders, developer practitioners, and AI enthusiasts. 
              Elevate your skills, network with AWS professionals, and architect the future at REC College.
            </p>

            {/* Event Meta Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-2">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                  <Calendar size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Date</p>
                  <p className="text-sm font-bold">September 12, 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Venue</p>
                  <p className="text-sm font-bold">REC Campus, Chennai</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#registration"
                onClick={(e) => handleScroll(e, "#registration")}
                className="neon-btn w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white text-center"
              >
                Secure Your Spot
              </a>
              <a
                href="#schedule"
                onClick={(e) => handleScroll(e, "#schedule")}
                className="neon-btn-secondary w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-center"
              >
                View Event Schedule
              </a>
            </div>
          </div>

          {/* Right Floating Tech Elements Grid */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[320px] sm:h-[450px]">
            {/* Main Center Shield/Logo Showcase */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-cyan-500/20 bg-gradient-to-br from-blue-950/20 to-black p-4 flex items-center justify-center shadow-[0_0_50px_rgba(0,112,243,0.15)] animate-float">
              {/* Outer Orbit Line */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-[spin_40s_linear_infinite]" />
              
              <div className="relative w-40 h-40 sm:w-52 sm:h-52">
                <Image
                  src="/aws_sbg_logo.png"
                  alt="AWS Student Builders Group REC Logo"
                  fill
                  className="object-contain filter drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]"
                  priority
                />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-12 left-6 sm:left-12 w-12 h-12 rounded-xl bg-slate-900/80 border border-blue-500/30 flex items-center justify-center text-[#00f0ff] shadow-lg shadow-cyan-950/20 animate-float">
              <Cloud size={22} className="filter drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
            </div>

            <div className="absolute top-24 right-4 sm:right-10 w-14 h-14 rounded-xl bg-slate-900/80 border border-blue-500/30 flex items-center justify-center text-[#00f0ff] shadow-lg shadow-cyan-950/20 animate-float-delayed">
              <Cpu size={24} className="filter drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
            </div>

            <div className="absolute bottom-12 left-4 sm:left-14 w-14 h-14 rounded-xl bg-slate-900/80 border border-blue-500/30 flex items-center justify-center text-[#00f0ff] shadow-lg shadow-cyan-950/20 animate-float-delayed">
              <Server size={24} className="filter drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
            </div>

            <div className="absolute bottom-20 right-6 sm:right-16 w-12 h-12 rounded-xl bg-slate-900/80 border border-blue-500/30 flex items-center justify-center text-[#00f0ff] shadow-lg shadow-cyan-950/20 animate-float">
              <Database size={22} className="filter drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
