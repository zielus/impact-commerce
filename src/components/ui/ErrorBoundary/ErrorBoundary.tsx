"use client";

import { Button } from "@/components/ui";
import { Component, type ErrorInfo, type ReactNode } from "react";
import * as styles from "./ErrorBoundary.css";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    this.setState({
      errorInfo,
    });

    // Call optional error handler
    this.props.onError?.(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = (): void => {
    window.location.reload();
  };

  override render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className={styles.container} data-testid="error-boundary">
          <h1 className={styles.title}>Oops! Something went wrong</h1>
          <p className={styles.message}>
            We encountered an unexpected error. Please try refreshing the page
            or contact support if the problem persists.
          </p>

          <div className={styles.actions}>
            <Button onClick={this.handleReset} variant="secondary">
              Try Again
            </Button>
            <Button onClick={this.handleReload}>Reload Page</Button>
          </div>

          {process.env.NODE_ENV === "development" &&
            this.state.error &&
            this.state.errorInfo && (
              <div className={styles.details}>
                <h2>Error Details (Development Only)</h2>
                <div className={styles.stackTrace}>
                  <strong>Error:</strong> {this.state.error.toString()}
                  {"\n\n"}
                  <strong>Stack Trace:</strong>
                  {"\n"}
                  {this.state.errorInfo.componentStack}
                </div>
              </div>
            )}
        </div>
      );
    }

    return this.props.children;
  }
}
