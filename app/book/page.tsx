import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";

import Hero from "@/components/sections/hero";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { BookingForm } from "@/components/forms/booking-form";
import { clinic } from "@/data/clinic";
import { SITE_CONFIG } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";
import { ScrollReveal } from "@/components/sections/scroll-reveal";

export const metadata: Metadata = generatePageMetadata({
  title: "Book an Appointment",
  description:
    "Schedule your visit to Aurelia Dental Studio. Book online for cosmetic, preventive, orthodontic, or pediatric dental care in a warm, modern environment.",
  path: "/book",
});

export default function BookPage() {
  const openDays = clinic.openingHours.filter((h) => !h.closed);

  return (
    <>
      {/* Hero */}
      <Hero
        variant="page-header"
        eyebrow="Book now"
        title="Book an appointment"
        description="Choose a time that suits you and our team will confirm your visit within one business day."
      />

      {/* Two-column layout */}
      <Section className="bg-white">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
            {/* Left column — Booking form */}
            <ScrollReveal>
              <BookingForm />
            </ScrollReveal>

            {/* Right column — Trust info */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-8">
                {/* Heading */}
                <SectionHeading
                  eyebrow="What to expect"
                  title="Your visit to Aurelia"
                  description="A warm, unhurried experience from the moment you walk through our doors."
                  align="left"
                />

                {/* Highlights */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold text-charcoal">
                        Prefer to call?
                      </p>
                      <p className="mt-0.5 text-sm text-charcoal/70">
                        Reach us at{" "}
                        <a
                          href={SITE_CONFIG.phoneLink}
                          className="font-medium text-sage hover:text-sage-dark"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold text-charcoal">
                        Visit us
                      </p>
                      <p className="mt-0.5 text-sm text-charcoal/70">
                        {clinic.contact.address.line1},{" "}
                        {clinic.contact.address.line2
                          ? `${clinic.contact.address.line2}, `
                          : ""}
                        {clinic.contact.address.city}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clinic hours */}
                <div className="rounded-lg border border-stone-200 bg-ivory p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-sage" />
                    <h3 className="font-display text-sm font-semibold text-charcoal">
                      Studio hours
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {openDays.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-center justify-between text-sm text-charcoal/70"
                      >
                        <span>{h.day}</span>
                        <span className="font-medium text-charcoal">
                          {h.open} &ndash; {h.close}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
