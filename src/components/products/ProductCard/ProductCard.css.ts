import { surfaceCard } from "@/styles/surface.css";
import { color, space } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const card = style([
  surfaceCard({ padding: "none", interaction: "lift" }),
  {
    overflow: "hidden",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
]);

export const imageContainer = style({
  position: "relative",
  width: "100%",
  aspectRatio: "1",
  backgroundColor: color.bg,
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  padding: space.md,
});

export const content = style({
  padding: space.lg,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: space.sm,
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
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: color.primary,
  marginTop: "auto",
});

export const rating = style({
  display: "flex",
  alignItems: "center",
  gap: space.xs,
  fontSize: "0.875rem",
  color: color.textMuted,
});

export const addButton = style({
  marginTop: space.sm,
});
