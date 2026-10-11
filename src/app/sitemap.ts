import { MetadataRoute } from "next";
import { TREATMENTS } from "@/content/treatments";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.araspa.co.in";

  const treatmentUrls = TREATMENTS.map((t) => ({
    url: `${baseUrl}/services/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const routes = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/services", priority: 0.9, freq: "weekly" as const },
    { path: "/packages", priority: 0.85, freq: "monthly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    { path: "/gallery", priority: 0.8, freq: "monthly" as const },
    { path: "/contact", priority: 0.9, freq: "weekly" as const },
    { path: "/testimonials", priority: 0.75, freq: "monthly" as const },
    { path: "/faq", priority: 0.75, freq: "monthly" as const },
    { path: "/privacy-policy", priority: 0.5, freq: "yearly" as const },
    { path: "/terms-conditions", priority: 0.5, freq: "yearly" as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.freq,
    priority: route.priority,
  }));

  return [...routes, ...treatmentUrls];
}
