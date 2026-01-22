import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="font-heading text-xl font-semibold text-text-primary"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-2 text-sm text-text-secondary">
              {SITE_CONFIG.title}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted transition-colors hover:text-accent"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-text-muted">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
