import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { space } from "@/styles/tokens";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

/**
 * Input recipe following design system hierarchy:
 * 1. sprinkles - for display, width, borderRadius, borderWidth, padding, fontSize, lineHeight, color
 * 2. style() - for transitions, outline, and pseudo-states
 */

const inputBase = style([
  sprinkles({
    display: "flex",
    width: "full",
    borderRadius: "md",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "border",
    background: "background",
    fontSize: "sm",
    lineHeight: "normal",
    color: "text",
  }),
  {
    transition: "all 0.2s ease-in-out",
    outline: "none",

    "::placeholder": {
      color: vars.color.textMuted,
    },

    ":focus": {
      borderColor: vars.color.primary,
      boxShadow: `0 0 0 2px ${vars.color.primarySubtle}`,
    },

    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
      backgroundColor: vars.color.surface,
    },
  },
]);

const sizeStyles = {
  sm: style([
    sprinkles({
      fontSize: "xs",
      px: 4,
    }),
    { height: space[8] },
  ]),
  md: style([
    sprinkles({
      fontSize: "sm",
      px: 6,
    }),
    { height: space[10] },
  ]),
  lg: style([
    sprinkles({
      fontSize: "base",
      px: 8,
    }),
    { height: space[12] },
  ]),
};

export const inputRecipe = recipe({
  base: inputBase,

  variants: {
    size: sizeStyles,

    variant: {
      default: {},

      error: style({
        borderColor: vars.color.error,

        ":focus": {
          borderColor: vars.color.error,
          boxShadow: `0 0 0 2px ${vars.color.errorSubtle}`,
        },
      }),
    },
  },

  defaultVariants: {
    size: "md",
    variant: "default",
  },
});
