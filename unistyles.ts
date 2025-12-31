import { StyleSheet } from "react-native-unistyles";

export const appThemes = {
  colors: {
    primary: "#2563EB",
    dark: "#111418",
    background: "#F5F7F8",
    surface: "#FFFFFF",
    text: "#111418",
    subtext: "#6B7280",
    border: "#E5E7EB",
    white: "#FFFFFF",
    aiStart: "#6366F1",
    aiEnd: "#EC4899",
  },
  margins: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
} as const;

type AppThemes = {
  light: typeof appThemes
}

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}


StyleSheet.configure({
  themes: {
    light: appThemes,
  },
  settings: {
    initialTheme: "light",
    adaptiveThemes: false,
  },
});
