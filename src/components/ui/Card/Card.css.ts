import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const cardBase = style([
  sprinkles({
    background: "surface",
    borderRadius: "md",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "border",
  }),
]);

const paddingStyles = {
  none: sprinkles({ p: 0 }),
  xs: sprinkles({ p: 2 }),
  sm: sprinkles({ p: 4 }),
  md: sprinkles({ p: 6 }),
  lg: sprinkles({ p: 8 }),
  xl: sprinkles({ p: 10 }),
};

export const cardRecipe = recipe({
  base: cardBase,

  variants: {
    padding: paddingStyles,

    interaction: {
      none: {},
      subtle: style({
        transition: "all 0.2s ease",
        selectors: {
          "&:hover": {
            backgroundColor: vars.color.surfaceElevated,
          },
        },
      }),
      lift: style({
        transition: "all 0.2s ease",
        selectors: {
          "&:hover": {
            backgroundColor: vars.color.surfaceElevated,
            borderColor: vars.color.primary,
            boxShadow: vars.shadow.md,
            transform: "translateY(-2px)",
          },
        },
      }),
    },

    elevation: {
      none: {},
      raised: style({
        boxShadow: vars.shadow.sm,
      }),
    },
  },

  defaultVariants: {
    padding: "md",
    interaction: "none",
    elevation: "none",
  },
});
