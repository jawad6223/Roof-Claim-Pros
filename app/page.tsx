import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import DidYouKnow from '@/components/sections/DidYouKnow';
import HowItWorks from '@/components/sections/HowItWorks';
import TrustedByThousands from '@/components/sections/TrustedByThousands';
import HailStatesSection from '@/components/sections/HailStatesSection';
import MoneyOnTableSection from '@/components/sections/MoneyOnTableSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <DidYouKnow />
        <HowItWorks />
        <TrustedByThousands />
        <HailStatesSection />
        <Testimonials />
        <MoneyOnTableSection />
        <Footer />
      </div>
    </Suspense>
  );
}