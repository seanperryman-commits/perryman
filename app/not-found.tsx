import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center bg-background">
      <Container size="narrow" className="text-center py-24">
        <h1 className="font-heading text-h1 text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-body text-text-secondary mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-body font-semibold h-12 px-7 text-base rounded-lg bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Return Home
        </Link>
      </Container>
    </section>
  );
}
