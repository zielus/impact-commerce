import { sprinkles } from "@/styles/sprinkles.css";
import { space } from "@/styles/tokens";
import { aspectRatio } from "@/styles/utils.css";
import { style } from "@vanilla-extract/css";

export const cardContainer = style([
  sprinkles({
    height: "full",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  }),
]);

export const imageContainer = aspectRatio.square;

export const productImage = style({
  objectFit: "contain",
  padding: space[4],
});

export const contentContainer = style([
  sprinkles({
    p: 8,
    flex: "1",
  }),
]);

export const ratingContainer = style([
  sprinkles({
    fontSize: "sm",
    color: "textMuted",
  }),
]);
