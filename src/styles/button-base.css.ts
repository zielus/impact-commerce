import { style, styleVariants } from "@vanilla-extract/css";
import { color, radius, space } from "./theme.css";

/**
 * Shared button base styles and variants
 * Used by both Button and IconButton components
 */

export const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: radius.md,
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  outline: "none",

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  ":focus-visible": {
    outline: `2px solid ${color.primary}`,
    outlineOffset: "2px",
  },
});

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: color.primary,
    color: "white",

    ":hover:not(:disabled)": {
      backgroundColor: color.primaryHover,
    },

    ":active:not(:disabled)": {
      transform: "translateY(1px)",
    },
  },

  secondary: {
    backgroundColor: color.surface,
    color: color.text,
    border: `1px solid ${color.border}`,

    ":hover:not(:disabled)": {
      backgroundColor: color.surfaceElevated,
    },

    ":active:not(:disabled)": {
      transform: "translateY(1px)",
    },
  },

  outline: {
    backgroundColor: "transparent",
    color: color.primary,
    border: `1px solid ${color.primary}`,

    ":hover:not(:disabled)": {
      backgroundColor: color.primarySubtle,
    },

    ":active:not(:disabled)": {
      transform: "translateY(1px)",
    },
  },

  ghost: {
    backgroundColor: "transparent",
    color: color.text,

    ":hover:not(:disabled)": {
      backgroundColor: color.surfaceElevated,
    },

    ":active:not(:disabled)": {
      transform: "translateY(1px)",
    },
  },

  link: {
    backgroundColor: "transparent",
    color: color.primary,

    ":hover:not(:disabled)": {
      backgroundColor: color.primarySubtle,
    },
  },
});

export const buttonSizes = styleVariants({
  sm: {
    height: "32px",
    fontSize: "13px",
  },
  md: {
    height: "40px",
    fontSize: "14px",
  },
  lg: {
    height: "48px",
    fontSize: "16px",
  },
});

export const buttonPadding = styleVariants({
  sm: {
    paddingLeft: space.md,
    paddingRight: space.md,
  },
  md: {
    paddingLeft: space.lg,
    paddingRight: space.lg,
  },
  lg: {
    paddingLeft: space.xl,
    paddingRight: space.xl,
  },
});

export const iconButtonSizes = styleVariants({
  sm: {
    width: "32px",
    height: "32px",
  },
  md: {
    width: "40px",
    height: "40px",
  },
  lg: {
    width: "48px",
    height: "48px",
  },
});
