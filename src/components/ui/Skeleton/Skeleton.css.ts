import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

/**
 * Skeleton recipe following design system hierarchy:
 * 1. sprinkles - for shared shape tokens
 * 2. style() - for animation, layout overrides
 */

const shimmer = keyframes({
  "0%": {
    backgroundPosition: "-200% 0",
  },
  "100%": {
    backgroundPosition: "200% 0",
  },
});

const skeletonBase = style([
  sprinkles({
    borderRadius: "md",
  }),
  {
    backgroundColor: vars.color.surface,
    backgroundImage: `linear-gradient(90deg, ${vars.color.surface} 0%, ${vars.color.surfaceHover} 50%, ${vars.color.surface} 100%)`,
    backgroundSize: "200% 100%",
    backgroundRepeat: "no-repeat",
    willChange: "background-position",
    animation: `${shimmer} 1.4s ease-in-out infinite`,
  },
]);

export const skeleton = recipe({
  base: skeletonBase,

  variants: {
    variant: {
      text: style({
        height: "1em",
        marginBottom: "0.5em",
      }),

      rectangular: sprinkles({
        width: "full",
      }),

      circular: sprinkles({
        borderRadius: "circle",
      }),
    },
  },

  defaultVariants: {
    variant: "rectangular",
  },
});
