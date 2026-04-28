import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { EarlyAccessProvider } from '@/lib/EarlyAccessContext';
import EarlyAccessModal from '@/components/ui/EarlyAccessModal';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        en: '/en/',
        'x-default': '/en/',
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://draft2live.ai/${locale}/`,
      siteName: 'Draft2Live',
      locale: 'en_US',
      type: 'website',
      // Locale-specific OG images for Facebook/LinkedIn/Twitter sharing previews.
      // Each locale ships its own headline translation baked into the artwork.
      images: [{
        url: `/og-images/og-${locale}.svg`,
        width: 1200,
        height: 630,
        alt: 'Draft2Live — AI-to-CMS publishing',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [`/og-images/og-${locale}.svg`],
    },
  };
}

// Locale-specific JSON-LD schemas. FAQ questions are pulled from translations so each
// locale emits its own structured data.
async function getJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: 'jsonLd' });
  const faq = await getTranslations({ locale, namespace: 'faq.items' });

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Draft2Live',
    url: 'https://draft2live.ai',
    logo: 'https://draft2live.ai/logo.svg',
    description: t('orgDescription'),
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Draft2Live',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'AggregateOffer', lowPrice: '0', highPrice: '399', priceCurrency: 'EUR', offerCount: '4' },
    // aggregateRating removed: we don't have verified ratings from a reputable source yet.
    // Adding fake ratings to schema violates Google's structured data guidelines and can
    // result in manual action. Will be re-added once we have G2/Capterra/Trustpilot reviews.
  };

  // Read the 6 FAQ items from translations
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [0, 1, 2, 3, 4, 5].map((i) => ({
      '@type': 'Question',
      name: faq(`${i}.q`),
      acceptedAnswer: { '@type': 'Answer', text: faq(`${i}.aPlain`) },
    })),
  };

  return { orgSchema, appSchema, faqSchema };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const { orgSchema, appSchema, faqSchema } = await getJsonLd(locale);

  return (
    <NextIntlClientProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EarlyAccessProvider>
        {children}
        <EarlyAccessModal />
      </EarlyAccessProvider>
    </NextIntlClientProvider>
  );
}
