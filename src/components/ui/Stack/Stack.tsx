import { type ResponsiveValue } from "@/styles/sprinkles.css";
import { forwardRef } from "react";
import { Box, type BoxProps } from "../Box";

export interface StackProps
  extends Omit<BoxProps, "display" | "flexDirection"> {
  /** Direction of the stack */
  direction?: ResponsiveValue<
    "row" | "column" | "row-reverse" | "column-reverse"
  >;
  /** Spacing between items */
  spacing?: ResponsiveValue<"none" | "xs" | "sm" | "md" | "lg" | "xl">;
  /** Alignment of items along the cross axis */
  align?: ResponsiveValue<
    "stretch" | "flex-start" | "center" | "flex-end" | "baseline"
  >;
  /** Justification of items along the main axis */
  justify?: ResponsiveValue<
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
  >;
  /** Whether to wrap items */
  wrap?: ResponsiveValue<"nowrap" | "wrap" | "wrap-reverse">;
}

export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      direction = "column",
      spacing = "md",
      align = "stretch",
      justify = "flex-start",
      wrap = "nowrap",
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        display="flex"
        flexDirection={direction}
        gap={spacing}
        alignItems={align}
        justifyContent={justify}
        flexWrap={wrap}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";

/** Horizontal stack (row direction) */
export const HStack = forwardRef<HTMLElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="row" {...props} />
);

HStack.displayName = "HStack";

/** Vertical stack (column direction) */
export const VStack = forwardRef<HTMLElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="column" {...props} />
);

VStack.displayName = "VStack";
