"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { galleryImages } from "@/data/gallery";

const RATIOS = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]"];

function ratioClass(i: number): string {
  return RATIOS[i % RATIOS.length];
}

export default function ImageGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const current = openIndex !== null ? galleryImages[openIndex] : null;

  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Our Space" title="The clinic" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-10 columns-2 gap-4 space-y-4 md:columns-3 md:gap-5 md:space-y-5"
        >
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden rounded-md bg-stone text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              aria-label={`View larger image: ${img.alt}`}
            >
              <div
                className={`relative w-full overflow-hidden ${ratioClass(i)}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  unoptimized
                />
                <span className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/10" />
                <span className="absolute bottom-2 left-2 rounded-full bg-charcoal/75 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-ivory opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {img.category}
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Lightbox */}
        <Dialog
          open={openIndex !== null}
          onOpenChange={(open) => {
            if (!open) setOpenIndex(null);
          }}
        >
          {current && (
            <DialogContent className="max-w-3xl bg-ivory p-0 overflow-hidden">
              <DialogTitle className="sr-only">{current.alt}</DialogTitle>
              <DialogDescription className="sr-only">
                {current.alt} — {current.category}
              </DialogDescription>

              <div className="relative aspect-[4/3] w-full bg-stone">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-cover"
                  sizes="92vw"
                  unoptimized
                  priority
                />

                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(
                          (prev) =>
                            (prev! - 1 + galleryImages.length) %
                            galleryImages.length
                        )
                      }
                      className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/35 text-white backdrop-blur-sm transition-colors hover:bg-charcoal/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(
                          (prev) => (prev! + 1) % galleryImages.length
                        )
                      }
                      className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/35 text-white backdrop-blur-sm transition-colors hover:bg-charcoal/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="px-6 py-4">
                <p className="text-sm text-charcoal/80">{current.alt}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-charcoal/50">
                  {current.category}
                </p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}