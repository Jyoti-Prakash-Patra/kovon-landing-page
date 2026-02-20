import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/components/theme-registry/ThemeRegistry";

export const metadata: Metadata = {
  title: { default: "Kovon | Global Talent Marketplace", template: "%s | Kovon" },
  description: "Kovon connects blue and grey collar professionals with verified international employers through a seamless digital hiring platform.",
  keywords: ["global jobs", "international hiring", "workforce mobility", "talent marketplace"],
  openGraph: { title: "Kovon | Global Talent Marketplace", description: "Connecting skilled professionals with verified global opportunities.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="transition-colors duration-500">
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}