import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Only 400/700/900 used in the codebase (font-normal/bold/black). Dropped 100/300/500/600/800
// to cut font payload ~60% — each weight is a separate WOFF2 per subset.
const inter = Inter({ subsets: ['latin', 'latin-ext', 'cyrillic'], variable: '--font-inter', weight: ['400', '700', '900'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', weight: ['500', '700'] });

// Root-level metadata — shared across all locales. Locale-specific title/description/OG
// are set in src/app/[locale]/layout.tsx via generateMetadata().
export const metadata: Metadata = {
  metadataBase: new URL('https://draft2live.ai'),
  icons: { icon: '/favicon.svg' },
};

// html lang is hardcoded to "en" — only locale shipped after EN-only migration.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="noise min-h-screen antialiased">{children}</body>
    </html>
  );
}
