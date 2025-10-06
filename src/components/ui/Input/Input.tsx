import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { clsx } from "clsx";
import { forwardRef } from "react";
import { inputRecipe } from "./Input.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: NonNullable<RecipeVariants<typeof inputRecipe>>["size"];
  variant?: NonNullable<RecipeVariants<typeof inputRecipe>>["variant"];
  sx?: Sprinkles;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, sx, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={clsx(
          inputRecipe({ size, variant }),
          sx && sprinkles(sx),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
