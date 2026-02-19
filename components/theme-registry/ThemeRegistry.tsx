"use client";

"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeRegistry");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export default function ThemeRegistry({ children }: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  // Detect screen size and system theme
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // >= md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      // On mobile/tablet, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
      setDarkMode(prefersDark);
    } else {
      // On desktop, use stored theme if exists
      try {
        const storedTheme = window.localStorage.getItem("theme");
        if (storedTheme === "dark") setDarkMode(true);
        else if (storedTheme === "light") setDarkMode(false);
      } catch {}
    }
  }, [isDesktop]);

  const toggleTheme = () => {
    if (!isDesktop) return; // Only allow toggle on desktop
    setDarkMode((prev) => {
      const newMode = !prev;
      try {
        window.localStorage.setItem("theme", newMode ? "dark" : "light");
      } catch {}
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}






/*2nd one just above before */
// import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
// import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

// interface ThemeContextProps {
//   darkMode: boolean;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// export const useThemeContext = (): ThemeContextProps => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useThemeContext must be used within ThemeRegistry");
//   }
//   return context;
// };

// interface Props {
//   children: ReactNode;
// }

// export default function ThemeRegistry({ children }: Props) {
//   const [darkMode, setDarkMode] = useState<boolean>(false);

//   useEffect(() => {
//     try {
//       const storedTheme = window.localStorage.getItem("theme");
//       if (storedTheme === "dark") setDarkMode(true);
//     } catch {}
//   }, []);

//   const toggleTheme = () => {
//     setDarkMode((prev) => {
//       const newMode = !prev;
//       try {
//         window.localStorage.setItem("theme", newMode ? "dark" : "light");
//       } catch {}
//       return newMode;
//     });
//   };

//   const theme = useMemo(() => createTheme({ palette: { mode: darkMode ? "dark" : "light" } }), [darkMode]);

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </ThemeContext.Provider>
//   );
// }






/*1st one*/
/*"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "@/theme";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeRegistry");
  return context;
}

interface Props {
  children: ReactNode;
}

export default function ThemeRegistry({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run in browser
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") setDarkMode(true);
      else if (stored === "light") setDarkMode(false);
      else setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches); // system theme
    } catch {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("theme", darkMode ? "dark" : "light");
      } catch {}
    }
  }, [darkMode, mounted]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme: () => setDarkMode(!darkMode) }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}*/