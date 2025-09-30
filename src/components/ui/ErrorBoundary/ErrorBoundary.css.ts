import { color, space } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "400px",
  padding: space.lg,
  textAlign: "center",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: 700,
  color: color.error,
  marginBottom: space.md,
});

export const message = style({
  fontSize: "1.125rem",
  color: color.textMuted,
  marginBottom: space.lg,
  maxWidth: "600px",
});

export const details = style({
  marginTop: space.lg,
  padding: space.md,
  backgroundColor: color.surface,
  borderRadius: "8px",
  border: `1px solid ${color.border}`,
  maxWidth: "800px",
  width: "100%",
  textAlign: "left",
  overflowX: "auto",
});

export const stackTrace = style({
  fontSize: "0.875rem",
  fontFamily: "monospace",
  color: color.textMuted,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
});

export const actions = style({
  display: "flex",
  gap: space.md,
  marginTop: space.lg,
});
