import { container as layoutContainer } from "@/styles/primitives";
import { responsiveStyle } from "@/styles/responsive.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { space, z } from "@/styles/tokens";
import { style } from "@vanilla-extract/css";

export const header = style([
  sprinkles({
    position: "sticky",
    background: "background",
  }),
  {
    borderBottom: `1px solid ${vars.color.border}`,
    boxShadow: vars.shadow.sm,
    top: 0,
    zIndex: z.sticky,
  },
]);

export const container = style([
  layoutContainer,
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  responsiveStyle({
    mobile: {
      paddingTop: space[4],
      paddingBottom: space[4],
    },
    tablet: {
      paddingTop: space[6],
      paddingBottom: space[6],
    },
  }),
]);

export const logo = style([
  sprinkles({
    color: "primary",
    fontWeight: "bold",
    fontSize: { mobile: "xl", desktop: "2xl" },
  }),
  {
    textDecoration: "none",
    ":hover": {
      color: vars.color.primaryHover,
    },
  },
]);
