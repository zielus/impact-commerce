import { surfaceCard } from "@/styles/surface.css";
import { color, space } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const summary = style([
  surfaceCard({ padding: "xl" }),
  {
    position: "sticky",
    top: "100px",
  },
]);

export const title = style({
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: color.text,
  marginBottom: space.lg,
});

export const row = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: space.md,
});

export const label = style({
  color: color.textMuted,
});

export const value = style({
  fontWeight: "600",
  color: color.text,
});

export const total = style({
  borderTop: `1px solid ${color.border}`,
  paddingTop: space.md,
  marginTop: space.md,
});

export const totalLabel = style({
  fontSize: "1.125rem",
  fontWeight: "bold",
  color: color.text,
});

export const totalValue = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: color.primary,
});

export const checkoutButton = style({
  width: "100%",
  marginTop: space.lg,
});
