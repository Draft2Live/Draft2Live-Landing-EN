import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import LogoMarquee from '@/components/sections/LogoMarquee';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
// Testimonials section removed: current testimonials are placeholders, not real customers.
// Will be re-enabled when we have verified case studies / real testimonials.
import UseCases from '@/components/sections/UseCases';
import Metrics from '@/components/sections/Metrics';
import PriceAnchor from '@/components/sections/PriceAnchor';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import StickyMobileCTA from '@/components/ui/StickyMobileCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <LogoMarquee />
        <HowItWorks />
        <Features />
        <UseCases />
        <Metrics />
        <PriceAnchor />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <StickyMobileCTA />
      <Footer />
    </>
  );
}
