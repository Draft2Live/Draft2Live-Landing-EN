'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { getTranslations } from '@/lib/translations';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import SectionHeader from '@/components/ui/SectionHeader';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  initials: string;
}

const testimonialMeta: { avatar?: string }[] = [
  { avatar: '/avatars/oleksiy.jpg' },
  { avatar: '/avatars/nadiya.jpg' },
  { avatar: '/avatars/andriy.jpg' },
  {},
  {},
  {},
];

const AUTO_INTERVAL = 5000;

function StarRating({ label }: { label: string }) {
  return (
    <div className="flex gap-0.5 mb-4" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-hot" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const tr = getTranslations('testimonials');
  const items = tr.raw('items') as { quote: string; author: string; role: string; initials: string }[];
  const testimonials: Testimonial[] = items.map((item, i) => ({
    ...item,
    avatar: testimonialMeta[i]?.avatar,
  }));
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonialMeta.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden section-glow-divider section-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <SectionHeader badge={tr('header.badge')} title={tr('header.title')} />

          <motion.div variants={fadeInUp} className="mt-12">
            {/* Card stack */}
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Deck cards behind (decorative) */}
              <div className="absolute inset-0 translate-y-4 scale-[0.96] rounded-2xl bg-surface/60 border border-border/30" />
              <div className="absolute inset-0 translate-y-8 scale-[0.92] rounded-2xl bg-surface/30 border border-border/20" />

              {/* Active card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20, scale: 0.95, rotateX: 4 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, x: -200, scale: 0.95, rotate: -3 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="glass-card spotlight-card p-8 md:p-10 cursor-pointer" onClick={next}>
                    <StarRating label={tr('ratingAriaLabel')} />
                    <blockquote className="text-white text-base md:text-lg leading-relaxed mb-8 min-h-[100px]">
                      &ldquo;{current.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      {current.avatar ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={current.avatar} alt={current.author} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 text-sm font-bold shrink-0">
                          {current.initials}
                        </div>
                      )}
                      <div>
                        <p className="text-white text-sm font-bold">{current.author}</p>
                        <p className="text-text-muted text-xs">{current.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-10">
              {testimonials.map((testimonial, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setIsPaused(false); }}
                  className="group relative h-8 flex items-center cursor-pointer"
                  aria-label={tr('navAriaLabel', { name: testimonial.author })}
                >
                  <div className={`h-1 rounded-full overflow-hidden transition-all duration-300 ${
                    i === active ? 'w-10 bg-white/10' : 'w-4 bg-white/10 hover:bg-white/20'
                  }`}>
                    {i === active && !isPaused && (
                      <motion.div
                        key={`progress-${active}`}
                        className="h-full bg-teal-500 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: AUTO_INTERVAL / 1000, ease: 'linear' }}
                      />
                    )}
                    {i === active && isPaused && (
                      <div className="h-full bg-teal-500 rounded-full w-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
