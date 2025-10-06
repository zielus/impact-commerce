import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { radius } from "@/styles/tokens";
import { style } from "@vanilla-extract/css";

export const imageContainer = style({
  flexShrink: 0,
  width: "80px",
  height: "80px",
  overflow: "hidden",
  backgroundColor: vars.color.surface,
  borderRadius: radius.md,
});

export const productImage = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const contentContainer = style([
  sprinkles({
    flex: "1",
  }),
]);

export const quantityText = style({
  minWidth: "24px",
  textAlign: "center",
});
