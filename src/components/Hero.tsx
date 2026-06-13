"use client";

import React from "react";
import {
  Calendar,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const scrollToRegistrationForm = () => {
  const el = document.getElementById("register-form");
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

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
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-purple-600/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center py-16 md:py-24 max-w-4xl mx-auto">
          
          {/* Centered Hero Content */}
          <motion.div
            className="space-y-8 flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles size={14} />
              3rd Industry Academia Tech Conference
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              AWS <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-[#00f0ff] bg-clip-text text-transparent text-glow">
                Student Community Day
              </span> <br />
              2026
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              The premier gathering for student cloud builders, developer practitioners, and AI enthusiasts. 
              Elevate your skills, network with AWS professionals, and architect the future at REC College.
            </p>

            {/* Event Meta Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={scrollToRegistrationForm}
                className="neon-btn w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white text-center"
              >
                Register Now — It&apos;s Free
              </button>
              <a
                href="#schedule"
                onClick={(e) => handleScroll(e, "#schedule")}
                className="neon-btn-secondary w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-center"
              >
                View Event Schedule
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
