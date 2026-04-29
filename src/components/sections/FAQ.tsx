'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getTranslations } from '@/lib/translations';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import SectionHeader from '@/components/ui/SectionHeader';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const t = getTranslations('faq');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const faqItems = t.raw('items') as FAQItem[];

  return (
    <section id="faq" className="relative py-20 md:py-28 overflow-hidden section-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <SectionHeader badge={t('header.badge')} title={t('header.title')} />

          <motion.div variants={staggerContainer} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <h3 className="text-white font-bold text-base mb-3 flex items-start gap-3">
                  <span className="text-teal-400 font-mono text-sm mt-0.5 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.q}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed pl-9">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Micro-CTA */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <p className="text-text-secondary text-base mb-4">
              {t('microCta.text')}
            </p>
            <motion.a
              href="https://draft2live.ai/en/register"
              rel="noopener"
              whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(4,184,183,0.3)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl bg-teal-600 text-white hover:bg-teal-500 transition-colors cursor-pointer"
            >
              {t('microCta.button')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
