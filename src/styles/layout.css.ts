import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { space } from "./theme.css";

export const contentWidth = style({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
});

export const horizontalPadding = style({
  paddingLeft: space.lg,
  paddingRight: space.lg,
  "@media": {
    "screen and (max-width: 768px)": {
      paddingLeft: space.md,
      paddingRight: space.md,
    },
  },
});

export const pageSection = style([
  contentWidth,
  horizontalPadding,
  {
    paddingTop: space.lg,
    paddingBottom: space.lg,
  },
]);

/**
 * Responsive grid layout recipe
 * Use for product grids, category grids, etc.
 */
export const responsiveGrid = recipe({
  base: {
    display: "grid",
    gap: space.lg,
  },
  variants: {
    columns: {
      1: {
        gridTemplateColumns: "1fr",
      },
      2: {
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      },
      3: {
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      4: {
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      },
      auto: {
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      },
    },
    gap: {
      sm: { gap: space.sm },
      md: { gap: space.md },
      lg: { gap: space.lg },
      xl: { gap: space.xl },
    },
  },
  defaultVariants: {
    columns: "auto",
    gap: "lg",
  },
});

/**
 * Stacked section recipe for vertical content layouts
 */
export const stackedSection = recipe({
  base: [
    pageSection,
    {
      display: "flex",
      flexDirection: "column",
    },
  ],
  variants: {
    gap: {
      sm: { gap: space.sm },
      md: { gap: space.md },
      lg: { gap: space.lg },
      xl: { gap: space.xl },
    },
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
    },
  },
  defaultVariants: {
    gap: "md",
    align: "start",
  },
});
