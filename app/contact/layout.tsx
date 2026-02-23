import { buildPageMetadata } from "@/lib/site-config";

export const metadata = buildPageMetadata(
  "Contact",
  "Get in touch with Sean Perryman for AI policy consulting, speaking engagements, or executive coaching.",
  "/contact",
);

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
