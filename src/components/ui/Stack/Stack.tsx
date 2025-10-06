import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import { clsx } from "clsx";
import { forwardRef } from "react";

type PolymorphicStackProps<C extends React.ElementType> = {
  as?: C;
  justify?: Sprinkles["justifyContent"];
  align?: Sprinkles["alignItems"];
  gap?: Sprinkles["gap"];
  inline?: boolean;
  sx?: Sprinkles;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className">;

interface StackComponent {
  <C extends React.ElementType = "div">(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: PolymorphicStackProps<C> & { ref?: React.Ref<any> }
  ): React.ReactElement | null;
  displayName?: string;
}

export const Stack = forwardRef(function StackInner<
  C extends React.ElementType = "div",
>(
  {
    as,
    justify,
    align,
    gap,
    inline,
    sx,
    className,
    children,
    ...props
  }: PolymorphicStackProps<C>,
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
          flexDirection: "column",
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
}) as unknown as StackComponent;

Stack.displayName = "Stack";

export type { PolymorphicStackProps as StackProps };
