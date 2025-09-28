import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: "system-ui, sans-serif",
  color: theme.color.text,
  backgroundColor: theme.color.bg,
});

globalStyle("body", {
  minHeight: "100vh",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
