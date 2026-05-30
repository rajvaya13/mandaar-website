"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products, getAllCategories } from "@/lib/products";
import { cn } from "@/lib/utils";
import { SlidersHorizontalIcon } from "lucide-react";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "name", label: "Name: A to Z" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";

  const [category, setCategory] = useState(initialCat);
  const [sort, setSort] = useState("featured");

  // Update if URL changes
  useEffect(() => {
    setCategory(searchParams.get("cat") || "all");
  }, [searchParams]);

  // Build category list dynamically from product data
  const categories = useMemo(() => {
    const cats = getAllCategories();
    return [
      { slug: "all", label: "All Products", count: products.length },
      ...cats,
    ];
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    // Sort by smallest weight price (default 250g or first option)
    if (sort === "price-low") {
      list.sort((a, b) => a.weights[0].price - b.weights[0].price);
    }
    if (sort === "price-high") {
      list.sort((a, b) => b.weights[0].price - a.weights[0].price);
    }
    if (sort === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [category, sort]);

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
        eyebrow="Curated Collection"
        title={
          <>
            All our <span className="italic text-saffron">treasures</span>
          </>
        }
        description="Premium dry fruits, hand-picked from origin farms in Kashmir, Jordan, Iran, Goa, and beyond. Hand-graded at our Udaipur warehouse."
      />

      <section className="bg-ivory px-6 md:px-14 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Filter & Sort bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 pb-6 border-b border-mandaar/10">
            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 md:flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setCategory(cat.slug)}
                  className={cn(
                    "shrink-0 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all border whitespace-nowrap",
                    category === cat.slug
                      ? "bg-mandaar text-cream border-mandaar"
                      : "bg-snow text-mandaar border-mandaar/15 hover:border-mandaar"
                  )}
                >
                  {cat.label}
                  <span className="ml-1.5 opacity-60 text-[10px]">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3 shrink-0">
              <SlidersHorizontalIcon size={16} className="text-warm-gray" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent text-mandaar text-sm font-medium border-none outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="text-warm-gray text-sm mb-8">
            Showing{" "}
            <span className="text-mandaar font-semibold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "product" : "products"}
            {category !== "all" && (
              <>
                {" in "}
                <span className="text-mandaar font-semibold italic">
                  {categories.find((c) => c.slug === category)?.label}
                </span>
              </>
            )}
          </div>

          {/* Products grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display italic text-warm-gray text-lg">
                No products in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={(i % 8) * 50}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
      <ShopContent />
    </Suspense>
  );
}
