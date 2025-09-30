import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { space } from "./theme.css";

const responsiveConditions = {
  mobile: {},
  tablet: { "@media": "screen and (min-width: 640px)" },
  desktop: { "@media": "screen and (min-width: 1024px)" },
  wide: { "@media": "screen and (min-width: 1280px)" },
} as const;

export type ResponsiveCondition = keyof typeof responsiveConditions;

const spacingScale = {
  none: "0px",
  xs: space.xs,
  sm: space.sm,
  md: space.md,
  lg: space.lg,
  xl: space.xl,
} as const;

const marginScale = {
  ...spacingScale,
  auto: "auto",
} as const;

const layoutProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "mobile",
  properties: {
    display: [
      "none",
      "block",
      "inline",
      "inline-block",
      "flex",
      "inline-flex",
      "grid",
      "inline-grid",
    ],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    justifyContent: [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end", "baseline"],
    alignContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
    ],
    alignSelf: [
      "auto",
      "flex-start",
      "center",
      "flex-end",
      "stretch",
      "baseline",
    ],
    justifyItems: ["start", "center", "end", "stretch"],
    justifySelf: ["auto", "start", "center", "end", "stretch"],
    placeItems: ["start", "center", "end", "stretch"],
    placeContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
    ],
    placeSelf: ["auto", "start", "center", "end", "stretch"],
    gridAutoFlow: ["row", "column", "dense", "row dense", "column dense"],
  },
});

const spacingProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "mobile",
  properties: {
    gap: spacingScale,
    columnGap: spacingScale,
    rowGap: spacingScale,
    paddingTop: spacingScale,
    paddingBottom: spacingScale,
    paddingLeft: spacingScale,
    paddingRight: spacingScale,
    marginTop: marginScale,
    marginBottom: marginScale,
    marginLeft: marginScale,
    marginRight: marginScale,
  },
  shorthands: {
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});

const sizeProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "mobile",
  properties: {
    width: ["auto", "100%"],
    minWidth: ["0", "100%"],
    maxWidth: ["none", "100%", "640px", "768px", "1024px", "1280px"],
    height: ["auto", "100%"],
    minHeight: ["0", "100%", "100vh"],
    maxHeight: ["none", "100%", "100vh"],
  },
});

const gridColumns = {
  1: "repeat(1, minmax(0, 1fr))",
  2: "repeat(2, minmax(0, 1fr))",
  3: "repeat(3, minmax(0, 1fr))",
  4: "repeat(4, minmax(0, 1fr))",
  5: "repeat(5, minmax(0, 1fr))",
  6: "repeat(6, minmax(0, 1fr))",
  8: "repeat(8, minmax(0, 1fr))",
  12: "repeat(12, minmax(0, 1fr))",
  autoFit: "repeat(auto-fit, minmax(0, 1fr))",
  autoFill: "repeat(auto-fill, minmax(0, 1fr))",
  none: "none",
} as const;

const gridProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "mobile",
  properties: {
    gridTemplateColumns: gridColumns,
    gridTemplateRows: {
      none: "none",
      auto: "auto",
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
  },
});

export const sprinkles = createSprinkles(
  layoutProperties,
  spacingProperties,
  sizeProperties,
  gridProperties
);
export type Sprinkles = Parameters<typeof sprinkles>[0];

export type ResponsiveValue<T> = T | Partial<Record<ResponsiveCondition, T>>;

export const breakpoints = {
  mobile: 0,
  tablet: 640,
  desktop: 1024,
  wide: 1280,
} as const;

/**
 * All sprinkle property keys for use in Box/Stack components
 * Auto-generated from the properties defined above
 */
export const sprinkleKeys = new Set([
  // Layout properties
  "display",
  "flexDirection",
  "flexWrap",
  "justifyContent",
  "alignItems",
  "alignContent",
  "alignSelf",
  "justifyItems",
  "justifySelf",
  "placeItems",
  "placeContent",
  "placeSelf",
  "gridAutoFlow",
  // Spacing properties
  "gap",
  "columnGap",
  "rowGap",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  // Spacing shorthands
  "p",
  "px",
  "py",
  "m",
  "mx",
  "my",
  // Size properties
  "width",
  "minWidth",
  "maxWidth",
  "height",
  "minHeight",
  "maxHeight",
  // Grid properties
  "gridTemplateColumns",
  "gridTemplateRows",
  "gridAutoColumns",
  "gridAutoRows",
] as const);
