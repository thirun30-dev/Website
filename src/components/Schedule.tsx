"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Users, Coffee, Play, Calendar } from "lucide-react";

interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
  description: string;
  type: "keynote" | "technical" | "break" | "general";
}

const agenda: AgendaItem[] = [
  {
    time: "08:30 AM - 09:30 AM",
    title: "Registrations & Networking",
    speaker: "REC Organizers",
    description: "Collect your ID badges, welcome kits, and networking pass.",
    type: "general",
  },
  {
    time: "09:30 AM - 10:00 AM",
    title: "Inauguration & Welcome Address",
    speaker: "REC Faculty & SBG Student Leads",
    description: "Welcome speech, lamp lighting, and briefing of Community Day goals.",
    type: "general",
  },
  {
    time: "10:00 AM - 11:00 AM",
    title: "Keynote: Stepping Into The Agentic Web",
    speaker: "Shubham Londhe (AWS Dev Advocate)",
    description: "Building smart applications using Strands Agents and Model Context Protocol (MCP) on AWS.",
    type: "keynote",
  },
  {
    time: "11:00 AM - 11:15 AM",
    title: "High Tea & Networking Break",
    speaker: "Attendees & Experts",
    description: "Connect with sponsors and speakers in the networking lounge.",
    type: "break",
  },
  {
    time: "11:15 AM - 12:00 PM",
    title: "Keynote 2: Be A Builder On Campus",
    speaker: "Arkodyuti Saha (AWS Developer Experience)",
    description: "Insights on kickstarting cloud builders groups, hackathons, and AI research on campus.",
    type: "keynote",
  },
  {
    time: "12:00 PM - 12:45 PM",
    title: "Agentic AI on AWS - Next Era of Cloud Intelligence",
    speaker: "Abishek Subramanian (Databricks) & A.V. Karthik (RRD)",
    description: "Collaborative systems, autonomous cloud management, and Bedrock orchestrators.",
    type: "technical",
  },
  {
    time: "12:45 PM - 01:45 PM",
    title: "Buffet Lunch & Partner Networking",
    speaker: "Attendees & Recruiters",
    description: "Complimentary lunch, explore partner desks, and resume review booths.",
    type: "break",
  },
  {
    time: "01:45 PM - 02:30 PM",
    title: "Build Structured AI Agent Systems with AWS Strands SDK",
    speaker: "Aadhityaa SB (AI Developer @ EY)",
    description: "A hands-on walk-through of the Strands SDK library for building stateful AI agents.",
    type: "technical",
  },
  {
    time: "02:30 PM - 03:15 PM",
    title: "Deploying Foundation Models at Scale with Amazon Bedrock",
    speaker: "Jeevitha M (AWS Community Builder)",
    description: "Evaluating model response drift, latency optimization, and scaling LLM requests in production.",
    type: "technical",
  },
  {
    time: "03:15 PM - 03:30 PM",
    title: "Tea & Networking Session",
    speaker: "Attendees & Student Groups",
    description: "Refuel with some snacks and connect with other community builder groups.",
    type: "break",
  },
  {
    time: "03:30 PM - 04:15 PM",
    title: "Panel: Careers in Cloud & AI in 2026 and Beyond",
    speaker: "AWS Architects & EY, Databricks Leads",
    description: "Expert tips on what companies look for, portfolio architectures, and key trends.",
    type: "keynote",
  },
  {
    time: "04:15 PM - 04:45 PM",
    title: "Valedictory Ceremony & Swag Distribution",
    speaker: "AWS SBG REC Team",
    description: "Distribution of participation certificates, raffle draw winners announcements, and photo session.",
    type: "general",
  },
];

export default function Schedule() {
  const [filter, setFilter] = useState<string>("all");

  const filteredAgenda = agenda.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20">
          <div className="text-cyan-400 font-semibold uppercase tracking-wider text-xs">
            Event Agenda
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Schedule Timeline
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Timing blocks load dynamically as you scroll down. Connect, learn, and grow through our agenda slots.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {["all", "keynote", "technical", "break", "general"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                  filter === t
                    ? "bg-[#00f0ff]/10 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                    : "border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Grid Container */}
        <div className="relative w-full">
          
          {/* Timeline Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800/80 -translate-x-1/2 pointer-events-none" />

          {/* Timeline Items list */}
          <div className="space-y-16">
            {filteredAgenda.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <TimelineRevealItem
                  key={idx}
                  item={item}
                  isEven={isEven}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

function TimelineRevealItem({ item, isEven }: { item: AgendaItem; isEven: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "keynote":
        return <Play size={14} className="text-[#00f0ff]" />;
      case "technical":
        return <Terminal size={14} className="text-cyan-400" />;
      case "break":
        return <Coffee size={14} className="text-blue-400" />;
      default:
        return <Users size={14} className="text-slate-400" />;
    }
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";
      case "technical":
        return "bg-blue-500/10 border-blue-500/20 text-blue-400";
      case "break":
        return "bg-amber-500/10 border-amber-500/20 text-amber-400";
      default:
        return "bg-slate-500/10 border-slate-500/20 text-slate-400";
    }
  };

  return (
    <div
      ref={itemRef}
      className={`relative w-full flex flex-col md:flex-row transition-all duration-1000 transform ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 scale-95 ${
              isEven
                ? "translate-y-8 md:-translate-x-12"
                : "translate-y-8 md:translate-x-12"
            }`
      }`}
    >
      
      {/* Node Dot representing intersection */}
      <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-800 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-[0_0_12px_rgba(0,112,243,0.15)] z-20 transition-colors duration-500">
        <div className={`w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800/60 ${isVisible ? "border-cyan-500/30" : ""}`}>
          {getIcon(item.type)}
        </div>
      </div>

      {/* Even index: Render on LEFT (Desktop), collapsing nicely on mobile */}
      <div
        className={`w-full md:w-1/2 pl-14 md:pl-0 md:pr-12 text-left ${
          isEven ? "md:text-right md:ml-0 md:mr-auto" : "md:col-start-2 md:ml-auto md:mr-0 md:pl-12"
        }`}
      >
        
        {/* Soft-edged Speech-cloud / speech-bubble Container */}
        <div
          className={`relative glass-panel rounded-3xl p-6 md:p-8 bg-[#070712]/90 border border-slate-800 hover:border-cyan-500/20 hover:shadow-[0_8px_30px_rgba(0,240,255,0.04)] transition-all duration-300 ${
            isEven
              ? "before:absolute before:top-4 before:left-[-8px] before:w-4 before:h-4 before:bg-[#070712] before:border-l before:border-b before:border-slate-800 before:rotate-45 before:rounded-bl-[4px] md:before:left-auto md:before:right-[-8px] md:before:border-l-0 md:before:border-b-0 md:before:border-r md:before:border-t"
              : "before:absolute before:top-4 before:left-[-8px] before:w-4 before:h-4 before:bg-[#070712] before:border-l before:border-b before:border-slate-800 before:rotate-45 before:rounded-bl-[4px]"
          }`}
        >
          {/* Time Slot display */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-cyan-400 border border-cyan-500/10 text-[10px] font-extrabold uppercase tracking-widest mb-3">
            {item.time}
          </span>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 md:justify-end justify-start">
              <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider border ${getTypeStyle(item.type)}`}>
                {item.type}
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                {item.speaker}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xl md:ml-auto">
              {item.description}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
