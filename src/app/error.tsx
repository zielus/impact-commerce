"use client";

import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console in development
    console.error("Application error:", error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "1rem",
        }}
      >
        Something went wrong!
      </h1>
      <p
        style={{
          fontSize: "1.125rem",
          marginBottom: "2rem",
          maxWidth: "600px",
          opacity: 0.8,
        }}
      >
        We encountered an unexpected error. Please try again or return to the
        home page.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Button onClick={() => reset()}>Try Again</Button>
        <Button
          onClick={() => (window.location.href = "/")}
          variant="secondary"
        >
          Go Home
        </Button>
      </div>

      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            maxWidth: "800px",
            textAlign: "left",
            overflow: "auto",
          }}
        >
          <h2>Error Details (Development Only)</h2>
          <pre
            style={{
              fontSize: "0.875rem",
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {error.message}
            {error.digest && `\nDigest: ${error.digest}`}
          </pre>
        </div>
      )}
    </div>
  );
}
