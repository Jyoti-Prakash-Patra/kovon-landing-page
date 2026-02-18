import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
