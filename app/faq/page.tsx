import { Hero } from "@/components/sections/hero";
import FaqAccordion from "@/components/sections/faq-accordion";
import BookingCTA from "@/components/sections/booking-cta";
import { generatePageMetadata, generateFAQPageJsonLd } from "@/lib/seo";
import { faqs } from "@/data/faqs";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata = generatePageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to the questions we hear most — from treatment safety and implant longevity to booking, insurance, and children's first visits to Aurelia Dental Studio.",
  path: "/faq",
});

/* ------------------------------------------------------------------ */
/*  JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */

const jsonLd = generateFAQPageJsonLd(
  faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page header */}
      <Hero
        variant="page-header"
        eyebrow="Help & Information"
        title="Frequently Asked Questions"
        description="Straightforward answers to the questions we hear most at the studio. Can't find what you're looking for? Call us — we're always happy to talk it through."
      />

      {/* Accordion grouped by category */}
      <FaqAccordion groupByCategory />

      {/* Booking call to action */}
      <BookingCTA />
    </>
  );
}