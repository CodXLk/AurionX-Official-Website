import HeroSection from '@/components/sections/heroSection';
import IntroSection from '@/components/sections/introSection';
import ServicesSection from '@/components/sections/servicesSection';
import TestimonialsSection from '@/components/sections/testimonialsSection';
import WhyChooseUsSection from '@/components/sections/whyChooseUsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
      </main>
    </div>
  );
}
