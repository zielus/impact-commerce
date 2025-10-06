import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { spin } from "./animations.css";

export const buttonBase = style([
  sprinkles({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    fontWeight: "medium",
    borderRadius: "md",
    borderWidth: 1,
    borderStyle: "solid",
    cursor: "pointer",
    userSelect: "none",
  }),
  {
    fontFamily: "inherit",
    borderColor: "transparent",
    transition: "all 0.2s ease-in-out",
    outline: "none",
    textDecoration: "none",
    whiteSpace: "nowrap",

    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
      pointerEvents: "none",
    },

    ":focus-visible": {
      outline: `2px solid ${vars.color.primary}`,
      outlineOffset: "2px",
    },
  },
]);

export const buttonGroup = style([
  sprinkles({
    display: "inline-flex",
    gap: 4,
  }),
]);

export const buttonSpinner = style([
  sprinkles({
    display: "inline-block",
    borderRadius: "circle",
  }),
  {
    width: "1em",
    height: "1em",
    border: "2px solid currentColor",
    borderRightColor: "transparent",
    animation: `${spin} 0.6s linear infinite`,
  },
]);
