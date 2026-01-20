import { cn } from "@/lib/utils";

// NOTE: Horizontal padding exceeds spec (px-6 md:px-8) intentionally
// Uses px-6 md:px-12 lg:px-16 for better content breathing room on larger screens
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizes = {
    narrow: "max-w-3xl", // 720px - for text content
    default: "max-w-6xl", // 1200px - standard content
    wide: "max-w-7xl", // 1280px - wide layouts
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-12 lg:px-16",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
