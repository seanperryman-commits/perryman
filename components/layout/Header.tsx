"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useMobileNav } from "@/hooks/useMobileNav";

export function Header() {
  const { isOpen, toggle, close, menuRef, toggleButtonRef } = useMobileNav();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      "bg-background/80 backdrop-blur-md",
      isScrolled && "shadow-sm"
    )}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-xl font-semibold text-text-primary"
        >
          Sean Perryman
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button size="sm">Contact</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={toggleButtonRef}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={toggle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="space-y-4 px-6 pb-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-text-secondary transition-colors hover:text-accent"
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={close}>
            <Button className="w-full" size="sm">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
