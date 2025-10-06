import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { clsx } from "clsx";
import { forwardRef } from "react";
import { cardRecipe } from "./Card.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: NonNullable<RecipeVariants<typeof cardRecipe>>["padding"];
  interaction?: NonNullable<RecipeVariants<typeof cardRecipe>>["interaction"];
  elevation?: NonNullable<RecipeVariants<typeof cardRecipe>>["elevation"];
  sx?: Sprinkles;
  children?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, padding, interaction, elevation, sx, children, ...props },
    ref
  ) => {
    return (
      <div
        className={clsx(
          cardRecipe({ padding, interaction, elevation }),
          sx && sprinkles(sx),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
