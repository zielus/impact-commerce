import { responsiveGrid } from "@/styles/layout.css";
import { space } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const grid = style([
  responsiveGrid({ columns: 2, gap: "lg" }),
  {
    padding: space.lg,
    "@media": {
      "screen and (max-width: 768px)": {
        padding: space.md,
      },
      "screen and (max-width: 480px)": {
        padding: space.sm,
      },
    },
  },
]);
