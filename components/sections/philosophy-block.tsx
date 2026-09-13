"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export interface PhilosophyBlockProps {
  className?: string;
}

/**
 * Large editorial typography section that communicates the studio's
 * philosophy. Fades up on scroll with a centre-aligned layout.
 */
export function PhilosophyBlock({ className }: PhilosophyBlockProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className={cn("bg-ivory py-24 md:py-40", className)}
      aria-label="Our philosophy"
    >
      <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-8">
        {prefersReducedMotion ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Our Philosophy
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-charcoal text-balance md:text-5xl lg:text-7xl">
              Dentistry should feel personal.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/70 text-pretty md:text-xl">
              We take the time most clinics don&#39;t&nbsp;&mdash; to listen
              first, explain clearly, and plan treatment around your life, not
              just your teeth.
            </p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Our Philosophy
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-charcoal text-balance md:text-5xl lg:text-7xl">
              Dentistry should feel personal.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/70 text-pretty md:text-xl">
              We take the time most clinics don&#39;t&nbsp;&mdash; to listen
              first, explain clearly, and plan treatment around your life, not
              just your teeth.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default PhilosophyBlock;