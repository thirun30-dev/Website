"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

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

interface Speaker {
  name: string;
  role: string;
  company: string;
  topic: string;
  bio: string;
  linkedin: string;
  tag?: string;
}

const speakers: Speaker[] = [
  {
    name: "Shubham Londhe",
    role: "Developer Advocate",
    company: "Amazon Web Services",
    topic: "Stepping Into The Agentic Web: Building Smart Applications with Strands Agents and MCP",
    bio: "Developer Advocate at AWS, specializing in DevOps, developer tooling, and modern container architectures.",
    linkedin: "https://www.linkedin.com/in/shubhamlondhe1996/",
    tag: "Keynote Speaker",
  },
  {
    name: "Arkodyuti Saha",
    role: "Community Manager (Developer Experience)",
    company: "Amazon Web Services",
    topic: "Be A Builder On Campus: Kickstarting Cloud & AI Journeys",
    bio: "Community Manager at AWS, developer evangelist, and mentor helping students scale their tech expertise.",
    linkedin: "https://www.linkedin.com/in/arkodyutisaha",
    tag: "Keynote Speaker",
  },
  {
    name: "Abishek Subramanian",
    role: "Senior Solutions Engineer",
    company: "Databricks",
    topic: "Agentic AI on AWS - The Next Era of Cloud Intelligence",
    bio: "Senior Solutions Engineer at Databricks with expertise in scalable data platforms and cloud integration architectures.",
    linkedin: "https://www.linkedin.com/in/abishek-subramanian",
  },
  {
    name: "Aadhityaa SB",
    role: "AI Developer",
    company: "EY",
    topic: "Build Structured AI Agent Systems with AWS Strands SDK",
    bio: "AI Developer specializing in deploying and structuring Agentic systems inside secure cloud infrastructures.",
    linkedin: "https://www.linkedin.com/in/aadhi0612/",
  },
  {
    name: "Ashok Kumar J",
    role: "Founder & CTO",
    company: "G3 CyberSpace",
    topic: "Cloud Compliance and Zero Trust Security",
    bio: "CTO and compliance auditor specializing in security controls, GDPR, and enterprise cloud policies.",
    linkedin: "https://www.linkedin.com/in/ashok-kumar-jeyachandran-290a15a5/",
  },
  {
    name: "A.V. Karthik",
    role: "AWS Solutions Architect",
    company: "RR Donnelley",
    topic: "Architecting Resilient Applications with AWS CloudFront and S3",
    bio: "Solutions Architect focusing on microservices, serverless migrations, and content delivery networking.",
    linkedin: "https://www.linkedin.com/in/karthikav93/",
  },
  {
    name: "Jeevitha M",
    role: "AI Engineer & Community Builder",
    company: "AWS Community Builder",
    topic: "Deploying Foundation Models at Scale with Amazon Bedrock",
    bio: "AWS Community Builder and developer advocate focusing on AI pipelines and scalable foundation model hosting.",
    linkedin: "https://www.linkedin.com/in/jeevitha-m-357979223/",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#00f0ff]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="text-cyan-400 font-semibold uppercase tracking-wider text-xs">
            Expert Insights
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured Speakers
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Click on a card to reveal session details, abstracts, and professional backgrounds.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, idx) => (
            <SpeakerCard key={idx} speaker={speaker} />
          ))}
        </div>

      </div>
    </section>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const initials = speaker.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative h-[380px] w-full cursor-pointer [perspective:1000px] group select-none"
    >
      {/* Inner Flipping Card Wrapper */}
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        
        {/* FRONT FACE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] glass-panel border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-[#070712]/95 shadow-[0_0_15px_rgba(0,240,255,0.02)]">
          {speaker.tag && (
            <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-wider">
              ★ {speaker.tag}
            </span>
          )}

          {/* Avatar Container */}
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-900 to-slate-950 border border-blue-500/30 flex items-center justify-center text-[#00f0ff] font-black text-3xl shadow-[0_0_20px_rgba(0,112,243,0.3)] mb-6 group-hover:scale-105 transition-transform duration-300">
            {initials}
            <div className="absolute inset-1 rounded-full border border-dashed border-cyan-500/20" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-white group-hover:text-[#00f0ff] transition-colors leading-tight">
              {speaker.name}
            </h3>
            <p className="text-xs text-cyan-400 font-bold tracking-wide">
              {speaker.role}
            </p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              {speaker.company}
            </p>
          </div>

          <p className="text-[9px] text-slate-500 mt-10 uppercase tracking-widest font-black flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
            Click to view session details
          </p>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] glass-panel border border-cyan-500/20 rounded-3xl p-8 flex flex-col justify-between bg-[#070712] shadow-[0_0_25px_rgba(0,240,255,0.04)]">
          <div className="space-y-4">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-900 pb-3">
              <span className="text-[10px] text-cyan-400 font-extrabold uppercase tracking-widest">
                Topic & Abstract
              </span>
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Stop flip on click
                className="text-slate-400 hover:text-[#00f0ff] transition-colors p-1"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>

            {/* Session Title */}
            <div className="space-y-1">
              <h4 className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                Presentation Topic
              </h4>
              <p className="text-xs font-bold text-white tracking-wide leading-snug">
                {speaker.topic}
              </p>
            </div>

            {/* Abstract */}
            <div className="space-y-1">
              <h4 className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                Abstract
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-4">
                {speaker.bio}
              </p>
            </div>

          </div>

          {/* Footer controls */}
          <div className="border-t border-slate-900 pt-4 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-bold uppercase text-[9px] tracking-widest">
              Click to flip back
            </span>
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-cyan-400 font-extrabold hover:text-[#00f0ff] hover:underline flex items-center gap-1 text-[11px]"
            >
              LinkedIn Profile <ExternalLink size={12} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
