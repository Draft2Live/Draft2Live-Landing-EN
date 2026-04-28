'use client';
import { useTranslations } from 'next-intl';

// Only real destinations — dead '#' links removed per design review.
// When a real page ships (API docs, blog, about), re-add the label in messages/*.json
// AND add the href here in matching position.
const productHrefs = ['#features', '#pricing'];
const companyHrefs = ['mailto:info@draft2live.ai'];
const legalHrefs = ['/terms/', '/privacy/', '/cookies/'];

// Social icon components removed until real social profiles are available.
// LinkedIn / X / YouTube / Telegram icons lived here but all pointed to href='#'.

export default function Footer() {
  const t = useTranslations('footer');
  const productLabels = t.raw('product.links') as string[];
  const companyLabels = t.raw('company.links') as string[];
  const legalLabels = t.raw('legal.links') as string[];
  // Filter out labels without a real href (safety net if messages has more labels than hrefs).
  const productLinks = productLabels
    .map((label, i) => ({ label, href: productHrefs[i] }))
    .filter((l): l is { label: string; href: string } => Boolean(l.href));
  const companyLinks = companyLabels
    .map((label, i) => ({ label, href: companyHrefs[i] }))
    .filter((l): l is { label: string; href: string } => Boolean(l.href));
  const legalLinks = legalLabels
    .map((label, i) => ({ label, href: legalHrefs[i] }))
    .filter((l): l is { label: string; href: string } => Boolean(l.href));

  return (
    <footer className="bg-darker border-t border-border">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column — wider */}
          <div className="md:col-span-5">
            <a href="/" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.svg" alt="Draft2Live" className="h-10" />
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              {t('brand.description')}
            </p>
            {/* Newsletter inline */}
            <div className="flex w-full max-w-sm mb-6">
              <input
                type="email"
                placeholder={t('brand.newsletterPlaceholder')}
                aria-label={t('brand.newsletterAriaLabel')}
                className="flex-1 min-w-0 px-4 py-2.5 bg-transparent border border-white/20 rounded-l-xl text-white text-sm placeholder-text-muted focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold rounded-r-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all cursor-pointer shrink-0">
                {t('brand.subscribe')}
              </button>
            </div>
            {/* Social icons hidden until real profile URLs are available.
                Previously all 4 linked to href='#' which is a trust signal for
                B2B buyers that the product is abandoned. When a real profile
                ships, add entries with real URLs to the array below. */}
            {/* <div className="flex items-center gap-3">
              [Social icons disabled until real URLs]
            </div> */}
          </div>

          {/* Product column */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-semibold text-sm mb-4">
              {t('product.title')}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">
              {t('company.title')}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">{t('copyright')}</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
