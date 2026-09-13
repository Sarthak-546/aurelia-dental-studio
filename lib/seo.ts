import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Generate Next.js Metadata for a page.
 */
export function generatePageMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const image = ogImage ?? SITE_CONFIG.ogImage;

  return {
    title,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} – ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [image],
    },
  };
}

/* ── JSON-LD Generators ──────────────────────────────────────────────── */

/**
 * Split a comma-separated US address string into PostalAddress parts.
 * Expects the format: "123 Street, City, ST ZIP"
 */
function splitPostalAddress(address: string) {
  const [streetAddress = "", addressLocality = "", regionAndZip = ""] = address
    .split(",")
    .map((part) => part.trim());
  const [addressRegion = "", postalCode = ""] = regionAndZip.split(/\s+/);

  return { streetAddress, addressLocality, addressRegion, postalCode };
}

/**
 * Generate LocalBusiness + Dentist JSON-LD structured data.
 */
export function generateLocalBusinessJsonLd() {
  const { streetAddress, addressLocality, addressRegion, postalCode } =
    splitPostalAddress(SITE_CONFIG.address);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist"],
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phoneLink.replace("tel:", ""),
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      { dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
      { dayOfWeek: "Tuesday", opens: "08:00", closes: "17:00" },
      { dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
      { dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
      { dayOfWeek: "Friday", opens: "08:00", closes: "15:00" },
    ].map((spec) => ({ "@type": "OpeningHoursSpecification", ...spec })),
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.twitter,
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: addressLocality,
    },
  };
}

/**
 * Generate Physician JSON-LD for a doctor/dentist profile page.
 */
export function generatePhysicianJsonLd({
  name,
  description,
  image,
  qualifications,
  url,
}: {
  name: string;
  description: string;
  image: string;
  qualifications: string[];
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name,
    description,
    image,
    url: `${SITE_CONFIG.url}${url}`,
    qualification: qualifications.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: q,
    })),
    worksFor: {
      "@type": "Dentist",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    medicalSpecialty: "Dentistry",
  };
}

/**
 * Generate FAQPage JSON-LD from an array of question/answer pairs.
 */
export function generateFAQPageJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

/**
 * Generate Article JSON-LD for blog posts.
 */
export function generateArticleJsonLd({
  title,
  description,
  image,
  url,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    url: `${SITE_CONFIG.url}${url}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}${url}`,
    },
  };
}

/**
 * Generate BreadcrumbList JSON-LD from an array of breadcrumb items.
 */
export function generateBreadcrumbListJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  };
}