"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="group flex items-center gap-2">
          <span
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-lg"
            style={{ backgroundColor: "var(--primary)" }}
          >
            BN
          </span>
          <span className="hidden sm:block font-semibold text-lg text-[var(--neutral-900)] group-hover:text-[var(--primary)] transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[var(--primary)] ${
                pathname === item.href
                  ? "text-[var(--primary)]"
                  : "text-[var(--neutral-600)]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/appointments" size="sm">
            Schedule Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[var(--neutral-700)] hover:text-[var(--primary)] transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
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
        className={`lg:hidden absolute top-full left-0 right-0 glass border-t border-[var(--neutral-200)] shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium py-2 transition-colors hover:text-[var(--primary)] ${
                pathname === item.href
                  ? "text-[var(--primary)]"
                  : "text-[var(--neutral-600)]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[var(--neutral-200)]">
            <Button href="/appointments" fullWidth>
              Schedule Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
