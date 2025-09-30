import { clsx } from "clsx";
import { forwardRef } from "react";
import { buttonRecipe } from "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        className={clsx(buttonRecipe({ variant, size }), className)}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
