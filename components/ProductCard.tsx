"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartIcon, EyeIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const [fav, setFav] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFav(!fav);
  };

  return (
    <div className="group relative bg-snow rounded-3xl p-4 md:p-5 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-5 left-5 z-10 bg-rust text-cream text-[10px] font-semibold px-2.5 py-1.5 rounded tracking-wider">
          {product.badge}
        </div>
      )}

      {/* Favorite */}
      <button
        onClick={handleFav}
        className={cn(
          "absolute top-5 right-5 z-10 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all",
          fav
            ? "bg-rust/10 text-rust scale-110"
            : "bg-snow/80 text-warm-gray hover:bg-snow hover:scale-110"
        )}
        aria-label="Favorite"
      >
        <HeartIcon
          size={16}
          fill={fav ? "currentColor" : "none"}
          strokeWidth={2}
        />
      </button>

      {/* Product visual — wood plate with bowl on top */}
      <Link
        href={`/products/${product.id}`}
        className="block relative aspect-square rounded-2xl mb-5 plate-wood flex items-center justify-center overflow-hidden"
      >
        <div className="absolute w-3/4 h-3/4 rounded-full bg-black/10 blur-md translate-y-2" />

        <div
          className="relative w-[78%] h-[78%] bowl-base group-hover:scale-105 transition-transform duration-700"
          style={{ backgroundImage: product.bowlBg }}
        />

        <div className="absolute inset-0 grain pointer-events-none" />

        <div
          aria-label="Quick view"
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-mandaar text-cream flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-mandaar-deep z-10"
        >
          <EyeIcon size={16} strokeWidth={1.8} />
        </div>
      </Link>

      {/* Info */}
      <div className="px-1">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-display text-base md:text-lg font-medium text-zinc-900 leading-tight mb-1.5 hover:text-mandaar transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="text-warm-gray text-[10px] uppercase tracking-[0.1em] mb-3.5">
          {product.origin}
        </div>
        <div className="flex items-baseline justify-between mb-4">
          <div className="flex items-baseline gap-2.5">
            <span className="font-display text-xl text-mandaar font-medium">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-warm-gray text-xs line-through">
              ₹{product.mrp.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="text-rust text-[10px] font-semibold">
            {Math.round((1 - product.price / product.mrp) * 100)}% off
          </div>
        </div>
        <button
          onClick={handleAdd}
          className={cn(
            "w-full py-3 rounded-full text-[11px] uppercase tracking-[0.05em] font-semibold transition-all flex items-center justify-center gap-2",
            added
              ? "bg-saffron text-mandaar-deep"
              : "bg-mandaar text-cream hover:bg-mandaar-deep"
          )}
        >
          {added ? (
            <>Added ✓</>
          ) : (
            <>
              <PlusIcon size={14} strokeWidth={2.5} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
