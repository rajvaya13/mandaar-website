import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, products } from "@/lib/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();
  const total = products.length;

  return (
    <section id="products" className="bg-ivory px-6 md:px-14 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Curated Selection
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-mandaar font-normal tracking-tight mb-5">
              The Bestsellers,{" "}
              <span className="italic text-saffron">chosen by you</span>
            </h2>
            <p className="text-warm-gray text-base leading-relaxed">
              Our most-loved picks — hand-graded in-house and vacuum-sealed
              fresh. Shipped across India.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="text-center mt-16">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 text-mandaar font-display italic text-lg underline underline-offset-4 decoration-saffron hover:text-saffron transition-colors"
            >
              View all {total} products →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
