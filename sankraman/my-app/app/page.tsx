"use client";

import { useState } from "react";
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
import LoadingScreen from "@/components/LoadingScreen";
import AmbientParticles from "@/components/ui/AmbientParticles";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Ambient floating particles across the site */}
      {!loading && <AmbientParticles count={20} />}

      {/* Hero Section with internal scroll tracking and parallax */}
      <HeroSection />

      {/* Content Sections - Normal document flow below hero */}
      <div className="relative z-20 overflow-x-hidden w-full">
        {/* About Section */}
        <AboutSection />

        <SectionDivider variant="line" />

        {/* Journey Section */}
        <JourneySection />

        <SectionDivider variant="gradient" />

        {/* Councils Section */}
        <CouncilsSection />

        <SectionDivider variant="dust" />

        {/* Info & Selection Section */}
        <InfoSection />

        <SectionDivider variant="line" />

        {/* Prizes Section */}
        <PrizesSection />

        <SectionDivider variant="gradient" />

        {/* Registration Section */}
        <RegistrationSection />

        <SectionDivider variant="line" />

        {/* FAQs Section */}
        <FAQSection />

        <SectionDivider variant="dust" />

        {/* Contact/CTA Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
