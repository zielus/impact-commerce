import { pulse } from "@/components/ui/Skeleton/Skeleton.css";
import { color } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const skeleton = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "16px",
  backgroundColor: color.bg,
  border: `1px solid ${color.border}`,
  borderRadius: "12px",
});

export const imageSkeleton = style({
  width: "100%",
  aspectRatio: "1 / 1",
  backgroundColor: color.surface,
  borderRadius: "8px",
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
