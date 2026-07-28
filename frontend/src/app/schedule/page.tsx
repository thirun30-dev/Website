"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Schedule from "@/components/Schedule";
import ParticleBackground from "@/components/ParticleBackground";
import ClientOnly from "@/components/ClientOnly";

export default function SchedulePage() {
  return (
    <ClientOnly>
      <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Background */}
        <ParticleBackground />

        {/* Page Header Bar */}
        <header className="relative z-30 w-full border-b border-slate-800/60 bg-[#020205]/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Back link */}
            <Link
              href="/"
              className="group flex items-center gap-2 text-slate-400 hover:text-[#00f0ff] transition-colors duration-200 text-sm font-semibold"
            >
              <span className="w-7 h-7 rounded-full border border-slate-700 group-hover:border-[#00f0ff]/50 flex items-center justify-center transition-colors duration-200">
                <ArrowLeft size={14} />
              </span>
              Back to Home
            </Link>

            {/* Page title */}
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-[#00f0ff]" />
              <span className="text-white font-bold text-sm tracking-wide hidden sm:block">
                Event <span className="text-[#00f0ff]">Schedule</span>
              </span>
            </div>

            {/* AWS badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest hidden sm:block">
                AWS Student Community Day 2026
              </span>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest sm:hidden">
                SCD 2026
              </span>
            </div>
          </div>
        </header>

        {/* Full Schedule Component */}
        <main className="flex-grow relative z-10 pt-6">
          <Schedule isPreview={false} />
        </main>

        {/* Footer strip */}
        <footer className="relative z-10 border-t border-slate-800/60 py-6 text-center">
          <p className="text-slate-600 text-xs">
            AWS Student Builder Groups @ REC &bull;{" "}
            <Link href="/" className="text-slate-500 hover:text-[#00f0ff] transition-colors">
              Return to main site
            </Link>
          </p>
        </footer>
      </div>
    </ClientOnly>
  );
}
