import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { getTranslations } from '@/lib/translations';
import { EarlyAccessProvider } from '@/lib/EarlyAccessContext';
import EarlyAccessModal from '@/components/ui/EarlyAccessModal';

// Only 400/700/900 used in the codebase (font-normal/bold/black). Dropped 100/300/500/600/800
// to cut font payload ~60% — each weight is a separate WOFF2 per subset.
const inter = Inter({ subsets: ['latin', 'latin-ext', 'cyrillic'], variable: '--font-inter', weight: ['400', '700', '900'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', weight: ['500', '700'] });

export function generateMetadata(): Metadata {
  const t = getTranslations('metadata');
  return {
    metadataBase: new URL('https://en.draft2live.com'),
    icons: { icon: '/favicon.svg' },
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: 'https://en.draft2live.com/',
      siteName: 'Draft2Live',
      locale: 'en_US',
      type: 'website',
      images: [{
        url: '/og-images/og-en.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Draft2Live — AI-to-CMS publishing',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['/og-images/og-en.png'],
    },
  };
}

// JSON-LD schemas. FAQ questions are pulled from translations so the
// structured data emitted on each page reflects the current EN copy.
function getJsonLd() {
  const t = getTranslations('jsonLd');
  const faq = getTranslations('faq.items');

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Draft2Live',
    url: 'https://en.draft2live.com',
    logo: 'https://en.draft2live.com/og-images/og-en.png',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { orgSchema, appSchema, faqSchema } = getJsonLd();

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="noise min-h-screen antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <EarlyAccessProvider>
          {children}
          <EarlyAccessModal />
        </EarlyAccessProvider>
      </body>
    </html>
  );
}
