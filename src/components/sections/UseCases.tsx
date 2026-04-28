'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/ui/SectionHeader';

const caseIcons = [
  (
    <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    </svg>
  ),
  (
    <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  (
    <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
    </svg>
  ),
];

export default function UseCases() {
  const t = useTranslations('useCases');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const items = t.raw('items') as { persona: string; headline: string; desc: string; metrics: string[] }[];
  const cases = items.map((item, i) => ({ ...item, icon: caseIcons[i] }));

  return (
    <section className="relative py-20 md:py-28 overflow-hidden section-dark">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <SectionHeader badge={t('header.badge')} title={t('header.title')} />

          {/* Asymmetric grid: featured first card spans wider */}
          <motion.div
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Featured large card */}
            <motion.div variants={fadeInUp} className="md:row-span-2">
              <div className="glass-card spotlight-card !p-8 md:!p-10 h-full flex flex-col relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/8 blur-3xl rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 mb-5">
                    {cases[0].icon}
                  </div>
                  <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">
                    {cases[0].persona}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white mt-2 mb-4" style={{ letterSpacing: '-0.02em' }}>
                    {cases[0].headline}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 flex-1">
                    {cases[0].desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cases[0].metrics.map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-teal-500/8 border border-teal-500/15 text-teal-300"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Two stacked cards */}
            {cases.slice(1).map((c) => (
              <motion.div key={c.persona} variants={fadeInUp}>
                <div className="glass-card spotlight-card !p-6 md:!p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">
                        {c.persona}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-white mt-1" style={{ letterSpacing: '-0.01em' }}>
                        {c.headline}
                      </h3>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {c.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.metrics.map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-teal-500/8 border border-teal-500/15 text-teal-300"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
