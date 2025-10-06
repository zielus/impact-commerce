import { calc } from "@vanilla-extract/css-utils";

export const spaceBase = "0.25rem";

export const space = {
  0: "0",
  1: calc.multiply(spaceBase, 1),
  2: calc.multiply(spaceBase, 2),
  3: calc.multiply(spaceBase, 3),
  4: calc.multiply(spaceBase, 4),
  5: calc.multiply(spaceBase, 5),
  6: calc.multiply(spaceBase, 6),
  8: calc.multiply(spaceBase, 8),
  10: calc.multiply(spaceBase, 10),
  12: calc.multiply(spaceBase, 12),
  14: calc.multiply(spaceBase, 14),
  16: calc.multiply(spaceBase, 16),
  20: calc.multiply(spaceBase, 20),
  24: calc.multiply(spaceBase, 24),
  32: calc.multiply(spaceBase, 32),
  40: calc.multiply(spaceBase, 40),
  48: calc.multiply(spaceBase, 48),
  64: calc.multiply(spaceBase, 64),
  80: calc.multiply(spaceBase, 80),
  96: calc.multiply(spaceBase, 96),
} as const;

export const radius = {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  pill: "9999px",
  circle: "50%",
} as const;

export const text = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "2.5rem",
} as const;

export const weight = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const lineHeight = {
  tight: "1.2",
  normal: "1.5",
  relaxed: "1.6",
  loose: "2",
} as const;

export const z = {
  base: "0",
  dropdown: "10",
  sticky: "20",
  overlay: "30",
  modal: "40",
  toast: "50",
} as const;
