"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "20,000+", label: "Patients Treated" },
  { value: "4.9/5", label: "Patient Rating" },
  { value: "Advanced", label: "Digital Dentistry" },
] as const;

export interface TrustBarProps {
  className?: string;
}

/**
 * Dark horizontal strip of four trust-building statistics.
 * Stats fade in on scroll with a slight stagger for a polished reveal.
 */
export function TrustBar({ className }: TrustBarProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className={cn("bg-charcoal py-16 md:py-20", className)}
      aria-label="Key statistics"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 16 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: index * 0.1,
              }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <dd className="order-1 font-display text-3xl text-white md:text-5xl">
                {stat.value}
              </dd>
              <dt className="order-2 mt-2 text-sm text-white/60">
                {stat.label}
              </dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default TrustBar;