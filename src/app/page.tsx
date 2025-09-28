import { card, homeContainer } from "./page.css";

export default function HomePage() {
  return (
    <main className={homeContainer()}>
      <h1>Shopping Cart</h1>
      <section className={card()}>
        <p>
          Welcome! This is a placeholder while we wire the rest of the
          experience.
        </p>
        <p>We&apos;ll surface products, cart totals, and actions here soon.</p>
      </section>
    </main>
  );
}
