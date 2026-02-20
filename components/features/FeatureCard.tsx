"use client";

import { Feature } from "@/types";
import { motion } from "framer-motion";
import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

interface Props { feature: Feature; }

export default function FeatureCard({ feature }: Props) {
  const { darkMode } = useThemeContext();
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-2xl transition-all duration-300 border
        ${
          darkMode
            ? "bg-gray-800 text-white border-transparent hover:border-blue-400 shadow-gray-700 hover:shadow-blue-500/20"
            : "bg-gray-200 text-gray-900 border-transparent hover:border-blue-500 shadow-gray-200 hover:shadow-blue-300/30"
        }
        shadow-sm hover:shadow-xl`}
    >
      <div className={`mb-6 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
        <Icon fontSize="large" />
      </div>

      <h3 className="text-xl font-semibold transition-colors duration-500">
        {feature.title}
      </h3>

      <p
        className={`mt-3 transition-colors duration-500 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {feature.description}
      </p>
    </motion.div>
  );
}