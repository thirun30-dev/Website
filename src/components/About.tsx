"use client";

import React from "react";
import { Users, Award, BookOpen, Presentation, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: <Users className="text-[#00f0ff] w-6 h-6" />,
    number: "500+",
    label: "Student Builders",
    desc: "Aspiring cloud enthusiasts attending",
  },
  {
    icon: <Presentation className="text-[#00f0ff] w-6 h-6" />,
    number: "15+",
    label: "Event Speakers",
    desc: "AWS Advocates and solutions architects",
  },
  {
    icon: <BookOpen className="text-[#00f0ff] w-6 h-6" />,
    number: "10+",
    label: "Technical Sessions",
    desc: "Demos on Serverless, Bedrock, and DevOps",
  },
  {
    icon: <Award className="text-[#00f0ff] w-6 h-6" />,
    number: "100%",
    label: "Swag & Rewards",
    desc: "AWS credits, stickers, and t-shirts",
  },
];

const highlights = [
  "Hands-on technical workshops guided by industry mentors",
  "Insights on launching careers in cloud computing & AI engineering",
  "Networking opportunities with AWS user groups & recruiters",
  "Access to exclusive AWS Academy learning content and voucher guides",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient BG Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block - General Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-cyan-400 font-semibold uppercase tracking-wider text-xs">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              AWS Students <br />
              Builder Group @ REC
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              The AWS Students Builder Group at Rajalakshmi Engineering College (REC) is an official college club dedicated to empowering student developers in cloud technologies. We foster a community of builders, developers, and creators who learn, build, and deploy projects on AWS.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              AWS Student Community Day 2026 is an initiative to bring the industry closer to academia. Connect with cloud leaders, solve architectural challenges, and learn cloud-native development practices first-hand.
            </p>

            <ul className="space-y-3 pt-4">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="flex-shrink-0 mt-0.5 text-[#00f0ff]">
                    <CheckCircle size={16} />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block - Glowing Grid Statistics */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="relative group">
                
                {/* Dynamic Radiating Glow on Hover/Touch (Cyan to AWS Orange) */}
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#00f0ff]/80 to-[#ff9900]/80 opacity-0 group-hover:opacity-40 blur-[18px] transition-all duration-500 -z-10 group-hover:scale-[1.02] active:opacity-40" />
                
                {/* Sleek Glassmorphic Card */}
                <div className="glass-panel p-8 rounded-2xl border border-cyan-500/10 flex flex-col justify-between h-48 transition-all duration-300 group-hover:scale-[1.02] active:scale-[1.02] bg-[#070712]/90">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-white text-glow">
                      {stat.number}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-slate-400 leading-normal">
                      {stat.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
