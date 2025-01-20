import React, { createContext, useContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext<
  | {
      theme: ReturnType<typeof createTheme>;
      toggleTheme: () => void;
    }
  | undefined
>(undefined);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Lighter blue that works well in dark mode
      light: "#e3f2fd",
      dark: "#42a5f5",
    },
    secondary: {
      main: "#f48fb1", // Soft pink that's visible in dark mode
      light: "#ffc1e3",
      dark: "#bf5f82",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Darker blue for light mode
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#e91e63", // Darker pink for light mode
      light: "#f48fb1",
      dark: "#c2185b",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
    },
  },
});

export const ThemeProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProviderWrapper");
  }
  return context;
};
