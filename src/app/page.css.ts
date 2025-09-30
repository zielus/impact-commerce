import { responsiveGrid, stackedSection } from "@/styles/layout.css";
import { surfaceCard } from "@/styles/surface.css";
import { heading } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const homeContainer = stackedSection;

export const pageTitle = heading({
  level: "h1",
  align: "center",
});

export const categoriesGrid = style([
  responsiveGrid({ columns: 4, gap: "lg" }),
  {
    marginTop: "var(--space-xl)",
  },
]);

export const card = surfaceCard;
