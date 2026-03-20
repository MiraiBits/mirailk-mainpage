"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <div className="flex items-center gap-6 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-black text-xl tracking-tight"
          >
            <span className="text-[#e6443b]">Mirai</span>
            <span>Bits</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 ml-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-gray-900 dark:text-gray-100 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#e6443b] text-white hover:bg-[#c73a34] transition-colors"
            >
              Get in Touch
            </Link>
            <ThemeToggleButton />

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-gray-100 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95 md:hidden">
          <div className="px-4 sm:px-6 mx-auto max-w-6xl">
            <nav className="flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    pathname === link.href
                      ? "text-gray-900 dark:text-gray-100 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                  }
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex w-fit items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#e6443b] text-white hover:bg-[#c73a34] transition-colors"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
