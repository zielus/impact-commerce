import { theme } from "./theme";

export const media = {
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  "2xl": `@media (min-width: ${theme.breakpoints["2xl"]})`,

  // Max width media queries
  maxSm: `@media (max-width: ${parseInt(theme.breakpoints.sm) - 1}px)`,
  maxMd: `@media (max-width: ${parseInt(theme.breakpoints.md) - 1}px)`,
  maxLg: `@media (max-width: ${parseInt(theme.breakpoints.lg) - 1}px)`,
  maxXl: `@media (max-width: ${parseInt(theme.breakpoints.xl) - 1}px)`,

  // Range media queries
  smToMd: `@media (min-width: ${theme.breakpoints.sm}) and (max-width: ${parseInt(theme.breakpoints.md) - 1}px)`,
  mdToLg: `@media (min-width: ${theme.breakpoints.md}) and (max-width: ${parseInt(theme.breakpoints.lg) - 1}px)`,
  lgToXl: `@media (min-width: ${theme.breakpoints.lg}) and (max-width: ${parseInt(theme.breakpoints.xl) - 1}px)`,

  // Special media queries
  print: "@media print",
  screen: "@media screen",
  motion: "@media (prefers-reduced-motion: no-preference)",
  reducedMotion: "@media (prefers-reduced-motion: reduce)",
  highContrast: "@media (prefers-contrast: high)",
  darkMode: "@media (prefers-color-scheme: dark)",
  lightMode: "@media (prefers-color-scheme: light)",
} as const;
