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