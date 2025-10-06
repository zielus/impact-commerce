import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { clsx } from "clsx";
import { forwardRef } from "react";
import { button } from "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: NonNullable<RecipeVariants<typeof button>>["variant"];
  size?: NonNullable<RecipeVariants<typeof button>>["size"];
  fullWidth?: NonNullable<RecipeVariants<typeof button>>["fullWidth"];
  loading?: NonNullable<RecipeVariants<typeof button>>["loading"];
  sx?: Sprinkles;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading,
      sx,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={clsx(
          button({ variant, size, fullWidth, loading }),
          sx && sprinkles(sx),
          className
        )}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
