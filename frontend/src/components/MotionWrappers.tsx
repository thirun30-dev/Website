"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * Standard cubic-bezier easing curve matching Apple/Linear premium motion
 */
export const EasingCurves = {
  appleEase: [0.21, 0.47, 0.32, 0.98],
  springSmooth: { type: "spring", stiffness: 260, damping: 20 },
};

/**
 * Section Entrance Wrapper with slight blur-to-clear & GPU transforms
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 30,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word-by-Word Animated Heading for Storytelling Entrances
 */
export function AnimatedHeading({
  text,
  className = "",
  highlightWord = "",
  highlightClass = "text-cyan-400",
}: {
  text: string;
  className?: string;
  highlightWord?: string;
  highlightClass?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <h2 className={className}>{text}</h2>;
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.h2
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, i) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <motion.span
            key={i}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] ${
              isHighlight ? highlightClass : ""
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}

/**
 * Stagger Container for Grids of Cards
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Item for Card Entrance
 */
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.96, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      whileHover={{
        scale: 1.02,
        y: -3,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
