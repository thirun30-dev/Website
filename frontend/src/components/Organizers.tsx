"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

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

const GithubIcon = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
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
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const MailIcon = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
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
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

interface Advisor {
  name: string;
  role: string;
  department: string;
  linkedin: string;
  bio?: string;
  background?: string;
  focusAreas?: string[];
  isSpecial?: boolean;
}

interface CoreMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  linkedin: string;
  github: string;
  email: string;
  image: string;
  responsibilities: string[];
}

interface CrewMember {
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  responsibilities: string[];
  linkedin: string;
  github: string;
  email: string;
}

const advisors: Advisor[] = [
  {
    name: "Dr. Bhuvaneshwaran B",
    role: "Faculty Coordinator & Cloud Mentor",
    department: "Assistant Professor, School of Computer Engineering, REC",
    linkedin: "https://www.linkedin.com/in/bhuvaneswaranrec/",
    bio: "Dr. Bhuvaneshwaran B serves as the Faculty Coordinator of AWS Student Builders Group (SBG) REC. With extensive expertise in AI, Cloud Computing, Data Engineering, and Software Development—backed by industry certifications from AWS, IBM, Oracle, MongoDB, Snowflake, UiPath, and Microsoft—he inspires students to transform ideas into impactful solutions through hands-on mentorship, hackathons, and collaborative learning.",
    focusAreas: [
      "AI & Cloud Computing",
      "Data Engineering & Automation",
      "Hackathon & Project Mentorship",
      "Industry Certifications & Research"
    ],
    isSpecial: true,
  },
];

const coreTeam: CoreMember[] = [
  {
    name: "Prathakshanaa T",
    role: "Captain",
    department: "Information Technology",
    bio: "Leads the cloud learning initiatives of the AWS Students Builder Group and promotes AWS technologies within the student community. Responsible for organizing cloud-focused events, encouraging hands-on learning, and helping students explore certifications, projects, and career opportunities in cloud computing.",
    linkedin: "https://www.linkedin.com/in/prathakshanaa/",
    github: "https://github.com/",
    email: "aws.sbg.rec@gmail.com",
    image: "/images/core/prathakshanaa_t.jpg",
    responsibilities: [
      "AWS Learning Programs",
      "Community Building",
      "Technical Workshops",
      "Cloud Advocacy"
    ]
  },
  {
    name: "K N Pranav Ranjan",
    role: "Tech Lead",
    department: "Information Technology",
    bio: "Oversees the technical execution of community initiatives and Student Community Day 2026. Ensures smooth operation of event platforms, technical infrastructure, and digital experiences while guiding the team on technical decisions and innovation.",
    linkedin: "https://www.linkedin.com/in/knpranavranjan/",
    github: "https://github.com/",
    email: "knpranavranjan@gmail.com",
    image: "/images/core/pranav_ranjan.jpg",
    responsibilities: [
      "Technical Strategy",
      "Platform Development",
      "Cloud Architecture",
      "Team Mentorship"
    ]
  },
  {
    name: "V Thirunavukkarasu",
    role: "Social Media Lead",
    department: "Computer Science",
    bio: "Drives the online presence of the AWS Students Builder Group through engaging content, event promotions, and community engagement. Responsible for building awareness, increasing reach, and showcasing the impact of community initiatives.",
    linkedin: "https://www.linkedin.com/in/thirunavukkarasu-veeramani-140b6a317/",
    github: "https://github.com/",
    email: "thirunavukkarasu@example.com",
    image: "/images/core/thirunavukkarasu.jpg",
    responsibilities: [
      "Content Strategy",
      "Event Promotions",
      "Community Engagement",
      "Brand Communication"
    ]
  },
  {
    name: "Giridharan R",
    role: "IT & Support Lead",
    department: "Information Technology",
    bio: "Manages the technical support and operational requirements of events and community activities. Ensures all systems, equipment, and digital resources function efficiently to provide a seamless experience for speakers, attendees, and organizers.",
    linkedin: "https://www.linkedin.com/in/giridharanr777/",
    github: "https://github.com/",
    email: "giiridharan@example.com",
    image: "/images/core/giridharan_r.jpg",
    responsibilities: [
      "Technical Operations",
      "Event Infrastructure",
      "Troubleshooting & Support",
      "Resource Management"
    ]
  },
  {
    name: "Dilip Kannan K",
    role: "Event Management Lead",
    department: "Information Technology",
    bio: "Coordinates planning, execution, and collaboration across various teams to ensure the success of Student Community Day 2026 and community activities. Works closely with speakers, sponsors, volunteers, and organizers to deliver impactful experiences.",
    linkedin: "https://www.linkedin.com/in/dilip-kannan-k/",
    github: "https://github.com/",
    email: "dilip@example.com",
    image: "/images/core/dilip_kannan.jpg",
    responsibilities: [
      "Event Planning",
      "Team Coordination",
      "Stakeholder Management",
      "Community Operations"
    ]
  }
];

