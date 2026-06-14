"use client";

import React, { useState, useEffect } from "react";
import { Clock, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date("2026-09-12T09:00:00+05:30"); // Sep 12, 2026 9:00 AM IST

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  if (!isMounted) {
    return (
      <section id="countdown" className="min-h-screen w-full flex items-center justify-center bg-black" />
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days, max: 365 },
    { label: "Hours", value: timeLeft.hours, max: 24 },
    { label: "Minutes", value: timeLeft.minutes, max: 60 },
    { label: "Seconds", value: timeLeft.seconds, max: 60 },
  ];

  return (
    <section id="countdown" className="min-h-screen w-full relative flex flex-col justify-center items-center overflow-hidden py-16 bg-[#020205]">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center space-y-16 w-full flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-widest text-xs bg-cyan-950/30 px-4 py-1.5 rounded-full border border-cyan-500/20">
            <Clock size={14} className="animate-pulse" />
            T-Minus Event Launch
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight uppercase tracking-tight">
            Counting Down to <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-[#00f0ff] bg-clip-text text-transparent text-glow">
              September 12, 2026
            </span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The clock is ticking. Seize the opportunity to immerse yourself in the next wave of cloud native architectures, serverless technologies, and generative AI.
          </p>
        </div>

        {/* Large Typographic Time Grid */}
        <div className="w-full max-w-5xl space-y-10 flex flex-col items-center">
          
          {/* Days Unit (Top Center Capsule) */}
          <div className="w-full flex justify-center">
            {/* Capsule shape for Days */}
            <div className="relative w-44 h-22 sm:w-52 sm:h-26 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
                <defs>
                  <linearGradient id="timer-gradient-days" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#00f0ff" />
                  </linearGradient>
                </defs>
                {/* Static capsule border */}
                <rect
                  x="5"
                  y="5"
                  width="190"
                  height="90"
                  rx="45"
                  ry="45"
                  stroke="url(#timer-gradient-days)"
                  strokeWidth="5"
                  fill="transparent"
                  className="drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] opacity-85"
                />
              </svg>

              {/* Central Text Panel */}
              <div className="text-center z-10 flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-blue-500 via-cyan-400 to-[#00f0ff] bg-clip-text text-transparent text-glow select-none">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
                  Days
                </span>
              </div>
            </div>
          </div>

          {/* Hours, Minutes, Seconds Grid (Bottom Row) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl justify-items-center">
            {timeUnits.slice(1).map((unit, idx) => {
              const actualIdx = idx + 1;
              return (
                <div
                  key={idx}
                  className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-cyan-500/10 to-transparent hover:from-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_35px_rgba(0,240,255,0.12)] w-full max-w-[280px]"
                >
                  {/* Sleek, Glassmorphic Card */}
                  <div className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center bg-slate-950/70 border border-slate-800/60 transition-transform duration-500 hover:-translate-y-1 w-full h-full">
                    {/* Ambient Internal Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Circular progress for others */}
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                        <defs>
                          <linearGradient id={`timer-gradient-${actualIdx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#00f0ff" />
                          </linearGradient>
                        </defs>
                        {/* Base circle track */}
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          className="stroke-slate-900/50"
                          strokeWidth="5"
                          fill="transparent"
                        />
                        {/* Shadow glow track */}
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          className="stroke-cyan-500/5"
                          strokeWidth="10"
                          fill="transparent"
                        />
                        {/* Dynamic flow timer arc */}
                        <motion.circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke={`url(#timer-gradient-${actualIdx})`}
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={2 * Math.PI * 70}
                          initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                          animate={{ strokeDashoffset: 2 * Math.PI * 70 * (1 - unit.value / unit.max) }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_8px_rgba(6,182,212,0.45)]"
                        />
                      </svg>

                      {/* Central Text Panel */}
                      <div className="text-center z-10 flex flex-col items-center">
                        <span className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-blue-500 via-cyan-400 to-[#00f0ff] bg-clip-text text-transparent text-glow select-none">
                          {String(unit.value).padStart(2, "0")}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">
                          {unit.label}
                        </span>
                      </div>
                    </div>

                    {/* Micro Border Glow Segment */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-cyan-400 opacity-20 group-hover:opacity-100 group-hover:w-1/2 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action and Venue Prompt */}
        <div className="space-y-4 pt-4">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
            Rajalakshmi Engineering College (REC) Campus, Chennai
          </p>
          
          <button
            onClick={handleScrollDown}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all animate-bounce mt-4 cursor-pointer"
            title="Explore More"
          >
            <ArrowDown size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
