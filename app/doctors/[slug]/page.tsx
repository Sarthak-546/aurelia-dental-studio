import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Stethoscope } from "lucide-react";

import { doctors } from "@/data/doctors";
import { treatments } from "@/data/treatments";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import BookingCTA from "@/components/sections/booking-cta";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import {
  generatePageMetadata,
  generatePhysicianJsonLd,
} from "@/lib/seo";

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
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
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return { title: "Doctor Not Found" };
  }

  return generatePageMetadata({
    title: doctor.name,
    description: `${doctor.name}, ${doctor.credentials}. Specialist in ${doctor.specialty} with ${doctor.yearsExperience}+ years of experience at Aurelia Dental Studio.`,
    path: `/doctors/${doctor.slug}`,
  });
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  /* Related treatments */
  const relatedTreatments = treatments.filter((t) =>
    doctor.featuredTreatments?.includes(t.slug),
  );

  /* JSON-LD */
  const physicianJsonLd = generatePhysicianJsonLd({
    name: doctor.name,
    description: doctor.bio,
    image: doctor.portraitUrl,
    qualifications: doctor.credentials.split(",").map((q) => q.trim()),
    url: `/doctors/${doctor.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />

      {/* Hero / Header */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            {doctor.specialty}
          </p>
          <h1 className="font-display text-4xl leading-[1.1] text-charcoal text-balance md:text-5xl lg:text-6xl">
            {doctor.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal/70">
            {doctor.credentials}
          </p>
        </Container>
      </section>

      {/* Bio + Portrait */}
      <Section className="bg-white">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
            {/* Portrait */}
            <ScrollReveal>
              <div className="mx-auto aspect-[3/4] w-full max-w-[380px] overflow-hidden rounded-lg bg-stone">
                <Image
                  src={doctor.portraitUrl}
                  alt={`Portrait of ${doctor.name}`}
                  width={380}
                  height={507}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-display text-2xl font-medium text-charcoal">
                    About {doctor.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-charcoal/70">
                    {doctor.bio}
                  </p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                    <div>
                      <p className="text-sm font-semibold text-charcoal">
                        {doctor.yearsExperience}+ Years
                      </p>
                      <p className="text-xs text-charcoal/60">Clinical experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                    <div>
                      <p className="text-sm font-semibold text-charcoal">
                        {doctor.specialty}
                      </p>
                      <p className="text-xs text-charcoal/60">Area of expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                    <div>
                      <p className="text-sm font-semibold text-charcoal">
                        Specialist
                      </p>
                      <p className="text-xs text-charcoal/60">{doctor.credentials}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Featured treatments */}
      {relatedTreatments.length > 0 && (
        <Section className="bg-ivory">
          <Container>
            <SectionHeading
              eyebrow="Expertise"
              title={`${doctor.name.split(" ").slice(-1)[0]}'s featured treatments`}
              description={`A closer look at the procedures ${doctor.name} specialises in at Aurelia Dental Studio.`}
            />

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTreatments.map((treatment) => (
                <Link
                  key={treatment.slug}
                  href={`/treatments/${treatment.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="aspect-[16/9] w-full bg-stone" />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-sage">
                      {treatment.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium text-charcoal">
                      {treatment.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70 line-clamp-2">
                      {treatment.shortDescription}
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

      <BookingCTA variant="sage" />
    </>
  );
}
