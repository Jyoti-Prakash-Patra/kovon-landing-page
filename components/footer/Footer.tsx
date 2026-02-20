"use client";

import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import Link from "next/link";

export default function Footer() {
  const { darkMode } = useThemeContext();

  return (
    <footer className={`pt-16 pb-8 transition-colors duration-500 ${darkMode ? "bg-black text-gray-300" : "bg-gray-200 text-gray-700"}`}>

      {/* Grid container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-15 text-center md:text-left">

        {/* ================= LEFT: Logo + Description ================= */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={darkMode ? "/logos/logo-light-mode.webp" : "/logos/logo-dark-mode.webp"}
            alt="Kovon Logo"
            className="w-40 mb-4"
          />
          <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Kovon is redefining how the world discovers and hires talent. Our mission is to make overseas job opportunities accessible and transparent for everyone.
          </p>
        </div>

        {/* ================= MIDDLE: Quick Links ================= */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className={`font-semibold mb-4 text-lg transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-900"}`}>Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" scroll={true} className={`transition-colors duration-300 hover:text-blue-600 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" scroll={true} className={`transition-colors duration-300 hover:text-blue-600 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" scroll={true} className={`transition-colors duration-300 hover:text-blue-600 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#how_it_works" scroll={true} className={`transition-colors duration-300 hover:text-blue-600 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                How it works
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll={true} className={`transition-colors duration-300 hover:text-blue-600 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>


        {/* ================= RIGHT: Address + Contact + Social ================= */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className={`font-semibold mb-4 text-lg transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-900"}`}>Contact</h4>

          {/* Address */}
          <p className={`text-sm sm:text-base mb-3 transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
            Kovon Global Private Limited,<br />
            MANA, UBER VERDANT PHASE 2,<br />
            Carmelram, Bangalore South,<br />
            Bangalore - 560035, Karnataka
          </p>

          {/* Contact link */}
          <p className={`mb-4 text-sm sm:text-base font-medium transition-colors duration-300 ${darkMode ? "text-gray-400" : "text-gray-900"}`}>
            Contact @{" "}
            <a
              href="tel:+919019917618"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              +91-9019917618
            </a>
          </p>


          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <LinkedInIcon className={`cursor-pointer transition-colors duration-300 ${darkMode ? "hover:text-blue-400" : "hover:text-blue-500"}`} />
            <TwitterIcon className={`cursor-pointer transition-colors duration-300 ${darkMode ? "hover:text-blue-400" : "hover:text-blue-500"}`} />
            <FacebookIcon className={`cursor-pointer transition-colors duration-300 ${darkMode ? "hover:text-blue-400" : "hover:text-blue-500"}`} />
            <InstagramIcon className={`cursor-pointer transition-colors duration-300 ${darkMode ? "hover:text-pink-400" : "hover:text-pink-500"}`} />
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className={`mt-12 text-center transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
        © {new Date().getFullYear()} Kovon Global. All rights reserved.
      </div>

    </footer>
  );
}