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
- Run with `pnpm test:e2e` or use UI mode with `pnpm test:e2e:ui` for debugging
- Playwright configuration in `playwright.config.ts` includes both desktop and mobile viewports

## 🔧 Development Workflow

1. Run `pnpm dev` for local development and leverage React Fast Refresh.
2. Keep domain logic in `src/services` or `src/hooks` to maintain thin route handlers.
3. Use `pnpm lint` and `pnpm format:check` before committing; Husky will run lint-staged on staged files.
4. Ensure TypeScript and Vitest pass locally (`pnpm type-check`, `pnpm test`) ahead of each pull request.

## 🔮 Future Improvements

Given more time and resources, the following enhancements would elevate this application to a production-ready, enterprise-grade solution:

### Authentication & User Management

- **User Authentication**: Implement NextAuth.js or Clerk for secure authentication with OAuth providers (Google, GitHub)
- **User Profiles**: Allow users to save shipping addresses, payment methods, and order preferences
- **Saved Carts**: Persist carts across devices with user accounts and cloud synchronization
- **Order History**: Track past purchases with detailed order information and delivery status

### Backend & Database

- **Real Backend API**: Replace FakeStore API with a production backend (Node.js/Express, tRPC, or Next.js API routes)
- **Database Integration**: Use PostgreSQL with Prisma ORM for structured data management
- **Inventory Management**: Real-time stock tracking with low-stock alerts and automatic reordering
- **Product Management**: Admin dashboard for CRUD operations on products, categories, and pricing

### Enhanced Shopping Experience

- **Product Search**: Full-text search with Algolia or Meilisearch for instant results
- **Advanced Filtering**: Filter by price range, ratings, availability, brands, and custom attributes
- **Product Reviews**: User-generated reviews with ratings, photos, and verified purchase badges
- **Wishlist**: Save products for later with email reminders for price drops
- **Product Recommendations**: AI-powered suggestions based on browsing history and purchase patterns

### Checkout & Payments

- **Complete Checkout Flow**: Multi-step checkout with shipping, billing, and payment information
- **Payment Integration**: Stripe or PayPal for secure payment processing
- **Multiple Payment Methods**: Credit cards, digital wallets (Apple Pay, Google Pay), buy-now-pay-later
- **Tax Calculation**: Automatic tax calculation based on shipping location
- **Shipping Options**: Multiple carriers with real-time rate calculation and tracking integration

### Performance & Optimization

- **Advanced Caching**: Redis for session management and frequently accessed data
- **CDN Integration**: CloudFlare or Vercel Edge for global content delivery
- **Image Optimization**: WebP/AVIF format conversion with responsive image serving
- **Code Splitting**: Route-based and component-based code splitting for faster initial loads
- **ISR & SSG**: Incremental Static Regeneration for product pages with on-demand revalidation
- **Database Query Optimization**: Indexing, query caching, and connection pooling

### Monitoring & Analytics

- **Error Tracking**: Sentry integration for production error monitoring and alerting
- **Analytics**: PostHog or Mixpanel for user behavior tracking and conversion funnels
- **Performance Monitoring**: Web Vitals tracking with Vercel Analytics or Lighthouse CI
- **A/B Testing**: Feature flags and experiments to optimize conversion rates
- **Business Intelligence**: Custom dashboards for sales metrics, inventory reports, and customer insights

### Developer Experience

- **API Documentation**: OpenAPI/Swagger specs for backend APIs
- **Storybook**: Isolated component development and visual regression testing
- **E2E Testing**: Comprehensive Playwright tests in CI/CD pipeline
- **Performance Budgets**: Automated bundle size checks and performance regression detection
- **Code Generation**: GraphQL Codegen or similar tools for type-safe API clients

### Internationalization & Accessibility

- **i18n Support**: next-intl for multi-language support with localized content
- **Currency Conversion**: Display prices in user's local currency with real-time exchange rates
- **RTL Support**: Right-to-left layout for Arabic, Hebrew, and other RTL languages
- **WCAG AAA Compliance**: Full accessibility audit with screen reader optimization
- **Keyboard Navigation**: Complete keyboard-only navigation support

### Marketing & SEO

- **SEO Optimization**: Dynamic meta tags, structured data (JSON-LD), and XML sitemaps
- **Social Sharing**: Open Graph and Twitter Card meta tags with preview images
- **Email Marketing**: Automated email campaigns for abandoned carts, promotions, and newsletters
- **Discount Codes**: Coupon system with percentage/fixed discounts and usage limits
- **Referral Program**: Refer-a-friend system with incentives and tracking

### Security & Compliance

- **Data Encryption**: End-to-end encryption for sensitive user data
- **GDPR Compliance**: Cookie consent, data export/deletion, and privacy policy
- **PCI DSS**: Compliance for credit card processing (handled by payment provider)
- **Rate Limiting**: API rate limiting to prevent abuse and DDoS attacks
- **Security Audits**: Regular penetration testing and vulnerability scanning

### Mobile Experience

- **Progressive Web App**: Offline support, push notifications, and install prompts
- **Native Mobile Apps**: React Native or Flutter apps for iOS and Android
- **Mobile-First Design**: Optimized touch interactions and mobile-specific features
- **App Store Optimization**: Keywords, screenshots, and ratings management

This roadmap prioritizes scalability, maintainability, and user experience while adhering to industry best practices for modern e-commerce applications.
