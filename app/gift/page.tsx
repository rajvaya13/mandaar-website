import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, GiftIcon, CheckIcon } from "lucide-react";

const hampers = [
  {
    id: "classic",
    name: "Classic",
    price: 1499,
    mrp: 1699,
    desc: "A thoughtful starter hamper with our most-loved varieties — perfect for friends, neighbours, and small acknowledgements.",
    items: [
      "Medjoul Dates · 250g",
      "California Almonds · 250g",
      "Jumbo Cashews · 250g",
      "Golden Raisins · 150g",
      "Handwoven jute tray",
      "Personalised card",
    ],
    badge: "Most popular",
  },
  {
    id: "regal",
    name: "Regal",
    price: 2999,
    mrp: 3400,
    desc: "Our signature gift — a generous spread of premium varieties in a brass-finish tin, designed to impress.",
    items: [
      "Medjoul Dates · 400g",
      "Ajwa Dates · 250g",
      "Cashews W210 · 400g",
      "Iranian Pistachios · 250g",
      "Kashmiri Walnuts · 250g",
      "Turkish Apricots · 200g",
      "Anjeer · 150g",
      "Brass-finish tin",
      "Personalised card & ribbon",
    ],
    badge: "Best value",
  },
  {
    id: "maharaja",
    name: "Maharaja",
    price: 4999,
    mrp: 5800,
    desc: "The most generous hamper we make. Presented in a traditional carved wooden box — fit for the occasions that matter most.",
    items: [
      "All Regal items, larger sizes",
      "Premium Saffron · 1g",
      "Exotic Mixed Trail Mix · 300g",
      "Custom dry-fruit barfi · 250g",
      "Carved wooden gift box",
      "Hand-written note from our family",
      "Free delivery anywhere in India",
    ],
    badge: "Premium",
  },
];

const occasions = [
  { name: "Weddings", icon: "💍" },
  { name: "Diwali", icon: "🪔" },
  { name: "Corporate", icon: "🏢" },
  { name: "Eid", icon: "🌙" },
  { name: "House warming", icon: "🏡" },
  { name: "Birthdays", icon: "🎂" },
];

export default function GiftPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gifting" }]}
        eyebrow="Premium Gifting"
        title={
          <>
            Gifts that <span className="italic text-saffron">linger</span> in memory
          </>
        }
        description="Hand-curated hampers in brass-finish tins and carved wooden boxes. Personalised cards included. We ship across India."
      />

      {/* Hampers grid */}
      <section className="bg-ivory px-6 md:px-14 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
          {hampers.map((h, i) => (
            <Reveal key={h.id} delay={i * 100}>
              <div
                className={`relative bg-snow rounded-3xl p-8 md:p-10 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 ${
                  h.id === "regal" ? "ring-2 ring-saffron lg:scale-105" : ""
                }`}
              >
                {h.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rust text-cream text-[10px] font-bold px-4 py-1.5 rounded-full tracking-[0.15em] uppercase">
                    {h.badge}
                  </div>
                )}

                <div className="text-center mb-7">
                  <GiftIcon
                    size={28}
                    strokeWidth={1.5}
                    className="mx-auto text-saffron mb-4"
                  />
                  <h3 className="font-display text-2xl md:text-3xl text-mandaar font-medium mb-3">
                    {h.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2 mb-3">
                    <span className="font-display text-4xl text-mandaar font-medium">
                      ₹{h.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-warm-gray text-sm line-through">
                      ₹{h.mrp.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 pb-2">
                  {h.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-mandaar"
                    >
                      <CheckIcon
                        size={14}
                        className="text-saffron flex-shrink-0 mt-1"
                        strokeWidth={3}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 ${
                    h.id === "regal"
                      ? "bg-mandaar text-cream hover:bg-mandaar-deep"
                      : "bg-cream-warm text-mandaar hover:bg-mandaar hover:text-cream"
                  }`}
                >
                  Order {h.name}
                  <ArrowRightIcon size={16} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="bg-cream-warm px-6 md:px-14 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Perfect For
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-mandaar font-normal tracking-tight mb-12">
              Every occasion that <span className="italic text-saffron">matters</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {occasions.map((o, i) => (
              <Reveal key={o.name} delay={i * 60}>
                <div className="bg-snow rounded-2xl py-6 px-3 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-2">{o.icon}</div>
                  <div className="font-display text-mandaar text-sm font-medium">
                    {o.name}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk CTA */}
      <section className="bg-mandaar text-cream px-6 md:px-14 py-20 grain">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="text-saffron text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Bulk Orders
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-5">
              Ordering 50+ <span className="italic text-saffron-light">hampers</span>?
            </h2>
            <p className="text-cream/70 text-base md:text-lg mb-9 leading-relaxed">
              Corporate gifting, wedding sangeets, festival packs for entire offices — talk to us. Custom packaging, branded cards, and significant volume pricing available.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-saffron text-mandaar-deep px-9 py-4 rounded-full text-sm font-semibold tracking-wide btn-magnetic hover:bg-saffron-light"
            >
              Talk to Us
              <ArrowRightIcon size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
