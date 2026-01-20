import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MockupOne } from "../_components/MockupOne";
import { MockupTwo } from "../_components/MockupTwo";
import { MockupThree } from "../_components/MockupThree";
import { MockupFour } from "../_components/MockupFour";
import { MockupFive } from "../_components/MockupFive";
import { mockupMeta } from "../_components/mockupData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return mockupMeta.map((mockup) => ({
    id: mockup.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const mockup = mockupMeta.find((m) => m.id === id);

  if (!mockup) {
    return {
      title: "Mockup Not Found",
    };
  }

  return {
    title: `${mockup.name} - Design Mockup`,
    description: mockup.description,
  };
}

const mockupComponents: Record<string, React.ComponentType> = {
  "1": MockupOne,
  "2": MockupTwo,
  "3": MockupThree,
  "4": MockupFour,
  "5": MockupFive,
};

export default async function MockupPage({ params }: PageProps) {
  const { id } = await params;
  const MockupComponent = mockupComponents[id];
  const mockup = mockupMeta.find((m) => m.id === id);

  if (!MockupComponent || !mockup) {
    notFound();
  }

  const currentIndex = mockupMeta.findIndex((m) => m.id === id);
  const prevMockup = currentIndex > 0 ? mockupMeta[currentIndex - 1] : null;
  const nextMockup =
    currentIndex < mockupMeta.length - 1 ? mockupMeta[currentIndex + 1] : null;

  return (
    <>
      {/* Floating Navigation */}
      <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full bg-[#1A1A1A]/90 px-4 py-2 shadow-2xl backdrop-blur-sm">
          {prevMockup && (
            <Link
              href={`/mockups/${prevMockup.id}`}
              className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {prevMockup.name}
            </Link>
          )}
          <Link
            href="/mockups"
            className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
          >
            All Options
          </Link>
          {nextMockup && (
            <Link
              href={`/mockups/${nextMockup.id}`}
              className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {nextMockup.name}
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Mockup Label */}
      <div className="fixed left-6 top-6 z-[100]">
        <div className="rounded-lg bg-[#1A1A1A]/90 px-4 py-2 shadow-lg backdrop-blur-sm">
          <p className="text-xs font-medium text-white/60">
            Design Option {id}
          </p>
          <p className="text-sm font-semibold text-white">{mockup.name}</p>
        </div>
      </div>

      {/* Mockup Content */}
      <MockupComponent />
    </>
  );
}
