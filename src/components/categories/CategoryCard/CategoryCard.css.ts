import { surfaceCard } from "@/styles/surface.css";
import { color } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const card = style([
  surfaceCard({ padding: "xl", interaction: "lift" }),
  {
    textAlign: "center",
    textDecoration: "none",
    color: color.text,
    display: "block",
    height: "100%",
    selectors: {
      "&:hover": {
        borderColor: color.primary,
      },
    },
  },
]);

export const title = style({
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: color.primary,
  textTransform: "capitalize",
});
