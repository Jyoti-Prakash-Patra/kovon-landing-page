"use client";

import { FOOTER_LINKS } from "@/constants/content";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Kovon</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming global workforce mobility by connecting
              skilled professionals with international opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <LinkedInIcon className="cursor-pointer hover:text-gray-300" />
              <TwitterIcon className="cursor-pointer hover:text-gray-300" />
              <FacebookIcon className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Kovon. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
