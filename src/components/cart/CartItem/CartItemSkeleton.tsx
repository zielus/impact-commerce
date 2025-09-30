import { Skeleton } from "@/components/ui";
import * as styles from "./CartItemSkeleton.css";

export function CartItemSkeleton() {
  return (
    <div className={styles.skeleton} aria-busy="true" aria-live="polite">
      <Skeleton variant="rectangular" width="80px" height="80px" />
      <div className={styles.content}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="rectangular" width="150px" height="32px" />
      </div>
    </div>
  );
}
