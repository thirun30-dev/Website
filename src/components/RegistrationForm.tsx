"use client";

import React, { useState } from "react";
import {
  Cloud,
  User,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Loader2,
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
  const [otherDesignation, setOtherDesignation] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const { badgeData, setBadgeData } = useRegistration();

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim() || !form.email.trim().toLowerCase().endsWith("@gmail.com"))
      newErrors.email = "Valid @gmail.com email is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim()))
      newErrors.phone = "Valid 10-digit phone number is required";
    if (!form.organization.trim()) newErrors.organization = "College/Organization is required";
    if (!form.designation.trim() || (form.designation === "others" && !otherDesignation.trim()))
      newErrors.designation = "Designation/Year is required";
    if (!form.city.trim()) newErrors.city = "Location is required";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);

    const finalForm = {
      ...form,
      designation: form.designation === "others" ? otherDesignation : form.designation
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalForm),
      });
      const json = await res.json();
      if (!res.ok) {
        // 409 = already registered — treat as success with info message
        if (res.status === 409 && json.alreadyRegistered) {
          setBadgeData({
            name: form.fullName,
            email: form.email,
            role: "Participation",
            avatar: form.avatar,
          });
          setSubmitted(true);
        } else {
          setSubmitError(json.message ?? "Registration failed. Please try again.");
        }
        return;
      }
      setBadgeData({
        name: form.fullName,
        email: form.email,
        role: "Participation",
        avatar: form.avatar,
      });
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
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
      placeholder: "example@gmail.com",
      type: "email",
      icon: Mail,
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "9876543210",
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
      placeholder: "Select your designation",
      type: "select",
      options: ["1st year", "2nd year", "3rd year", "4th year", "pg - 1st year", "pg - 2nd year", "others"],
      icon: GraduationCap,
    },
    {
      name: "city",
      label: "Location",
      placeholder: "Chennai",
      type: "text",
      icon: MapPin,
    },
  ];

  return (
    <section
      id="register-form"
      className="relative py-10 overflow-hidden bg-black/30 border-t border-slate-900"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyan-600/8 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cloud size={14} />
            Free Registration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Register for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-[#00f0ff] bg-clip-text text-transparent text-glow">
              AWS Community Day
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Join cloud enthusiasts, developers, students, and industry professionals
            for a day of learning, networking, and innovation.
          </p>
          <div className="flex items-center justify-center gap-6 pt-2">
            {[
              { icon: CheckCircle2, text: "No Registration Fee" },
              { icon: CheckCircle2, text: "Instant Confirmation" },
              { icon: Cloud, text: "AWS Swag Included" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Icon size={13} className="text-cyan-400" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {(submitted || badgeData) ? (
            /* Success State - Animated ID Card */
            <div className="pb-8">
              <SuccessBadge 
                name={badgeData?.name || form.fullName} 
                email={badgeData?.email || form.email} 
                avatar={badgeData?.avatar || form.avatar} 
                role={badgeData?.role || "Participation"} 
              />
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
              className="glass-panel rounded-3xl border border-cyan-500/15 p-6 sm:p-10 shadow-[0_0_40px_rgba(0,240,255,0.05)] space-y-6"
            >
              {/* Grid fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {fields.map((field, i) => {
                  const Icon = field.icon;
                  const error = errors[field.name as keyof FormData];
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
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        {field.label}
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                          <Icon size={15} />
                        </div>
                        {field.type === "select" ? (
                          <select
                            name={field.name}
                            value={form[field.name as keyof FormData]}
                            onChange={handleChange}
                            className={`w-full bg-slate-950/60 border ${
                              error ? "border-red-500/60" : "border-slate-800 focus:border-cyan-500/60"
                            } rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:bg-slate-900/60 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.08)] appearance-none`}
                          >
                            <option value="" disabled className="text-slate-600">
                              {field.placeholder}
                            </option>
                            {field.options?.map((opt) => (
                              <option key={opt} value={opt} className="bg-slate-900 text-white">
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={form[field.name as keyof FormData]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className={`w-full bg-slate-950/60 border ${
                              error ? "border-red-500/60" : "border-slate-800 focus:border-cyan-500/60"
                            } rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:bg-slate-900/60 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.08)]`}
                          />
                        )}
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

                      {field.name === "designation" && form.designation === "others" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 relative"
                        >
                          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                            <GraduationCap size={15} />
                          </div>
                          <input
                            type="text"
                            value={otherDesignation}
                            onChange={(e) => {
                              setOtherDesignation(e.target.value);
                              if (errors.designation) {
                                setErrors(prev => ({ ...prev, designation: undefined }));
                              }
                            }}
                            placeholder="Enter your designation"
                            className={`w-full bg-slate-950/60 border ${
                              error && !otherDesignation.trim() ? "border-red-500/60" : "border-slate-800 focus:border-cyan-500/60"
                            } rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all focus:bg-slate-900/60 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.08)]`}
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}

                {/* Avatar Selection */}
                <motion.div
                  className="space-y-3 sm:col-span-2 pt-2 border-t border-slate-800/60"
                  custom={fields.length + 1}
                  variants={inputVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Select Your Avatar
                  </label>
                  <div className="flex items-center gap-6">
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, avatar: "man" }))}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 transition-all ${
                        form.avatar === "man" 
                          ? "bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-110" 
                          : "bg-slate-800 hover:bg-slate-700 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <div className="w-full h-full bg-black rounded-full overflow-hidden">
                        <img src="/avatar-man.png" alt="Man Avatar" className="w-full h-full object-cover" />
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, avatar: "woman" }))}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 transition-all ${
                        form.avatar === "woman" 
                          ? "bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-110" 
                          : "bg-slate-800 hover:bg-slate-700 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <div className="w-full h-full bg-black rounded-full overflow-hidden">
                        <img src="/avatar-woman.png" alt="Woman Avatar" className="w-full h-full object-cover" />
                      </div>
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Privacy note */}
              <p className="text-[11px] text-slate-600 text-center">
                By registering, you agree to be contacted about AWS Community Day 2026 updates.
                Your data is never shared with third parties.
              </p>

              {/* API error message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  <span className="shrink-0">⚠</span>
                  {submitError}
                </motion.div>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={submitting}
                className="neon-btn w-full py-4 rounded-2xl text-base font-extrabold text-white flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
              >
                {submitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Securing Your Spot...
                  </>
                ) : (
                  <>
                    Complete Registration — Free Entry
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
