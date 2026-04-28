'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/ui/SectionHeader';
import TiltCard from '@/components/ui/TiltCard';

const stepIcons = [
  (
    <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  ),
  (
    <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
    </svg>
  ),
  (
    <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    </svg>
  ),
  (
    <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
];

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const items = t.raw('items') as { title: string; desc: string }[];
  const steps = items.map((item, i) => ({
    num: i + 1,
    title: item.title,
    desc: item.desc,
    icon: stepIcons[i],
  }));

  return (
    <section id="how-it-works" className="relative py-20 md:py-28 overflow-hidden section-dark">
      <div className="mx-auto max-w-[1640px] px-6">
        <SectionHeader badge={t('header.badge')} title={t('header.title')} />

        <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {steps.map((step) => (
            <motion.div key={step.num} variants={fadeInUp} className="relative h-full">
              <TiltCard>
                <div className="glass-card !p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border border-teal-500/30 flex items-center justify-center">
                      <span className="gradient-text font-black font-mono text-sm">{step.num}</span>
                    </div>
                    <div className="text-teal-300">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mb-2" style={{ letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed" style={{ textWrap: 'pretty' }}>{step.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
