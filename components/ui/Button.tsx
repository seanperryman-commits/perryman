"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", onDark = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-body font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]",
      secondary: onDark
        ? "border-2 border-white/20 text-text-on-dark-muted hover:bg-background-dark-end hover:border-transparent"
        : "border-2 border-text-secondary/30 text-text-secondary hover:bg-text-secondary/10 hover:border-text-secondary/50",
      ghost: onDark
        ? "text-white underline-offset-4 hover:underline"
        : "text-accent underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "h-11 px-5 text-sm rounded-lg",     // 44px minimum touch target
      md: "h-12 px-7 text-base rounded-lg",   // 48px
      lg: "h-14 px-8 text-lg rounded-lg",     // 56px
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
