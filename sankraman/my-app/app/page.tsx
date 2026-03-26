"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import JourneySection from "@/components/sections/JourneySection";
import CouncilsSection from "@/components/sections/CouncilsSection";
import PrizesSection from "@/components/sections/PrizesSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import InfoSection from "@/components/sections/InfoSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      
      {/* Hero Section with internal scroll tracking and parallax */}
      <HeroSection />

      {/* Content Sections - Normal document flow below hero */}
      <div className="relative z-20 overflow-x-hidden w-full">
        
        {/* About Section */}
        <AboutSection />

        {/* Journey Section */}
        <JourneySection />

        {/* Councils Section */}
        <CouncilsSection />

        {/* Info & Selection Section */}
        <InfoSection />

        {/* Prizes Section */}
        <PrizesSection />

        {/* Registration Section */}
        <RegistrationSection />

        {/* FAQs Section */}
        <FAQSection />

        {/* Contact/CTA Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
        
      </div>

    </div>
  );
}
