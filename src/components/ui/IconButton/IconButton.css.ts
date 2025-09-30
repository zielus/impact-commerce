import {
  buttonBase,
  buttonVariants,
  iconButtonSizes,
} from "@/styles/button-base.css";
import { recipe } from "@vanilla-extract/recipes";

export const iconButtonRecipe = recipe({
  base: [
    buttonBase,
    {
      aspectRatio: "1",
    },
  ],

  variants: {
    variant: {
      primary: buttonVariants.primary,
      secondary: buttonVariants.secondary,
      outline: buttonVariants.outline,
      ghost: buttonVariants.ghost,
      link: buttonVariants.link,
    },

    size: {
      sm: iconButtonSizes.sm,
      md: iconButtonSizes.md,
      lg: iconButtonSizes.lg,
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
