"use client";

import { ReactNode, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

interface Props {
  children: ReactNode;
}

export default function ThemeRegistry({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
