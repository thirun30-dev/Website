"use client";

import React, { useState } from "react";
import {
  Zap,
  Gift,
  User,
  UserCheck,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useRegistration } from "@/context/RegistrationContext";
import SuccessBadge from "./SuccessBadge";
import { motion, AnimatePresence, type Variants } from "framer-motion";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  city: string;
  avatar: string;
}



const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  designation: "",
  city: "",
  avatar: "man",
};

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function RegistrationForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendStatus, setResendStatus] = useState("");
  const [serverError, setServerError] = useState("");

  const { badgeData, setBadgeData } = useRegistration();

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,}$/.test(form.phone))
      newErrors.phone = "Valid phone number is required";
    if (!form.organization.trim()) newErrors.organization = "College/Organization is required";
    if (!form.designation.trim()) newErrors.designation = "Designation/Year is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleResendQr = async () => {
    const targetEmail = badgeData?.email || form.email;
    if (!targetEmail) return;
    setResending(true);
    setResendStatus("");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/registrations/resend-qr`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: targetEmail }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to resend email.");
      }
      setResendStatus("Pass email resent successfully!");
    } catch (err: any) {
      setResendStatus(err.message || "Too many attempts. Try again later.");
    } finally {
      setResending(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setServerError("");
    setIsAlreadyRegistered(false);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          organization: form.organization,
          designation: form.designation,
          city: form.city,
          avatar: form.avatar,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      if (data.status === "ALREADY_REGISTERED") {
        setIsAlreadyRegistered(true);
      }

      setBadgeData({
        name: data.user.name,
        email: data.user.email,
        role: "Participant",
        avatar: data.user.avatar,
        registrationCode: data.registrationCode,
        qrImage: data.qrImage,
      });
      
      setSubmitted(true);
    } catch (err: any) {
      setServerError(err.message || "Server error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    {
      name: "fullName",
      label: "Full Name",
      placeholder: "Arjun Sharma",
      type: "text",
      icon: User,
      col: "sm:col-span-2",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "arjun@college.edu.in",
      type: "email",
      icon: Mail,
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "+91 98765 43210",
      type: "tel",
      icon: Phone,
    },
    {
      name: "organization",
      label: "College / Organization",
      placeholder: "Rajalakshmi Engineering College",
      type: "text",
      icon: Building2,
    },
    {
      name: "designation",
      label: "Designation / Year of Study",
      placeholder: "3rd Year B.Tech / Software Engineer",
      type: "text",
      icon: GraduationCap,
    },
    {
      name: "city",
      label: "City",
      placeholder: "Chennai",
      type: "text",
      icon: MapPin,
    },
  ];

  return (
    <section
      id="register-form"
      className="relative py-16 overflow-hidden bg-transparent border-t border-slate-900/40"
    >
      {/* Background Grid & Ambient Glows (Matching Hero) */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-64 rounded-3xl bg-cyan-600/10 blur-[130px] -rotate-12 pointer-events-none" />
      <div className="absolute bottom-5 right-1/4 w-[500px] h-64 rounded-3xl bg-blue-600/10 blur-[140px] rotate-12 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider text-xs px-3 py-1 rounded border border-cyan-500/20 bg-cyan-500/5">
            <Sparkles size={14} className="text-cyan-400" /> Free Event Registration
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Register for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-[#00f0ff] bg-clip-text text-transparent">
              AWS Community Day
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Join cloud enthusiasts, developers, students, and industry professionals
            for a day of learning, networking, and innovation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
            {[
              { icon: CheckCircle2, text: "No Registration Fee" },
              { icon: CheckCircle2, text: "Instant Confirmation" },
              { icon: Gift, text: "AWS Swag Included" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-1.5 text-slate-300 text-xs font-medium bg-slate-900/60 border border-slate-800/80 px-3 py-1 rounded-full">
                <Icon size={13} className="text-[#00f0ff]" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {(submitted || badgeData) ? (
            /* Success State - Animated ID Card */
            <div className="pb-8 flex flex-col items-center gap-6">
              {isAlreadyRegistered && (
                <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider text-center">
                  You are already registered for this event!
                </div>
              )}
              <SuccessBadge 
                name={badgeData?.name || form.fullName} 
                email={badgeData?.email || form.email} 
                avatar={badgeData?.avatar || form.avatar} 
                role={badgeData?.role || "Participant"} 
                registrationCode={badgeData?.registrationCode}
                qrImage={badgeData?.qrImage}
              />
              
              <div className="flex flex-col items-center gap-2 mt-2">
                <p className="text-slate-500 text-[11px] text-center">
                  Lost your ticket email?
                </p>
                <button
                  type="button"
                  onClick={handleResendQr}
                  disabled={resending}
                  className="neon-btn-secondary px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                >
                  {resending ? "Resending Pass..." : "Resend QR Code Email"}
                </button>
                {resendStatus && (
                  <p className={`text-[11px] font-medium text-center mt-1 ${resendStatus.includes("successfully") ? "text-cyan-400" : "text-red-400"}`}>
                    {resendStatus}
                  </p>
                )}
              </div>
            </div>
          ) : (
            /* Registration Form */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl border border-cyan-500/20 p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(0,240,255,0.08),0_20px_50px_rgba(0,0,0,0.8)] bg-[#070c18]/90 backdrop-blur-xl space-y-6 relative overflow-hidden"
            >
              {/* Top Cyan Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f0ff]/60 to-transparent" />

              {/* Grid fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {fields.map((field, i) => {
                  const Icon = field.icon;
                  const error = errors[field.name as keyof FormData];
                  const hasValue = Boolean(form[field.name as keyof FormData]);
                  return (
                    <motion.div
                      key={field.name}
                      className={`space-y-1.5 ${field.col || ""}`}
                      custom={i}
                      variants={inputVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
                        {field.label}
                      </label>
                      <div className="relative">
                        <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${hasValue ? "text-[#00f0ff]" : "text-slate-400"}`}>
                          <Icon size={15} />
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof FormData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={`w-full bg-[#050914]/90 border ${
                            error ? "border-red-500/80 focus:border-red-500" : "border-slate-800/90 focus:border-[#00f0ff]"
                          } rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-all duration-200 focus:bg-[#081024] focus:shadow-[0_0_20px_rgba(0,240,255,0.15)]`}
                        />
                      </div>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[11px] text-red-400 font-medium"
                        >
                          {error}
                        </motion.p>
                      )}
                    </motion.div>
                  );
                })}

                {/* Gender Selector (Sits beside City in Column 2) */}
                <motion.div
                  className="space-y-1.5"
                  custom={fields.length + 1}
                  variants={inputVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Gender
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1.5 rounded-xl bg-[#050914]/90 border border-slate-800/90">
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, avatar: "man" }))}
                      className={`py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                        form.avatar === "man" 
                          ? "bg-cyan-500/15 text-[#00f0ff] border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.15)]" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <User size={18} className="shrink-0 text-cyan-400" />
                      <span>Male</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, avatar: "woman" }))}
                      className={`py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                        form.avatar === "woman" 
                          ? "bg-cyan-500/15 text-[#00f0ff] border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.15)]" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      <UserCheck size={18} className="shrink-0 text-cyan-400" />
                      <span>Female</span>
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Privacy note */}
              <p className="text-[11px] text-slate-500 text-center">
                By registering, you agree to be contacted about AWS Community Day 2026 updates.
                Your data is never shared with third parties.
              </p>

              {/* Server Error Message */}
              {serverError && (
                <p className="text-xs text-red-400 font-semibold text-center mt-2">
                  {serverError}
                </p>
              )}

              {/* Submit button */}
              <div className="flex justify-center pt-2">
                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="relative w-full max-w-md py-3.5 px-8 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#00f0ff] via-cyan-300 to-[#00f0ff] shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin text-slate-950" />
                      <span>Securing Your Spot...</span>
                    </>
                  ) : (
                    <>
                      <span>Complete Registration — Free Entry</span>
                      <ArrowRight size={18} className="text-slate-950" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
