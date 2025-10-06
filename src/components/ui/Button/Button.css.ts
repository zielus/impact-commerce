import { buttonBase } from "@/styles/primitives/button.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { space } from "@/styles/tokens";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

/**
 * Button recipe following design system hierarchy:
 * 1. sprinkles - for padding, fontSize, colors, width
 * 2. style() - for height and transitions/pseudo-states
 */

const sizeStyles = {
  sm: style([
    sprinkles({
      px: 6,
      fontSize: "sm",
    }),
    { height: space[8] },
  ]),
  md: style([
    sprinkles({
      px: 8,
      fontSize: "base",
    }),
    { height: space[10] },
  ]),
  lg: style([
    sprinkles({
      px: 10,
      fontSize: "lg",
    }),
    { height: space[12] },
  ]),
  icon: style([
    sprinkles({
      px: 0,
      gap: 0,
      fontSize: "sm",
    }),
    {
      width: space[8],
      height: space[8],
    },
  ]),
};

export const button = recipe({
  base: buttonBase,

  variants: {
    variant: {
      primary: style({
        backgroundColor: vars.color.primary,
        color: "white",
        borderColor: vars.color.primary,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: vars.color.primaryHover,
            borderColor: vars.color.primaryHover,
          },
          "&:active:not(:disabled)": {
            backgroundColor: vars.color.primaryActive,
            transform: "translateY(1px)",
          },
        },
      }),

      secondary: style({
        backgroundColor: vars.color.surface,
        color: vars.color.text,
        borderColor: vars.color.border,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: vars.color.surfaceElevated,
            borderColor: vars.color.borderHover,
          },
          "&:active:not(:disabled)": {
            backgroundColor: vars.color.surfaceHover,
            transform: "translateY(1px)",
          },
        },
      }),

      outline: style({
        backgroundColor: "transparent",
        color: vars.color.primary,
        borderColor: vars.color.primary,

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: vars.color.primarySubtle,
            borderColor: vars.color.primaryHover,
          },
          "&:active:not(:disabled)": {
            backgroundColor: vars.color.primarySubtleHover,
            transform: "translateY(1px)",
          },
        },
      }),

      ghost: style({
        backgroundColor: "transparent",
        color: vars.color.text,
        borderColor: "transparent",

        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: vars.color.surfaceElevated,
          },
          "&:active:not(:disabled)": {
            backgroundColor: vars.color.surfaceHover,
            transform: "translateY(1px)",
          },
        },
      }),

      link: style({
        backgroundColor: "transparent",
        color: vars.color.primary,
        borderColor: "transparent",
        height: "auto",
        padding: 0,

        selectors: {
          "&:hover:not(:disabled)": {
            textDecoration: "underline",
            backgroundColor: "transparent",
          },
          "&:active:not(:disabled)": {
            color: vars.color.primaryActive,
          },
        },
      }),

      danger: style({
        backgroundColor: vars.color.error,
        color: "white",
        borderColor: vars.color.error,

        selectors: {
          "&:hover:not(:disabled)": {
            opacity: 0.9,
          },
          "&:active:not(:disabled)": {
            opacity: 0.8,
            transform: "translateY(1px)",
          },
        },
      }),
    },

    size: sizeStyles,

    fullWidth: {
      true: sprinkles({ width: "full" }),
      false: {},
    },

    loading: {
      true: sprinkles({
        pointerEvents: "none",
        opacity: 70,
      }),
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
  },
});
