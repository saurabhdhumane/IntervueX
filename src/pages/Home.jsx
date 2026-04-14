import Hero from '../components/Hero';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <CTASection />
    </>
  );
}
