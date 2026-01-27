import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sean Perryman bridges the gap between technological innovation and responsible governance — from Capitol Hill to Silicon Valley to the classroom.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
