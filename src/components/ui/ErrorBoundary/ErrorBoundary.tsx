"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Flex } from "@/components/ui/Flex";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Component, type ErrorInfo, type ReactNode } from "react";

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
        <Stack
          align="center"
          justify="center"
          gap={6}
          sx={{
            p: 8,
            textAlign: "center",
          }}
          style={{ minHeight: "400px" }}
          data-testid="error-boundary"
        >
          <Text variant="h2" color="error">
            Oops! Something went wrong
          </Text>

          <Text variant="body" color="textMuted" sx={{ maxWidth: "prose" }}>
            We encountered an unexpected error. Please try refreshing the page
            or contact support if the problem persists.
          </Text>

          <Flex gap={4} sx={{ marginTop: 8 }}>
            <Button onClick={this.handleReset} variant="secondary">
              Try Again
            </Button>
            <Button onClick={this.handleReload}>Reload Page</Button>
          </Flex>

          {process.env.NODE_ENV === "development" &&
            this.state.error &&
            this.state.errorInfo && (
              <Card
                padding="md"
                sx={{
                  marginTop: 8,
                  maxWidth: "7xl",
                  width: "full",
                  textAlign: "left",
                  overflowX: "auto",
                }}
              >
                <Stack gap={4}>
                  <Text variant="h4">Error Details (Development Only)</Text>
                  <Text
                    variant="bodySm"
                    color="textMuted"
                    style={{
                      fontFamily: "monospace",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    <strong>Error:</strong> {this.state.error.toString()}
                    {"\n\n"}
                    <strong>Stack Trace:</strong>
                    {"\n"}
                    {this.state.errorInfo.componentStack}
                  </Text>
                </Stack>
              </Card>
            )}
        </Stack>
      );
    }

    return this.props.children;
  }
}
