import { forwardRef } from "react";
import { iconButtonRecipe } from "./IconButton.css";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, type = "button", children, ...props }, ref) => {
    return (
      <button
        className={`${iconButtonRecipe({ variant, size })} ${className || ""}`}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
