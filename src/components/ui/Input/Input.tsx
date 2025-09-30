import { forwardRef } from "react";
import { inputRecipe } from "./Input.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={`${inputRecipe({ size, variant })} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
