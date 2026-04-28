import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Add new locales here when adding translations
  locales: ['en'],
  defaultLocale: 'en',
  // Keep locale visible in URL for all locales (no "as needed" hiding)
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
