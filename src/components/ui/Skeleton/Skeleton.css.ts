import { color } from "@/styles/theme.css";
import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const pulse = keyframes({
  "0%, 100%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
});

export const skeleton = recipe({
  base: {
    backgroundColor: color.surface,
    borderRadius: "8px",
    animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  },
  variants: {
    variant: {
      text: {
        height: "1em",
        marginBottom: "0.5em",
      },
      rectangular: {
        width: "100%",
      },
      circular: {
        borderRadius: "50%",
      },
    },
  },
  defaultVariants: {
    variant: "rectangular",
  },
});
