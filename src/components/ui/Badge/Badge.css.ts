import { color, radius, space } from "@/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const badgeRecipe = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.pill,
    fontSize: "11px",
    fontWeight: "600",
    lineHeight: "1",
    textTransform: "uppercase",
    letterSpacing: "0.025em",
    paddingLeft: space.sm,
    paddingRight: space.sm,
    paddingTop: space.xs,
    paddingBottom: space.xs,
    minHeight: "20px",
    whiteSpace: "nowrap",
  },

  variants: {
    variant: {
      default: {
        backgroundColor: color.surface,
        color: color.text,
        border: `1px solid ${color.border}`,
      },

      secondary: {
        backgroundColor: color.surfaceElevated,
        color: color.textMuted,
      },

      success: {
        backgroundColor: color.success,
        color: "white",
      },

      warning: {
        backgroundColor: color.warning,
        color: "white",
      },

      error: {
        backgroundColor: color.error,
        color: "white",
      },

      primary: {
        backgroundColor: color.primary,
        color: "white",
      },
    },

    size: {
      sm: {
        fontSize: "10px",
        paddingLeft: space.xs,
        paddingRight: space.xs,
        minHeight: "16px",
      },

      md: {
        fontSize: "11px",
        paddingLeft: space.sm,
        paddingRight: space.sm,
        minHeight: "20px",
      },

      lg: {
        fontSize: "12px",
        paddingLeft: space.md,
        paddingRight: space.md,
        minHeight: "24px",
      },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
