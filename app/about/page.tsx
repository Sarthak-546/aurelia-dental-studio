import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { PhilosophyBlock } from "@/components/sections/philosophy-block";
import DoctorGrid from "@/components/sections/doctor-grid";
import BookingCTA from "@/components/sections/booking-cta";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stat } from "@/components/ui/stat";
import { Badge } from "@/components/ui/badge";
import { generatePageMetadata } from "@/lib/seo";
import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata = generatePageMetadata({
  title: "About the Studio",
  description:
    "Founded in 2012, Aurelia Dental Studio blends clinical excellence with a warm, design-forward environment in the heart of Mumbai — where every smile is treated as a work of art.",
  path: "/about",
});

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  const founded = clinic.foundedYear;
  const currentYear = new Date().getFullYear();
  const yearsInPractice = currentYear - founded;

  return (
    <>
      {/* Page header */}
      <Hero
        variant="page-header"
        eyebrow="Our Story"
        title="About the Studio"
        description={clinic.description}
      />

      {/* Editorial philosophy */}
      <PhilosophyBlock />

      {/* Stats strip — derived from real clinic data */}
      <Section className="bg-ivory pt-0">
        <Container>
          <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-y-12 md:grid-cols-4">
            <Stat value={founded} label="Year Founded" />
            <Stat value={yearsInPractice} label="Years of Practice" />
            <Stat value={doctors.length} label="Specialist Doctors" />
            <Stat value="4.9/5" label="Average Patient Rating" />
          </dl>
        </Container>
      </Section>

      {/* Our story — magazine-style narrative */}
      <Section className="bg-ivory">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
            {/* Narrative column */}
            <ScrollReveal>
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Since 2012"
                  title="A studio built on craft, comfort, and care"
                  align="left"
                />
                <div className="space-y-5 text-base leading-relaxed text-charcoal/70 md:text-lg">
                  <p>
                    Aurelia Dental Studio began with a simple conviction: that
                    a dental visit should feel nothing like a medical
                    appointment. A calm, considered space in Bandra West where
                    specialists take the time to listen first, explain clearly,
                    and plan treatment around a life — not just a set of teeth.
                  </p>
                  <p>
                    {clinic.description}
                  </p>
                  <p>
                    Today our team of {doctors.length} specialist dentists
                    spans cosmetic, restorative, orthodontic, pediatric, and
                    surgical care — yet every consultation still runs on the
                    same unhurried rhythm the studio was founded on. Digital
                    diagnostics, evidence-based technique, and an artistic eye
                    for detail keep outcomes predictable, while a genuinely warm
                    team keeps every visit personal.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Sidebar — founding snapshot */}
            <ScrollReveal delay={0.15}>
              <div className="relative flex flex-col overflow-hidden rounded-lg bg-charcoal p-8 text-ivory shadow-sm md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                  The Studio
                </p>
                <p className="mt-4 font-display text-5xl leading-none text-white md:text-6xl">
                  {founded}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Founded &mdash; {currentYear} practicing
                </p>
                <blockquote className="mt-8 border-l-2 border-sage pl-4 font-display text-xl italic leading-snug text-white/90">
                  &ldquo;Every smile is a work of art in progress&nbsp;&mdash;
                  our job is simply to reveal it.&rdquo;
                </blockquote>
                <div className="mt-8 flex flex-wrap gap-2">
                  {clinic.socialLinks.slice(0, 3).map((link) => (
                    <Badge key={link.platform} className="bg-white/10 text-ivory">
                      {link.platform}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Doctors & specialists */}
      <DoctorGrid />

      {/* Values */}
      <Section className="bg-charcoal text-ivory">
        <Container>
          <SectionHeading
            eyebrow="What We Believe"
            title="The principles behind every appointment"
            description="Four commitments shape how we practice — from the first consultation to the final review."
            className="[&_h2]:text-white [&_p]:text-white/70"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-lg bg-white/5 p-8 transition-colors duration-300 hover:bg-white/10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage/20">
                    <value.icon className="h-5 w-5 text-sage" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-display text-xl text-white text-balance">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Booking call to action */}
      <BookingCTA variant="sage" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: HeartHandshake,
    title: "Care without hurry",
    description:
      "We never rush patients through the chair. The first visit is unhurried by design — a conversation before a procedure, always.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-based precision",
    description:
      "Digital scans, low-radiation imaging, and materials backed by peer-reviewed research ensure outcomes you can depend on.",
  },
  {
    icon: Sparkles,
    title: "An artistic eye",
    description:
      "Cosmetic work is as much craft as clinical skill. We obsess over shade, shape, and symmetry so restorations look natural.",
  },
  {
    icon: Leaf,
    title: "Honest, gentle guidance",
    description:
      "Every plan is explained in plain language with clear, itemised pricing — so you decide with confidence, never pressure.",
  },
];