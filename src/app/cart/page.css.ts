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
    selectors: {
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
]);

export const title = heading({ level: "h2" });

export const subtitle = body({ tone: "muted" });

export const content = style({
  display: "grid",
  gridTemplateColumns: "1fr 300px",
  gap: space.xl,
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const cartItems = style({
  display: "flex",
  flexDirection: "column",
  gap: space.lg,
});

export const sidebar = style({
  "@media": {
    "screen and (max-width: 768px)": {
      order: -1,
    },
  },
});

export const emptyCart = style([
  body({ tone: "muted" }),
  {
    textAlign: "center",
    padding: `${space.xl} 0`,
  },
]);
