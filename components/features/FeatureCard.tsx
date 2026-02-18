"use client";

import { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      
      <div className="mb-6">
        <Icon fontSize="large" />
      </div>

      <h3 className="text-xl font-semibold mb-4">
        {feature.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
