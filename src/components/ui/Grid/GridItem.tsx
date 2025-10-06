import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import { clsx } from "clsx";
import { forwardRef } from "react";

type PolymorphicGridItemProps<C extends React.ElementType> = {
  as?: C;
  column?: Sprinkles["gridColumn"];
  sx?: Sprinkles;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className">;

interface GridItemComponent {
  <C extends React.ElementType = "div">(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: PolymorphicGridItemProps<C> & { ref?: React.Ref<any> }
  ): React.ReactElement | null;
  displayName?: string;
}

export const GridItem = forwardRef(function GridItemInner<
  C extends React.ElementType = "div",
>(
  {
    as,
    column,
    sx,
    className,
    children,
    ...props
  }: PolymorphicGridItemProps<C>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref}
      className={clsx(
        sprinkles({
          gridColumn: column,
          ...sx,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}) as unknown as GridItemComponent;

GridItem.displayName = "GridItem";

export type { PolymorphicGridItemProps as GridItemProps };
