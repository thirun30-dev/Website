"use client";

import React, { useRef } from "react";
import {
  Calendar,
  MapPin,
  Sparkles,
  Server,
  Cpu,
  Cloud,
  Database,
  Shield,
  Zap,
  Globe,
  Brain,
  Network,
  HardDrive,
  Activity,
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

const awsServices = [
  { icon: Cloud, label: "EC2", color: "#FF9900", delay: 0 },
  { icon: Database, label: "RDS", color: "#3B82F6", delay: 0.3 },
  { icon: Zap, label: "Lambda", color: "#F59E0B", delay: 0.6 },
  { icon: Shield, label: "IAM", color: "#10B981", delay: 0.9 },
  { icon: Brain, label: "SageMaker", color: "#8B5CF6", delay: 1.2 },
  { icon: Globe, label: "CloudFront", color: "#00f0ff", delay: 1.5 },
  { icon: Server, label: "EKS", color: "#F97316", delay: 0.15 },
  { icon: HardDrive, label: "S3", color: "#22D3EE", delay: 0.45 },
  { icon: Activity, label: "CloudWatch", color: "#EC4899", delay: 0.75 },
  { icon: Network, label: "VPC", color: "#A78BFA", delay: 1.05 },
  { icon: Cpu, label: "Fargate", color: "#34D399", delay: 1.35 },
];

// Positions for the orbiting cards in a cloud architecture layout
const orbitalPositions = [
  // Inner ring
  { x: 0, y: -130, ring: "inner" },
  { x: 112, y: -65, ring: "inner" },
  { x: 112, y: 65, ring: "inner" },
  { x: 0, y: 130, ring: "inner" },
  { x: -112, y: 65, ring: "inner" },
  { x: -112, y: -65, ring: "inner" },
  // Outer ring
  { x: 0, y: -210, ring: "outer" },
  { x: 182, y: -105, ring: "outer" },
  { x: 182, y: 105, ring: "outer" },
  { x: 0, y: 210, ring: "outer" },
  { x: -182, y: 0, ring: "outer" },
];

// Floating particles
const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 3,
  duration: Math.random() * 4 + 4,
}));

// Connection lines between service cards (simplified SVG paths)
const connections = [
  { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 },
  { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 0 },
  { from: 0, to: 6 }, { from: 1, to: 7 }, { from: 2, to: 8 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24">
          
          {/* Left Hero Content */}
          <motion.div
            className="lg:col-span-6 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
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

          {/* Right AWS Cloud Architecture Illustration */}
          <div
            ref={containerRef}
            className="lg:col-span-6 flex justify-center items-center relative h-[380px] sm:h-[500px]"
          >
            {/* Floating particles */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-cyan-400/30"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* SVG Connection lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 500"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0070f3" stopOpacity="0.05" />
                </radialGradient>
              </defs>
              {/* Orbital rings */}
              <circle cx="250" cy="250" r="130" fill="none" stroke="rgba(0,240,255,0.08)" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="250" cy="250" r="210" fill="none" stroke="rgba(0,112,243,0.06)" strokeWidth="1" strokeDasharray="6 6"/>
              {/* Connection lines between service nodes */}
              {connections.map((conn, i) => {
                const from = orbitalPositions[conn.from];
                const to = orbitalPositions[conn.to];
                return (
                  <motion.line
                    key={i}
                    x1={250 + from.x}
                    y1={250 + from.y}
                    x2={250 + to.x}
                    y2={250 + to.y}
                    stroke="url(#lineGrad)"
                    strokeWidth="0.8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{
                      duration: 2.5,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </svg>

            {/* Central AWS Cloud Hub */}
            <motion.div
              className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#0070f3] to-[#00f0ff] flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.5)] z-20"
              animate={{
                scale: [1, 1.06, 1],
                boxShadow: [
                  "0 0 30px rgba(0,240,255,0.4)",
                  "0 0 60px rgba(0,240,255,0.7)",
                  "0 0 30px rgba(0,240,255,0.4)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cloud size={32} className="text-white drop-shadow-lg" />
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-30" />
            </motion.div>

            {/* Orbital AWS Service Cards */}
            {awsServices.slice(0, orbitalPositions.length).map((service, idx) => {
              const pos = orbitalPositions[idx];
              const Icon = service.icon;
              const isOuter = pos.ring === "outer";
              const cardSize = isOuter ? "w-12 h-12 sm:w-14 sm:h-14" : "w-14 h-14 sm:w-16 sm:h-16";

              return (
                <motion.div
                  key={service.label}
                  className={`absolute ${cardSize} rounded-xl flex flex-col items-center justify-center gap-0.5 z-10`}
                  style={{
                    left: `calc(50% + ${pos.x}px - ${isOuter ? 28 : 32}px)`,
                    top: `calc(50% + ${pos.y}px - ${isOuter ? 28 : 32}px)`,
                    background: "rgba(7,7,18,0.9)",
                    border: `1px solid ${service.color}30`,
                    boxShadow: `0 0 12px ${service.color}15`,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, idx % 2 === 0 ? -6 : 6, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: service.delay },
                    scale: { duration: 0.5, delay: service.delay },
                    y: {
                      duration: 3 + (idx % 3),
                      delay: service.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: `0 0 20px ${service.color}50`,
                    borderColor: `${service.color}60`,
                    zIndex: 30,
                  }}
                >
                  <Icon size={isOuter ? 14 : 18} style={{ color: service.color }} />
                  <span
                    className="text-[8px] font-bold tracking-wider uppercase"
                    style={{ color: service.color }}
                  >
                    {service.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Data flow pulse dots along connections */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`pulse-${i}`}
                className="absolute w-2 h-2 rounded-full bg-cyan-400 z-15"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, (i - 1) * 80, 0],
                  y: [0, (i === 1 ? -100 : 50), 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Floating Architecture Labels */}
            <motion.div
              className="absolute top-4 left-4 px-2 py-1 rounded-md bg-slate-900/80 border border-blue-500/20 text-[9px] font-bold text-blue-400 uppercase tracking-wider backdrop-blur-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Multi-Region
            </motion.div>
            <motion.div
              className="absolute top-4 right-4 px-2 py-1 rounded-md bg-slate-900/80 border border-cyan-500/20 text-[9px] font-bold text-cyan-400 uppercase tracking-wider backdrop-blur-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, delay: 0.7, repeat: Infinity }}
            >
              Serverless
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4 px-2 py-1 rounded-md bg-slate-900/80 border border-purple-500/20 text-[9px] font-bold text-purple-400 uppercase tracking-wider backdrop-blur-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, delay: 1.1, repeat: Infinity }}
            >
              AI / ML
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-4 px-2 py-1 rounded-md bg-slate-900/80 border border-green-500/20 text-[9px] font-bold text-green-400 uppercase tracking-wider backdrop-blur-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, delay: 1.4, repeat: Infinity }}
            >
              DevOps
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