const crewTeam: CrewMember[] = [
  {
    name: "Abimithren S",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/abimithren.jpg",
    bio: "Abimithren manages cloud-native developer environments, assists with registration API integrations, and ensures high availability of hackathon server clusters.",
    responsibilities: ["API Integrations", "Cloud Native Builds", "Hardware Diagnostics"],
    linkedin: "https://www.linkedin.com/in/abimithren-s-a0bb79331",
    github: "https://github.com/",
    email: "abimithren@example.com"
  },
  {
    name: "Balaambiga C A",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/balaambiga_c_a.jpg",
    bio: "Balaambiga manages logistics, registration support, and attendee queries for the AWS Student Builder Groups.",
    responsibilities: ["Registration Support", "Logistics Coordination", "Attendee Query Help"],
    linkedin: "https://www.linkedin.com/in/balaambiga-ca-46a49431a",
    github: "https://github.com/",
    email: "balaambiga@example.com"
  },
  {
    name: "Goutham R",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/goutham_r.jpg",
    bio: "Goutham sets up sandbox AWS IAM credentials, builds serverless mock APIs for workshops, and assists attendees with container builds.",
    responsibilities: ["AWS Account Vending", "Serverless API Mocks", "Docker Build Support"],
    linkedin: "https://www.linkedin.com/in/goutham-r-688a4730b",
    github: "https://github.com/",
    email: "goutham@example.com"
  },
  {
    name: "Harini S",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/harini_s.jpg",
    bio: "Harini coordinates presentation logistics, controls stage lighting setups, and organizes interactive gaming arenas for event breaks.",
    responsibilities: ["Stage Event Flow", "Breakout Session Logistics", "AV Control Systems"],
    linkedin: "https://www.linkedin.com/in/harini-s-5549b2333",
    github: "https://github.com/",
    email: "harini@example.com"
  },
  {
    name: "Jaiganesh G",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/jaiganesh_g.jpg",
    bio: "Jaiganesh conducts live tech checks, verifies HDMI projections, and assists with event promotion and social media content editing.",
    responsibilities: ["Technical Support", "Event Coordination", "Social Media Content"],
    linkedin: "https://www.linkedin.com/in/jai-ganesh-g-aa294632a",
    github: "https://github.com/jaiganesh78",
    email: "jaigokul67@gmail.com"
  },
  {
    name: "Lakshminarasimhan Uppili",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/lakshminarasimhan.jpg",
    bio: "Lakshminarasimhan manages network infrastructure, venue connectivity, and cloud lab setups for hackathon attendees.",
    responsibilities: ["Network Infrastructure", "Cloud Lab Setups", "Technical Operations"],
    linkedin: "https://www.linkedin.com/in/lakshminarasimhan-uppili",
    github: "https://github.com/",
    email: "lakshminarasimhan@example.com"
  },
  {
    name: "Neil Daniel",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/neil_daniel.jpg",
    bio: "Neil drafts collegiate announcements, crafts event newsletters, and publishes summary articles across technical hubs.",
    responsibilities: ["Content Strategy", "Collegiate Outreach", "Sponsor Relations"],
    linkedin: "https://www.linkedin.com/in/neildaniel",
    github: "https://github.com/",
    email: "neildaniel@example.com"
  },
  {
    name: "Rannesh Khumar B R",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/rannesh_khumar_b_r.jpg",
    bio: "Rannesh builds interactive landing page components, optimizes web viewports, and maintains frontend pipelines.",
    responsibilities: ["Frontend Components", "UI/UX Enhancements", "Web Optimization"],
    linkedin: "https://www.linkedin.com/in/rannesh-khumar-b-r-507377289",
    github: "https://github.com/",
    email: "rannesh@example.com"
  },
  {
    name: "Sam Devaraja J",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/sam_devaraja_j.jpg",
    bio: "Sam leads full-stack web application development, real-time database integrations, and cloud infrastructure deployment.",
    responsibilities: ["Full-Stack Engineering", "Cloud Infrastructure", "System Architecture"],
    linkedin: "https://www.linkedin.com/in/samdevaraja",
    github: "https://github.com/",
    email: "samdevaraja@example.com"
  },
  {
    name: "Sudhish R",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/sudhish.jpg",
    bio: "Sudhish coordinates check-in desks, delegate reception flow, and stage management during main sessions.",
    responsibilities: ["Delegate Reception", "Stage Management", "Event Operations"],
    linkedin: "https://www.linkedin.com/in/sudhish-r-9319b22a2",
    github: "https://github.com/",
    email: "sudhish@example.com"
  },
  {
    name: "Sunchitha V K",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/sunchitha_vk.jpg",
    bio: "Sunchitha crafts custom graphic vectors, designs banner assets, and styles printable ID badges for all student delegates.",
    responsibilities: ["Graphic Vector Assets", "ID Badge Designs", "Promotional Keynote Slides"],
    linkedin: "https://www.linkedin.com/in/sunchitha-vk-0a3439319",
    github: "https://github.com/",
    email: "sunchitha@example.com"
  },
  {
    name: "Vs Thamizh Selvan",
    role: "Crew Member",
    department: "AWS SBG REC",
    image: "/images/crew/vs_thamizh_selvan.jpg",
    bio: "Thamizh assists with container setups, serverless architecture demos, and cloud workshop lab operations.",
    responsibilities: ["Container Setups", "Workshop Demos", "Cloud Operations"],
    linkedin: "https://www.linkedin.com/in/vs-thamizh",
    github: "https://github.com/",
    email: "thamizh@example.com"
  }
];

