"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center bg-background">
      <Container size="narrow" className="text-center py-24">
        <h1 className="font-heading text-h1 text-text-primary mb-4">
          Something Went Wrong
        </h1>
        <p className="font-body text-body text-text-secondary mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center font-body font-semibold h-12 px-7 text-base rounded-lg bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Try Again
        </button>
      </Container>
    </section>
  );
}
