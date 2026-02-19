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









// "use client";

// import FeatureCard from "./FeatureCard";
// import { FEATURES } from "@/constants/content";
// import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

// export default function FeaturesSection() {
//   const { darkMode } = useThemeContext();

//   return (
//     <section id="services" className={`py-20 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold transition-colors duration-500">Our Services</h2>
//           <p className={`mt-4 transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//             Empowering workforce mobility through verified opportunities, streamlined hiring, and global access.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {FEATURES.map((feature) => (<FeatureCard key={feature.title} feature={feature} />))}
//         </div>
//       </div>
//     </section>
//   );
// }













// import FeatureCard from "./FeatureCard";
// import { FEATURES } from "@/constants/content";

// export default function FeaturesSection() {
//   return (
//     <section id="services" className="py-24 md:py-28 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//             Our Services
//           </h2>
//           <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
//             Empowering workforce mobility through verified opportunities,
//             streamlined hiring, and global access.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {FEATURES.map((feature) => (
//             <FeatureCard key={feature.title} feature={feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
