"use client";

import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NAV_ITEMS } from "@/constants/content";
import PrimaryButton from "@/components/button/PrimaryButton";
import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useThemeContext();

  // Detect Desktop
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
          {/* Left: Logo */}
          <div className="flex-shrink-0 ml-4 md:ml-0">
            {darkMode ? (
              <img
                src="/logos/logo-light-mode.webp"
                alt="Kovon Logo Dark"
                className="h-10 sm:h-12 md:h-14 lg:h-16"
              />
            ) : (
              <img
                src="/logos/logo-dark-mode.webp"
                alt="Kovon Logo Light"
                className="h-10 sm:h-12 md:h-14 lg:h-16"
              />
            )}
          </div>

          {/* Center: Desktop/Tablet Nav */}
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

          {/* Right: Theme toggle + Get Started (desktop/tablet) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 mr-8 rounded-4xl transition-colors duration-300 hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-600"
            >
              {darkMode ? (
                <LightModeIcon className="text-yellow-400" />
              ) : (
                <DarkModeIcon className="text-gray-900" />
              )}
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
          className={`md:hidden fixed inset-x-0 top-14 bg-white dark:bg-gray-900 shadow-lg overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
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
            <PrimaryButton
              onClick={() => setMobileOpen(false)}
              className="mx-auto !px-6 !py-2 !rounded-full"
            >
              Get Started
            </PrimaryButton>
          </div>
        </div>
      </header>
    </>
  );
}









// "use client";

// import { useState, useEffect } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { NAV_ITEMS } from "@/constants/content";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import ContactSection from "../contact/ContactSection";
// import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { darkMode, toggleTheme } = useThemeContext();
//   const [contactOpen, setContactOpen] = useState(false);

//   // Detect Desktop
//   const [isDesktop, setIsDesktop] = useState(true);
//   useEffect(() => {
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Handle scroll for header
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header
//         className={`fixed w-full z-50 transition-all duration-300 ${scrolled
//             ? darkMode
//               ? "bg-gray-900/80 backdrop-blur-md shadow-md" // Dark mode after scroll
//               : "bg-white/70 backdrop-blur-md shadow-md"    // Light mode after scroll
//             : darkMode
//               ? "bg-gray-900 shadow-md"   // Dark mode before scroll
//               : "bg-gray-100 shadow-md"     // Light mode before scroll
//           }`}
//       >


//         <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
//           {/* Left: Logo */}
//           <div className="flex-shrink-0 mr-4">
//             {darkMode ? (
//               <img
//                 src="/logos/logo-light-mode.webp"
//                 alt="Kovon Logo Dark"
//                 className="h-10 sm:h-12 md:h-14 lg:h-16"
//               />
//             ) : (
//               <img
//                 src="/logos/logo-dark-mode.webp"
//                 alt="Kovon Logo Light"
//                 className="h-10 sm:h-12 md:h-14 lg:h-16"
//               />
//             )}
//           </div>

//           {/* Center: Desktop/Tablet Nav */}
//           <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
//             {NAV_ITEMS.map((item) =>
//               item.label === "Contact" ? (
//                 <button
//                   key={item.label}
//                   onClick={() => setContactOpen(true)}
//                   className={`transition-colors duration-300 ${scrolled
//                       ? "text-blue-600 font-bold hover:text-blue-500 hover: cursor-pointer"
//                       : darkMode
//                         ? "text-blue-500 font-bold hover:text-blue-400 hover: cursor-pointer"
//                         : "text-blue-500 font-bold hover:text-blue-400 hover: cursor-pointer"
//                     }`}
//                 >
//                   {item.label}
//                 </button>
//               ) : (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className={`transition-colors duration-300 ${scrolled
//                       ? "text-blue-600 font-bold hover:text-blue-500 hover: cursor-pointer"
//                       : darkMode
//                         ? "text-blue-500 font-bold hover:text-blue-400"
//                         : "text-blue-500 font-bold hover:text-blue-400"
//                     }`}
//                 >
//                   {item.label}
//                 </a>
//               )
//             )}
//           </nav>

//           {/* Right: Theme toggle + Get Started (desktop/tablet) */}
//           <div className="hidden md:flex items-center gap-4">
//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 mr-8 rounded-4xl transition-colors duration-300 hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-600"
//             >
//               {darkMode ? (
//                 <LightModeIcon className="text-yellow-400" />
//               ) : (
//                 <DarkModeIcon className="text-gray-900" />
//               )}
//             </button>

//             {/* Get Started Button */}
//             <PrimaryButton>Get Started</PrimaryButton>
//           </div>

