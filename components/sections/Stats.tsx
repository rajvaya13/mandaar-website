"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";
import { getYearsSinceFounding } from "@/lib/site-config";
import { products, getAllCategories } from "@/lib/products";

export default function Stats() {
  // ===== ALL DYNAMIC — recalculates automatically =====
  const yearsOfCare = getYearsSinceFounding(); // 8 in 2026, 9 in 2027, etc.
  const productCount = products.length; // updates automatically when you add products
  const categoryCount = getAllCategories().length; // updates with new categories

  const stats = [
    { number: yearsOfCare, suffix: "+", label: "Years of Care" },
    { number: productCount, suffix: "+", label: "Premium Varieties" },
    { number: categoryCount, suffix: "+", label: "Premium Categories" },
    { number: 100, suffix: "%", label: "Hand-graded" },
  ];

  return (
    <section className="bg-snow border-b border-mandaar/5 px-6 md:px-14 py-10 md:py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl text-mandaar font-normal tracking-tight">
                <AnimatedCounter end={s.number} />
                <span className="italic text-saffron">{s.suffix}</span>
              </div>
              <div className="text-[11px] text-warm-gray tracking-[0.15em] uppercase mt-2">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
