import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { breakpoints } from "./responsive.css";
import { vars } from "./theme.css";
import { lineHeight, radius, space, text, weight } from "./tokens";

const responsiveConditions = {
  mobile: {},
  tablet: { "@media": `screen and (min-width: ${breakpoints.tablet}px)` },
  desktop: { "@media": `screen and (min-width: ${breakpoints.desktop}px)` },
  wide: { "@media": `screen and (min-width: ${breakpoints.wide}px)` },
} as const;

export type ResponsiveCondition = keyof typeof responsiveConditions;

const marginScale = {
  ...space,
  auto: "auto",
} as const;

const layoutProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "mobile",
  properties: {
    display: ["none", "block", "inline-block", "flex", "inline-flex", "grid"],
    flexDirection: ["row", "column"],
    flexWrap: ["nowrap", "wrap"],
    flex: {
      "0": "0",
      "1": "1",
      "2": "2",
      auto: "auto",
      initial: "initial",
      none: "none",
    },
    flexGrow: {
      "0": "0",
      "1": "1",
    },
    flexShrink: {
      "0": "0",
      "1": "1",
    },
    justifyContent: [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end", "baseline"],
    alignSelf: ["auto", "flex-start", "center", "flex-end", "stretch"],
    position: ["static", "relative", "absolute", "fixed", "sticky"],
  },
});

const spacingProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "mobile",
  properties: {
    gap: space,
    columnGap: space,
    rowGap: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
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
    width: {
      auto: "auto",
      full: "100%",
      fit: "fit-content",
      min: "min-content",
      max: "max-content",
    },
    minWidth: {
      full: "100%",
      fit: "fit-content",
      min: "min-content",
      max: "max-content",
    },
    maxWidth: {
      none: "none",
      full: "100%",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      prose: "65ch",
    },
    height: {
      auto: "auto",
      full: "100%",
      screen: "100vh",
      fit: "fit-content",
      min: "min-content",
      max: "max-content",
    },
    minHeight: {
      full: "100%",
      screen: "100vh",
      fit: "fit-content",
      min: "min-content",
      max: "max-content",
    },
    maxHeight: {
      none: "none",
      full: "100%",
      screen: "100vh",
    },
  },
});

const gridProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "mobile",
  properties: {
    gridTemplateColumns: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
      none: "none",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1",
    },
  },
});

const typographyProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "mobile",
  properties: {
    fontSize: text,
    fontWeight: weight,
    textAlign: ["left", "center", "right"],
    lineHeight: lineHeight,
    textTransform: ["none", "capitalize", "uppercase", "lowercase"],
  },
});

const colorProperties = defineProperties({
  properties: {
    color: {
      text: vars.color.text,
      textMuted: vars.color.textMuted,
      primary: vars.color.primary,
      primaryHover: vars.color.primaryHover,
      success: vars.color.success,
      warning: vars.color.warning,
      error: vars.color.error,
      white: "#ffffff",
      black: "#000000",
      inherit: "inherit",
      currentColor: "currentColor",
    },
    background: {
      transparent: "transparent",
      background: vars.color.background,
      surface: vars.color.surface,
      surfaceElevated: vars.color.surfaceElevated,
      surfaceHover: vars.color.surfaceHover,
      primary: vars.color.primary,
      primarySubtle: vars.color.primarySubtle,
      success: vars.color.success,
      successSubtle: vars.color.successSubtle,
      warning: vars.color.warning,
      warningSubtle: vars.color.warningSubtle,
      error: vars.color.error,
      errorSubtle: vars.color.errorSubtle,
      white: "#ffffff",
      black: "#000000",
    },
    borderColor: {
      transparent: "transparent",
      border: vars.color.border,
      borderHover: vars.color.borderHover,
      primary: vars.color.primary,
      success: vars.color.success,
      warning: vars.color.warning,
      error: vars.color.error,
      currentColor: "currentColor",
    },
  },
});

const borderProperties = defineProperties({
  properties: {
    borderRadius: radius,
    borderWidth: {
      0: "0",
      1: "1px",
      2: "2px",
      4: "4px",
    },
    borderStyle: ["solid", "dashed", "dotted", "none"],
  },
});

const interactionProperties = defineProperties({
  properties: {
    cursor: ["default", "pointer", "not-allowed", "wait", "text", "move"],
    pointerEvents: ["none", "auto"],
    userSelect: ["none", "text", "all", "auto"],
  },
});

const visualProperties = defineProperties({
  properties: {
    opacity: {
      0: "0",
      10: "0.1",
      20: "0.2",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      80: "0.8",
      90: "0.9",
      100: "1",
    },
    overflow: ["visible", "hidden", "scroll", "auto"],
    overflowX: ["visible", "hidden", "scroll", "auto"],
    overflowY: ["visible", "hidden", "scroll", "auto"],
    objectFit: ["contain", "cover", "fill", "none", "scale-down"],
    objectPosition: ["top", "bottom", "left", "right", "center"],
  },
});

export const sprinkles = createSprinkles(
  layoutProperties,
  spacingProperties,
  sizeProperties,
  gridProperties,
  typographyProperties,
  colorProperties,
  borderProperties,
  interactionProperties,
  visualProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
export type ResponsiveValue<T> = T | Partial<Record<ResponsiveCondition, T>>;

export { breakpoints };
export const atoms = sprinkles;
