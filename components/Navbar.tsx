"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  SearchIcon,
  ShoppingBagIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import SearchModal from "@/components/SearchModal";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Heritage" },
  { href: "/gift", label: "Gifting" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-snow/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-saffron" />
            <span className="font-display text-mandaar text-xl md:text-2xl font-medium">
              Mandaar
            </span>
            <span className="hidden md:inline text-warm-gray text-[10px] tracking-[0.2em] uppercase ml-2 pl-3 border-l border-mandaar/15">
              Udaipur · Est. 2018
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-mandaar text-sm font-medium hover:text-saffron transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-10 h-10 rounded-full hover:bg-mandaar/5 flex items-center justify-center text-mandaar transition-colors"
              aria-label="Search products"
            >
              <SearchIcon size={18} strokeWidth={1.8} />
            </button>

            <Link
              href="/cart"
              className="w-10 h-10 rounded-full hover:bg-mandaar/5 flex items-center justify-center text-mandaar transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingBagIcon size={18} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-rust text-cream text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              href="/login"
              className="hidden md:inline-flex items-center gap-2 bg-mandaar text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-mandaar-deep transition-colors ml-1"
            >
              Sign In
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full hover:bg-mandaar/5 flex items-center justify-center text-mandaar transition-colors"
              aria-label="Open menu"
            >
              <MenuIcon size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-snow lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between p-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-saffron" />
              <span className="font-display text-mandaar text-xl font-medium">
                Mandaar
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 rounded-full hover:bg-mandaar/5 flex items-center justify-center text-mandaar"
              aria-label="Close menu"
            >
              <XIcon size={22} strokeWidth={1.8} />
            </button>
          </div>
          <nav className="px-6 mt-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-5 border-b border-mandaar/10 font-display text-3xl text-mandaar hover:text-saffron transition-colors"
                style={{
                  animation: `slideInFromRight 0.4s ease-out ${i * 0.05}s both`,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="block mt-10 bg-mandaar text-cream py-4 rounded-full text-center text-sm font-semibold tracking-wide hover:bg-mandaar-deep transition-colors"
            >
              Sign In
            </Link>
          </nav>

          <style jsx>{`
            @keyframes slideInFromRight {
              from {
                opacity: 0;
                transform: translateX(20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
