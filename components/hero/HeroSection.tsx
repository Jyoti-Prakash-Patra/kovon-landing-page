"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import { HERO_CONTENT } from "@/constants/content";
import { Button } from "@mui/material";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
          {HERO_CONTENT.title}
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {HERO_CONTENT.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <PrimaryButton>
            {HERO_CONTENT.primaryCTA}
          </PrimaryButton>

          <Button
            variant="outlined"
            className="!border-black !text-black hover:!bg-gray-100 !px-6 !py-2 !rounded-lg !normal-case"
          >
            {HERO_CONTENT.secondaryCTA}
          </Button>
        </div>
      </div>
    </section>
  );
}
