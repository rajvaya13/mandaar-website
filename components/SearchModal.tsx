"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SearchIcon, XIcon, ArrowRightIcon } from "lucide-react";
import { products } from "@/lib/products";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when opened, clear when closed
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const results =
    query.trim().length === 0
      ? products.slice(0, 4)
      : products
          .filter((p) => {
            const q = query.toLowerCase();
            return (
              p.name.toLowerCase().includes(q) ||
              p.origin.toLowerCase().includes(q) ||
              p.category.toLowerCase().includes(q)
            );
          })
          .slice(0, 8);

  return (
    <div
      className="fixed inset-0 z-[100] bg-mandaar-deep/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div className="min-h-screen flex items-start justify-center pt-20 md:pt-32 px-4 md:px-6">
        <div
          className="bg-snow rounded-3xl w-full max-w-2xl shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search input */}
          <div className="flex items-center gap-3 p-5 border-b border-mandaar/10">
            <SearchIcon
              size={20}
              className="text-warm-gray flex-shrink-0"
              strokeWidth={1.8}
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dates, almonds, cashews..."
              className="flex-1 bg-transparent text-mandaar placeholder:text-warm-gray-light outline-none text-base"
            />
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-mandaar/5 flex items-center justify-center text-warm-gray flex-shrink-0"
              aria-label="Close search"
            >
              <XIcon size={18} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim().length === 0 && results.length > 0 && (
              <div className="px-5 pt-4 pb-2 text-warm-gray text-[10px] uppercase tracking-[0.15em] font-semibold">
                Popular Products
              </div>
            )}

            {results.length === 0 ? (
              <div className="px-5 py-12 text-center">
                <p className="text-warm-gray text-sm mb-4">
                  No products match &ldquo;{query}&rdquo;
                </p>
                <Link
                  href="/shop"
                  onClick={onClose}
                  className="text-saffron text-sm font-medium hover:underline inline-flex items-center gap-2"
                >
                  Browse all products
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            ) : (
              <div className="pb-2">
                {results.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-5 py-3 hover:bg-cream-warm transition-colors group"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex-shrink-0 bowl-base"
                      style={{ backgroundImage: p.bowlBg }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-mandaar font-medium text-sm md:text-base group-hover:text-saffron transition-colors truncate">
                        {p.name}
                      </div>
                      <div className="text-warm-gray text-xs truncate">
                        {p.origin}
                      </div>
                    </div>
                    <div className="text-mandaar font-display text-sm font-medium flex-shrink-0">
                      ₹{p.price.toLocaleString("en-IN")}
                    </div>
                  </Link>
                ))}

                <Link
                  href="/shop"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 mt-2 mx-5 mb-3 py-3.5 border-t border-mandaar/10 text-mandaar font-medium text-sm hover:text-saffron transition-colors"
                >
                  View all products
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="hidden md:flex items-center justify-end gap-4 px-5 py-3 border-t border-mandaar/10 text-warm-gray text-xs bg-cream-warm">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-snow border border-mandaar/15 rounded text-[10px] font-mono">
                ESC
              </kbd>
              to close
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
