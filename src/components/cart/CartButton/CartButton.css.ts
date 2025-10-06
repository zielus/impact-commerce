import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const cartLink = style([
  sprinkles({
    position: "relative",
    color: "text",
  }),
  {
    ":hover": {
      color: vars.color.primary,
    },
  },
]);

export const cartBadge = style([
  sprinkles({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "error",
    color: "white",
    fontSize: "xs",
    fontWeight: "bold",
    borderRadius: "circle",
  }),
  {
    top: "-6px",
    right: "-6px",
    minWidth: "18px",
    height: "18px",
    lineHeight: 1,
  },
]);
