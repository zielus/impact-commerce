# Impact Commerce

A modern e-commerce web application built with Next.js 15, React 19, and TypeScript, featuring a complete shopping experience with product categories, cart functionality, and responsive design.

## 🚀 Features

### Core Functionality

- **Main Page**: Browse all product categories with seamless navigation
- **Category Pages**: View products by category with detailed information and add-to-cart functionality
- **Shopping Cart**: Full cart management with quantity updates, item removal, and session persistence
- **Responsive Design**: Optimized for both mobile and desktop experiences

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript, styled-components
- **State Management**: TanStack Query + Zustand
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library
- **Development**: pnpm, ESLint, Prettier, Turbopack

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

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

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
# Development
pnpm dev              # Start development server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Format code with Prettier
pnpm type-check       # TypeScript type checking

# Testing
pnpm test             # Run test suite
pnpm test:watch       # Run tests in watch mode
pnpm test:ui          # Run tests with Vitest UI
pnpm test:coverage    # Generate coverage report
```

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── cart/              # Cart page
│   ├── category/[slug]/   # Category pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── providers.tsx      # App providers (Query, Theme)
├── components/
│   ├── features/          # Feature-specific components
│   │   ├── cart/         # Cart functionality
│   │   ├── categories/   # Category management
│   │   └── products/     # Product components
│   └── ui/               # Reusable UI primitives
│       ├── Button/       # Button component with variants
│       └── Header/       # Navigation header
├── services/             # API clients and integrations
├── stores/               # Zustand state stores
├── styles/               # Theme system and global styles
├── types/                # TypeScript type definitions
├── hooks/                # Custom React hooks
└── utils/                # Utility functions
```

## 🧪 Testing

The project uses a comprehensive testing strategy:

- **Unit Tests**: Co-located with components using Vitest + React Testing Library
- **Integration Tests**: End-to-end workflows in `tests/integration/`
- **Contract Tests**: API integration testing in `tests/contracts/`

## 🔧 Development Workflow

1. **Testing**: Write tests alongside implementation
2. **Type Safety**: Leverage TypeScript strict mode
3. **Code Quality**: Automated linting and formatting
4. **Performance**: Turbopack for fast builds and HMR
