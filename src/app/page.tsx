import React from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import CallForSpeakers from "@/components/CallForSpeakers";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Registration from "@/components/Registration";
import Organizers from "@/components/Organizers";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Network Particle Background (Fixed & Full Screen) */}
      <ParticleBackground />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Dynamic Countdown Timer Section */}
        <Countdown />

        {/* Informative About Section */}
        <About />

        {/* Call For Speakers Invitations */}
        <CallForSpeakers />

        {/* Featured Speakers Grid Section */}
        <Speakers />

        {/* Interactive Event Schedule Timeline */}
        <Schedule />

        {/* Tiered Ticket Pricing Passes */}
        <Registration />

        {/* Organizers Committee Profile Gallery */}
        <Organizers />

        {/* Event Sponsors & Community Partners */}
        <Sponsors />
      </main>

      {/* Page Footer Credentials & Links */}
      <Footer />
    </div>
  );
}
