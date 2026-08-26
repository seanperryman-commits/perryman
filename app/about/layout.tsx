import { buildPageMetadata } from "@/lib/site-config";

export const metadata = buildPageMetadata(
  "About",
  "Sean Perryman bridges the gap between technological innovation and responsible governance — from Capitol Hill to Silicon Valley to the classroom.",
  "/about",
);

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
