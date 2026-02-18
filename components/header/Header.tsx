"use client";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NAV_ITEMS } from "@/constants/content";
import PrimaryButton from "@/components/button/PrimaryButton";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          Kovon
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <PrimaryButton>Get Started</PrimaryButton>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 shadow-md">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <PrimaryButton fullWidth>
            Get Started
          </PrimaryButton>
        </div>
      )}
    </header>
  );
}
