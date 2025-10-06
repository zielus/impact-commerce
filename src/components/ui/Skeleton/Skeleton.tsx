import { sprinkles, type Sprinkles } from "@/styles/sprinkles.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { clsx } from "clsx";
import { skeleton } from "./Skeleton.css";

interface SkeletonProps {
  variant?: NonNullable<RecipeVariants<typeof skeleton>>["variant"];
  width?: string | number;
  height?: string | number;
  sx?: Sprinkles;
  className?: string;
}

export function Skeleton({
  variant = "rectangular",
  width,
  height,
  sx,
  className,
}: SkeletonProps) {
  return (
    <div
      className={clsx(skeleton({ variant }), sx && sprinkles(sx), className)}
      style={{
        width: width
          ? typeof width === "number"
            ? `${width}px`
            : width
          : undefined,
        height: height
          ? typeof height === "number"
            ? `${height}px`
            : height
          : undefined,
      }}
      aria-busy="true"
      aria-live="polite"
    />
  );
}
