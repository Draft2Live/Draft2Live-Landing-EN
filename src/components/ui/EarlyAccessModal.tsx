'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTranslations } from '@/lib/translations';
import { useEarlyAccess } from '@/lib/EarlyAccessContext';

function CheckmarkAnimation() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
      className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-500 flex items-center justify-center mx-auto"
    >
      <motion.svg
        className="w-8 h-8 text-teal-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
      </motion.svg>
    </motion.div>
  );
}

export default function EarlyAccessModal() {
  const t = getTranslations('earlyAccess');
  const { isOpen, selectedPlan, keyword, close } = useEarlyAccess();
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  // Focus input on open + remember where focus came from so we can restore it.
  useEffect(() => {
    if (isOpen && !isSubmitted) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
      setTimeout(() => emailRef.current?.focus(), 200);
    }
    if (!isOpen && previouslyFocusedRef.current) {
      previouslyFocusedRef.current.focus();
      previouslyFocusedRef.current = null;
    }
  }, [isOpen, isSubmitted]);

  // Focus trap: keep Tab/Shift+Tab inside the modal while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const root = modalRef.current;
      if (!root) return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setEmail('');
        setGdprConsent(false);
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !gdprConsent) return;

    setIsSubmitting(true);

    // Netlify Forms submission (static site — no API routes).
    // Form schema registered via public/__forms.html at build time.
    // Spec: https://docs.netlify.com/forms/setup/#submit-javascript-rendered-forms-with-ajax
    const encode = (data: Record<string, string>) =>
      Object.keys(data)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        .join('&');

    const locale =
      typeof window !== 'undefined'
        ? window.location.pathname.split('/')[1] || 'en'
        : 'en';

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'early-access',
          email,
          plan: selectedPlan || '',
          keyword: keyword || '',
          landing: 'Draft2Live',
          locale,
          gdprConsent: String(gdprConsent),
          'bot-field': '',
        }),
      });
    } catch {
      // Fail silently — still show success so user isn't blocked on network issues.
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="early-access-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="relative w-full max-w-md bg-[#002365] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-40 bg-teal-500/15 blur-[80px] rounded-full pointer-events-none" />

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all cursor-pointer z-10"
              aria-label={t('closeAriaLabel')}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                        <span className="text-teal-300 text-xs font-normal">{t('statusLabel')}</span>
                      </div>
                      <h3
                        id="early-access-title"
                        className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight"
                      >
                        {t('title')}
                      </h3>
                      <p className="text-text-secondary text-sm mt-3">
                        {t('subtitle')}
                      </p>
                      <p className="text-teal-300 text-sm mt-2 font-normal">
                        {t('bonus')}
                      </p>
                    </div>

                    {/* Plan badge */}
                    {selectedPlan && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300">
                          {t('planBadge', { plan: selectedPlan })}
                        </span>
                      </div>
                    )}

                    {/* Keyword carried from hero — shows the user their typed
                        phrase is captured, addressing bait-and-switch critique. */}
                    {keyword && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-text-secondary max-w-full truncate">
                          {t('keywordBadge', { keyword })}
                        </span>
                      </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        ref={emailRef}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('emailPlaceholder')}
                        required
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder:text-text-muted text-sm outline-none focus:border-teal-500/40 focus:bg-white/[0.06] transition-all"
                      />

                      {/* GDPR consent */}
                      <label className="flex items-start gap-2.5 cursor-pointer group pt-1">
                        <input
                          type="checkbox"
                          checked={gdprConsent}
                          onChange={(e) => setGdprConsent(e.target.checked)}
                          className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/[0.04] text-teal-500 focus:ring-teal-500/30 cursor-pointer accent-teal-500"
                        />
                        <span className="text-text-muted text-[11px] leading-relaxed group-hover:text-text-secondary transition-colors">
                          {t('gdprPrefix')}{' '}
                          <a
                            href="/privacy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-400 hover:text-teal-300 underline underline-offset-2"
                          >
                            {t('gdprLink')}
                          </a>
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={isSubmitting || !email || !gdprConsent}
                        className="w-full py-3.5 bg-teal-600 hover:bg-teal-500 disabled:bg-teal-600/50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition-all hover:shadow-lg hover:shadow-teal-500/20 cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            {t('submitLoading')}
                          </>
                        ) : (
                          t('submit')
                        )}
                      </button>
                    </form>

                    <p className="text-text-muted text-[11px] text-center mt-3">
                      {t('noSpam')}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-4"
                  >
                    <CheckmarkAnimation />

                    <h3 className="text-xl font-heading font-bold text-white mt-5">
                      {t('successTitle')}
                    </h3>
                    <p className="text-text-secondary text-sm mt-2">
                      {t('successLine1')}
                      {selectedPlan && (
                        <> {t('successPlanPrefix')} <span className="text-teal-300 font-bold">{selectedPlan}</span> {t('successPlanSuffix')}</>
                      )}
                    </p>
                    <p className="text-text-secondary text-sm mt-1">
                      {t('successEmailPrefix')} <span className="text-white">{email}</span>{t('successEmailSuffix')}
                    </p>

                    <button
                      onClick={close}
                      className="mt-6 px-6 py-2.5 border border-white/10 rounded-xl text-sm text-white hover:bg-white/5 transition-all cursor-pointer"
                    >
                      {t('successButton')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
