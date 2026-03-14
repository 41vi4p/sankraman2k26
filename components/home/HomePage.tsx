import AboutSection from '@/components/home/AboutSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import CtaSection from '@/components/home/CtaSection';
import EventsSection from '@/components/home/EventsSection';
import HeroSection from '@/components/home/HeroSection';
import HomeNavbar from '@/components/home/HomeNavbar';
import RewardsSection from '@/components/home/RewardsSection';
import SponsorsSection from '@/components/home/SponsorsSection';
import Footer from '@/components/shared/Footer';

export default function HomePage() {
  return (
    <>
      <HomeNavbar />
      <HeroSection />
      <AboutSection />
      <SponsorsSection />
      <EventsSection />
      <BenefitsSection />
      <RewardsSection />
      <CtaSection />
      <Footer homeMode />
    </>
  );
}
