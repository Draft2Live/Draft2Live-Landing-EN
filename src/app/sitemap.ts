import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

/**
 * Dynamic sitemap.xml for Draft2Live with hreflang alternates.
 *
 * Generates one entry per public page, with <xhtml:link rel="alternate"
 * hreflang="..."> for the en locale plus x-default. After EN-only migration,
 * the loop runs once but the structure is preserved so future locales can
 * be added by simply expanding routing.locales.
 */

// Required for Next.js 16 with `output: 'export'` — without this, the build
// fails with "export const dynamic = 'force-static' not configured" error.
// The sitemap is fully static (no per-request data), so force-static is correct.
export const dynamic = 'force-static';

const baseUrl = 'https://draft2live.ai';

// Public routes within each [locale] space. Add new public routes here when
// we publish new pages (e.g. /case-study, /vs/surfer-seo).
const publicRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  // Legal pages exist under /[locale]/privacy, /terms, /cookies.
  { path: 'privacy/', priority: 0.3, changeFrequency: 'yearly' },
  { path: 'terms/', priority: 0.3, changeFrequency: 'yearly' },
  { path: 'cookies/', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicRoutes.flatMap((route) => {
    // Build hreflang alternates map — one URL per locale plus x-default.
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = `${baseUrl}/${locale}/${route.path}`;
    }
    // x-default points at the default locale variant (en) per next-intl config.
    languages['x-default'] = `${baseUrl}/${routing.defaultLocale}/${route.path}`;

    return routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    }));
  });
}
