import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { doctors } from "@/data/doctors";
import { treatments } from "@/data/treatments";
import { blogPosts } from "@/data/blog-posts";

/** Default crawl preferences for static, stable pages. */
const DEFAULT_CRON = { changeFrequency: "monthly" as const, priority: 0.7 };

const staticEntries: MetadataRoute.Sitemap = [
  {
    url: `${SITE_CONFIG.url}/`,
    changeFrequency: "weekly",
    priority: 1,
  },
  { url: `${SITE_CONFIG.url}/about`, ...DEFAULT_CRON, priority: 0.8 },
  { url: `${SITE_CONFIG.url}/doctors`, ...DEFAULT_CRON, priority: 0.8 },
  { url: `${SITE_CONFIG.url}/treatments`, ...DEFAULT_CRON, priority: 0.9 },
  {
    url: `${SITE_CONFIG.url}/smile-makeover`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/pediatric-dentistry`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_CONFIG.url}/patient-stories`,
    changeFrequency: "weekly",
    priority: 0.7,
  },
  { url: `${SITE_CONFIG.url}/gallery`, ...DEFAULT_CRON, priority: 0.5 },
  {
    url: `${SITE_CONFIG.url}/blog`,
    changeFrequency: "weekly",
    priority: 0.7,
  },
  { url: `${SITE_CONFIG.url}/contact`, ...DEFAULT_CRON, priority: 0.6 },
  { url: `${SITE_CONFIG.url}/faq`, ...DEFAULT_CRON, priority: 0.5 },
  { url: `${SITE_CONFIG.url}/privacy`, ...DEFAULT_CRON, priority: 0.3 },
  { url: `${SITE_CONFIG.url}/terms`, ...DEFAULT_CRON, priority: 0.3 },
];

const doctorEntries: MetadataRoute.Sitemap = doctors.map((doctor) => ({
  url: `${SITE_CONFIG.url}/doctors/${doctor.slug}`,
  changeFrequency: "monthly",
  priority: 0.7,
}));

const treatmentEntries: MetadataRoute.Sitemap = treatments.map((treatment) => ({
  url: `${SITE_CONFIG.url}/treatments/${treatment.slug}`,
  changeFrequency: "monthly",
  priority: 0.8,
}));

const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
  url: `${SITE_CONFIG.url}/blog/${post.slug}`,
  lastModified: new Date(post.publishedDate),
  changeFrequency: "monthly",
  priority: 0.6,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticEntries,
    ...doctorEntries,
    ...treatmentEntries,
    ...blogEntries,
  ];
}