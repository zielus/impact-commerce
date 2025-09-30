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

# Install Playwright browsers (required for E2E tests)
pnpm exec playwright install chromium webkit

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

# E2E Testing
pnpm test:e2e          # Run Playwright end-to-end tests
pnpm test:e2e:ui       # Run E2E tests in UI mode
pnpm test:e2e:headed   # Run E2E tests in headed browser
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

### Unit & Integration Tests

- Unit and integration tests live in the top-level `tests/` directory and co-located with source files
- Vitest configuration is centralized in `vitest.config.ts`; `tests/setup.ts` wires Testing Library helpers and jsdom globals
- Generate coverage with `pnpm test:coverage` and inspect `coverage/index.html` for gaps before opening a PR

### End-to-End Tests

- E2E tests use Playwright and live in `tests/e2e/`
- Tests cover critical user flows: category browsing, adding to cart, cart management, and cart persistence
- **First-time setup**: Install Playwright browsers with `pnpm exec playwright install chromium webkit`
- Run with `pnpm test:e2e` or use UI mode with `pnpm test:e2e:ui` for debugging
- Playwright configuration in `playwright.config.ts` includes both desktop and mobile viewports

## 🔧 Development Workflow

1. Run `pnpm dev` for local development and leverage React Fast Refresh.
2. Keep domain logic in `src/services` or `src/hooks` to maintain thin route handlers.
3. Use `pnpm lint` and `pnpm format:check` before committing; Husky will run lint-staged on staged files.
4. Ensure TypeScript and Vitest pass locally (`pnpm type-check`, `pnpm test`) ahead of each pull request.

## 🚀 Future Improvements

The following enhancements could be implemented:

Definately a nicer, better polished design would be awesome, but making it takes much more time and could be difficult without the storybook (at least):

### Application Features

- Implement user authentication and account management
- Add checkout flow with payment integration
- Implement order history and tracking
- Add inventory management and stock indicators
- Add product detail pages with full descriptions and image galleries
- Implement search functionality with autocomplete and filters
- Add sorting options (price, popularity, rating)
- Add product comparison feature
- Implement user reviews and ratings system
- Add loading skeletons and better error states throughout
- Add internationalization (i18n) support
- Implement proper SEO optimization with metadata

### Developer Experience

- Increase test coverage to 90%+
- Implement proper logging and monitoring (Sentry)
- Add analytics tracking (Google Analytics)
- Add design system documentation
- Add Storybook for component documentation
- Add CI/CD pipeline with automated deployments
- Implement feature flags for gradual rollouts
- Implement contract testing for API integration

The order of mentioned features/improvements is random and not all of them can be implemented using FakeStoreAPI. Also, it would be really awesome to create a beautiful design.
