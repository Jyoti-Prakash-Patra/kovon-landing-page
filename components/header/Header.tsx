"use client";

import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PrimaryButton from "@/components/button/PrimaryButton";
import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";
import { NAV_ITEMS } from "@/constants/content";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isClient, setIsClient] = useState(false); // <-- client render flag
  const { darkMode, toggleTheme } = useThemeContext();

  useEffect(() => {
    setIsClient(true); // mark that we are on client
  }, []);

  // Detect Desktop
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Do not render until we are on client
  if (!isClient) return null;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-900/80 backdrop-blur-md shadow-md"
            : "bg-white/70 backdrop-blur-md shadow-md"
          : darkMode
          ? "bg-gray-900 shadow-md"
          : "bg-gray-100 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-0 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 ml-4 md:ml-0">
          <img
            src={darkMode ? "/logos/logo-light-mode.webp" : "/logos/logo-dark-mode.webp"}
            alt="Kovon Logo"
            className="h-10 sm:h-12 md:h-14 lg:h-16"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-blue-600 font-bold hover:text-blue-500 hover:cursor-pointer"
                  : darkMode
                  ? "text-blue-500 font-bold hover:text-blue-400"
                  : "text-blue-500 font-bold hover:text-blue-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 mr-8 rounded-4xl transition-colors duration-300 hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-600"
          >
            {darkMode ? <LightModeIcon className="text-yellow-400" /> : <DarkModeIcon className="text-gray-900" />}
          </button>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mr-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer transition-transform duration-300"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-14 shadow-lg overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
      >
        <div className="flex flex-col items-center justify-center gap-6 py-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`w-full text-center text-lg font-semibold transition-colors duration-300 ${
                darkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Get Started Button */}
          <PrimaryButton onClick={() => setMobileOpen(false)} className="mx-auto !px-6 !py-2 !rounded-full">
            Get Started
          </PrimaryButton>

          {/* Theme Toggle for Mobile */}
          <button
            onClick={() => {
              toggleTheme();
              setMobileOpen(false); // close menu after toggling
            }}
            className={`mt-4 flex items-center justify-center gap-2 px-6 py-2 rounded-full font-semibold transition-colors ${
              darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            {darkMode ? (
              <>
                <span>Change to </span>
                <LightModeIcon className="text-yellow-400" />
              </>
            ) : (
              <>
                <span>Change to </span>
                <DarkModeIcon className="text-gray-900" />
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}