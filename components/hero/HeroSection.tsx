"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/button/PrimaryButton";
import { HERO_CONTENT } from "@/constants/content";
import { Button } from "@mui/material";
import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

import { useEffect, useState } from "react";

export default function HeroSection() {


  /* ================= COUNTER STATE ================= */
  const [counts, setCounts] = useState({
    countries: 0,
    jobs: 0,
    candidates: 0,
    employers: 0,
  });

  useEffect(() => {
    const targets = {
      countries: 50,
      jobs: 17000,
      candidates: 10000,
      employers: 400,
    };

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      setCounts({
        countries: Math.floor(progress * targets.countries),
        jobs: Math.floor(progress * targets.jobs),
        candidates: Math.floor(progress * targets.candidates),
        employers: Math.floor(progress * targets.employers),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);


  const { darkMode } = useThemeContext();

  return (
    <section
      className={`relative 
    pt-20 pb-20 px-4
    sm:pt-24 sm:pb-24 sm:px-6
    md:pt-30 md:pb-32 md:px-0
    overflow-hidden transition-all duration-700 ${darkMode
          ? "bg-[#0b1120] text-white"
          : "bg-white text-gray-900"
        }`}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {!darkMode && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100" />
        )}
        {darkMode && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black" />
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
            >
              {HERO_CONTENT.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-row flex-wrap gap-4 justify-center md:justify-start"
            >
              <PrimaryButton>
                {HERO_CONTENT.primaryCTA}
              </PrimaryButton>

              <Button
                variant="outlined"
                className={`!rounded-full transition-all duration-300 ${darkMode
                  ? "!border-white !text-white hover:!bg-gray-800"
                  : "!border-gray-900 !text-gray-900 hover:!bg-gray-100"
                  }`}
              >
                {HERO_CONTENT.secondaryCTA}
              </Button>
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          {/* ===== Desktop Ring ===== */}
          <div className="relative hidden md:flex justify-center items-center">
            <div
              className={`relative 
      w-[380px] h-[380px] 
      rounded-full transition-all duration-500
      ${darkMode
                  ? "border border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.2)]"
                  : "border border-gray-300 shadow-xl"
                }`}
            >
              {/* Inner ring */}
              <div
                className={`absolute inset-6 rounded-full border ${darkMode ? "border-white/10" : "border-gray-200"
                  }`}
              />

              {/* Images */}
              <img
                src="https://images.unsplash.com/photo-1732660780054-0cf9fadb9d30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute w-35 h-35 rounded-full object-cover shadow-xl"
                style={{
                  top: "-5px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <img
                src="https://plus.unsplash.com/premium_photo-1661695302326-0fae86abf740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHdvbWVuJTIwd29ya2luZyUyMGluJTIwd2FyZWhvdXNlfGVufDB8fDB8fHww"
                className="absolute w-28 h-28 rounded-full object-cover shadow-lg"
                style={{
                  top: "42%",
                  left: "102%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <img
                src="https://plus.unsplash.com/premium_photo-1682096389833-fa01547b2c1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YSUyMG1lbiUyMGxlYXJuaW5nJTIwbGFidG9wfGVufDB8fDB8fHww"
                className="absolute w-32 h-32 rounded-full object-cover shadow-2xl"
                style={{
                  top: "97%",
                  left: "79%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <img
                src="https://images.unsplash.com/photo-1742535036852-6a13b900bd48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute w-24 h-24 rounded-full object-cover shadow-lg"
                style={{
                  top: "90%",
                  left: "20%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute w-27 h-27 rounded-full object-cover shadow-xl"
                style={{
                  top: "41%",
                  left: "-2px",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </div>


          {/* ===== Mobile & Tablet Horizontal Circular Images ===== */}
          <div className="flex md:hidden justify-center items-center mt-1">
            <div className="flex items-center -space-x-6">

              <img
                src="https://images.unsplash.com/photo-1732660780054-0cf9fadb9d30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-xl mr-0.5"
                alt=""
              />

              <img
                src="https://plus.unsplash.com/premium_photo-1682096389833-fa01547b2c1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YSUyMG1lbiUyMGxlYXJuaW5nJTIwbGFidG9wfGVufDB8fDB8fHww"
                className="w-30 h-30 sm:w-32 sm:h-32 rounded-full object-cover shadow-2xl z-10"
                alt=""
              />

              <img
                src="https://plus.unsplash.com/premium_photo-1661695302326-0fae86abf740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHdvbWVuJTIwd29ya2luZyUyMGluJTIwd2FyZWhvdXNlfGVufDB8fDB8fHww"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-xl ml-6.5"
                alt=""
              />

            </div>
          </div>


        </div>
      </div>

      {/* ================= COUNTER SECTION ================= */}
      <div className="mt-23 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            {counts.countries}+
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-80">Countries</p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            {counts.jobs.toLocaleString()}+
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-80">Jobs</p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            {counts.candidates.toLocaleString()}+
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-80">Candidates</p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            {counts.employers}+
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-80">Employers</p>
        </div>
      </div>

    </section>
  );
}











// "use client";

// import { motion } from "framer-motion";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import { HERO_CONTENT } from "@/constants/content";
// import { Button } from "@mui/material";
// import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

// export default function HeroSection() {
//   const { darkMode } = useThemeContext();

//   return (
//     <section
//       className={`relative pt-30 pb-32 overflow-hidden transition-all duration-700 ${
//         darkMode
//           ? "bg-[#0b1120] text-white"
//           : "bg-white text-gray-900"
//       }`}
//     >
//       {/* ================= BACKGROUND ================= */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         {!darkMode && (
//           <>
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100" />
//           </>
//         )}

//         {darkMode && (
//           <>
//             <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black" />
//           </>
//         )}
//       </div>
//       {/* ============================================== */}

//       {/* ================= CONTENT ================= */}
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-16">

//           {/* ================= LEFT SIDE ================= */}
//           <div className="flex-1 text-center md:text-left">
//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl md:text-6xl font-extrabold leading-tight"
//             >
//               {HERO_CONTENT.title}
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="mt-6 text-lg md:text-xl max-w-xl"
//             >
//               {HERO_CONTENT.subtitle}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//             >
//               <PrimaryButton>
//                 {HERO_CONTENT.primaryCTA}
//               </PrimaryButton>

//               <Button
//                 variant="outlined"
//                 className={`!rounded-lg transition-all duration-300 ${
//                   darkMode
//                     ? "!border-white !text-white hover:!bg-gray-800"
//                     : "!border-gray-900 !text-gray-900 hover:!bg-gray-100"
//                 }`}
//               >
//                 {HERO_CONTENT.secondaryCTA}
//               </Button>
//             </motion.div>
//           </div>

//           {/* ================= RIGHT SIDE ================= */}
//           <div className="relative flex justify-center items-center">

//             <div
//               className={`relative
//                 w-[260px] h-[260px]
//                 sm:w-[320px] sm:h-[320px]
//                 md:w-[380px] md:h-[380px]
//                 rounded-full transition-all duration-500
//                 ${
//                   darkMode
//                     ? "border border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.2)]"
//                     : "border border-gray-300 shadow-xl"
//                 }`}
//             >

//               {/* Inner Ring */}
//               <div
//                 className={`absolute inset-6 rounded-full border ${
//                   darkMode ? "border-white/10" : "border-gray-200"
//                 }`}
//               />

//               {/* TOP */}
//               <img
//                 src="/people/picture-1.avif"
//                 className="absolute -top-6 left-1/2 -translate-x-1/2
//                 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
//                 rounded-full object-cover shadow-lg"
//               />

//               {/* RIGHT */}
//               <img
//                 src="/people/picture-1.avif"
//                 className="absolute top-1/2 -right-6 -translate-y-1/2
//                 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
//                 rounded-full object-cover shadow-lg"
//               />

//               {/* BOTTOM RIGHT (Bigger) */}
//               <img
//                 src="/people/picture-1.avif"
//                 className="absolute -bottom-6 right-6
//                 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
//                 rounded-full object-cover shadow-xl"
//               />

//               {/* BOTTOM LEFT */}
//               <img
//                 src="/people/picture-1.avif"
//                 className="absolute -bottom-6 left-6
//                 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
//                 rounded-full object-cover shadow-lg"
//               />

//               {/* LEFT */}
//               <img
//                 src="/people/picture-1.avif"
//                 className="absolute top-1/2 -left-6 -translate-y-1/2
//                 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
//                 rounded-full object-cover shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










// "use client";

// import { motion } from "framer-motion";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import { HERO_CONTENT } from "@/constants/content";
// import { Button } from "@mui/material";
// import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

// export default function HeroSection() {
//   const { darkMode } = useThemeContext();

//   return (
//     <section
//       className={`relative pt-40 pb-32 overflow-hidden transition-all duration-700 ${
//         darkMode
//           ? "bg-[#0b1120] text-white"
//           : "bg-white text-gray-900"
//       }`}
//     >
//       {/* ================= BACKGROUND ================= */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">

//         {/* ================= LIGHT MODE ================= */}
//         {!darkMode && (
//           <>
//             {/* Gradient Mesh Base */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100" />

//             {/* Floating Blobs */}
//             <motion.div
//               animate={{ y: [0, -40, 0] }}
//               transition={{ duration: 10, repeat: Infinity }}
//               className="absolute top-10 left-10 w-72 h-72 bg-blue-400 opacity-30 rounded-full blur-3xl"
//             />

//             <motion.div
//               animate={{ y: [0, 40, 0] }}
//               transition={{ duration: 12, repeat: Infinity }}
//               className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl"
//             />

//             {/* Center Radial Spotlight */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]" />
//           </>
//         )}

//         {/* ================= DARK MODE ================= */}
//         {darkMode && (
//           <>
//             {/* Dark Gradient Base */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black" />

//             {/* Neon Floating Lights */}
//             <motion.div
//               animate={{ y: [0, -50, 0] }}
//               transition={{ duration: 11, repeat: Infinity }}
//               className="absolute top-20 left-16 w-80 h-80 bg-cyan-500 opacity-25 rounded-full blur-3xl"
//             />

//             <motion.div
//               animate={{ y: [0, 50, 0] }}
//               transition={{ duration: 13, repeat: Infinity }}
//               className="absolute bottom-16 right-16 w-80 h-80 bg-indigo-600 opacity-25 rounded-full blur-3xl"
//             />

//             {/* Subtle Center Glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_70%)]" />
//           </>
//         )}
//       </div>
//       {/* ============================================== */}

//       <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-extrabold leading-tight"
//         >
//           {HERO_CONTENT.title}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
//         >
//           {HERO_CONTENT.subtitle}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
//         >
//           <PrimaryButton>
//             {HERO_CONTENT.primaryCTA}
//           </PrimaryButton>

//           <Button
//             variant="outlined"
//             className={`!rounded-lg transition-all duration-300 ${
//               darkMode
//                 ? "!border-white !text-white hover:!bg-gray-800"
//                 : "!border-gray-900 !text-gray-900 hover:!bg-gray-100"
//             }`}
//           >
//             {HERO_CONTENT.secondaryCTA}
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }










// "use client";

// import { motion } from "framer-motion";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import { HERO_CONTENT } from "@/constants/content";
// import { Button } from "@mui/material";
// import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

// export default function HeroSection() {
//   const { darkMode } = useThemeContext();

//   return (
//     <section className={`relative pt-40 pb-32 overflow-hidden transition-colors duration-500 ${darkMode ? "bg-gray-950 text-white" : "bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-900"}`}>
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold transition-colors duration-500">
//           {HERO_CONTENT.title}
//         </motion.h1>
//         <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-6 text-lg md:text-xl transition-colors duration-500">
//           {HERO_CONTENT.subtitle}
//         </motion.p>
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
//           <PrimaryButton>{HERO_CONTENT.primaryCTA}</PrimaryButton>
//           <Button variant="outlined" className={`!rounded-lg transition-all duration-300 ${darkMode ? "!border-white !text-white hover:!bg-gray-800" : "!border-gray-900 !text-gray-900 hover:!bg-gray-100"}`}>
//             {HERO_CONTENT.secondaryCTA}
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import { HERO_CONTENT } from "@/constants/content";
// import { Button } from "@mui/material";

// export default function HeroSection() {
//   return (
//     <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden
//       bg-gradient-to-br from-blue-50 via-white to-gray-100
//       dark:from-gray-950 dark:via-gray-900 dark:to-gray-800
//       transition-colors duration-500"
//     >
//       <div className="max-w-7xl mx-auto px-6 text-center">

//         {/* Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold
//             text-gray-900 dark:text-white leading-tight"
//         >
//           {HERO_CONTENT.title}
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
//         >
//           {HERO_CONTENT.subtitle}
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
//         >
//           <PrimaryButton>{HERO_CONTENT.primaryCTA}</PrimaryButton>

//           <Button
//             variant="outlined"
//             className="!border-gray-900 dark:!border-white
//             !text-gray-900 dark:!text-white hover:!bg-gray-100 dark:hover:!bg-gray-800
//             !rounded-xl !px-6 !py-3 transition-all duration-300"
//           >
//             {HERO_CONTENT.secondaryCTA}
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