export default function Organizers() {
  const [selectedCrew, setSelectedCrew] = useState<CrewMember | null>(null);
  const [activeCoreIdx, setActiveCoreIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Escape key event listener to close modal
  useEffect(() => {
    if (!selectedCrew) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCrew(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCrew]);

  // Auto-scroll Core Team carousel every 6 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveCoreIdx((prev) => (prev + 1) % coreTeam.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeCoreIdx, isHovered]);


  return (
    <section id="organizers" className="py-10 relative overflow-hidden bg-transparent">
      {/* Background Grid & Ambient Glows (Matching Hero) */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-60 rounded-3xl bg-cyan-600/10 blur-[130px] -rotate-12 pointer-events-none" />
      <div className="absolute bottom-5 right-1/4 w-[450px] h-60 rounded-3xl bg-blue-600/10 blur-[140px] rotate-12 pointer-events-none" />

      <div className="w-[94%] max-w-[1440px] mx-auto relative z-10 space-y-10">

        {/* Section Heading */}
        <div className="text-center space-y-4">
          <div className="text-cyan-400 font-semibold uppercase tracking-wider text-xs">
            Organizing Committee
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Meet the Builders
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            The student heads and faculty mentors of the AWS Student Builder Groups at REC College hosting the 2026 Community Day.
          </p>
        </div>

        {/* 1. Faculty Coordinator Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#00f0ff] border-b border-slate-900 pb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Faculty Coordinator
          </h3>

          {/* Featured Faculty Coordinator Spotlight click expansion */}
          <FeaturedCoordinatorCard member={advisors[0]} />
        </div>

        {/* 2. Core Team Showcase Section — 3D Coverflow Showcase & Spotlight Profile */}
        <div
          className="space-y-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="text-lg font-bold text-[#00f0ff] border-b border-slate-900 pb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Core Team
          </h3>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch justify-between min-h-[460px]">
            {/* Left Side: 3D Coverflow Card Slider */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative py-4">
              <div
                style={{ perspective: 1000 }}
                className="relative w-full max-w-[420px] h-[390px] sm:h-[430px] flex items-center justify-center overflow-visible select-none"
              >
                {coreTeam.map((member, idx) => {
                  let offset = idx - activeCoreIdx;
                  const N = coreTeam.length;
                  if (offset < -Math.floor(N / 2)) offset += N;
                  if (offset > Math.floor((N - 1) / 2)) offset -= N;

                  const isActive = offset === 0;
                  const cardSpacing = isMobile ? 65 : 85;

                  return (
                    <motion.div
                      key={member.name}
                      onClick={() => setActiveCoreIdx(idx)}
                      style={{
                        zIndex: 20 - Math.abs(offset),
                        pointerEvents: "auto",
                      }}
                      animate={{
                        x: offset * cardSpacing,
                        scale: isActive ? 1 : 0.84,
                        rotateY: isActive ? 0 : offset < 0 ? 18 : -18,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 28,
                        mass: 0.4,
                      }}
                      className={`absolute w-[240px] sm:w-[275px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#070c18] cursor-pointer group/core flex-shrink-0 origin-center ${
                        isActive
                          ? "border-2 border-[#00f0ff] shadow-[0_0_35px_rgba(0,240,255,0.35),0_15px_40px_rgba(0,0,0,0.9)]"
                          : "border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-cyan-500/40"
                      }`}
                    >
                      {/* Member Image */}
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 240px, 275px"
                        className="object-cover object-center transition-transform duration-500 group-hover/core:scale-105"
                      />

                      {/* Vignette Overlay */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-200 pointer-events-none z-10 ${
                          isActive
                            ? "bg-gradient-to-t from-black/95 via-black/35 to-transparent"
                            : "bg-black/60 backdrop-blur-[1px]"
                        }`}
                      />

                      {/* Name & Clean Professional Role Badge Overlay ONLY on active card */}
                      {isActive && (
                        <div className="absolute bottom-5 left-3 right-3 z-20 text-center select-none space-y-1.5">
                          <h4 className="text-base sm:text-lg font-bold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] truncate px-1">
                            {member.name}
                          </h4>
                          <div className="flex justify-center">
                            <span className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-[#0c192c]/90 border border-cyan-500/30 backdrop-blur-md shadow-sm">
                              {member.role}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Prev / Next Controls & Dots */}
              <div className="flex items-center gap-4 mt-3 z-20">
                <button
                  onClick={() => setActiveCoreIdx((prev) => (prev - 1 + coreTeam.length) % coreTeam.length)}
                  className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-slate-300 flex items-center justify-center transition-all active:scale-95"
                  title="Previous Member"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex items-center gap-1.5">
                  {coreTeam.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCoreIdx(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeCoreIdx === i
                          ? "w-6 bg-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.6)]"
                          : "w-2 bg-slate-800 hover:bg-slate-700"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveCoreIdx((prev) => (prev + 1) % coreTeam.length)}
                  className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-slate-300 flex items-center justify-center transition-all active:scale-95"
                  title="Next Member"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side: Spotlight Profile Panel */}
            <div className="w-full lg:w-1/2 flex items-center">
              <AnimatePresence>
                <motion.div
                  key={activeCoreIdx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="glass-panel text-white rounded-3xl p-6 sm:p-8 border border-cyan-500/15 shadow-[0_0_40px_rgba(0,240,255,0.08)] bg-[#070b16]/90 space-y-6 w-full h-full flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/15 text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
                      Core Team Profile
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black mt-2 text-white leading-tight">
                      {coreTeam[activeCoreIdx].name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <p className="text-xs sm:text-sm font-semibold text-[#00f0ff] uppercase tracking-wider leading-none">
                        {coreTeam[activeCoreIdx].role}
                      </p>
                      <span className="text-slate-600 text-xs">•</span>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest leading-none">
                        {coreTeam[activeCoreIdx].department}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-[9px] sm:text-[10px] text-[#00f0ff]/70 font-bold uppercase tracking-wider mb-1">
                        Biography & Leadership
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                        {coreTeam[activeCoreIdx].bio}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[9px] sm:text-[10px] text-[#00f0ff]/70 font-bold uppercase tracking-wider mb-2">
                        Key Responsibilities & Focus
                      </h5>
                      <ul className="grid grid-cols-1 gap-2">
                        {coreTeam[activeCoreIdx].responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-slate-800/80 flex-wrap">
                    <a
                      href={coreTeam[activeCoreIdx].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all font-semibold text-xs group"
                      title="LinkedIn Profile"
                    >
                      <LinkedinIcon size={14} className="group-hover:scale-110 transition-transform" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Event Crew Section - Full Width Edge-to-Edge */}
      <div className="w-full relative z-10 mt-16 space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <h3 className="text-xl font-bold text-[#00f0ff] flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Event Crew
          </h3>
          <p className="text-slate-400 text-xs max-w-md mx-auto">
            Our hard-working student crew members supporting logistics, technical operations, design, and venue management. Click any crew member to view full profiles.
          </p>
        </div>

        {/* Full Viewport Marquee Slider (No Left/Right Outer Gaps) */}
        <div className="marquee-container relative w-full overflow-hidden py-8">
          {/* Edge Blending Gradients */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#020205] via-[#020205]/60 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#020205] via-[#020205]/60 to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-rtl flex gap-5 px-2">
            {[...crewTeam, ...crewTeam, ...crewTeam].map((member, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCrew(member)}
                className="crew-card-stacked group relative flex-shrink-0 w-48 sm:w-56 glass-panel rounded-2xl border border-slate-800/80 bg-[#070b16]/90 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] transition-all duration-300 overflow-hidden flex flex-col p-3.5 cursor-pointer"
              >
                {/* Subtle Card Glow Highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 180px, 220px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </div>

                {/* Text details */}
                <div className="mt-3 space-y-1 text-left relative z-10">
                  <h4 className="text-sm font-bold text-white tracking-wide truncate">
                    {member.name}
                  </h4>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/25 text-[#00f0ff]">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider truncate pt-0.5">
                    {member.department}
                  </p>
                </div>

                {/* Hover details overlay */}
                <div className="absolute inset-0 bg-[#070b16]/95 backdrop-blur-md p-4 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-30 rounded-2xl border border-cyan-500/40">
                  <div className="space-y-2.5 overflow-hidden">
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white truncate">{member.name}</h4>
                      <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/25 text-[#00f0ff]">
                        {member.role}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider block mb-0.5">Bio</span>
                        <p className="text-[10px] text-slate-300 leading-normal line-clamp-3 font-medium">
                          {member.bio}
                        </p>
                      </div>

                      <div>
                        <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Focus</span>
                        <div className="flex flex-wrap gap-1">
                          {member.responsibilities.slice(0, 2).map((resp, i) => (
                            <span key={i} className="text-[8px] bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-medium">
                              {resp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all active:scale-90"
                        title="LinkedIn"
                      >
                        <LinkedinIcon size={10} />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all active:scale-90"
                        title="GitHub"
                      >
                        <GithubIcon size={10} />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#ea4335] hover:border-[#ea4335]/50 hover:bg-[#ea4335]/10 transition-all active:scale-90"
                        title="Email"
                      >
                        <MailIcon size={10} />
                      </a>
                    </div>
                    <span className="text-[8px] text-[#00f0ff]/80 font-bold uppercase tracking-wider flex items-center gap-1">
                      Profile ➔
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Crew Member Modal */}
      <AnimatePresence>
        {selectedCrew && (
          <CrewMemberModalPortal
            mounted={mounted}
            selectedCrew={selectedCrew}
            onClose={() => setSelectedCrew(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}


// 3. Featured Coordinator Card Component (Mr. B. Bhuvaneshwaran)

function FeaturedCoordinatorCard({ member }: { member: Advisor }) {
  return (
    <div className="relative w-full py-4">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Faculty Coordinator Photo Card */}
        <div className="lg:col-span-5 relative w-full min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden glass-panel border border-cyan-500/20 shadow-[0_0_35px_rgba(0,240,255,0.12)] bg-[#070c18] flex flex-col justify-end p-6 group">
          <Image
            src="/images/faculty_bhuvaneswaran.jpg"
            alt={member.name}
            fill
            priority
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-transparent pointer-events-none z-10" />

          {/* Badge & Name overlay */}
          <div className="relative z-20 space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
              Faculty Mentor
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white tracking-wide drop-shadow-md">
              {member.name}
            </h4>
            <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
              {member.role}
            </p>
          </div>
        </div>

        {/* Right Column: Spotlight Info & Bio Panel */}
        <div className="lg:col-span-7 w-full glass-panel rounded-3xl border border-cyan-500/20 bg-[#070c18]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_0_40px_rgba(0,240,255,0.08)]">
          <div className="space-y-5">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-[#00f0ff] text-[10px] font-extrabold uppercase tracking-widest">
                  Spotlight Organizer
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#00f0ff] uppercase tracking-wider mt-1">
                {member.role}
              </p>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-0.5">
                {member.department}
              </p>
            </div>

            {/* Biography */}
            <div className="space-y-1.5">
              <h5 className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                Faculty Biography
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {member.bio}
              </p>
            </div>

            {/* Key Focus Areas */}
            {member.focusAreas && (
              <div className="space-y-2">
                <h5 className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                  Key Focus Areas
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {member.focusAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs font-medium bg-slate-950/60 border border-slate-800/80 px-3 py-2 rounded-xl">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse flex-shrink-0" />
                      <span className="truncate">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social CTA */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-cyan-300 font-bold uppercase text-xs tracking-wider transition-all hover:translate-x-1"
            >
              <LinkedinIcon size={16} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CrewMemberModalPortalProps {
  mounted: boolean;
  selectedCrew: CrewMember | null;
  onClose: () => void;
}

function CrewMemberModalPortal({ mounted, selectedCrew, onClose }: CrewMemberModalPortalProps) {
  if (!mounted || !selectedCrew) return null;

  return createPortal(
    <>
      {/* Viewport-sized Backdrop at z-50 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Centered Overlay Card Container at z-60 */}
      <div
        className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 overflow-hidden"
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="false"
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-xl glass-panel text-white rounded-3xl p-6 md:p-8 border border-cyan-500/20 shadow-[0_0_50px_rgba(0,240,255,0.2)] bg-[#070712]/95 flex flex-col md:flex-row gap-6 md:gap-8 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button inside card at z-70 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 active:scale-95 transition-all cursor-pointer z-50"
            aria-label="Close details"
          >
            ✕
          </button>

          {/* Left Section - Medium image in Modal */}
          <div className="w-full md:w-[45%] flex-shrink-0 relative aspect-square md:aspect-auto md:h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
            <Image
              src={selectedCrew.image}
              alt={selectedCrew.name}
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Section - Member details */}
          <div className="flex-1 flex flex-col justify-between space-y-4 pt-2 md:pt-0">
            <div>
              <span className="inline-block px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/15 text-cyan-400 text-[9px] font-bold uppercase tracking-widest">
                Crew Committee Member
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white leading-tight">
                {selectedCrew.name}
              </h3>
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-0.5">
                {selectedCrew.role}
              </p>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                Dept: {selectedCrew.department}
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <h5 className="text-[9px] text-[#00f0ff]/65 font-bold uppercase tracking-wider mb-1">
                  Biography
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {selectedCrew.bio}
                </p>
              </div>

              <div>
                <h5 className="text-[9px] text-[#00f0ff]/65 font-bold uppercase tracking-wider mb-1">
                  Key Focus Areas
                </h5>
                <ul className="grid grid-cols-1 gap-1.5">
                  {selectedCrew.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Social Icons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedCrew.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all font-semibold text-xs group cursor-pointer"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={14} className="group-hover:scale-110 transition-transform" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>,
    document.body
  );
}
