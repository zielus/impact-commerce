import { contentWidth } from "@/styles/layout.css";
import { color, shadow, space } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  backgroundColor: color.bg,
  borderBottom: `1px solid ${color.border}`,
  boxShadow: shadow.e1,
  position: "sticky",
  top: 0,
  zIndex: 10,
});

export const container = style([
  contentWidth,
  {
    padding: `${space.md} ${space.lg}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media": {
      "screen and (max-width: 768px)": {
        padding: `${space.sm} ${space.md}`,
      },
    },
  },
]);

export const logo = style({
  color: color.primary,
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.5rem",
  ":hover": {
    color: color.primaryHover,
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.25rem",
    },
  },
});

export const cartIcon = style({
  position: "relative",
  color: color.text,
  ":hover": {
    color: color.primary,
  },
});

export const cartBadge = style({
  position: "absolute",
  top: "-6px",
  right: "-6px",
  backgroundColor: color.error,
  color: "white",
  fontSize: "0.75rem",
  fontWeight: "bold",
  borderRadius: "50%",
  minWidth: "18px",
  height: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1,
});
