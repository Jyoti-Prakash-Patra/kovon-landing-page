"use client";

import FeatureCard from "./FeatureCard";
import { FEATURES } from "@/constants/content";

export default function FeaturesSection() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Empowering workforce mobility through verified opportunities,
            streamlined hiring, and global access.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
