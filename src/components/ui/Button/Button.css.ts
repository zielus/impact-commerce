import {
  buttonBase,
  buttonPadding,
  buttonSizes,
  buttonVariants,
} from "@/styles/button-base.css";
import { space } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const linkVariant = style({
  textDecoration: "underline",
  textUnderlineOffset: "2px",

  selectors: {
    "&:hover:not(:disabled)": {
      textDecoration: "none",
    },
  },
});

export const buttonRecipe = recipe({
  base: [
    buttonBase,
    {
      gap: space.sm,
      fontWeight: "500",
      lineHeight: "1",
      textDecoration: "none",
    },
  ],

  variants: {
    variant: {
      primary: buttonVariants.primary,
      secondary: buttonVariants.secondary,
      outline: buttonVariants.outline,
      ghost: buttonVariants.ghost,
      link: [buttonVariants.link, linkVariant],
    },

    size: {
      sm: [buttonSizes.sm, buttonPadding.sm],
      md: [buttonSizes.md, buttonPadding.md],
      lg: [buttonSizes.lg, buttonPadding.lg],
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
