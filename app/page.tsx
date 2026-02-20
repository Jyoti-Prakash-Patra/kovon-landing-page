"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import AboutUs from "@/components/about/AboutUs";
import FeaturesSection from "@/components/features/FeaturesSection";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  // prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Header />
      <main className="pt-15">
        <HeroSection />
        <AboutUs />
        <FeaturesSection />
        <HowItWorks />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}