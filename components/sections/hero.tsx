"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type HeroVariant = "home" | "landing" | "treatment" | "page-header";

export interface HeroProps {
  variant?: HeroVariant;
  title?: string;
  description?: string;
  eyebrow?: string;
  category?: string;
  imageSrc?: string;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const defaultCopy = {
  eyebrow: "Welcome to Aurelia Dental Studio",
  title: "Exceptional dentistry, designed around you.",
  description:
    "Modern techniques, an unhurried approach, and a team that explains every step — so your visit feels like care, not a procedure.",
};

const splitVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
} as const;

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
} as const;

const fadeUp = (
  delay: number,
  y: number = 16
): {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: { duration: number; ease: [number, number, number, number]; delay: number };
} => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

/* ------------------------------------------------------------------ */
/*  Split hero – used by "home" and "landing" variants                 */
/* ------------------------------------------------------------------ */

interface SplitHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  prefersReducedMotion: boolean | null;
  showActions?: boolean;
}

function SplitHero({
  eyebrow,
  title,
  description,
  imageSrc,
  prefersReducedMotion,
  showActions = true,
}: SplitHeroProps) {
  const words = title.split(" ");

  /* ---- rendered when the user prefers reduced motion -------------- */
  if (prefersReducedMotion) {
    return (
      <div className="grid items-center gap-12 py-16 min-h-screen lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:py-24">
        {/* Text */}
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-[1.05] text-charcoal text-balance">
            {title}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-charcoal/70 text-pretty">
            {description}
          </p>
          {showActions ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/book">
                  Book an Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/treatments">Explore Treatments</Link>
              </Button>
            </div>
          ) : null}
        </div>

        {/* Image placeholder */}
        <div className="relative lg:py-12">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-stone lg:max-h-[620px]">
            {imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageSrc}
                alt=""
                className="h-full w-full object-cover object-[75%_center]"
                loading="lazy"
              />
            ) : (
              <span className="sr-only">
                Decorative representation of the studio
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ---- animated variant ------------------------------------------- */
  return (
    <div className="grid items-center gap-12 py-16 min-h-screen lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:py-24">
      {/* Text */}
      <div className="relative z-10 max-w-2xl">
        <motion.p
          {...fadeUp(0.1, 12)}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-sage"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={splitVariants}
          className="mt-6 font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-[1.05] text-charcoal text-balance"
        >
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
              {index < words.length - 1 ? <span> </span> : null}
            </React.Fragment>
          ))}
        </motion.h1>

        <motion.p
          {...fadeUp(0.5, 16)}
          className="mt-7 text-lg leading-relaxed text-charcoal/70 text-pretty"
        >
          {description}
        </motion.p>

        {showActions ? (
          <motion.div
            {...fadeUp(0.7, 16)}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/book">
                Book an Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/treatments">Explore Treatments</Link>
            </Button>
          </motion.div>
        ) : null}
      </div>

      {/* Image placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
        className="relative lg:py-12"
      >
        <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-stone lg:max-h-[620px]">
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt=""
              className="h-full w-full object-cover object-[75%_center]"
              loading="lazy"
            />
          ) : (
            <span className="sr-only">
              Decorative representation of the studio
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero component                                                     */
/* ------------------------------------------------------------------ */

export function Hero({
  variant = "home",
  title,
  description,
  eyebrow,
  category,
  imageSrc,
  className,
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  /* ---- Page header: interior page banner -------------------------- */
  if (variant === "page-header") {
    return (
      <section
        className={cn(
          "relative overflow-hidden bg-ivory py-24 md:py-32",
          className
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              {eyebrow ?? "Aurelia Dental Studio"}
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-charcoal text-balance md:text-5xl lg:text-6xl">
              {title ?? "Premier dental care in the heart of Mumbai"}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/70 text-pretty">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  /* ---- Treatment page header -------------------------------------- */
  if (variant === "treatment") {
    return (
      <section
        className={cn(
          "relative overflow-hidden bg-ivory",
          className
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            {category ? (
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sage-dark">
                <Sparkles className="h-3.5 w-3.5" />
                {category}
              </span>
            ) : null}
            <h1 className="font-display text-4xl leading-[1.08] text-charcoal text-balance md:text-6xl lg:text-7xl">
              {title ?? "Treatment"}
            </h1>
            {description ? (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70 text-pretty md:text-xl">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  /* ---- Home & Landing: full-bleed split hero ---------------------- */
  const resolvedEyebrow =
    eyebrow ?? defaultCopy.eyebrow;
  const resolvedTitle =
    title ?? defaultCopy.title;
  const resolvedDescription =
    description ?? defaultCopy.description;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ivory",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SplitHero
          eyebrow={resolvedEyebrow}
          title={resolvedTitle}
          description={resolvedDescription}
          imageSrc={imageSrc}
          prefersReducedMotion={prefersReducedMotion}
          showActions
        />
      </div>
    </section>
  );
}

export default Hero;