//           {/* Mobile Menu Button ----------------------*/}
//           <div className="md:hidden">
//             <button onClick={() => setMobileOpen(!mobileOpen)}>
//               {mobileOpen ? <CloseIcon /> : <MenuIcon />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 space-y-4 shadow-lg transition-colors duration-500">
//             {NAV_ITEMS.map((item) =>
//               item.label === "Contact" ? (
//                 <button
//                   key={item.label}
//                   onClick={() => {
//                     setContactOpen(true);
//                     setMobileOpen(false);
//                   }}
//                   className={`w-full text-left transition-colors duration-300 ${scrolled
//                       ? darkMode
//                         ? "text-white hover:text-gray-300"
//                         : "text-black hover:text-gray-700"
//                       : darkMode
//                         ? "text-white hover:text-gray-300"
//                         : "text-black hover:text-gray-700"
//                     }`}
//                 >
//                   {item.label}
//                 </button>
//               ) : (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   onClick={() => setMobileOpen(false)}
//                   className={`block transition-colors duration-300 ${scrolled
//                       ? darkMode
//                         ? "text-white hover:text-gray-300"
//                         : "text-black hover:text-gray-700"
//                       : darkMode
//                         ? "text-white hover:text-gray-300"
//                         : "text-black hover:text-gray-700"
//                     }`}
//                 >
//                   {item.label}
//                 </a>
//               )
//             )}
//             {/* Theme Toggle + Get Started for mobile */}
//             <div className="flex items-center gap-4 pt-2">
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-4xl transition-colors duration-300 hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-600"
//               >
//                 {darkMode ? (
//                   <LightModeIcon className="text-yellow-400" />
//                 ) : (
//                   <DarkModeIcon className="text-gray-900" />
//                 )}
//               </button>
//               <PrimaryButton
//                 fullWidth
//                 onClick={() => setMobileOpen(false)}
//               >
//                 Get Started
//               </PrimaryButton>
//             </div>
//           </div>
//         )}

//         {/* Contact Popup */}
//         <ContactSection
//           open={contactOpen}
//           onClose={() => setContactOpen(false)}
//         />
//       </header>
//     </>
//   );
// }












// import { useState, useEffect } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { NAV_ITEMS } from "@/constants/content";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import ContactSection from "../contact/ContactSection";
// import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { darkMode, toggleTheme } = useThemeContext();
//   const [contactOpen, setContactOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Add this at the top inside Header component
//   const [isDesktop, setIsDesktop] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 768); // md breakpoint
//     };
//     handleResize(); // initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);


//   return (
//     <>
//       <header
//         className={`fixed w-full z-50 transition-all duration-300 ${scrolled
//           ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//           }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <div
//             className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${scrolled ? "text-white" : darkMode ? "text-white" : "text-black"
//               }`}
//           >
//             Kovon
//           </div>

//           {/* Desktop Nav Links */}
//           <nav className="hidden md:flex items-center gap-8">
//             {NAV_ITEMS.map((item) =>
//               item.label === "Contact" ? (
//                 <button
//                   key={item.label}
//                   onClick={() => setContactOpen(true)}
//                   className={`transition-colors duration-300 ${scrolled ? "text-white hover:text-gray-200" : darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
//                     }`}
//                 >
//                   {item.label}
//                 </button>
//               ) : (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className={`transition-colors duration-300 ${scrolled ? "text-white hover:text-gray-200" : darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
//                     }`}
//                 >
//                   {item.label}
//                 </a>
//               )
//             )}

//             <PrimaryButton>Get Started</PrimaryButton>

//             {isDesktop && (
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
//               >
//                 {darkMode ? (
//                   <LightModeIcon className="text-yellow-400" />
//                 ) : (
//                   <DarkModeIcon className="text-gray-900" />
//                 )}
//               </button>
//             )}
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setMobileOpen(!mobileOpen)}>
//               {mobileOpen ? <CloseIcon /> : <MenuIcon />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu - keep original behavior */}
//         {mobileOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 space-y-4 shadow-lg transition-colors duration-500">
//             {NAV_ITEMS.map((item) => (
//               <a key={item.label} href={item.href} className="block">
//                 {item.label}
//               </a>
//             ))}
//             <PrimaryButton fullWidth>Get Started</PrimaryButton>
//           </div>
//         )}

//         <ContactSection open={contactOpen} onClose={() => setContactOpen(false)} />
//       </header>

//       {/* <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${darkMode ? "text-white" : "text-black"}`}>Kovon</div>

//           <nav className="hidden md:flex items-center gap-8">
//             {NAV_ITEMS.map((item) =>
//               item.label === "Contact" ? (
//                 <button key={item.label} onClick={() => setContactOpen(true)} className={`transition-colors duration-300 ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}`}>{item.label}</button>
//               ) : (
//                 <a key={item.label} href={item.href} className={`transition-colors duration-300 ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}`}>{item.label}</a>
//               )
//             )}
//             <PrimaryButton>Get Started</PrimaryButton>
//             <button onClick={toggleTheme} className="p-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-800">
//               {darkMode ? <LightModeIcon className="text-yellow-400" /> : <DarkModeIcon className="text-gray-900" />}
//             </button>
//           </nav>

//           <div className="md:hidden">
//             <button onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <CloseIcon /> : <MenuIcon />}</button>
//           </div>
//         </div>

//         {mobileOpen && (
//           <div className={`md:hidden px-6 pb-6 space-y-4 shadow-lg transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
//             {NAV_ITEMS.map((item) => (
//               <a key={item.label} href={item.href} className="block">{item.label}</a>
//             ))}
//             <PrimaryButton fullWidth>Get Started</PrimaryButton>
//           </div>
//         )}
//       </header> */}

//       <ContactSection open={contactOpen} onClose={() => setContactOpen(false)} />
//     </>
//   );
// }
