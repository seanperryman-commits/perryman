import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic consulting, public speaking, and executive coaching on AI policy, governance, and responsible technology.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
