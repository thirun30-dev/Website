"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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
    name: "Mr. B. Bhuvaneshwaran",
    role: "Faculty Coordinator & Cloud Mentor",
    department: "Information Technology",
    linkedin: "https://www.linkedin.com/",
    bio: "Specializes in Cloud Computing, Distributed Architectures, and DevOps methodologies. Faculty Coordinator for AWS Students Builder Group at Rajalakshmi Engineering College (REC), leading student hackathons, serverless workshops, and cloud migrations.",
    background: "12+ years of teaching excellence and AWS education curation. Certified AWS Academy Educator, passionate about bridging the gap between industry practices and academic cloud architectures.",
    isSpecial: true,
  },
];

const coreTeam: CoreMember[] = [
  {
    name: "Sanjay Kumar S",
    role: "Student President & Lead",
    department: "Information Technology",
    bio: "Sanjay coordinates all student builder operations, manages events scheduling, drafts hackathon tracks, and liaises directly with AWS developer support groups to expand the club's regional outreach.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "sanjay@example.com",
    image: "/sanjay.png",
    responsibilities: [
      "Event Scheduling & Operations",
      "Developer Relations Liaison",
      "Hackathon Track Management"
    ]
  },
  {
    name: "Monica R",
    role: "Vice President & Operations",
    department: "Computer Science",
    bio: "Monica manages student memberships, workshop logistics, campus outreach tracks, and budget tracking for all REC AWS Student Builder Group sessions and tech conferences.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "monica@example.com",
    image: "/monica.png",
    responsibilities: [
      "Workshop Logistics & Catering",
      "Membership Management",
      "Budget Allocation & Audits"
    ]
  },
  {
    name: "Madan G",
    role: "Technical Web Lead",
    department: "Information Technology",
    bio: "Madan is responsible for collegiate web portals, managing online registration pipelines, and designing cloud-native serverless systems to deploy active builder dashboards on AWS.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "madan@example.com",
    image: "/madan.png",
    responsibilities: [
      "Collegiate Web Platforms",
      "Serverless Architecture Design",
      "Registration Pipeline Flow"
    ]
  },
  {
    name: "Dharshini K",
    role: "Design & Media Coordinator",
    department: "Computer Science",
    bio: "Dharshini leads the visual branding, poster layouts, merchandise designs, social media posters, and keynote video curation teams for REC cloud community events.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "dharshini@example.com",
    image: "/dharshini.png",
    responsibilities: [
      "Visual Brand Consistency",
      "Merchandise Design",
      "Social Media Visuals & Assets"
    ]
  },
  {
    name: "Abhishek V",
    role: "Public Relations Lead",
    department: "Artificial Intelligence",
    bio: "Abhishek handles communications, college announcements, social media newsletters, PR briefings, and partner sponsor networking paths to expand AWS builder presence.",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "abhishek@example.com",
    image: "/abhishek.png",
    responsibilities: [
      "Public Relations Strategy",
      "Sponsor Network Engagement",
      "Newsletter & Announcements"
    ]
  }
];

