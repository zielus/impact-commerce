import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { clsx } from "clsx";
import { forwardRef } from "react";
import { badgeRecipe } from "./Badge.css";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: NonNullable<RecipeVariants<typeof badgeRecipe>>["variant"];
  size?: NonNullable<RecipeVariants<typeof badgeRecipe>>["size"];
  sx?: Sprinkles;
  children: React.ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, sx, children, ...props }, ref) => {
    return (
      <span
        className={clsx(
          badgeRecipe({ variant, size }),
          sx && sprinkles(sx),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
