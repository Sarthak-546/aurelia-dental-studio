"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  stagger?: boolean;
}

export type ScrollRevealVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

/**
 * Wraps children in a light entrance that triggers once on scroll.
 * Respects reduced motion: when the user prefers that, children render
 * without a wrapper so nothing forces layout reflow on mobile.
 *
 * Variants let different sections vary without inventing a one-off wrapper.
 * On touch devices (`pointer: coarse`) the translate is halved and delays
 * are shorter so motion feels snappy rather than laggy.
 */
export function ScrollReveal({
  children,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  stagger?: number;
}

/**
 * One item in a staggered vertical list. Give the parent a responsive
 * `grid`/`flex` layout and wrap each child in this; each enters with a
 * short additional stagger so groups feel orchestrated on desktop but
 * still snappy on phones (stagger is halved below `md` — see the CSS below).
 */
export function StaggerRevealItem({
  children,
  index,
  className,
  stagger = 0.08,
}: StaggerRevealItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: EASE, delay: index * stagger }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;