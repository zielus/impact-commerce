import Link from "next/link";
import * as styles from "./Header.css";

interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} data-testid="home-link">
          <span data-testid="logo-text">Impact</span>
        </Link>
        {children}
      </div>
    </header>
  );
}