const crewTeam: CrewMember[] = [
  {
    name: "Aditya P",
    role: "Technical Support",
    department: "Information Technology",
    image: "/crew_1.png",
    bio: "Aditya manages cloud-native developer environments, assists with registration API integrations, and ensures high availability of hackathon server clusters.",
    responsibilities: ["API Integrations", "Cluster Operations", "Hardware Diagnostics"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "aditya@example.com"
  },
  {
    name: "Bhavya S",
    role: "Ops Coordinator",
    department: "Computer Science",
    image: "/crew_2.png",
    bio: "Bhavya coordinates presentation logistics, controls stage lighting setups, and organizes interactive gaming arenas for event breaks.",
    responsibilities: ["Stage Event Flow", "Breakout Session Logistics", "AV Control Systems"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "bhavya@example.com"
  },
  {
    name: "Charan K",
    role: "Web Developer",
    department: "Information Technology",
    image: "/crew_3.png",
    bio: "Charan is a developer building landing pages, optimizing SVG animations, and ensuring mobile-first responsive viewports for the event site.",
    responsibilities: ["Tailwind Utility Styling", "Next.js Build Optimization", "Responsive QA Testing"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "charan@example.com"
  },
  {
    name: "Divya N",
    role: "Design Associate",
    department: "Computer Science",
    image: "/crew_4.png",
    bio: "Divya crafts custom vectors, designs banner assets, and styles printable ID badges for all student delegates and keynote speakers.",
    responsibilities: ["Graphic Vector Assets", "ID Badge Custom Layouts", "Promotional Keynote Slides"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "divya@example.com"
  },
  {
    name: "Eshwar R",
    role: "Logistics Associate",
    department: "Information Technology",
    image: "/crew_5.png",
    bio: "Eshwar handles collegiate networking arrangements, manages check-in desks, and directs catering queues during the community lunch break.",
    responsibilities: ["Delegate Check-in Systems", "Local Vendor Coordination", "Catering & Lounge Setup"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "eshwar@example.com"
  },
  {
    name: "Faisal M",
    role: "Cloud Associate",
    department: "Computer Science",
    image: "/crew_1.png",
    bio: "Faisal sets up sandbox AWS IAM credentials, builds serverless mock APIs for workshops, and assists attendees with container builds.",
    responsibilities: ["AWS Account Vending", "Serverless API Mocks", "Docker Build Support"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "faisal@example.com"
  },
  {
    name: "Gita V",
    role: "Public Relations",
    department: "Artificial Intelligence",
    image: "/priya.png",
    bio: "Gita runs public relations pipelines, drafting collegiate announcements and publishing newsletter summaries to local tech hubs.",
    responsibilities: ["Newsletter Content Copy", "Collegiate PR Outreach", "Sponsor Relations Support"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "gita@example.com"
  },
  {
    name: "Hari Prasad",
    role: "Technical Support",
    department: "Information Technology",
    image: "/crew_2.png",
    bio: "Hari conducts live tech checks, verifies HDMI projections, and ensures flawless audio signals across main venue presentation halls.",
    responsibilities: ["Live Projection Checkups", "Audio Signal Mixing", "Presenter Mic Setup"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "hari@example.com"
  },
  {
    name: "Indu J",
    role: "Ops Coordinator",
    department: "Computer Science",
    image: "/crew_3.png",
    bio: "Indu arranges accommodation guides, coordinates local shuttle schedules, and runs the info desk for out-of-town student delegates.",
    responsibilities: ["Delegate Travel Guides", "Shuttle Dispatch Flow", "General Information Desk"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "indu@example.com"
  },
  {
    name: "Karthik S",
    role: "Web Developer",
    department: "Information Technology",
    image: "/crew_4.png",
    bio: "Karthik designs the real-time feedback forms, tracks registrations database pipelines, and automates email confirmations via SES.",
    responsibilities: ["SES Email Templates", "Database Pipeline Queries", "Feedback Form API"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "karthik@example.com"
  },
  {
    name: "Leela M",
    role: "Design Associate",
    department: "Computer Science",
    image: "/crew_5.png",
    bio: "Leela plans video highlights, takes official event photos, and edits social media reels showcasing keynote highlights.",
    responsibilities: ["Highlight Reel Editing", "Photography Coverage", "Social Post Aesthetics"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "leela@example.com"
  },
  {
    name: "Manoj K",
    role: "Logistics Associate",
    department: "Information Technology",
    image: "/crew_1.png",
    bio: "Manoj handles the inventory management of AWS merchandise, distributes T-shirts, and ensures proper storage of extra setup gear.",
    responsibilities: ["Swag Inventory Audits", "Merchandise Distribution", "Equipment Storage Plan"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "manoj@example.com"
  },
  {
    name: "Nisha R",
    role: "Social Media",
    department: "Artificial Intelligence",
    image: "/priya.png",
    bio: "Nisha coordinates real-time event updates, shares live speaker quote cards, and moderates discord community builder channels.",
    responsibilities: ["Live Session Posting", "Speaker Quote Cards", "Discord Moderation"],
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "nisha@example.com"
  }
];

export default function Organizers() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCrew, setSelectedCrew] = useState<CrewMember | null>(null);

  const activeSliderIdx = (page % coreTeam.length + coreTeam.length) % coreTeam.length;

  const triggerSlideChange = (newIndex: number, newDirection: number) => {
    setPage([newIndex, newDirection]);
  };

  const handleManualNext = () => {
    triggerSlideChange(page + 1, 1);
  };

  const handleManualPrev = () => {
    triggerSlideChange(page - 1, -1);
  };

  const handleSelectDot = (idx: number) => {
    const currentIdx = (page % coreTeam.length + coreTeam.length) % coreTeam.length;
    if (idx === currentIdx) return;
    const diff = idx - currentIdx;
    triggerSlideChange(page + diff, diff > 0 ? 1 : -1);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleManualNext();
    }, 5000); // Autoplay every 5 seconds
    return () => clearInterval(interval);
  }, [isHovered, page]);

  const activeMember = coreTeam[activeSliderIdx];

  return (
    <section id="organizers" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <div className="text-cyan-400 font-semibold uppercase tracking-wider text-xs">
            Organizing Committee
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Meet the Builders
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            The student heads and faculty mentors of the AWS Students Builder Group at REC College hosting the 2026 Community Day.
          </p>
        </div>

        {/* 1. Faculty Coordinator Section */}
        <div className="space-y-12">
          <h3 className="text-lg font-bold text-[#00f0ff] border-b border-slate-900 pb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Faculty Coordinator
          </h3>

          {/* Featured Faculty Coordinator Spotlight click expansion */}
          <FeaturedCoordinatorCard member={advisors[0]} />
        </div>

        {/* 2. Core Team Showcase Section */}
        <div className="space-y-8 pt-4">
          <h3 className="text-lg font-bold text-[#00f0ff] border-b border-slate-900 pb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Core Team
          </h3>

          {/* Premium Glassmorphic Content Box Container */}
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="glass-panel text-white rounded-[32px] p-6 md:p-10 border border-cyan-500/10 hover:border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.05)] hover:shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden relative transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
              
              {/* Left Section (Image Showcase – 60%) */}
              <div className="w-full lg:w-[60%] flex-shrink-0 relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#0c1a30] to-[#050b14] border border-blue-900/30 shadow-2xl flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                
                {/* Large Portrait Image Container with slide transitions */}
                <div className="absolute inset-0 w-full h-full">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={page}
                      custom={direction}
                      variants={{
                        enter: (dir: number) => ({
                          x: dir > 0 ? "100%" : "-100%",
                          opacity: 0
                        }),
                        center: {
                          x: 0,
                          opacity: 1
                        },
                        exit: (dir: number) => ({
                          x: dir < 0 ? "100%" : "-100%",
                          opacity: 0
                        })
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "tween", duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
                        opacity: { duration: 0.8, ease: "easeInOut" }
                      }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={activeMember.image}
                        alt={activeMember.name}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Subtle dark gradient overlay at the bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none z-10" />

                {/* Member Name and Role - Bottom Left, Soft Shadow, Premium Glassmorphism */}
                <div className="absolute bottom-6 left-6 right-6 z-20 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-white">
                  <h4 className="text-xl sm:text-2xl font-bold tracking-wide drop-shadow-md">
                    {activeMember.name}
                  </h4>
                  <p className="text-sm text-cyan-300 font-semibold tracking-wider uppercase drop-shadow-sm mt-1">
                    {activeMember.role}
                  </p>
                </div>
              </div>

              {/* Right Section (Details Panel – 40%) */}
              <div className="w-full lg:w-[40%] flex flex-col justify-between relative min-h-[450px] lg:min-h-[500px] z-10 pt-4 lg:pt-0">
                
                {/* Large Background Number (01-05) */}
                <div className="absolute -top-6 -right-4 text-[120px] sm:text-[180px] font-black text-blue-950/20 select-none opacity-40 pointer-events-none font-mono tracking-tighter leading-none z-0">
                  {String(activeSliderIdx + 1).padStart(2, '0')}
                </div>

                {/* Section Header Info */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    Meet Our Core Team
                  </h2>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    The passionate organizers behind AWS Community Day, working together to build an impactful community experience.
                  </p>
                </div>

                {/* Sync Animated Details */}
                <div className="relative z-10 flex-grow flex flex-col justify-center mt-6 lg:mt-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSliderIdx}
                      variants={{
                        initial: { opacity: 0, y: 15 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -15 }
                      }}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="space-y-6"
                    >
                      {/* Name & Designation */}
                      <div>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {activeMember.name}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mt-1 text-glow">
                          {activeMember.role}
                        </p>
                      </div>

                      {/* Bio */}
                      <div>
                        <p className="text-slate-300 text-sm leading-relaxed min-h-[4.5rem]">
                          {activeMember.bio}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h5 className="text-xs font-bold text-[#00f0ff]/70 uppercase tracking-widest mb-3">
                          Responsibilities
                        </h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {activeMember.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-300 text-xs font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] flex-shrink-0 animate-pulse" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Social Icons */}
                      <div className="flex items-center gap-4 pt-5 border-t border-slate-800">
                        <a
                          href={activeMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-slate-900/40 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 active:scale-95 shadow-sm"
                          title="LinkedIn Profile"
                        >
                          <LinkedinIcon size={18} />
                        </a>
                        <a
                          href={activeMember.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-slate-900/40 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-95 shadow-sm"
                          title="GitHub Profile"
                        >
                          <GithubIcon size={18} />
                        </a>
                        <a
                          href={`mailto:${activeMember.email}`}
                          className="w-10 h-10 rounded-full bg-slate-900/40 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#ea4335] hover:border-[#ea4335]/50 hover:bg-[#ea4335]/10 hover:shadow-[0_0_15px_rgba(234,67,53,0.2)] transition-all duration-300 active:scale-95 shadow-sm"
                          title="Email"
                        >
                          <MailIcon size={18} />
                        </a>
                      </div>

                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Nav dots and arrows */}
                <div className="relative z-10 flex items-center justify-between mt-8 pt-4 border-t border-slate-800">
                  {/* Pagination Dots */}
                  <div className="flex items-center gap-2">
                    {coreTeam.map((_, idx) => {
                      const isActive = activeSliderIdx === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectDot(idx)}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            isActive 
                              ? "w-6 bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.6)]" 
                              : "w-2 bg-slate-800 hover:bg-slate-700"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      );
                    })}
                  </div>

                  {/* Chevrons Navigation */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleManualPrev}
                      className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleManualNext}
                      className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
                      aria-label="Next slide"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* 3. Event Crew Section */}
        <div className="space-y-12 pt-8">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-[#00f0ff] flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Event Crew
            </h3>
            <p className="text-slate-400 text-xs max-w-md mx-auto">
              Our hard-working student crew members supporting logistics, technical operations, design, and venue management. Click any crew member to view full profiles.
            </p>
          </div>

          {/* Infinite Overlapping Stack Slider moving Left-to-Right */}
          <div className="marquee-container relative w-full overflow-hidden py-10">
            {/* Soft Edge Blending Gradients */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#020205] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#020205] to-transparent z-20 pointer-events-none" />

            <div className="animate-marquee-ltr flex gap-4 pl-10">
              {[...crewTeam, ...crewTeam].map((member, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCrew(member)}
                  className="crew-card-stacked relative flex-shrink-0 w-44 sm:w-52 glass-panel rounded-[24px] border border-cyan-500/10 bg-[#070712]/90 overflow-hidden flex flex-col p-4 cursor-pointer"
                >
                  {/* Card Glow Highlight Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Container - Medium-sized circle/square */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 150px, 200px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  </div>

                  {/* Text details */}
                  <div className="mt-3.5 space-y-1 text-left relative z-10">
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                      {member.name}
                    </h4>
                    <p className="text-[10px] font-semibold text-cyan-400 uppercase tracking-widest leading-none text-glow">
                      {member.role}
                    </p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                      {member.department}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Crew Member Modal */}
        <AnimatePresence>
          {selectedCrew && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedCrew(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-xl glass-panel text-white rounded-3xl p-6 md:p-8 border border-cyan-500/20 shadow-[0_0_50px_rgba(0,240,255,0.2)] bg-[#070712]/95 flex flex-col md:flex-row gap-6 md:gap-8 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCrew(null)}
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
                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-0.5 text-glow">
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
                      className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 transition-all active:scale-95 cursor-pointer"
                      title="LinkedIn Profile"
                    >
                      <LinkedinIcon size={14} />
                    </a>
                    <a
                      href={selectedCrew.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
                      title="GitHub Profile"
                    >
                      <GithubIcon size={14} />
                    </a>
                    <a
                      href={`mailto:${selectedCrew.email}`}
                      className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#ea4335] hover:border-[#ea4335]/50 hover:bg-[#ea4335]/10 transition-all active:scale-95 cursor-pointer"
                      title="Email"
                    >
                      <MailIcon size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

// 1. Standard Advisor Card Component
function StandardAdvisorCard({ member }: { member: Advisor }) {
  const initials = member.name
    .replace("Dr. ", "")
    .replace("Mr. ", "")
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center gap-4 bg-[#070712]/90 h-28">
      {/* Avatar */}
      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-950 to-slate-950 border border-cyan-500/20 flex items-center justify-center text-[#00f0ff] font-extrabold text-sm select-none">
        {initials}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-white truncate">{member.name}</h4>
        <p className="text-[11px] text-cyan-400 font-semibold truncate leading-tight mt-0.5 animate-pulse">
          {member.role}
        </p>
        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider truncate">
          {member.department}
        </p>
      </div>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-500 hover:text-[#00f0ff] transition-colors p-1"
        title="LinkedIn Profile"
      >
        <LinkedinIcon size={16} />
      </a>
    </div>
  );
}

// 3. Featured Coordinator Card Component (Mr. B. Bhuvaneshwaran)
function FeaturedCoordinatorCard({ member }: { member: Advisor }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 15%"]
  });

  // Automatically collapse when user scrolls past or away
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.1 || latest > 0.9) {
      setIsExpanded(false);
    }
  });

  // Transform values based on click state
  const imageX = isExpanded && !isMobile ? "-180px" : "0px";
  const imageWidth = isExpanded && !isMobile ? "420px" : (isMobile ? "260px" : "320px");
  const textOpacity = isExpanded ? 1 : 0;
  const textX = isExpanded && !isMobile ? "0px" : "40px";
  const pointerEvents = isExpanded ? ("auto" as const) : ("none" as const);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full min-h-[500px] flex items-center justify-center py-16 overflow-hidden"
    >
      <div className="relative w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        
        {/* Animated Coordinator Square Photo (moves left & expands wider on click) */}
        <motion.div
          onClick={() => setIsExpanded(!isExpanded)}
          animate={{
            x: imageX,
            width: imageWidth,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative aspect-square h-[260px] sm:h-[320px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1a30] to-[#050b14] border border-cyan-500/20 shadow-[0_0_35px_rgba(0,240,255,0.15)] hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] flex-shrink-0 z-20 cursor-pointer group/spotlight"
        >
          <Image
            src="/bhuvaneshwaran.png"
            alt={member.name}
            fill
            priority
            className="object-cover object-top"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />
          
          {/* Subtle click indicator hint */}
          <div className="absolute top-4 right-4 z-20 bg-slate-950/80 backdrop-blur-sm border border-cyan-500/20 rounded-full px-3 py-1 text-[9px] font-bold text-cyan-300 uppercase tracking-wider pointer-events-none group-hover/spotlight:border-cyan-400 group-hover/spotlight:text-cyan-200 transition-colors">
            {isExpanded ? "Click to collapse" : "Click to view bio"}
          </div>

          {/* Floating name badge overlay inside card */}
          <div className="absolute bottom-5 left-5 right-5 z-20 text-white select-none">
            <h5 className="text-lg sm:text-xl font-bold tracking-wide drop-shadow-md">{member.name}</h5>
            <p className="text-xs text-cyan-300 font-semibold uppercase tracking-wider mt-0.5">{member.role}</p>
          </div>
        </motion.div>

        {/* Animated Professional Description Panel (slides/fades in on the right on click) */}
        <motion.div
          animate={{
            opacity: textOpacity,
            x: textX,
            scale: isExpanded ? 1 : 0.95
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ pointerEvents }}
          className="w-full lg:w-[420px] text-left space-y-5 z-10 p-6 rounded-2xl glass-panel border border-cyan-500/10 text-white lg:absolute lg:right-[80px] xl:right-[120px]"
        >
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/15 text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
              Spotlight Organizer
            </span>
            <h3 className="text-2xl font-black mt-2 text-white leading-tight">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mt-0.5 text-glow animate-pulse">
              {member.role}
            </p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-1">
              {member.department}
            </p>
          </div>

          <div className="space-y-3.5">
            <div>
              <h5 className="text-[9px] text-[#00f0ff]/65 font-bold uppercase tracking-wider mb-1">
                Faculty Biography
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {member.bio}
              </p>
            </div>

            <div>
              <h5 className="text-[9px] text-[#00f0ff]/65 font-bold uppercase tracking-wider mb-1">
                Cloud Curation & Focus
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {member.background}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-[#00f0ff] font-bold uppercase text-xs tracking-wider transition-colors"
            >
              <LinkedinIcon size={16} /> Connect on LinkedIn
            </a>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              AWS SBG REC
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
