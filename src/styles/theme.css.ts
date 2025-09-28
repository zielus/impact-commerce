import {
  amber,
  amberDark,
  blue,
  blueA,
  blueDark,
  blueDarkA,
  gray,
  grayDark,
  green,
  greenDark,
  red,
  redDark,
} from "@radix-ui/colors";
import { createGlobalTheme, createTheme } from "@vanilla-extract/css";

/** Spacing / radius / shadow stay global (not theme-specific) */
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

/** THEME: expose full Radix scales as vars.colors.* */
export const [lightThemeClass, vars] = createTheme({
  colors: {
    ...gray,
    ...blue,
    ...red,
    ...green,
    ...amber,
    ...blueA, // alpha for subtle tints
  },
});

export const darkThemeClass = createTheme(vars, {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...amberDark,
    ...blueDarkA,
  },
});

/** Optional semantic aliases so components don’t hardcode scale indices everywhere */
export const color = {
  // Light & dark will resolve via the active theme class:
  bg: vars.colors.gray1,
  surface: vars.colors.gray2,
  surfaceElevated: vars.colors.gray3,
  text: vars.colors.gray12,
  textMuted: vars.colors.gray9,

  primary: vars.colors.blue10,
  primaryHover: vars.colors.blue11,
  primarySubtle: vars.colors.blueA3, // translucent brand tint (works great for badges/hover)

  border: vars.colors.gray6,

  success: vars.colors.green10,
  warning: vars.colors.amber10,
  error: vars.colors.red10,
};

export const theme = { color, space, radius, shadow, vars };
