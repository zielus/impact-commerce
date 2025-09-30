import * as styles from "./Skeleton.css";

interface SkeletonProps {
  variant?: "text" | "rectangular" | "circular";
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function Skeleton({
  variant = "rectangular",
  width,
  height,
  className,
}: SkeletonProps) {
  return (
    <div
      className={`${styles.skeleton({ variant })} ${className || ""}`}
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
