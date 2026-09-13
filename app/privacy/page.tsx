import { generatePageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { clinic } from "@/data/clinic";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BookingCTA } from "@/components/sections/booking-cta";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Aurelia Dental Studio collects, uses, and protects your personal information. Read our full privacy policy.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  const lastUpdated = "1 September 2025";

  return (
    <>
      {/* Page Header */}
      <Section className="bg-ivory pt-32 pb-16">
        <Container>
          <h1 className="font-display text-4xl text-charcoal md:text-5xl">
            Privacy Policy
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
            {/* Introduction */}
            <p>
              Aurelia Dental Studio (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) is committed to safeguarding the privacy of every
              patient, website visitor, and community member who entrusts us with
              their personal information. This Privacy Policy explains how we
              collect, use, disclose, and protect that information when you visit
              our website at {SITE_CONFIG.url}, call our clinic, or receive
              dental care at our practice in Mumbai, Maharashtra.
            </p>

            {/* Information We Collect */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Information We Collect
              </h2>
              <p className="mt-4">
                We gather two broad categories of information to deliver safe,
                effective dental care and to improve the experience of every
                person who interacts with us.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Personal identification details</strong> &mdash; full
                  name, date of birth, gender, photograph (when provided for
                  records), telephone number, email address, and residential
                  address. We collect these during appointment scheduling,
                  registration at the clinic, or when you submit an enquiry
                  through our website.
                </li>
                <li>
                  <strong>Health and medical records</strong> &mdash; dental and
                  medical history, current medications, allergy information,
                  diagnostic images (X-rays, CBCT scans), clinical photographs,
                  and treatment plans. These records are essential for safe
                  clinical decision-making and are maintained in accordance with
                  the Dental Council of India&rsquo;s ethical guidelines.
                </li>
                <li>
                  <strong>Financial information</strong> &mdash; payment details
                  processed during billing, including insurance policy numbers
                  and claim information when treatment is covered by a third-party
                  insurer. We do not store full credit or debit card numbers on
                  our own servers; all card transactions are handled through
                  PCI-DSS-compliant payment gateways.
                </li>
                <li>
                  <strong>Technical and usage data</strong> &mdash; IP address,
                  browser type, device characteristics, pages viewed, time spent
                  on pages, and referral sources. This information is collected
                  automatically through cookies and similar technologies when you
                  browse our website.
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                How We Use Your Information
              </h2>
              <p className="mt-4">
                Every piece of data we hold serves a defined purpose. We use
                personal information for the following reasons:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Providing dental care</strong> &mdash; clinical records
                  allow our dentists and specialists to diagnose conditions,
                  develop treatment plans, and deliver safe, continuity of care
                  across multiple visits.
                </li>
                <li>
                  <strong>Appointment management</strong> &mdash; scheduling,
                  sending reminders via SMS or email, and managing cancellations
                  or rescheduling requests so that both patients and clinicians
                  can plan effectively.
                </li>
                <li>
                  <strong>Communication</strong> &mdash; responding to enquiries,
                  sending post-treatment follow-up instructions, and sharing
                  practice updates when you have opted in to receive
                  communications from us.
                </li>
                <li>
                  <strong>Billing and insurance</strong> &mdash; processing
                  payments, generating invoices, and coordinating insurance claims
                  on behalf of patients who choose to use their dental coverage.
                </li>
                <li>
                  <strong>Legal compliance</strong> &mdash; maintaining records as
                  required under the Clinical Establishments (Registration and
                  Regulation) Act, the Indian Medical Council Act, and other
                  applicable regulations.
                </li>
                <li>
                  <strong>Website improvement</strong> &mdash; analysing aggregate
                  usage patterns to enhance site navigation, content relevance,
                  and overall digital experience.
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Data Security
              </h2>
              <p className="mt-4">
                We implement industry-standard technical and organisational
                safeguards to protect your data against unauthorised access,
                alteration, disclosure, or destruction. Our electronic health
                records are stored on encrypted servers with role-based access
                controls, meaning only authorised clinical and administrative
                personnel can view patient information relevant to their duties.
                Physical records, where they exist, are kept in locked cabinets
                within secure areas of the clinic.
              </p>
              <p className="mt-4">
                While no method of transmission over the internet is completely
                secure, we take every reasonable precaution &mdash; including SSL
                encryption for all web traffic, two-factor authentication for
                staff accounts, and regular security audits &mdash; to minimise
                risk. In the unlikely event of a data breach that affects your
                personal information, we will notify you promptly in accordance
                with applicable law.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">Cookies</h2>
              <p className="mt-4">
                Our website uses cookies and similar tracking technologies to
                distinguish you from other visitors and to remember your
                preferences. Cookies are small text files placed on your device
                that help us understand how you interact with our site.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Strictly necessary cookies</strong> &mdash; required for
                  core functionality such as form submission and session
                  management. These cannot be disabled.
                </li>
                <li>
                  <strong>Analytics cookies</strong> &mdash; help us measure
                  traffic and understand which pages are most useful, allowing us
                  to improve our content and structure. We use privacy-respecting
                  analytics tools that do not transmit personally identifiable
                  data to third parties.
                </li>
                <li>
                  <strong>Preference cookies</strong> &mdash; remember settings
                  such as your chosen language or whether you have dismissed a
                  cookie notice, so you do not have to set them again on each
                  visit.
                </li>
              </ul>
              <p className="mt-4">
                You can manage or disable cookies through your browser settings.
                Please note that disabling certain cookies may affect the
                functionality of our website.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Third-Party Services
              </h2>
              <p className="mt-4">
                We may engage trusted third-party providers to support specific
                aspects of our practice, including payment processing, email
                delivery, cloud hosting, and website analytics. These providers
                are contractually obligated to handle your data only for the
                purposes we specify and to maintain appropriate security measures.
              </p>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information to any
                third party for marketing purposes. Your data may be disclosed
                only when required by law, by a court order, or by a recognised
                regulatory authority such as the Dental Council of India or the
                Maharashtra State Dental Council.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Your Rights
              </h2>
              <p className="mt-4">
                You have the right to access the personal information we hold
                about you, to request corrections to any inaccuracies, and to
                ask us to delete data that is no longer necessary for the
                purposes for which it was collected. Where processing of your
                data is based on consent, you may withdraw that consent at any
                time without affecting the lawfulness of processing carried out
                before withdrawal.
              </p>
              <p className="mt-4">
                To exercise any of these rights, or to raise a concern about how
                your data is being handled, please contact our Data Protection
                Officer using the details below. We aim to respond to all
                verifiable requests within thirty (30) days.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="font-display text-2xl text-charcoal">
                Contact Us
              </h2>
              <p className="mt-4">
                If you have questions about this Privacy Policy, wish to
                exercise your data rights, or need to report a privacy concern,
                please reach out to us:
              </p>
              <div className="mt-4 rounded-sm border border-stone bg-ivory/40 p-6">
                <p className="font-medium text-charcoal">
                  Aurelia Dental Studio &mdash; Privacy Office
                </p>
                <p className="mt-2 text-charcoal/70">
                  {clinic.contact.address.line1}, {clinic.contact.address.line2}
                </p>
                <p className="text-charcoal/70">
                  {clinic.contact.address.city}, {clinic.contact.address.state}{" "}
                  {clinic.contact.address.postalCode}
                </p>
                <p className="text-charcoal/70">
                  Email:{" "}
                  <a
                    href={`mailto:${clinic.contact.email}`}
                    className="text-sage underline-offset-2 hover:underline"
                  >
                    {clinic.contact.email}
                  </a>
                </p>
                <p className="text-charcoal/70">
                  Phone: {clinic.contact.phone}
                </p>
              </div>
            </section>
          </div>
        </Container>
      </Section>

      <BookingCTA />
    </>
  );
}
