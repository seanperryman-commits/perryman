import { cn } from "@/lib/utils";

interface CredentialChipProps {
  children: React.ReactNode;
  className?: string;
}

export function CredentialChip({ children, className }: CredentialChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-background-dark/70 px-5 py-2.5 text-base font-medium text-white backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
