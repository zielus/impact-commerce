import { recipe } from "@vanilla-extract/recipes";
import { color, radius, shadow, space } from "./theme.css";

type InteractionVariant = "none" | "subtle" | "lift";
type PaddingVariant = "none" | "xs" | "sm" | "md" | "lg" | "xl";

const paddingScale: Record<Exclude<PaddingVariant, "none">, string> = {
  xs: space.xs,
  sm: space.sm,
  md: space.md,
  lg: space.lg,
  xl: space.xl,
};

export const surfaceCard = recipe({
  base: {
    backgroundColor: color.surface,
    borderRadius: radius.lg,
    border: `1px solid ${color.border}`,
  },
  variants: {
    padding: {
      none: { padding: 0 },
      xs: { padding: paddingScale.xs },
      sm: { padding: paddingScale.sm },
      md: { padding: paddingScale.md },
      lg: { padding: paddingScale.lg },
      xl: { padding: paddingScale.xl },
    } satisfies Record<PaddingVariant, { padding: string | number }>,
    interaction: {
      none: {},
      subtle: {
        transition: "all 0.2s ease",
        selectors: {
          "&:hover": {
            backgroundColor: color.surfaceElevated,
          },
        },
      },
      lift: {
        transition: "all 0.2s ease",
        selectors: {
          "&:hover": {
            backgroundColor: color.surfaceElevated,
            borderColor: color.primary,
            boxShadow: shadow.e2,
            transform: "translateY(-2px)",
          },
        },
      },
    } satisfies Record<InteractionVariant, Record<string, unknown>>,
    elevation: {
      none: {},
      raised: {
        boxShadow: shadow.e1,
      },
    },
  },
  defaultVariants: {
    padding: "md",
    interaction: "none",
    elevation: "none",
  },
});
