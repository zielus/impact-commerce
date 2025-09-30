import { color } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const skeleton = style({
  display: "flex",
  gap: "16px",
  padding: "16px",
  backgroundColor: color.bg,
  border: `1px solid ${color.border}`,
  borderRadius: "12px",
});

export const content = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
