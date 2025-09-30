import * as styles from "./CategoryCardSkeleton.css";

export function CategoryCardSkeleton() {
  return (
    <div className={styles.skeleton} aria-busy="true" aria-live="polite" />
  );
}
