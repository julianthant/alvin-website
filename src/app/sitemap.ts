import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alvin-website.vercel.app";

  const otSlugs = [
    "sensory-processing-regulation",
    "handwriting-fine-motor-skills",
    "gross-motor-skills",
    "self-care-skills",
    "feeding-therapy",
    "executive-functioning-skills",
  ];
  const slpSlugs = [
    "infant-toddler-preschool-language",
    "articulation-fluency-speech-production",
    "childhood-apraxia-of-speech",
    "language-expression-comprehension",
    "augmentative-alternative-communication",
    "social-communication",
    "literacy-reading-writing",
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/occupational-therapy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...otSlugs.map((slug) => ({
      url: `${baseUrl}/occupational-therapy/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${baseUrl}/speech-language-pathology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...slpSlugs.map((slug) => ({
      url: `${baseUrl}/speech-language-pathology/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${baseUrl}/joint-therapy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/group-therapy`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/ontario-autism-program`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about/our-staff`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faqs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
