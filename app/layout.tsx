import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/components/theme-registry/ThemeRegistry";

export const metadata: Metadata = {
  title: {
    default: "Kovon - Global Talent Marketplace",
    template: "%s | Kovon",
  },
  description:
    "Kovon is a global talent marketplace connecting blue and grey collar workforce with international employers.",
  keywords: [
    "global hiring",
    "international jobs",
    "workforce mobility",
    "talent marketplace",
  ],
  openGraph: {
    title: "Kovon - Global Talent Marketplace",
    description:
      "Connecting skilled professionals with global opportunities.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}








/*import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kovon - Global Talent Marketplace",
  description: "Transforming global hiring.",
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}*/
