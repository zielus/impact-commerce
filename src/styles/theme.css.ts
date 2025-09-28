import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

// Global spacing, radius, and shadow values
export const space = createGlobalTheme(":root", {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
});

export const radius = createGlobalTheme(":root", {
  sm: "4px",
  md: "8px",
  lg: "12px",
  pill: "9999px",
});

export const shadow = createGlobalTheme(":root", {
  e1: "0 1px 2px rgba(0,0,0,.06)",
  e2: "0 2px 6px rgba(0,0,0,.08)",
  e3: "0 6px 16px rgba(0,0,0,.12)",
});

// Color theme contract
const colorVars = createThemeContract({
  bg: null,
  surface: null,
  text: null,
  primary: null,
  border: null,
  success: null,
  warning: null,
  error: null,
});

// Theme palettes:
export const lightTheme = createTheme(colorVars, {
  bg: "#ffffff",
  surface: "#f8f9fb",
  text: "#111827",
  primary: "#2563eb",
  border: "#e5e7eb",
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444",
});

export const darkTheme = createTheme(colorVars, {
  bg: "#0b0f15",
  surface: "#121825",
  text: "#f3f4f6",
  primary: "#3b82f6",
  border: "#243042",
  success: "#22c55e",
  warning: "#fbbf24",
  error: "#f87171",
});

// Export unified theme object for easier usage
export const theme = {
  color: colorVars,
  space,
  radius,
  shadow,
};
