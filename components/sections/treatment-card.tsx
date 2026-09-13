"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Treatment } from "@/types/treatment";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export interface TreatmentCardProps {
  treatment: Treatment;
  className?: string;
  index?: number;
}

/**
 * Card for a single treatment. Displays a category badge, an image
 * placeholder, the treatment name, a truncated description, and a
 * "Learn more" link. Slides into view on scroll with a staggered delay via `index`.
 */
export function TreatmentCard({
  treatment,
  className,
  index = 0,
}: TreatmentCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const { slug, category, name, shortDescription } = treatment;

  return (
    <motion.article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg",
        className
      )}
      initial={
        prefersReducedMotion ? false : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: EASE,
        delay: (index % 3) * 0.08,
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
    >
      <Link
        href={`/treatments/${slug}`}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-stone">
          <Image
            src={treatment.heroImageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sage">
            {category}
          </span>
          <h3 className="font-display text-xl leading-[1.2] text-charcoal text-balance">
            {name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal/70">
            {shortDescription}
          </p>
          <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-sage-dark transition-colors duration-200 group-hover:text-warm-accent">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default TreatmentCard;