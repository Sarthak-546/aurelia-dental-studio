import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

import { treatments } from "@/data/treatments";
import { faqs } from "@/data/faqs";
import Hero from "@/components/sections/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import FaqAccordion from "@/components/sections/faq-accordion";
import BookingCTA from "@/components/sections/booking-cta";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import {
  generatePageMetadata,
  generateBreadcrumbListJsonLd,
  generateFAQPageJsonLd,
} from "@/lib/seo";

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

/* ------------------------------------------------------------------ */
/*  Dynamic metadata                                                   */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return { title: "Treatment Not Found" };
  }

  return generatePageMetadata({
    title: treatment.name,
    description: treatment.shortDescription,
    path: `/treatments/${treatment.slug}`,
  });
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  /* Filter FAQs by treatment.faqSlugIds */
  const treatmentFaqs = faqs.filter((faq) =>
    treatment.faqSlugIds.includes(faq.id),
  );

  /* Related treatments */
  const relatedTreatments = treatments.filter((t) =>
    treatment.relatedTreatmentSlugs.includes(t.slug),
  );

  /* Breadcrumb JSON-LD */
  const breadcrumbJsonLd = generateBreadcrumbListJsonLd([
    { name: "Home", href: "/" },
    { name: "Treatments", href: "/treatments" },
    { name: treatment.name, href: `/treatments/${treatment.slug}` },
  ]);

  /* FAQ JSON-LD (only if FAQs were found) */
  const faqJsonLd =
    treatmentFaqs.length > 0
      ? generateFAQPageJsonLd(treatmentFaqs)
      : null;

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      {/* Hero */}
      <Hero
        variant="treatment"
        category={treatment.category}
        title={treatment.name}
        description={treatment.shortDescription}
        imageSrc={treatment.heroImageUrl}
      />

      {/* Overview */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-medium text-charcoal md:text-4xl">
                Overview
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
                {treatment.overview}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section className="bg-ivory">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-medium text-charcoal md:text-4xl">
                Who is this treatment for?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
                {treatment.whoItsFor}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <SectionHeading
                eyebrow="How it works"
                title="The process"
                align="left"
              />
            </ScrollReveal>

            <ol className="mt-10 flex flex-col gap-8">
              {treatment.process.map((step, index) => (
                <ScrollReveal key={step.step} delay={index * 0.08}>
                  <li className="flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-charcoal">
                        {step.step}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                        {step.description}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      {treatment.timeline ? (
        <Section className="bg-ivory">
          <Container>
            <div className="mx-auto flex max-w-3xl items-center gap-4 rounded-lg border border-sage/20 bg-white p-6">
              <Clock className="h-6 w-6 shrink-0 text-sage" />
              <div>
                <p className="text-sm font-semibold text-charcoal">
                  Treatment duration
                </p>
                <p className="text-sm text-charcoal/70">
                  {treatment.timeline}
                </p>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Related treatments */}
      {relatedTreatments.length > 0 && (
        <Section className="bg-white">
          <Container>
            <SectionHeading
              eyebrow="Related"
              title="You may also be interested in"
              description="Explore other treatments that complement your care plan."
            />

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTreatments.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/treatments/${rel.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg bg-ivory shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone">
                <Image
                  src={rel.heroImageUrl}
                  alt={rel.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sage">
                      {rel.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium text-charcoal">
                      {rel.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                    <span className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-sage transition-colors group-hover:text-sage-dark">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      {treatmentFaqs.length > 0 && (
        <Section className="bg-ivory">
          <Container>
            <FaqAccordion
              items={treatmentFaqs}
              eyebrow="Questions"
              heading={`About ${treatment.name.toLowerCase()}`}
            />
          </Container>
        </Section>
      )}

      <BookingCTA />
    </>
  );
}
