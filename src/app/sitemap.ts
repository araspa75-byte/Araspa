import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.araspa.co.in';

  const services = [
    'aroma-therapy',
    'balinese-therapy',
    'thai-therapy',
    'deep-tissue-massage',
    'swedish-massage',
    'tantra',
    'moroccan-bath-massage',
    'body-scrubbing-massage',
    'four-hands-massage',
    'hot-stone-massage',
    'couple-massage',
    'signature-massage',
  ];

  const serviceUrls = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const routes = [
    '',
    '/about',
    '/services',
    '/packages',
    '/gallery',
    '/testimonials',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms-conditions'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...serviceUrls];
}
