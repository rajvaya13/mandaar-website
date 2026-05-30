import Link from "next/link";
import { ShoppingBagIcon, ArrowRightIcon } from "lucide-react";

export default function CartPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-14 bg-snow flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto bg-cream-warm rounded-full flex items-center justify-center mb-7 shadow-card">
          <ShoppingBagIcon
            size={36}
            strokeWidth={1.4}
            className="text-mandaar"
          />
        </div>
        <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-3">
          Your Cart
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-mandaar font-normal tracking-tight mb-4">
          Nothing here <span className="italic text-saffron">yet</span>
        </h1>
        <p className="text-warm-gray text-base mb-9 leading-relaxed">
          Your cart is empty - but it doesn&apos;t have to stay that way.
          Browse our curated selection of premium dry fruits.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-3 bg-mandaar text-cream px-9 py-4 rounded-full text-sm font-semibold tracking-wide btn-magnetic hover:bg-mandaar-deep"
        >
          Start Shopping
          <ArrowRightIcon size={18} />
        </Link>
      </div>
    </section>
  );
}
