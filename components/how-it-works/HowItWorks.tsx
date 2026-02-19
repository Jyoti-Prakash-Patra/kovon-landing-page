"use client";

import { PROCESS_STEPS } from "@/constants/content";
import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

export default function HowItWorks() {
  const { darkMode } = useThemeContext();

  return (
    <section
      id="how_it_works"
      className={`py-20 transition-colors duration-500 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            How It Works
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A structured five-step journey connecting skilled professionals
            with verified global employers.
          </p>
        </div>

        {/* ================= DESKTOP (HORIZONTAL) ================= */}
        <div className="hidden lg:block relative">

          {/* Horizontal Line */}
          <div
            className={`absolute top-7 left-0 w-full h-[3px] ${
              darkMode ? "bg-gray-500" : "bg-blue-600"
            }`}
          />

          <div className="relative flex justify-between items-start">

            {PROCESS_STEPS.slice(0, 5).map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center w-1/5 relative"
              >
                {/* Circle */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full border-2 text-base font-bold z-10 ${
                    darkMode
                      ? "bg-gray-950 border-blue-600 text-blue-400"
                      : "bg-white border-blue-700 text-blue-600"
                  }`}
                >
                  {item.step}
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-sm max-w-xs ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE & TABLET (VERTICAL) ================= */}
        <div className="lg:hidden relative">

          {/* Vertical Line */}
          <div
            className={`absolute left-6 top-0 h-full w-[3px] ${
              darkMode ? "bg-gray-600" : "bg-blue-600"
            }`}
          />

          <div className="space-y-12 relative">

            {PROCESS_STEPS.slice(0, 5).map((item) => (
              <div key={item.step} className="relative pl-16">

                {/* Circle */}
                <div
                  className={`absolute left-0 top-1 w-12 h-12 flex items-center justify-center rounded-full border-2 font-bold ${
                    darkMode
                      ? "bg-gray-950 border-blue-500 text-blue-400"
                      : "bg-white border-blue-600 text-blue-600"
                  }`}
                >
                  {item.step}
                </div>

                {/* Gradient Border Box */}
                <div
                  className={`p-[1px] rounded-xl ${
                    darkMode
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600"
                  }`}
                >
                  <div
                    className={`rounded-xl p-6 ${
                      darkMode ? "bg-gray-900" : "bg-white"
                    }`}
                  >
                    <h3 className="text-base sm:text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-2 text-sm sm:text-base ${
                        darkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}





















// "use client";

// import { PROCESS_STEPS } from "@/constants/content";
// import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

// export default function HowItWorks() {
//   const { darkMode } = useThemeContext();

//   return (
//     <section id="about" className={`py-18 transition-colors duration-500 ${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold transition-colors duration-500">How It Works</h2>
//           <p className={`mt-4 transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//             A streamlined process designed to connect talent and employers globally.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {PROCESS_STEPS.map((item) => (
//             <div key={item.step} className={`p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"}`}>
//               <div className={`text-5xl font-extrabold transition-colors duration-500 ${darkMode ? "text-gray-600" : "text-gray-300"}`}>{item.step}</div>
//               <h3 className="mt-2 font-semibold transition-colors duration-500">{item.title}</h3>
//               <p className={`mt-1 transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












// import { PROCESS_STEPS } from "@/constants/content";

// export default function HowItWorks() {
//   return (
//     <section id="about" className="py-24 md:py-28 bg-white dark:bg-gray-950 transition-colors duration-500">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//             How It Works
//           </h2>
//           <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
//             A streamlined process designed to connect talent and employers globally.
//           </p>
//         </div>

//         {/* Steps Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {PROCESS_STEPS.map((step) => (
//             <div
//               key={step.step}
//               className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl text-center shadow-md dark:shadow-gray-700
//                 transition-all duration-300 hover:shadow-lg"
//             >
//               <div className="text-4xl md:text-5xl font-extrabold text-gray-300 dark:text-gray-600 mb-4">
//                 {step.step}
//               </div>
//               <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                 {step.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
