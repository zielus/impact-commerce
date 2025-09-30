import { pulse } from "@/components/ui/Skeleton/Skeleton.css";
import { color } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const skeleton = style({
  width: "100%",
  height: "120px",
  backgroundColor: color.surface,
  borderRadius: "12px",
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});
