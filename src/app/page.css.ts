import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../styles/theme.css";

export const homeContainer = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: theme.space.md,
    padding: theme.space.lg,
  },
  variants: {
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
    },
    tone: {
      default: {
        color: theme.color.text,
      },
      muted: {
        color: theme.color.text, // Remove reference to muted for now
      },
    },
  },
  defaultVariants: {
    align: "start",
    tone: "default",
  },
});

export const card = recipe({
  base: {
    borderRadius: theme.radius.md,
    backgroundColor: theme.color.surface,
    boxShadow: theme.shadow.e2,
    padding: theme.space.lg,
    width: "min(560px, 100%)",
  },
});
