import { sprinkles } from "@/styles/sprinkles.css";
import { space } from "@/styles/tokens";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const badgeBase = style([
  sprinkles({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "pill",
    fontSize: "xs",
    fontWeight: "semibold",
  }),
  {
    lineHeight: "1",
    textTransform: "uppercase",
    letterSpacing: "0.025em",
    whiteSpace: "nowrap",
  },
]);

const sizeStyles = {
  sm: style([
    sprinkles({
      fontSize: "xs",
      px: 2,
    }),
    { minHeight: space[4] },
  ]),
  md: style([
    sprinkles({
      fontSize: "xs",
      px: 4,
      py: 2,
    }),
    { minHeight: space[5] },
  ]),
  lg: style([
    sprinkles({
      fontSize: "sm",
      px: 6,
    }),
    { minHeight: space[6] },
  ]),
};

export const badgeRecipe = recipe({
  base: badgeBase,

  variants: {
    variant: {
      default: style([
        sprinkles({
          background: "surface",
          color: "text",
          borderColor: "border",
          borderWidth: 1,
          borderStyle: "solid",
        }),
      ]),

      secondary: sprinkles({
        background: "surfaceElevated",
        color: "textMuted",
      }),

      success: sprinkles({
        background: "success",
        color: "white",
      }),

      warning: sprinkles({
        background: "warning",
        color: "white",
      }),

      error: sprinkles({
        background: "error",
        color: "white",
      }),

      primary: sprinkles({
        background: "primary",
        color: "white",
      }),
    },

    size: sizeStyles,
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
