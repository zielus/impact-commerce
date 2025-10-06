import { responsiveStyle } from "@/styles/responsive.css";
import { spaceBase } from "@/styles/tokens";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const container = style([
  {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  responsiveStyle({
    mobile: {
      paddingLeft: calc.multiply(spaceBase, 3),
      paddingRight: calc.multiply(spaceBase, 3),
      paddingTop: calc.multiply(spaceBase, 6),
      paddingBottom: calc.multiply(spaceBase, 6),
    },
    tablet: {
      paddingLeft: calc.multiply(spaceBase, 4),
      paddingRight: calc.multiply(spaceBase, 4),
      paddingTop: calc.multiply(spaceBase, 8),
      paddingBottom: calc.multiply(spaceBase, 8),
    },
    desktop: {
      paddingLeft: calc.multiply(spaceBase, 6),
      paddingRight: calc.multiply(spaceBase, 6),
    },
  }),
]);
