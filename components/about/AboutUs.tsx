"use client";

import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutUs() {
  const { darkMode } = useThemeContext() || { darkMode: false };

  // Icon color adapts to theme: darkMode → sky, lightMode → blue
  const iconColor = darkMode ? "#0EA5E9" : "#0077FF";

  const FEATURES: FeatureItem[] = [
    {
      icon: <DescriptionIcon sx={{ fontSize: 50, color: iconColor }} />,
      title: "Complete Employer Network",
      description: "Jobs across 50+ countries.",
    },
    {
      icon: <VisibilityIcon sx={{ fontSize: 50, color: iconColor }} />,
      title: "Fully Transparent Process",
      description: "Clear steps, fair fees, zero misinformation.",
    },
    {
      icon: <HeadsetMicIcon sx={{ fontSize: 50, color: iconColor }} />,
      title: "One-Stop Solution",
      description:
        "Verification, training, documents, and placement in one place.",
    },
  ];

  return (
    <section
      id="about"
      className={`transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } py-20`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Why Kovon
          </h2>
          <p
            className={`mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Kovon is redefining how the world discovers and hires talent. Our mission is to make overseas job opportunities accessible and transparent for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center space-y-4 p-6 rounded-xl ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div aria-hidden="true">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold">{feature.title}</h3>
              <p
                className={`text-sm sm:text-base ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
