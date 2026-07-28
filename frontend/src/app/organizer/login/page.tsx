"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Cloud, Lock, Mail, Loader2, ArrowRight, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function OrganizerLogin() {
  const router = useRouter();
  const { login, isAuthenticated } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // If already logged in, redirect immediately
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/organizer/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate a brief loading state for UX
    await new Promise((r) => setTimeout(r, 600));

    const success = login(email, password);
    if (success) {
      router.push("/organizer/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020205] text-slate-100 flex flex-col justify-center items-center px-4 overflow-hidden cyber-grid">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md glass-panel rounded-3xl border border-cyan-500/15 p-8 sm:p-10 shadow-[0_0_60px_rgba(0,240,255,0.08)] text-center relative z-10"
      >
        {/* Logo */}
        <div className="inline-flex p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
          <Cloud size={28} />
        </div>

        <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-1">
          Admin Login
        </h2>
        <p className="text-slate-500 text-xs mb-8">
          AWS Student Community Day 2026 — Event Management
        </p>

        <form onSubmit={handleLogin} className="space-y-5 text-left">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                <Mail size={15} />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:bg-slate-900/60 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.06)]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                <Lock size={15} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950/60 border border-slate-800 focus:border-cyan-500/60 rounded-xl pl-10 pr-11 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:bg-slate-900/60 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.06)]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-red-400 font-semibold text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2 px-3"
            >
              {error}
            </motion.p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="neon-btn w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-white flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                Access Dashboard
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>

        <p className="text-[10px] text-slate-700 mt-8">
          Restricted access — authorised personnel only
        </p>
      </motion.div>
    </div>
  );
}
