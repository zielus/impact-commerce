import {
  sprinkleKeys,
  sprinkles,
  type Sprinkles,
} from "@/styles/sprinkles.css";
import { clsx } from "clsx";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

export interface BoxProps<T extends ElementType = "div"> extends Sprinkles {
  as?: T;
  className?: string;
}

/**
 * Box component that splits props into sprinkle-friendly styling props
 * and native HTML attributes.
 *
 * Sprinkle props are handled by the vanilla-extract sprinkles system
 * for type-safe, responsive styling. All other props are passed through
 * as native HTML attributes.
 */
export const Box = forwardRef<
  HTMLElement,
  BoxProps & ComponentPropsWithoutRef<ElementType>
>(({ as: Component = "div", className, children, ...props }, ref) => {
  // Extract sprinkles props from other props using the exported sprinkleKeys
  const sprinkleProps: Record<string, unknown> = {};
  const otherProps: Record<string, unknown> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (sprinkleKeys.has(key as never)) {
      sprinkleProps[key] = value;
    } else {
      otherProps[key] = value;
    }
  });

  return (
    <Component
      ref={ref}
      className={clsx(sprinkles(sprinkleProps as Sprinkles), className)}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

Box.displayName = "Box";
