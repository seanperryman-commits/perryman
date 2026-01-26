import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "light" | "dark";
  padding?: "sm" | "md" | "lg" | "xl";
  container?: boolean;
  containerSize?: "default" | "narrow" | "wide";
}

export function Section({
  className,
  background = "light",
  padding = "md",
  container = true,
  containerSize = "default",
  children,
  ...props
}: SectionProps) {
  const backgrounds = {
    light: "bg-background",
    dark: "bg-background-dark text-white",
  };

  const paddings = {
    sm: "py-10 sm:py-12 md:py-16",
    md: "py-12 sm:py-16 md:py-20",
    lg: "py-16 sm:py-20 md:py-24",
    xl: "py-20 sm:py-24 md:py-32",
  };

  return (
    <section
      className={cn(backgrounds[background], paddings[padding], className)}
      {...props}
    >
      {container ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  onDark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      <h2 className={cn(
        "font-heading text-[length:var(--text-h2)] font-semibold",
        onDark ? "text-text-on-dark" : "text-text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-[length:var(--text-body)] max-w-2xl",
          align === "center" && "mx-auto",
          onDark ? "text-text-on-dark-muted" : "text-text-secondary"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
