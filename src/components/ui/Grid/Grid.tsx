import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import { clsx } from "clsx";
import { forwardRef } from "react";

type PolymorphicGridProps<C extends React.ElementType> = {
  as?: C;
  columns?: Sprinkles["gridTemplateColumns"];
  gap?: Sprinkles["gap"];
  columnGap?: Sprinkles["columnGap"];
  rowGap?: Sprinkles["rowGap"];
  sx?: Sprinkles;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className">;

interface GridComponent {
  <C extends React.ElementType = "div">(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: PolymorphicGridProps<C> & { ref?: React.Ref<any> }
  ): React.ReactElement | null;
  displayName?: string;
}

export const Grid = forwardRef(function GridInner<
  C extends React.ElementType = "div",
>(
  {
    as,
    columns,
    gap,
    columnGap,
    rowGap,
    sx,
    className,
    children,
    ...props
  }: PolymorphicGridProps<C>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref}
      className={clsx(
        sprinkles({
          display: "grid",
          gridTemplateColumns: columns,
          gap,
          columnGap,
          rowGap,
          ...sx,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}) as unknown as GridComponent;

Grid.displayName = "Grid";

export type { PolymorphicGridProps as GridProps };
