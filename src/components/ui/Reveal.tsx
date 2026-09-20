// src/components/ui/Reveal.tsx
"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, revealViewport } from './../../lib/montion';


interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: "div" | "li";
}

/**
 * Wraps content in a subtle fade/slide-up reveal that fires once when it
 * enters the viewport. Falls back to a static render when the user has
 * requested reduced motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}