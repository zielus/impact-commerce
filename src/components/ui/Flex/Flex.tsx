import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import { clsx } from "clsx";
import { forwardRef } from "react";

type PolymorphicFlexProps<C extends React.ElementType> = {
  as?: C;
  direction?: Sprinkles["flexDirection"];
  wrap?: Sprinkles["flexWrap"];
  justify?: Sprinkles["justifyContent"];
  align?: Sprinkles["alignItems"];
  gap?: Sprinkles["gap"];
  inline?: boolean;
  sx?: Sprinkles;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className">;

interface FlexComponent {
  <C extends React.ElementType = "div">(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: PolymorphicFlexProps<C> & { ref?: React.Ref<any> }
  ): React.ReactElement | null;
  displayName?: string;
}

export const Flex = forwardRef(function FlexInner<
  C extends React.ElementType = "div",
>(
  {
    as,
    direction,
    wrap,
    justify,
    align,
    gap,
    inline,
    sx,
    className,
    children,
    ...props
  }: PolymorphicFlexProps<C>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref}
      className={clsx(
        sprinkles({
          display: inline ? "inline-flex" : "flex",
          flexDirection: direction,
          flexWrap: wrap,
          justifyContent: justify,
          alignItems: align,
          gap,
          ...sx,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}) as unknown as FlexComponent;

Flex.displayName = "Flex";

export type { PolymorphicFlexProps as FlexProps };
