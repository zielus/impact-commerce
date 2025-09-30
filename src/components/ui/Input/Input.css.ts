import { color, radius, space } from "@/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const inputRecipe = recipe({
  base: {
    display: "flex",
    width: "100%",
    borderRadius: radius.md,
    border: `1px solid ${color.border}`,
    backgroundColor: color.bg,
    paddingLeft: space.md,
    paddingRight: space.md,
    fontSize: "14px",
    lineHeight: "1.5",
    color: color.text,
    transition: "all 0.2s ease-in-out",
    outline: "none",

    "::placeholder": {
      color: color.textMuted,
    },

    ":focus": {
      borderColor: color.primary,
      boxShadow: `0 0 0 2px ${color.primarySubtle}`,
    },

    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
      backgroundColor: color.surface,
    },
  },

  variants: {
    size: {
      sm: {
        height: "32px",
        fontSize: "13px",
        paddingLeft: space.sm,
        paddingRight: space.sm,
      },

      md: {
        height: "40px",
        fontSize: "14px",
        paddingLeft: space.md,
        paddingRight: space.md,
      },

      lg: {
        height: "48px",
        fontSize: "16px",
        paddingLeft: space.lg,
        paddingRight: space.lg,
      },
    },

    variant: {
      default: {},

      error: {
        borderColor: color.error,

        ":focus": {
          borderColor: color.error,
          boxShadow: `0 0 0 2px ${color.error}20`,
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "default",
  },
});
