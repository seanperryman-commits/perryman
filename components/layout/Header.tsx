"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Linkedin, Twitter } from "lucide-react";
import { NAV_ITEMS, SERVICES, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useMobileNav } from "@/hooks/useMobileNav";

export function Header() {
  const { isOpen, toggle, close, menuRef, toggleButtonRef } = useMobileNav();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      "bg-background/80 backdrop-blur-md",
      isScrolled && "shadow-sm"
    )}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Logo with Tagline */}
        <Link href="/" className="flex flex-col">
          <span className="font-heading text-xl font-semibold text-text-primary">
            Sean Perryman
          </span>
          <span className="text-xs text-text-muted">
            {SITE_CONFIG.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Social Icons */}
          <div className="flex items-center gap-3 border-r border-border pr-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted transition-colors hover:text-accent"
                aria-label={social.label}
              >
                {social.icon === "linkedin" ? (
                  <Linkedin className="h-4 w-4" />
                ) : (
                  <Twitter className="h-4 w-4" />
                )}
              </a>
            ))}
          </div>

          {/* Nav Links */}
          {NAV_ITEMS.map((item) => (
            item.label === "Services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                >
                  {item.label}
                  <ChevronDown className={cn(
                    "h-3 w-3 transition-transform",
                    servicesOpen && "rotate-180"
                  )} />
                </Link>
                {/* Dropdown */}
                <div className={cn(
                  "absolute left-0 top-full pt-2 transition-all duration-200",
                  servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}>
                  <div className="min-w-[200px] rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-background hover:text-accent"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            )
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
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="space-y-4 px-6 pb-6">
          {NAV_ITEMS.map((item) => (
            item.label === "Services" ? (
              <div key={item.href}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between text-text-secondary transition-colors hover:text-accent"
                >
                  {item.label}
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    mobileServicesOpen && "rotate-180"
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-200",
                  mobileServicesOpen ? "max-h-40 mt-2" : "max-h-0"
                )}>
                  <div className="space-y-2 pl-4 border-l-2 border-border">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block text-sm text-text-muted transition-colors hover:text-accent"
                        onClick={close}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block text-text-secondary transition-colors hover:text-accent"
                onClick={close}
              >
                {item.label}
              </Link>
            )
          ))}
          <Link href="/contact" onClick={close}>
            <Button className="w-full" size="sm">
              Contact
            </Button>
          </Link>
          {/* Mobile Social Icons */}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted transition-colors hover:text-accent"
                aria-label={social.label}
              >
                {social.icon === "linkedin" ? (
                  <Linkedin className="h-5 w-5" />
                ) : (
                  <Twitter className="h-5 w-5" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
