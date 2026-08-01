"use client";

import React from "react";
import { Users, Award, BookOpen, Presentation, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Users className="text-cyan-400 w-5 h-5" />,
    number: "500+",
    label: "Student Builders",
  },
  {
    icon: <Presentation className="text-cyan-400 w-5 h-5" />,
    number: "15+",
    label: "Keynote Speakers",
  },
  {
    icon: <BookOpen className="text-cyan-400 w-5 h-5" />,
    number: "10+",
    label: "Technical Sessions",
  },
  {
    icon: <Award className="text-cyan-400 w-5 h-5" />,
    number: "100%",
    label: "Swag & Rewards",
  },
];

const highlights = [
  {
    title: "Expert-Led Keynotes & Demos",
    desc: "Gain insights from AWS Solutions Architects, advocates, and industry engineering leaders.",
  },
  {
    title: "Multi-Track Technical Sessions",
    desc: "Demos covering Serverless architectures, Generative AI on Bedrock, DevOps, and Security.",
  },
  {
    title: "Career & Community Growth",
    desc: "Connect directly with mentors, explore cloud certification roadmaps, and network with peers.",
  },
  {
    title: "Exclusive Swag & AWS Credits",
    desc: "Receive official AWS merchandise, promotional credits, and certificates of participation.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden bg-transparent">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] bg-cyan-600/10 blur-[160px] pointer-events-none -z-10" />

      <div className="w-[94%] max-w-[1440px] mx-auto relative z-10 space-y-12 sm:space-y-14">
        
        {/* Main 2-Column Perfectly Aligned Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          
          {/* Left Column: Who We Are & Story */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-3.5"
          >
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md">
                <Users size={13} className="text-cyan-400" />
                <span className="text-[11px] font-bold text-cyan-300 tracking-wider uppercase">
                  About Our Community
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight flex flex-wrap items-center gap-x-3 gap-y-1">
                <img src="/aws_sbg_logo.svg" alt="AWS SBG" className="h-7 sm:h-8 w-auto inline-block" />
                <span className="font-bold">Student Builder Groups</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-[#00f0ff] bg-clip-text text-transparent font-bold">
                  @ REC
                </span>
              </h2>
            </div>

            <div className="space-y-2.5">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The AWS Student Builder Group (SBG) at Rajalakshmi Engineering College is a student-led community dedicated to advancing cloud education, hands-on engineering, and collaborative tech innovation.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We proudly present <strong className="text-slate-200">AWS Student Community Day 2026</strong>—a flagship event bringing together students, cloud architects, and tech leaders for a full day of technical sessions, live architectural tear-downs, and career opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Perfectly Spaced & Aligned Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between gap-3.5"
          >
            {highlights.map((h, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 p-4 rounded-md bg-[#030712]/80 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-md bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400 transition-colors">
                  <CheckCircle2 size={18} className="text-cyan-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Borderless Full-Width Horizontal Metric Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.number}
              </div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
