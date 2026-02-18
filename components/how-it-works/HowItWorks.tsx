"use client";

import { PROCESS_STEPS } from "@/constants/content";

export default function HowItWorks() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A streamlined process designed to connect talent and employers globally.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="text-5xl font-extrabold text-gray-300 mb-6">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
