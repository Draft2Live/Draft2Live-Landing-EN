'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTranslations } from '@/lib/translations';

export default function StickyMobileCTA() {
  const t = getTranslations('stickyMobileCTA');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-[#002365]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 safe-bottom">
            <a
              href="https://draft2live.ai/en/register"
              rel="noopener"
              className="w-full inline-flex items-center justify-center py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-lg shadow-teal-500/20"
            >
              {t('cta')}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
