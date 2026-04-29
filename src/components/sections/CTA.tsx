'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { getTranslations } from '@/lib/translations';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import Button from '@/components/ui/Button';

export default function CTA() {
  const t = getTranslations('cta');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // 3D magnetic tilt on hover
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ rx: (0.5 - y) * 14, ry: (x - 0.5) * 14 });
  }, []);
  const handleMouseLeave = useCallback(() => setTilt({ rx: 0, ry: 0 }), []);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden section-teal">
      {/* Floating orbs */}
      <div className="absolute top-10 left-[10%] w-[300px] h-[300px] bg-teal-500/15 blur-[100px] rounded-full pointer-events-none animate-[floatOrb1_12s_ease-in-out_infinite_alternate]" />
      <div className="absolute bottom-10 right-[10%] w-[250px] h-[250px] bg-teal-400/10 blur-[80px] rounded-full pointer-events-none animate-[floatOrb2_15s_ease-in-out_infinite_alternate]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Brand image with tilt on hover */}
          <div
            className="w-full max-w-[320px] lg:max-w-[380px] shrink-0"
            style={{ perspective: 900 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView
                ? { opacity: 1, scale: 1, rotateX: tilt.rx, rotateY: tilt.ry }
                : { opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hand.png"
                alt={t('imageAlt')}
                width={760}
                height={760}
                className="w-full h-auto rounded-full"
                style={{
                  filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.25))',
                }}
              />
            </motion.div>
          </div>

          {/* Text content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="text-center lg:text-left flex-1"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white leading-tight"
              style={{ letterSpacing: '-0.025em', textWrap: 'balance' }}
            >
              {t('titlePart1')}{' '}
              <span className="gradient-text">{t('titlePart2')}</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg md:text-xl text-text-secondary"
              style={{ textWrap: 'pretty' }}
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button href="https://draft2live.ai/en/register" rel="noopener" variant="primary" size="lg">
                {t('ctaPrimary')}
              </Button>
              <Button href="#hero-video" variant="secondary" size="lg">
                {t('ctaSecondary')}
              </Button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-text-muted text-sm"
            >
              {t('trustLine')}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
