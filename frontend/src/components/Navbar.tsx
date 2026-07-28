"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, QrCode } from "lucide-react";
import { useRegistration } from "@/context/RegistrationContext";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Organizers", href: "#organizers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { badgeData } = useRegistration();

  // Lock body scroll and handle keyboard accessibility (Escape key) when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on scroll
      const sections = navItems.map(item => item.href.slice(1));
      
      // Bottom of page detection
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Navbar height is about 80px, so 120px is a good threshold buffer.
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "";
      if (el) {
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          const scrollTop = rect.top + window.scrollY;
          window.scrollTo({
            top: scrollTop - 80,
            behavior: "smooth",
          });
          setActiveSection(targetId);
        }, 50);
      }
    } else {
      if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop = rect.top + window.scrollY;
        window.scrollTo({
          top: scrollTop - 80,
          behavior: "smooth",
        });
        setActiveSection(targetId);
      }
    }
  };

  const scrollToRegistrationForm = () => {
    const el = document.getElementById("register-form");
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "";
      if (el) {
        setTimeout(() => {
          const rect = el.getBoundingClientRect();
          const scrollTop = rect.top + window.scrollY;
          window.scrollTo({
            top: scrollTop - 80,
            behavior: "smooth",
          });
        }, 50);
      }
    } else {
      if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop = rect.top + window.scrollY;
        window.scrollTo({
          top: scrollTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#020205]/85 backdrop-blur-md border-b border-cyan-500/10 py-3 shadow-lg shadow-cyan-950/10"
            : "bg-transparent py-3 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Brand (Left) */}
            <div className="flex items-center gap-3 w-1/4">
              <a
                href="#home"
                onClick={(e) => handleClick(e, "#home")}
                className="flex items-center gap-2 group focus:outline-none"
              >
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-cyan-500/20 bg-slate-950 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/aws_sbg_logo.png"
                    alt="AWS Student Builder Groups REC Logo"
                    fill
                    className="object-cover filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                    priority
                    sizes="44px"
                  />
                </div>
                <div className="flex flex-col hidden sm:flex">
                  <span className="text-white font-bold text-sm tracking-wide">
                    AWS <span className="text-[#00f0ff] text-glow">STUDENT</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase -mt-1">
                    Builder Groups @ REC
                  </span>
                </div>
              </a>
            </div>

            {/* Centered Navigation Links (Desktop) */}
            <div className="hidden md:flex flex-grow justify-center">
              <ul className="flex items-center gap-6 glass-panel px-6 py-2 rounded-full border border-slate-800/80 bg-slate-950/20">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#00f0ff] ${
                          isActive ? "text-[#00f0ff] font-bold text-glow" : "text-slate-400"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Registration CTA (Right Desktop) */}
            <div className="hidden md:flex justify-end w-1/4">
              <button
                onClick={scrollToRegistrationForm}
                className="neon-btn px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white flex items-center gap-2"
              >
                {badgeData ? (
                  <>View QR Code <QrCode size={14} /></>
                ) : (
                  <>Register Now <ArrowRight size={14} /></>
                )}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Decoupled Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop (z-index: 50) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md md:hidden"
            />

            {/* Mobile Drawer (z-index: 60) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm z-60 bg-[#020817]/98 backdrop-blur-[24px] border-l border-slate-800/80 flex flex-col md:hidden shadow-2xl"
              aria-label="Navigation Drawer"
              role="dialog"
              aria-modal="true"
            >
              {/* Drawer Header Row */}
              <div className="flex items-center justify-between h-20 px-6 border-b border-slate-800/60 flex-shrink-0">
                {/* Logo brand (Left) */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-cyan-500/20 bg-slate-950 flex-shrink-0">
                    <Image
                      src="/aws_sbg_logo.png"
                      alt="AWS Student Builder Groups REC Logo"
                      fill
                      className="object-cover filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm tracking-wide">
                      AWS <span className="text-[#00f0ff] text-glow">STUDENT</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase -mt-1">
                      Builder Groups @ REC
                    </span>
                  </div>
                </div>

                {/* Close button X (Right, z-index: 70) */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-11 h-11 flex items-center justify-center text-slate-300 hover:text-white rounded-full bg-slate-900/50 border border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-[#00f0ff] transition-all z-70"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation list */}
              <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`flex items-center w-full py-[18px] px-4 text-base font-bold tracking-wide transition-all duration-200 border-l-2 ${
                        isActive
                          ? "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/5 pl-5 shadow-[inset_4px_0_12px_rgba(0,240,255,0.03)] font-bold text-glow-cyan"
                          : "border-transparent text-slate-300 hover:text-white hover:bg-slate-900/30"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              {/* Primary CTA Button Section */}
              <div className="p-6 border-t border-slate-800/80 bg-[#020817]/98 pb-safe flex-shrink-0">
                <button
                  onClick={scrollToRegistrationForm}
                  className="w-full h-14 rounded-xl font-extrabold text-sm tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(6,182,212,0.25)] focus:outline-none focus:ring-2 focus:ring-[#00f0ff] transition-all duration-300"
                >
                  {badgeData ? (
                    <>View QR Code <QrCode size={16} /></>
                  ) : (
                    <>Register Now <ArrowRight size={16} /></>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
