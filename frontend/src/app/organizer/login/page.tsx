"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Lock, Mail, Loader2, ArrowRight, Eye, EyeOff, 
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function OrganizerLogin() {
  const router = useRouter();
  const { login, isAuthenticated, isLoaded } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // If already logged in, redirect immediately
  useEffect(() => {
    if (isLoaded && isAuthenticated) {
      router.replace("/organizer/dashboard");
    }
  }, [isLoaded, isAuthenticated, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const success = await login(email, password);
      if (success) {
        window.location.href = "/organizer/dashboard";
      } else {
        setError("Invalid email or password. Please check your credentials.");
        setLoading(false);
      }
    } catch (err) {
      setError("An unexpected authentication error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100 flex flex-col justify-center items-center px-4 py-12 overflow-hidden select-none">
      
      {/* Rectangular Ambient Cyber Glow Fields */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-48 bg-cyan-600/10 blur-[120px] -rotate-6 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[450px] h-48 bg-blue-600/10 blur-[120px] rotate-6 pointer-events-none" />

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md bg-[#070d1d]/90 backdrop-blur-xl rounded-2xl border border-slate-800/80 p-8 sm:p-10 shadow-2xl text-center relative z-10"
      >
        
        {/* SBG Official Logo & Minimal Header */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center p-2.5 shadow-inner">
            <Image
              src="/sbg_logo.svg"
              alt="SBG Logo"
              width={40}
              height={40}
              priority
              loading="eager"
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              AWS Community Day Admin
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Core & Organizer Console Access
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5 text-left">
          
          {/* Email Address */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              Email Address
            </label>
            <div 
              onClick={() => document.getElementById("email-input")?.focus()}
              className="relative flex items-center bg-[#0f192e] border border-slate-700/80 focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400/50 rounded-xl overflow-hidden transition-all cursor-text shadow-inner"
            >
              <div className="pl-3.5 pr-1 text-cyan-400 pointer-events-none">
                <Mail size={16} />
              </div>
              <input
                id="email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your admin email"
                style={{ WebkitBoxShadow: "0 0 0 1000px #0f192e inset", WebkitTextFillColor: "#ffffff" }}
                className="w-full bg-transparent border-none outline-none pl-2 pr-4 py-3 text-sm text-white placeholder:text-slate-400 placeholder:opacity-90"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              Password
            </label>
            <div 
              onClick={() => document.getElementById("password-input")?.focus()}
              className="relative flex items-center bg-[#0f192e] border border-slate-700/80 focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400/50 rounded-xl overflow-hidden transition-all cursor-text shadow-inner"
            >
              <div className="pl-3.5 pr-1 text-cyan-400 pointer-events-none">
                <Lock size={16} />
              </div>
              <input
                id="password-input"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{ WebkitBoxShadow: "0 0 0 1000px #0f192e inset", WebkitTextFillColor: "#ffffff" }}
                className="w-full bg-transparent border-none outline-none pl-2 pr-10 py-3 text-sm text-white placeholder:text-slate-400 placeholder:opacity-90"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPassword(!showPassword);
                }}
                className="absolute right-3.5 text-slate-400 hover:text-slate-200 transition-colors p-1"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-red-400 font-semibold text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2.5 px-3"
            >
              {error}
            </motion.div>
          )}

          {/* Action Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 mt-4 disabled:opacity-50 active:scale-[0.99]"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin text-cyan-400" />
                Authenticating...
              </>
            ) : (
              <>
                Sign In to Console
                <ArrowRight size={16} className="text-cyan-400" />
              </>
            )}
          </button>
        </form>

        {/* Clean Footer Note */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
          <ShieldCheck size={14} className="text-cyan-500/70" />
          <span>AWS Student Community Day 2026 Admin Portal</span>
        </div>

      </motion.div>
    </div>
  );
}


