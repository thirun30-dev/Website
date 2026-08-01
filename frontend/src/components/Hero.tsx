"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, QrCode, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRegistration } from "@/context/RegistrationContext";

const scrollToRegistrationForm = () => {
  const el = document.getElementById("register-form");
  if (el) {
    const rect = el.getBoundingClientRect();
    const scrollTop = rect.top + window.scrollY;
    window.scrollTo({
      top: scrollTop - 80,
      behavior: "smooth",
    });
  }
};

export default function Hero() {
  const { badgeData } = useRegistration();
  const [showMap, setShowMap] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[65vh] flex items-center justify-center pt-24 md:pt-28 pb-8 overflow-hidden"
    >
      {/* Dynamic Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Sharp Ambient Tech Glow Beams */}
      <div className="absolute top-1/4 left-0 w-[500px] h-64 rounded-3xl bg-cyan-600/10 blur-[130px] -rotate-12 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-72 rounded-3xl bg-blue-600/10 blur-[150px] rotate-12 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-48 rounded-2xl bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center pt-0 pb-6 md:pb-10 max-w-5xl mx-auto">
          
          {/* Centered Hero Content */}
          <motion.div
            className="space-y-6 md:space-y-7 flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight flex flex-col items-center">
              <div className="relative w-36 sm:w-52 md:w-60 h-14 sm:h-20 md:h-24 mb-2">
                <Image
                  src="/aws-logo.svg"
                  alt="AWS Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-[#00f0ff] bg-clip-text text-transparent">
                Student Community Day
              </span>
              <span>2026</span>
            </h1>

            <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              Bringing together industry experts, cloud professionals, students, and technology enthusiasts for a day of learning, innovation, networking, and knowledge sharing across multiple cloud and emerging technology tracks.
            </p>

            {/* Event Meta Details */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2">
              <div className="flex items-center gap-2.5 sm:gap-3 text-slate-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Calendar size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-semibold leading-tight">Date</p>
                  <p className="text-xs sm:text-sm font-bold whitespace-nowrap">September 12, 2026</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowMap(true)}
                className="flex items-center gap-2.5 sm:gap-3 text-slate-300 hover:text-cyan-400 transition-colors group cursor-pointer text-left"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-950/40 border border-blue-500/20 group-hover:border-cyan-500/50 flex items-center justify-center text-cyan-400 transition-all flex-shrink-0">
                  <MapPin size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-semibold leading-tight">Venue</p>
                  <p className="text-xs sm:text-sm font-bold whitespace-nowrap">REC Campus, Chennai</p>
                </div>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
              <button
                onClick={scrollToRegistrationForm}
                className="neon-btn w-full sm:w-auto px-8 py-4 rounded-md text-base font-bold text-white text-center flex items-center justify-center gap-2"
              >
                {badgeData ? (
                  <>View Your QR Pass <QrCode size={18} /></>
                ) : (
                  "Register Now — It's Free"
                )}
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Interactive Google Maps Popup Modal */}
      <AnimatePresence>
        {showMap && (
          <div 
            onClick={() => setShowMap(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-[#030712] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden cursor-default"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-slate-950/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Event Venue Map</span>
                    <h3 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                      Rajalakshmi Engineering College (REC) Campus, Chennai
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://maps.google.com/?q=Rajalakshmi+Engineering+College"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-400 hover:text-white bg-cyan-950/40 border border-cyan-500/30 transition-all"
                  >
                    <span>Open Maps</span>
                    <ExternalLink size={13} />
                  </a>
                  <button
                    onClick={() => setShowMap(false)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Google Maps Iframe */}
              <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-950">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.845616407686!2d79.99804284161404!3d13.008725549240182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528c9ebac84723%3A0x18e2bf88dfefa3ed!2sRajalakshmi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1785480050036!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full filter contrast-[1.05] brightness-[0.95]"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
