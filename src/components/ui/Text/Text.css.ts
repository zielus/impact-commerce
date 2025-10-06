import { sprinkles } from "@/styles/sprinkles.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

const truncateOneLine = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const clampMulti = styleVariants({
  "2": {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
  },
  "3": {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
  },
  "4": {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 4,
    overflow: "hidden",
  },
  "5": {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 5,
    overflow: "hidden",
  },
  "6": {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 6,
    overflow: "hidden",
  },
});

export const textRecipe = recipe({
  base: [
    sprinkles({ m: 0 }), // avoid unexpected margins in flow
  ],
  variants: {
    variant: {
      h1: sprinkles({
        fontSize: "4xl",
        lineHeight: "tight",
        fontWeight: "bold",
      }),
      h2: sprinkles({
        fontSize: "3xl",
        lineHeight: "tight",
        fontWeight: "bold",
      }),
      h3: sprinkles({
        fontSize: "2xl",
        lineHeight: "tight",
        fontWeight: "semibold",
      }),
      h4: sprinkles({
        fontSize: "xl",
        lineHeight: "normal",
        fontWeight: "semibold",
      }),
      h5: sprinkles({
        fontSize: "lg",
        lineHeight: "normal",
        fontWeight: "medium",
      }),
      h6: sprinkles({
        fontSize: "base",
        lineHeight: "normal",
        fontWeight: "medium",
      }),
      body: sprinkles({
        fontSize: "base",
        lineHeight: "relaxed",
        fontWeight: "normal",
      }),
      bodySm: sprinkles({
        fontSize: "sm",
        lineHeight: "relaxed",
        fontWeight: "normal",
      }),
      caption: sprinkles({
        fontSize: "xs",
        lineHeight: "normal",
        fontWeight: "medium",
      }),
      overline: style([
        sprinkles({
          fontSize: "xs",
          lineHeight: "normal",
          fontWeight: "medium",
        }),
        {
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        },
      ]),
    },
    truncate: {
      true: truncateOneLine,
      false: "",
    },
  },
  defaultVariants: {
    variant: "body",
    truncate: false,
  },
});

export type TextRecipeVariants = RecipeVariants<typeof textRecipe>;
export { clampMulti };
