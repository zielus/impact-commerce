import styled, { css, keyframes, type DefaultTheme } from "styled-components";

import type { ButtonSize, ButtonVariant } from "./Button";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $isLoading: boolean;
}

const getVariantStyles = ({
  theme,
  $variant,
}: {
  theme: DefaultTheme;
  $variant: ButtonVariant;
}) => {
  switch ($variant) {
    case "secondary":
      return css`
        color: ${theme.colors.secondary[900]};
        background: ${theme.colors.secondary[100]};
        border-color: ${theme.colors.secondary[300]};

        &:hover:not(:disabled) {
          background: ${theme.colors.secondary[200]};
          box-shadow: ${theme.shadows.base};
        }

        &:active:not(:disabled) {
          background: ${theme.colors.secondary[300]};
        }
      `;
    case "outline":
      return css`
        color: ${theme.colors.secondary[900]};
        background: transparent;
        border-color: ${theme.colors.secondary[400]};

        &:hover:not(:disabled) {
          background: ${theme.colors.secondary[100]};
          color: ${theme.colors.secondary[900]};
        }

        &:active:not(:disabled) {
          background: ${theme.colors.secondary[200]};
        }
      `;
    case "ghost":
      return css`
        color: ${theme.colors.secondary[700]};
        background: transparent;
        border-color: transparent;

        &:hover:not(:disabled) {
          background: ${theme.colors.secondary[100]};
          color: ${theme.colors.secondary[800]};
        }

        &:active:not(:disabled) {
          background: ${theme.colors.secondary[200]};
        }
      `;
    case "danger":
      return css`
        color: ${theme.colors.white};
        background: ${theme.colors.error[600]};
        border-color: ${theme.colors.error[600]};
        box-shadow: ${theme.shadows.base};

        &:hover:not(:disabled) {
          background: ${theme.colors.error[500]};
          box-shadow: ${theme.shadows.md};
        }

        &:active:not(:disabled) {
          background: ${theme.colors.error[700]};
        }
      `;
    default:
      return css`
        color: ${theme.colors.white};
        background: ${theme.colors.primary[600]};
        border-color: ${theme.colors.primary[600]};
        box-shadow: ${theme.shadows.base};

        &:hover:not(:disabled) {
          background: ${theme.colors.primary[500]};
          box-shadow: ${theme.shadows.md};
        }

        &:active:not(:disabled) {
          background: ${theme.colors.primary[700]};
        }
      `;
  }
};

const getSizeStyles = ({
  theme,
  $size,
}: {
  theme: DefaultTheme;
  $size: ButtonSize;
}) => {
  switch ($size) {
    case "sm":
      return css`
        height: 2rem;
        padding: ${theme.spacing[1]} ${theme.spacing[3]};
        font-size: ${theme.typography.fontSize.sm};
      `;
    case "lg":
      return css`
        height: 3rem;
        padding: ${theme.spacing[3]} ${theme.spacing[6]};
        font-size: ${theme.typography.fontSize.lg};
      `;
    default:
      return css`
        height: 2.5rem;
        padding: ${theme.spacing[2]} ${theme.spacing[5]};
        font-size: ${theme.typography.fontSize.base};
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  line-height: 1.25;
  transition:
    background-color ${({ theme }) => theme.animation.duration.fast}
      ${({ theme }) => theme.animation.easing.easeOut},
    color ${({ theme }) => theme.animation.duration.fast}
      ${({ theme }) => theme.animation.easing.easeOut},
    box-shadow ${({ theme }) => theme.animation.duration.fast}
      ${({ theme }) => theme.animation.easing.easeOut},
    transform ${({ theme }) => theme.animation.duration.fast}
      ${({ theme }) => theme.animation.easing.easeOut};
  will-change: background-color, color, box-shadow, transform;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};

  ${({ theme, $variant }) => getVariantStyles({ theme, $variant })};
  ${({ theme, $size }) => getSizeStyles({ theme, $size })};

  &:focus-visible {
    box-shadow: ${({ theme }) =>
      `${theme.shadows.md}, 0 0 0 4px ${theme.colors.primary[100]}`};
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  }

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      cursor: wait;
    `};
`;

export const StyledLabel = styled.span<{ $isLoading: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: opacity ${({ theme }) => theme.animation.duration.fast}
    ${({ theme }) => theme.animation.easing.easeOut};
  opacity: ${({ $isLoading }) => ($isLoading ? 0.85 : 1)};
`;

export const StyledIconSlot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
`;

export const StyledSpinner = styled.span`
  display: inline-flex;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-top-color: transparent;
  animation: ${spin} ${({ theme }) => theme.animation.duration.slow} linear
    infinite;
`;

export const StyledScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
