"use client";

import React from "react";
import Image from "next/image";
import { Mail, ArrowUp, Phone } from "lucide-react";

const InstagramIcon = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);



export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = rect.top + window.scrollY;
      window.scrollTo({
        top: scrollTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToRegistrationForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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

  return (
    <footer id="contact" className="relative bg-[#020617] border-t border-slate-800/80 pt-12 pb-8 overflow-hidden scroll-mt-24 w-full shadow-2xl">
      {/* Background Grid & Ambient Glows (Matching Hero) */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-60 rounded-3xl bg-cyan-600/10 blur-[130px] rotate-12 pointer-events-none" />

      <div className="w-[94%] max-w-[1440px] mx-auto relative z-10 space-y-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-7 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/aws-logo.svg"
                  alt="AWS Logo"
                  width={72}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col border-l border-slate-700/60 pl-3">
                <span className="text-white font-extrabold text-sm tracking-wide leading-tight">
                  <span className="text-[#00f0ff]">STUDENT</span> BUILDER
                </span>
                <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-0.5">
                  Groups @ REC
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Empowering student cloud builders to design, construct, and scale modern web projects. Together we push the boundaries of cloud engineering and AI.
            </p>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest border-b border-slate-900 pb-2">
              Contact & Connect
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm pt-1">
              {/* Direct Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail size={15} className="text-[#00f0ff] flex-shrink-0" />
                  <a href="mailto:aws.sbg.rec@gmail.com" className="hover:text-[#00f0ff] transition-colors font-medium">
                    aws.sbg.rec@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <InstagramIcon size={15} className="text-[#00f0ff] flex-shrink-0" />
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors font-medium">
                    @aws.sbg.rec
                  </a>
                </div>
              </div>

              {/* Student Coordinators */}
              <div className="space-y-3">
                <span className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider">Student Coordinators</span>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-xs sm:text-sm">Prathakshanaa</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-cyan-950/50 border border-cyan-500/25 text-cyan-300 font-bold uppercase tracking-wider">Captain</span>
                    </div>
                    <a 
                      href="tel:+918778137436" 
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#00f0ff] transition-colors font-medium"
                    >
                      <Phone size={13} className="text-[#00f0ff]" />
                      <span>+91 87781 37436</span>
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-xs sm:text-sm">Pranav Ranjan</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-cyan-950/50 border border-cyan-500/25 text-cyan-300 font-bold uppercase tracking-wider">Tech Lead</span>
                    </div>
                    <a 
                      href="tel:+918754303936" 
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#00f0ff] transition-colors font-medium"
                    >
                      <Phone size={13} className="text-[#00f0ff]" />
                      <span>+91 87543 03936</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 AWS Student Builder Groups REC. All rights reserved.</p>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-[#00f0ff] transition-colors font-semibold text-xs uppercase tracking-wider"
          >
            Scroll Top <ArrowUp size={14} className="text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
