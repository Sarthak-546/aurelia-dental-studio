import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Tag, ChevronRight } from "lucide-react";

import BookingCTA from "@/components/sections/booking-cta";
import { blogPosts } from "@/data/blog-posts";
import {
  generatePageMetadata,
  generateArticleJsonLd,
  generateBreadcrumbListJsonLd,
} from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.coverImageUrl,
  });
}

/* ------------------------------------------------------------------ */
/*  Blog body parser                                                   */
/* ------------------------------------------------------------------ */

/**
 * Lightweight inline renderer for blog post body text.
 *
 * - Double-newline separated chunks
 * - Lines starting with `## ` render as `<h2>`
 * - Standalone `**bold**` lines render as styled sub-headings
 * - Everything else renders as paragraphs with inline bold support
 */
function BlogBody({ body }: { body: string }) {
  const chunks = body.split("\n\n").filter((c) => c.trim());

  return (
    <>
      {chunks.map((chunk, i) => {
        const trimmed = chunk.trim();

        // Level-2 heading
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="font-display text-2xl font-medium text-charcoal mt-12 mb-4 first:mt-0"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }

        // Standalone bold line acts as a sub-heading
        if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
          const text = trimmed.replace(/^\*\*/, "").replace(/\*\*$/, "");
          return (
            <h3
              key={i}
              className="font-display text-xl font-medium text-charcoal mt-8 mb-3"
            >
              {text}
            </h3>
          );
        }

        // Regular paragraph — convert inline **bold** to <strong>
        const html = trimmed.replace(
          /\*\*(.*?)\*\*/g,
          "<strong>$1</strong>"
        );
        return (
          <p
            key={i}
            className="text-base leading-[1.8] text-charcoal/80 mb-5"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-ivory px-4">
        <div className="text-center">
          <h1 className="font-display text-3xl font-medium text-charcoal">
            Article not found
          </h1>
          <p className="mt-3 text-charcoal/60">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-sage hover:text-sage-dark"
          >
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const articleUrl = `/blog/${post.slug}`;

  // Related posts — filter out the current one, take first 3
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // JSON-LD
  const articleJsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    image: post.coverImageUrl,
    url: articleUrl,
    datePublished: post.publishedDate,
    authorName: post.author,
  });

  const breadcrumbJsonLd = generateBreadcrumbListJsonLd([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: articleUrl },
  ]);

  return (
    <>
      {/* ── JSON-LD ──────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Breadcrumbs ──────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="bg-ivory px-4 pt-6 sm:px-6 lg:px-8"
      >
        <ol className="mx-auto flex max-w-4xl flex-wrap items-center gap-1.5 text-xs text-charcoal/55">
          <li>
            <Link href="/" className="hover:text-sage transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link href="/blog" className="hover:text-sage transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li aria-current="page" className="font-medium text-charcoal/80">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* ── Article header ───────────────────────────────────────── */}
      <header className="bg-ivory px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs text-charcoal/55">
            <span className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" aria-hidden />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              {formatDate(post.publishedDate)}
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-medium leading-snug text-charcoal sm:text-4xl md:text-[2.75rem]">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-stone px-2.5 py-1 text-[11px] font-medium text-charcoal/60"
              >
                <Tag className="h-3 w-3" aria-hidden />
                {tag}
              </span>
            ))}
          </div>
        </article>
      </header>

      {/* ── Cover image ──────────────────────────────────────── */}
      <div className="bg-ivory px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-stone">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────────── */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <BlogBody body={post.body} />
        </div>
      </section>

      {/* ── Related posts ────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-medium text-charcoal text-center mb-10">
              Continue reading
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg border border-stone bg-white transition-shadow duration-300 hover:shadow-lg"
                >
                  {/* Cover image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone">
                    <Image
                      src={related.coverImageUrl}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap gap-2">
                      {related.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-stone px-2.5 py-0.5 text-[11px] font-medium text-charcoal/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-lg font-medium leading-snug text-charcoal transition-colors group-hover:text-sage">
                      {related.title}
                    </h3>

                    <p className="flex-1 text-sm leading-relaxed text-charcoal/65 line-clamp-2">
                      {related.excerpt}
                    </p>

                    <div className="flex items-center gap-3 pt-2 text-xs text-charcoal/50">
                      <span>{related.author}</span>
                      <span aria-hidden>&middot;</span>
                      <span>{formatDate(related.publishedDate)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <BookingCTA />
    </>
  );
}
