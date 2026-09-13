import { Phone, Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { LocationCard } from "@/components/sections/location-card";
import BookingCTA from "@/components/sections/booking-cta";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { generatePageMetadata } from "@/lib/seo";
import { clinic } from "@/data/clinic";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata = generatePageMetadata({
  title: "Contact & Location",
  description:
    "Find Aurelia Dental Studio in Bandra West, Mumbai — reach us by phone, email, or book online. View our opening hours, get directions, and see the map.",
  path: "/contact",
});

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function telHref(value: string): string {
  return "tel:" + value.replace(/\s/g, "");
}

function mailHref(value: string): string {
  return "mailto:" + value;
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const { contact, openingHours, contact: address } = clinic;
  const fullAddress =
    contact.address.line1 +
    (contact.address.line2 ? ", " + contact.address.line2 : "") +
    ", " +
    contact.address.city +
    ", " +
    contact.address.state +
    " " +
    contact.address.postalCode +
    ", " +
    contact.address.country;

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(fullAddress);

  return (
    <>
      {/* Page header */}
      <Hero
        variant="page-header"
        eyebrow="Say Hello"
        title="Contact & Location"
        description={`Find us in ${contact.address.city}, or reach out by phone or email — we're always happy to answer questions first and book you in when you're ready.`}
      />

      {/* Address, phone, email, opening hours */}
      <LocationCard />

      {/* Quick-contact actions + map embed */}
      <Section className="bg-ivory pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
            {/* Contact actions */}
            <div className="flex flex-col gap-4">
              {/* Phone card */}
              <a
                href={telHref(contact.phone)}
                className="group flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage transition-colors group-hover:bg-sage/20">
                  <Phone className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/45">
                    Call the clinic
                  </p>
                  <p className="mt-1 font-display text-xl text-charcoal">
                    {contact.phone}
                  </p>
                  <p className="mt-0.5 text-sm text-charcoal/60">
                    Mon–Sat, hours below
                  </p>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-charcoal/30 transition-colors group-hover:text-sage"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </a>

              {/* Email card */}
              <a
                href={mailHref(contact.email)}
                className="group flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage transition-colors group-hover:bg-sage/20">
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/45">
                    Email us
                  </p>
                  <p className="mt-1 break-all font-display text-xl text-charcoal">
                    {contact.email}
                  </p>
                  <p className="mt-0.5 text-sm text-charcoal/60">
                    We reply within one working day
                  </p>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-charcoal/30 transition-colors group-hover:text-sage"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </a>

              {/* Hours card */}
              <div className="rounded-lg bg-charcoal p-6 text-ivory md:p-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-sage" strokeWidth={1.75} />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                    Opening Hours
                  </p>
                </div>
                <ul className="mt-5 divide-y divide-white/10" role="list">
                  {openingHours.map((entry) => (
                    <li
                      key={entry.day}
                      className="flex items-center justify-between py-2 text-sm"
                    >
                      <span className="font-medium text-ivory">
                        {entry.day}
                      </span>
                      <span className={entry.closed ? "text-white/40" : "text-white/70"}>
                        {entry.closed ? "Closed" : entry.open + " — " + entry.close}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map embed */}
            <div className="flex min-h-[380px] flex-col overflow-hidden rounded-lg border border-stone bg-white shadow-sm lg:min-h-0">
              <div className="relative h-full min-h-[380px] flex-1 overflow-hidden bg-stone">
                {contact.mapEmbedUrl ? (
                  <iframe
                    src={contact.mapEmbedUrl}
                    title={`Map showing ${clinic.name} at ${fullAddress}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                ) : (
                  <>
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(201,194,178,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,194,178,0.35) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div
                      aria-hidden
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/15">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage shadow-md">
                            <MapPin className="h-4 w-4 text-ivory" fill="currentColor" />
                          </span>
                        </span>
                      </span>
                    </div>
                    <span className="sr-only">Map for {fullAddress}</span>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between gap-4 bg-white px-6 py-4">
                <p className="text-sm text-charcoal/70">
                  <span className="font-medium text-charcoal">{clinic.name}</span>
                  {" · "}
                  {contact.address.line1}, {contact.address.city}
                  <span className="ml-1 inline-block rounded bg-stone px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-charcoal/50">
                    (js)
                  </span>
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-sage transition-colors hover:text-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Get directions <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          {/* Social links row */}
          {clinic.socialLinks.length > 0 ? (
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/45">
                Follow us
              </p>
              <div className="flex flex-wrap gap-2">
                {clinic.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-stone bg-white px-3 py-1 text-xs font-medium text-charcoal/70 transition-colors hover:border-sage/30 hover:text-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      {/* Booking call to action */}
      <BookingCTA />
    </>
  );
}
