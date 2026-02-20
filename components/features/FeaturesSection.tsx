"use client";

import FeatureCard from "./FeatureCard";
import { FEATURES } from "@/constants/content";
import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

export default function FeaturesSection() {
  const { darkMode } = useThemeContext();

  return (
    <section
      id="services"
      className={`py-20 transition-colors duration-500 ${
        darkMode ? "bg-[#0b1120] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold transition-colors duration-500">
            Our Services
          </h2>
          <p
            className={`mt-4 transition-colors duration-500 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Empowering workforce mobility through verified opportunities, streamlined hiring, and global access.
          </p>
        </div>

        {/* Responsive Grid: 1 mobile / 2 tablet / 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}