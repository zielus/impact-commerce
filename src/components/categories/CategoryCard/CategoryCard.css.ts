import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { space } from "@/styles/tokens";
import { unstyledLink } from "@/styles/utils.css";
import { style } from "@vanilla-extract/css";

export const categoryLink = unstyledLink;

export const cardContainer = style([
  sprinkles({
    height: "full",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  {
    minHeight: "128px",
  },
]);

export const iconContainer = style({
  width: space[14],
  height: space[14],
  borderRadius: "50%",
  backgroundColor: vars.color.primarySubtle,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.primary,
});
