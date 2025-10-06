import { style } from "@vanilla-extract/css";

/**
 * Aspect ratio utilities for responsive containers
 */
export const aspectRatio = {
  square: style({
    position: "relative",
    width: "100%",
    aspectRatio: "1",
  }),
  video: style({
    position: "relative",
    width: "100%",
    aspectRatio: "16/9",
  }),
  portrait: style({
    position: "relative",
    width: "100%",
    aspectRatio: "3/4",
  }),
};

/**
 * Text truncation utilities using line clamping
 * Note: Prefer using Text component's truncate prop when possible
 */
export const textClamp = {
  1: style({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }),
  2: style({
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
  }),
  3: style({
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
  }),
};

/**
 * Removes default link styling
 */
export const unstyledLink = style({
  textDecoration: "none",
  color: "inherit",
});
