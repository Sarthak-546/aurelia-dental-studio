"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Treatment } from "@/types/treatment";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export interface FeaturedTreatmentProps {
  treatment: Treatment;
  reversed?: boolean;
  className?: string;
}

/**
 * Large editorial spotlight for one treatment. Places a stone placeholder
 * image on one side and the treatment details (category, name, overview)
 * on the other. Flip the layout with the `reversed` prop.
 */
export function FeaturedTreatment({
  treatment,
  reversed = false,
  className,
}: FeaturedTreatmentProps) {
  const prefersReducedMotion = useReducedMotion();
  const { slug, category, name, overview, shortDescription } = treatment;

  // Prefer the full overview; fall back to the shorter description
  const summary = overview ?? shortDescription;

  // Content-side motion
  const contentInitial = prefersReducedMotion
    ? (false as const)
    : { opacity: 0, y: 16, x: 0 };
  const contentAnimate = { opacity: 1, y: 0, x: 0 } as const;

  // Image-side motion
  const imageInitial = prefersReducedMotion
    ? (false as const)
    : { opacity: 0, x: reversed ? 24 : -24 };

  return (
    <section className={cn("bg-ivory py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            className={cn("relative", reversed && "lg:order-2")}
            initial={imageInitial}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone">
              <Image
                src={treatment.heroImageUrl}
                alt={treatment.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className={cn(reversed && "lg:order-1")}
            initial={contentInitial as unknown as { opacity: number; y: number; x: number }}
            whileInView={contentAnimate}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              {category}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-[1.12] text-charcoal text-balance md:text-4xl">
              {name}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70 text-pretty md:text-lg">
              {summary}
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href={`/treatments/${slug}`}>
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTreatment;