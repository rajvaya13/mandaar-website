"use client";

import { useState, useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";
import { SlidersHorizontalIcon } from "lucide-react";

const categories = [
  { id: "all", label: "All Products" },
  { id: "dates", label: "Dates" },
  { id: "cashews", label: "Cashews" },
  { id: "almonds", label: "Almonds" },
  { id: "pistachios", label: "Pistachios" },
  { id: "raisins", label: "Raisins" },
  { id: "walnuts", label: "Walnuts" },
  { id: "apricots", label: "Apricots" },
  { id: "figs", label: "Figs" },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "name", label: "Name: A to Z" },
];

export default function ShopPage() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
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
        description="From the orchards of Kashmir to the date palms of Jordan — every product hand-picked and quality-checked in our Udaipur warehouse."
      />

      <section className="bg-ivory px-6 md:px-14 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Filter & Sort bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 pb-6 border-b border-mandaar/10">
            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 md:flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={cn(
                    "shrink-0 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all border",
                    category === cat.id
                      ? "bg-mandaar text-cream border-mandaar"
                      : "bg-snow text-mandaar border-mandaar/15 hover:border-mandaar"
                  )}
                >
                  {cat.label}
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
            Showing <span className="text-mandaar font-semibold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "product" : "products"}
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
