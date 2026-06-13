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
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const interestAreas = [
  "Cloud Computing",
  "DevOps",
  "AI/ML on AWS",
  "Serverless",
  "Security",
  "Data Engineering",
  "General AWS",
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  city: string;
  interest: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  designation: "",
  city: "",
  interest: "",
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
    if (!form.interest) newErrors.interest = "Please select an interest area";
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
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
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
      className="relative py-24 overflow-hidden bg-black/30 border-t border-slate-900"
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
              { icon: Sparkles, text: "No Registration Fee" },
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
          {submitted ? (
            /* Success State */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="glass-panel rounded-3xl border border-cyan-500/30 p-10 text-center space-y-6 shadow-[0_0_50px_rgba(0,240,255,0.1)]"
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 size={38} className="text-white" />
              </motion.div>
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-white">
                  You&apos;re Registered! 🎉
                </h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                  Welcome aboard, <strong className="text-cyan-400">{form.fullName}</strong>!
                  Your spot at AWS Community Day 2026 is confirmed. Check{" "}
                  <span className="text-cyan-400">{form.email}</span> for your confirmation.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                {[
                  { label: "Event Date", value: "Sep 12, 2026" },
                  { label: "Venue", value: "REC Campus" },
                  { label: "Entry Fee", value: "Free" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{label}</p>
                    <p className="text-sm text-white font-bold mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs text-slate-500"
              >
                Add to your calendar and share with your friends!
              </motion.div>
            </motion.div>
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

                {/* Interest Dropdown */}
                <motion.div
                  className="space-y-1.5 sm:col-span-2"
                  custom={fields.length}
                  variants={inputVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Interest Area
                  </label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                      <Sparkles size={15} />
                    </div>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className={`w-full appearance-none bg-slate-950/60 border ${
                        errors.interest
                          ? "border-red-500/60"
                          : "border-slate-800 focus:border-cyan-500/60"
                      } rounded-xl pl-10 pr-10 py-3 text-sm text-white outline-none transition-all focus:bg-slate-900/60 focus:shadow-[0_0_0_3px_rgba(0,240,255,0.08)] cursor-pointer`}
                    >
                      <option value="" disabled className="bg-slate-900">
                        Select your area of interest
                      </option>
                      {interestAreas.map((area) => (
                        <option key={area} value={area} className="bg-slate-900">
                          {area}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                      <ChevronDown size={15} />
                    </div>
                  </div>
                  {errors.interest && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[11px] text-red-400 font-medium"
                    >
                      {errors.interest}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Privacy note */}
              <p className="text-[11px] text-slate-600 text-center">
                By registering, you agree to be contacted about AWS Community Day 2026 updates.
                Your data is never shared with third parties.
              </p>

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
