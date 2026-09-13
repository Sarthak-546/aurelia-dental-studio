import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Tag } from "lucide-react";

import { Hero } from "@/components/sections/hero";
import Newsletter from "@/components/sections/newsletter";
import BookingCTA from "@/components/sections/booking-cta";
import { blogPosts } from "@/data/blog-posts";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  SEO                                                                */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Dental health insights, treatment guides, and honest answers from the team at Aurelia Dental Studio.",
  path: "/blog",
});

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Hero
        variant="page-header"
        eyebrow="Blog"
        title="Dental health, explained honestly."
        description="Practical guides, treatment deep-dives, and the kind of advice we give our own families — written by the clinicians who do the work."
      />

      {/* ── Featured post (large card) ───────────────────────────── */}
      {featured && (
        <section className="bg-white px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 overflow-hidden rounded-lg border border-stone bg-ivory transition-shadow duration-300 hover:shadow-lg md:grid-cols-2"
            >
              {/* Cover image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone md:aspect-auto">
                <Image
                  src={featured.coverImageUrl}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <span className="absolute left-4 top-4 rounded-full bg-sage px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white z-10">
                  Featured
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 sm:p-8 md:justify-center">
                <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal/55">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" aria-hidden />
                    {featured.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden />
                    {formatDate(featured.publishedDate)}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-medium leading-snug text-charcoal transition-colors group-hover:text-sage md:text-3xl">
                  {featured.title}
                </h2>

                <p className="text-sm leading-relaxed text-charcoal/70">
                  {featured.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-stone px-2.5 py-1 text-[11px] font-medium text-charcoal/65"
                    >
                      <Tag className="h-3 w-3" aria-hidden />
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="pt-2 text-xs font-semibold uppercase tracking-[0.12em] text-sage transition-colors group-hover:text-sage-dark">
                  Read article
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Post grid ────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-stone bg-ivory transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Cover image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone">
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-stone px-2.5 py-0.5 text-[11px] font-medium text-charcoal/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-lg font-medium leading-snug text-charcoal transition-colors group-hover:text-sage">
                    {post.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-charcoal/65 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-2 text-xs text-charcoal/50">
                    <span>{post.author}</span>
                    <span aria-hidden>&middot;</span>
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────────── */}
      <Newsletter />

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <BookingCTA />
    </>
  );
}
