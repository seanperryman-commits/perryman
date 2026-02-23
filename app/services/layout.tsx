import { buildPageMetadata } from "@/lib/site-config";

export const metadata = buildPageMetadata(
  "Services",
  "Strategic consulting, public speaking, and executive coaching on AI policy, governance, and responsible technology.",
  "/services",
);

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
