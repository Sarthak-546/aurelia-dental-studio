import { generatePageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { clinic } from "@/data/clinic";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BookingCTA } from "@/components/sections/booking-cta";

export const metadata = generatePageMetadata({
  title: "Terms of Use",
  description:
    "Read the terms and conditions governing your use of the Aurelia Dental Studio website and dental services.",
  path: "/terms",
  noIndex: true,
});

export default function TermsOfUsePage() {
  const lastUpdated = "1 September 2025";

  return (
    <>
      {/* Page Header */}
      <Section className="bg-ivory pt-32 pb-16">
        <Container>
          <h1 className="font-display text-4xl text-charcoal md:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-charcoal/50">
            Last updated: {lastUpdated}
          </p>
        </Container>
      </Section>

      {/* Legal Content */}
      <Section>
        <Container className="max-w-3xl">
          <div className="prose-custom space-y-12 text-base leading-relaxed text-charcoal/80">
            {/* Acceptance */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Acceptance of Terms
              </h2>
              <p className="mt-4">
                By accessing or using the Aurelia Dental Studio website
                ({SITE_CONFIG.url}) or by receiving treatment at our clinic, you
                agree to be bound by these Terms of Use. If you do not agree
                with any part of these terms, please discontinue use of the
                website and, where applicable, inform the clinic before
                proceeding with any service.
              </p>
              <p className="mt-4">
                These terms apply to all visitors, patients, and users of the
                website regardless of geographic location. We may revise these
                terms from time to time; the latest version will always be
                posted on this page with an updated date. Continued use after
                changes are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Services Provided
              </h2>
              <p className="mt-4">
                Aurelia Dental Studio provides general, cosmetic, orthodontic,
                restorative, and paediatric dental services as described on this
                website and in the clinic. All treatment recommendations are made
                by registered dental practitioners based on an individual clinical
                assessment. Information published on the website &mdash; including
                descriptions of procedures, expected outcomes, recovery timelines,
                and pricing &mdash; is for general educational purposes and does
                not constitute medical advice or a guarantee of specific results.
              </p>
              <p className="mt-4">
                Treatment fees quoted during a consultation are estimates based on
                the anticipated scope of work. Actual costs may vary depending on
                clinical findings, material choices, and additional procedures
                identified during treatment. A detailed, itemised treatment plan
                and cost breakdown will be provided in writing before any
                procedure begins, and your written consent will be obtained.
              </p>
            </section>

            {/* Booking & Cancellation */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Booking &amp; Cancellation Policy
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Appointments</strong> &mdash; appointments may be
                  booked through our website, by telephone at {clinic.contact.phone},
                  or in person at the clinic. A confirmed booking is subject to
                  availability; you will receive a confirmation via SMS or email.
                </li>
                <li>
                  <strong>Cancellation window</strong> &mdash; we kindly request
                  at least twenty-four (24) hours&rsquo; notice for any
                  cancellation or rescheduling. Cancellations made less than 24
                  hours before the scheduled time may incur a cancellation fee
                  of up to 50% of the consultation charge to cover clinician
                  time and reserved resources.
                </li>
                <li>
                  <strong>No-shows</strong> &mdash; failure to attend a confirmed
                  appointment without prior notice may result in the full
                  consultation fee being charged. Repeated no-shows may affect
                  future booking privileges.
                </li>
                <li>
                  <strong>Late arrivals</strong> &mdash; if you arrive more than
                  fifteen (15) minutes late, we may need to reschedule your
                  appointment to ensure every patient receives the full time
                  and attention they deserve.
                </li>
              </ul>
            </section>

            {/* Payment */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Payment Terms
              </h2>
              <p className="mt-4">
                Payment for dental services is due in full on the day of
                treatment unless a prior written arrangement has been agreed. We
                accept cash, UPI, major debit and credit cards, and bank
                transfers. For treatment plans exceeding a single visit, we
                offer structured payment schedules that divide the total fee
                across the planned stages &mdash; details will be provided at the
                treatment-planning consultation.
              </p>
              <p className="mt-4">
                Insurance claims are facilitated as a courtesy to patients.
                However, Aurelia Dental Studio acts only as an intermediary and
                is not liable for delays, rejections, or reductions in coverage
                determined by the insurer. Any amount not covered by insurance
                remains the patient&rsquo;s responsibility and is payable
                according to the terms above.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Intellectual Property
              </h2>
              <p className="mt-4">
                All content published on the Aurelia Dental Studio website &mdash;
                including text, images, illustrations, logos, treatment
                descriptions, blog articles, and graphic design elements &mdash; is
                the property of Aurelia Dental Studio or its content partners and
                is protected by applicable intellectual property laws. You may
                view or print pages from the website for personal, non-commercial
                reference only.
              </p>
              <p className="mt-4">
                Reproduction, distribution, modification, or commercial use of
                any website content without prior written permission from Aurelia
                Dental Studio is strictly prohibited. Patient photographs and
                case studies shared on the website appear only with the
                patient&rsquo;s explicit, written consent and may not be
                downloaded, copied, or redistributed by third parties.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Limitation of Liability
              </h2>
              <p className="mt-4">
                While we strive to keep all website information accurate and
                up-to-date, Aurelia Dental Studio makes no warranties or
                representations regarding the completeness, reliability, or
                suitability of the content for any particular purpose. The
                website and its content are provided on an &ldquo;as is&rdquo;
                basis.
              </p>
              <p className="mt-4">
                To the maximum extent permitted by law, Aurelia Dental Studio,
                its directors, practitioners, and staff shall not be held liable
                for any direct, indirect, incidental, or consequential damages
                arising from the use of this website, reliance on information
                presented on it, or the inability to access it. This does not
                affect your statutory rights as a patient under Indian consumer
                protection legislation.
              </p>
              <p className="mt-4">
                Clinical outcomes are inherently variable; while our team
                employs evidence-based techniques and modern materials to achieve
                the best possible results, individual outcomes may differ. Any
                concerns regarding treatment should be raised directly with your
                treating clinician or the clinic management so that they can be
                addressed promptly and appropriately.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Governing Law
              </h2>
              <p className="mt-4">
                These Terms of Use shall be governed by and construed in
                accordance with the laws of India. Any dispute arising in
                connection with these terms or the use of this website shall
                first be subject to amicable resolution through direct
                communication with the clinic. If a resolution cannot be reached,
                the matter shall fall under the exclusive jurisdiction of the
                courts in Mumbai, Maharashtra, India.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Changes to These Terms
              </h2>
              <p className="mt-4">
                We reserve the right to modify these Terms of Use at any time.
                Changes will be reflected on this page with a revised
                &ldquo;Last updated&rdquo; date. For significant changes, we may
                also post a notice on the website homepage or contact registered
                patients by email. We encourage you to review this page
                periodically to stay informed.
              </p>
              <p className="mt-4">
                If you have questions about these terms or wish to provide
                feedback, please contact us at{" "}
                <a
                  href={`mailto:${clinic.contact.email}`}
                  className="text-sage underline-offset-2 hover:underline"
                >
                  {clinic.contact.email}
                </a>{" "}
                or by calling {clinic.contact.phone}.
              </p>
            </section>
          </div>
        </Container>
      </Section>

      <BookingCTA />
    </>
  );
}
