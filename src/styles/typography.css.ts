import { recipe } from "@vanilla-extract/recipes";
import { color } from "./theme.css";

/**
 * Typography recipes for consistent text styling across the app
 */

export const heading = recipe({
  base: {
    fontWeight: "bold",
    color: color.text,
    lineHeight: 1.2,
  },
  variants: {
    level: {
      h1: {
        fontSize: "2.5rem",
      },
      h2: {
        fontSize: "2rem",
      },
      h3: {
        fontSize: "1.5rem",
      },
      h4: {
        fontSize: "1.25rem",
      },
      h5: {
        fontSize: "1.125rem",
      },
      h6: {
        fontSize: "1rem",
      },
    },
    align: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" },
    },
    tone: {
      default: { color: color.text },
      primary: { color: color.primary },
      muted: { color: color.textMuted },
    },
  },
  defaultVariants: {
    level: "h2",
    align: "left",
    tone: "default",
  },
});

export const body = recipe({
  base: {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: color.text,
  },
  variants: {
    size: {
      xs: { fontSize: "0.75rem" },
      sm: { fontSize: "0.875rem" },
      md: { fontSize: "1rem" },
      lg: { fontSize: "1.125rem" },
      xl: { fontSize: "1.25rem" },
    },
    weight: {
      normal: { fontWeight: "normal" },
      medium: { fontWeight: "500" },
      semibold: { fontWeight: "600" },
      bold: { fontWeight: "bold" },
    },
    tone: {
      default: { color: color.text },
      primary: { color: color.primary },
      muted: { color: color.textMuted },
      success: { color: color.success },
      warning: { color: color.warning },
      error: { color: color.error },
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
    tone: "default",
  },
});

export const truncate = recipe({
  base: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  variants: {
    lines: {
      1: {
        whiteSpace: "nowrap",
      },
      2: {
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        whiteSpace: "normal",
      },
      3: {
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        whiteSpace: "normal",
      },
    },
  },
  defaultVariants: {
    lines: 1,
  },
});
