import { clampMulti, textRecipe } from "@/components/ui/Text/Text.css";
import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { clsx } from "clsx";
import { forwardRef } from "react";

type TextVariant = NonNullable<RecipeVariants<typeof textRecipe>>["variant"];

type OwnProps = {
  variant?: TextVariant;
  inline?: boolean;
  truncate?: boolean | 2 | 3 | 4 | 5 | 6;
  color?: Sprinkles["color"];
  align?: Sprinkles["textAlign"];
  weight?: Sprinkles["fontWeight"];
  transform?: Sprinkles["textTransform"];
  sx?: Sprinkles;
  className?: string;
  children?: React.ReactNode;
};

type PolymorphicTextProps<C extends React.ElementType> = OwnProps &
  Omit<
    React.ComponentPropsWithoutRef<C>,
    "as" | "color" | "className" | "children"
  > & {
    as?: C;
  };

interface TextComponent {
  <C extends React.ElementType = "p">(
    props: PolymorphicTextProps<C> & { ref?: React.Ref<Element> }
  ): React.ReactElement | null;
  displayName?: string;
}

const defaultElement: Record<NonNullable<TextVariant>, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  bodySm: "p",
  caption: "span",
  overline: "span",
};

export const Text = forwardRef(function TextInner<
  C extends React.ElementType = "p",
>(
  {
    as,
    variant = "body",
    inline,
    truncate = false,
    color,
    align,
    weight,
    transform,
    sx,
    className,
    children,
    ...rest
  }: PolymorphicTextProps<C>,
  ref: React.Ref<Element>
) {
  const Component = as ?? defaultElement[variant ?? "body"];

  const clampClass =
    typeof truncate === "number"
      ? clampMulti[String(truncate) as keyof typeof clampMulti]
      : undefined;

  return (
    <Component
      ref={ref}
      className={clsx(
        textRecipe({ variant, truncate: truncate === true }),
        clampClass,
        sprinkles({
          color,
          textAlign: align,
          fontWeight: weight,
          textTransform: transform,
          display: inline ? "inline-block" : undefined,
          ...sx,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}) as unknown as TextComponent;

Text.displayName = "Text";

export type { PolymorphicTextProps as TextProps };
