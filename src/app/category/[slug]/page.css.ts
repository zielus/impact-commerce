import { pageSection } from "@/styles/layout.css";
import { space } from "@/styles/theme.css";
import { body, heading } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const container = style([pageSection]);

export const header = style({
  marginBottom: space.xl,
});

export const backButton = style([
  body({ size: "sm", tone: "primary" }),
  {
    display: "inline-flex",
    alignItems: "center",
    gap: space.xs,
    textDecoration: "none",
    marginBottom: space.lg,
    ":hover": {
      textDecoration: "underline",
    },
  },
]);

export const title = style([
  heading({ level: "h2" }),
  {
    textTransform: "capitalize",
    marginBottom: space.sm,
  },
]);

export const subtitle = body({ tone: "muted" });
