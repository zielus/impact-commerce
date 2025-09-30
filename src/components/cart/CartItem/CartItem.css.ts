import { surfaceCard } from "@/styles/surface.css";
import { color, radius, space } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const item = style([
  surfaceCard({ padding: "lg" }),
  {
    display: "flex",
    gap: space.lg,
    "@media": {
      "screen and (max-width: 768px)": {
        gap: space.md,
        padding: space.md,
      },
    },
  },
]);

export const imageContainer = style({
  width: "80px",
  height: "80px",
  flexShrink: 0,
  backgroundColor: color.bg,
  borderRadius: radius.md,
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 480px)": {
      width: "60px",
      height: "60px",
    },
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const content = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const title = style({
  fontSize: "1rem",
  fontWeight: "600",
  color: color.text,
  lineHeight: 1.4,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

export const price = style({
  fontSize: "1.125rem",
  fontWeight: "bold",
  color: color.primary,
});

export const controls = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: space.sm,
});

export const quantityControls = style({
  display: "flex",
  alignItems: "center",
  gap: space.sm,
});

export const quantityButton = style({
  width: "32px",
  height: "32px",
  borderRadius: radius.md,
  border: `1px solid ${color.border}`,
  backgroundColor: color.surface,
  color: color.text,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "1rem",
  ":hover": {
    backgroundColor: color.surfaceElevated,
    borderColor: color.primary,
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const quantity = style({
  fontSize: "1rem",
  fontWeight: "600",
  color: color.text,
  minWidth: "24px",
  textAlign: "center",
});

export const removeButton = style({
  color: color.error,
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: space.xs,
  borderRadius: radius.md,
  ":hover": {
    backgroundColor: `${color.error}10`,
  },
});
