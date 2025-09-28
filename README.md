# Impact Commerce

A modern e-commerce web application built with Next.js 15, React 19, and TypeScript. The storefront showcases product categories, supports cart interactions, and ships with responsive, accessible UI primitives.

## 🚀 Features

### Core Functionality
- **Main Page**: Discover featured categories and highlighted products with smooth client-side transitions.
- **Category Views**: Browse inventory by category, inspect product details, and add items to the cart.
- **Shopping Cart**: Manage quantities, remove items, and track totals with persisted state between sessions.
- **Responsive Design**: Vanilla-extract powered design tokens keep layouts consistent across breakpoints.

## 🛠 Tech Stack

- **Framework**: Next.js 15 App Router
- **Frontend**: React 19, TypeScript, vanilla-extract
- **Data Layer**: TanStack Query for server data fetching and caching
- **Icons**: @radix-ui/react-icons
- **Testing**: Vitest, React Testing Library, jsdom
- **Developer Tooling**: pnpm, ESLint 9, Prettier 3, Husky + lint-staged

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (preferred package manager)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd impact-commerce

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open http://localhost:3000 to view the application.

### Available Scripts

```bash
# Development
pnpm dev               # Start development server
pnpm build             # Build for production
pnpm start             # Serve the production build

# Code Quality
pnpm lint              # Run ESLint with the Next.js config
pnpm lint:fix          # Apply available ESLint fixes
pnpm format            # Format with Prettier and organize imports
pnpm format:check      # Verify formatting without writing changes
pnpm type-check        # Run TypeScript in noEmit mode

# Testing
pnpm test              # Execute the full Vitest suite
pnpm test:watch        # Watch mode for rapid feedback
pnpm test:ui           # Vitest UI for debugging
pnpm test:coverage     # Generate coverage reports
```

## 🏗 Project Structure

```
src/
├── app/              # Next.js routes, layouts, and server actions
├── components/       # Reusable UI and feature-level components
├── hooks/            # Shared React hooks (data + UI helpers)
├── services/         # Domain and API-facing utilities
├── styles/           # Vanilla-extract themes, sprinkles, and contracts
public/               # Static assets served by Next.js
tests/                # Vitest specs (integration, contracts, utilities)
```

## 🧪 Testing

- Tests live in the top-level `tests/` directory, with dedicated folders for integration and contract scenarios.
- Vitest configuration is centralized in `vitest.config.ts`; `tests/setup.ts` wires Testing Library helpers and jsdom globals.
- Generate coverage with `pnpm test:coverage` and inspect `coverage/index.html` for gaps before opening a PR.

## 🔧 Development Workflow

1. Run `pnpm dev` for local development and leverage React Fast Refresh.
2. Keep domain logic in `src/services` or `src/hooks` to maintain thin route handlers.
3. Use `pnpm lint` and `pnpm format:check` before committing; Husky will run lint-staged on staged files.
4. Ensure TypeScript and Vitest pass locally (`pnpm type-check`, `pnpm test`) ahead of each pull request.
