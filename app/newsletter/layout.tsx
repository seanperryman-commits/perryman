import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Human Cost — Newsletter",
  description:
    "AI's impact on what makes us human. Essays, insights, and provocations at the intersection of technology and humanity by Sean Perryman.",
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
