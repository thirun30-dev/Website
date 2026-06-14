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

const THEMES = {
  days: {
    bg: "bg-gradient-to-b from-[#0b1430] to-[#040817]/95",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]",
  },
  hours: {
    bg: "bg-gradient-to-b from-[#081a24] to-[#020b10]/95",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]",
  },
  minutes: {
    bg: "bg-gradient-to-b from-[#1b0b2e] to-[#0a0314]/95",
    border: "border-purple-500/30",
    text: "text-purple-400",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]",
  },
  seconds: {
    bg: "bg-gradient-to-b from-[#241208] to-[#0e0602]/95",
    border: "border-amber-500/30",
    text: "text-amber-400",
    glow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]",
  },
};

function FlipDigit({ digit, theme }: { digit: string; theme: any }) {
  return (
    <div
      style={{ perspective: 450 }}
      className={`relative w-[50px] h-[75px] sm:w-[84px] sm:h-[126px] rounded-2xl border flex items-center justify-center font-mono font-black text-3xl sm:text-6xl select-none ${theme.bg} ${theme.border} ${theme.text} ${theme.glow}`}
    >
      {/* Horizontal split divider */}
      <div className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-[#020205]/60 z-10" />

      {/* Metal hinge clips */}
      <div className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-[6px] h-[10px] sm:w-[8px] sm:h-[14px] sm:left-[-4px] bg-slate-400 border border-slate-300 rounded-sm shadow-sm z-20" />
      <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-[6px] h-[10px] sm:w-[8px] sm:h-[14px] sm:right-[-4px] bg-slate-400 border border-slate-300 rounded-sm shadow-sm z-20" />

      {/* Glossy top overlay */}
      <div className="absolute inset-x-0 top-0 bottom-1/2 bg-white/[0.03] rounded-t-2xl pointer-events-none" />

      {/* Digit value with vertical 3D rotating X-axis animation on digit change */}
      <motion.span
        key={digit}
        initial={{ rotateX: -90, opacity: 0.3 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative z-0 leading-none inline-block"
      >
        {digit}
      </motion.span>
    </div>
  );
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
      <section id="countdown" className="w-full flex items-center justify-center bg-black py-10" />
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days, theme: THEMES.days },
    { label: "Hours", value: timeLeft.hours, theme: THEMES.hours },
    { label: "Minutes", value: timeLeft.minutes, theme: THEMES.minutes },
    { label: "Seconds", value: timeLeft.seconds, theme: THEMES.seconds },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="countdown" className="w-full relative flex flex-col justify-center items-center overflow-hidden py-10 bg-[#020205]">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center space-y-12 w-full flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-widest text-[10px] bg-cyan-950/30 px-4 py-1.5 rounded-full border border-cyan-500/20">
            <Clock size={12} className="animate-pulse" />
            T-Minus Event Launch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight uppercase tracking-tight">
            Counting Down to <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-[#00f0ff] bg-clip-text text-transparent text-glow">
              September 12, 2026
            </span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The clock is ticking. Seize the opportunity to immerse yourself in the next wave of cloud native architectures, serverless technologies, and generative AI.
          </p>
        </div>

        {/* Large Flip Clock Horizontal Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto w-full pt-4"
        >
          {timeUnits.map((unit, idx) => {
            const digits = String(unit.value).padStart(2, "0").split("");
            return (
              <React.Fragment key={unit.label}>
                {/* Unit Container */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center gap-3"
                >
                  {/* Digit Cards */}
                  <div className="flex gap-1.5 sm:gap-2">
                    {digits.map((d, dIdx) => (
                      <FlipDigit key={dIdx} digit={d} theme={unit.theme} />
                    ))}
                  </div>
                  {/* Label */}
                  <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest">
                    {unit.label}
                  </span>
                </motion.div>

                {/* Separator Colon */}
                {idx < timeUnits.length - 1 && (
                  <div className="hidden sm:block text-2xl sm:text-5xl font-black text-slate-800 self-start mt-[20px] sm:mt-[32px] select-none">
                    :
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>

        {/* Action and Venue Prompt */}
        <div className="space-y-4 pt-4">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
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
