import { buildPageMetadata } from "@/lib/site-config";

export const metadata = buildPageMetadata(
  "The Human Cost — Newsletter",
  "AI's impact on what makes us human. Essays, insights, and provocations at the intersection of technology and humanity by Sean Perryman.",
  "/newsletter",
);

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
