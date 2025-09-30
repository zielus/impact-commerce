import { Skeleton } from "@/components/ui";
import * as styles from "./ProductCardSkeleton.css";

export function ProductCardSkeleton() {
  return (
    <div className={styles.skeleton} aria-busy="true" aria-live="polite">
      <div className={styles.imageSkeleton} />
      <div className={styles.content}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="rectangular" width="100%" height="36px" />
      </div>
    </div>
  );
}
