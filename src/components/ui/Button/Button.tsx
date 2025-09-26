"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import {
  StyledButton,
  StyledIconSlot,
  StyledLabel,
  StyledScreenReaderText,
  StyledSpinner,
} from "./Button.styles";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      leadingIcon,
      trailingIcon,
      disabled,
      type = "button",
      ...rest
    },
    ref
  ) {
    const isDisabled = Boolean(disabled) || isLoading;

    return (
      <StyledButton
        ref={ref}
        type={type}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $isLoading={isLoading}
        disabled={isDisabled}
        aria-busy={isLoading}
        aria-live={isLoading ? "polite" : undefined}
        data-variant={variant}
        data-size={size}
        data-loading={isLoading ? "true" : undefined}
        {...rest}
      >
        {isLoading ? (
          <StyledIconSlot aria-hidden="true">
            <StyledSpinner data-testid="button-spinner" />
          </StyledIconSlot>
        ) : null}

        {!isLoading && leadingIcon ? (
          <StyledIconSlot aria-hidden="true">{leadingIcon}</StyledIconSlot>
        ) : null}

        <StyledLabel $isLoading={isLoading}>{children}</StyledLabel>

        {!isLoading && trailingIcon ? (
          <StyledIconSlot aria-hidden="true">{trailingIcon}</StyledIconSlot>
        ) : null}

        {isLoading ? (
          <StyledScreenReaderText>Loading</StyledScreenReaderText>
        ) : null}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
