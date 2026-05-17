import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const tips = [
  {
    title: "Cool & Dark Storage",
    desc: "Store in airtight containers in a cool, dark place to preserve freshness, oils, and natural oxidants.",
  },
  {
    title: "Avoid Direct Heat",
    desc: "Keep away from heat sources and sunlight — exposure causes rancidity in fatty nuts like walnuts and pistachios.",
  },
  {
    title: "Refrigerate for Longevity",
    desc: "For storage beyond 2 months, refrigerate. The cool temperature locks in flavor and extends shelf life significantly.",
  },
  {
    title: "Soak Before Eating",
    desc: "Soak almonds and pistachios overnight to enhance digestibility and unlock their natural sweetness.",
  },
];

export default function Storage() {
  return (
    <section className="bg-snow px-6 md:px-14 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
        {/* Visual — a beautiful plate of mixed nuts */}
        <Reveal variant="fade">
          <div className="relative">
            {/* Decorative back card */}
            <div className="absolute -inset-3 bg-cream-warm rounded-[2.5rem] -rotate-2" />

            {/* Plate */}
            <div className="relative aspect-square rounded-[2rem] overflow-hidden plate-wood shadow-[0_30px_80px_rgba(13,59,46,0.18)]">
              {/* The bowl with mixed nuts */}
              <div className="absolute inset-[10%] rounded-full bowl-base"
                style={{
                  backgroundImage: `
                    /* Almonds (top-left cluster) */
                    radial-gradient(ellipse 10% 14% at 22% 28%, #d4854a 0%, #8b4513 70%, transparent 80%),
                    radial-gradient(ellipse 3% 5% at 21% 25%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
                    radial-gradient(ellipse 9% 13% at 32% 22%, #c4733a 0%, #7a3d10 70%, transparent 80%),
                    radial-gradient(ellipse 3% 4% at 31% 19%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),

                    /* Walnuts (top-right) */
                    radial-gradient(ellipse 16% 14% at 65% 25%, #a87850 0%, #6b4828 70%, transparent 80%),
                    radial-gradient(ellipse 5% 4% at 63% 22%, rgba(255, 230, 200, 0.4) 0%, transparent 100%),
                    radial-gradient(ellipse 14% 12% at 78% 32%, #8b6240 0%, #5c3e22 70%, transparent 80%),

                    /* Dates (middle) */
                    radial-gradient(ellipse 18% 14% at 35% 50%, #5c2e0b 0%, #3d1f06 70%, transparent 80%),
                    radial-gradient(ellipse 5% 4% at 33% 46%, rgba(255, 220, 180, 0.4) 0%, transparent 100%),
                    radial-gradient(ellipse 16% 12% at 55% 55%, #6b3818 0%, #4a240a 70%, transparent 80%),

                    /* Cashews (bottom-left) */
                    radial-gradient(ellipse 14% 11% at 25% 70%, #f0d4a0 0%, #c4a47a 70%, transparent 80%),
                    radial-gradient(ellipse 5% 3% at 23% 67%, rgba(255, 245, 220, 0.6) 0%, transparent 100%),
                    radial-gradient(ellipse 13% 10% at 38% 75%, #e8c89e 0%, #b89678 70%, transparent 80%),

                    /* Pistachios (bottom-right) */
                    radial-gradient(ellipse 10% 10% at 65% 70%, #b0c068 0%, #6b7d30 70%, transparent 80%),
                    radial-gradient(ellipse 3% 3% at 63% 67%, rgba(220, 240, 180, 0.5) 0%, transparent 100%),
                    radial-gradient(ellipse 9% 9% at 78% 78%, #a0b05a 0%, #5c6b30 70%, transparent 80%),

                    /* Raisins (scattered) */
                    radial-gradient(ellipse 6% 7% at 50% 35%, #d4a017 0%, #8b6914 70%, transparent 80%),
                    radial-gradient(ellipse 5% 6% at 70% 50%, #e8b840 0%, #b88008 70%, transparent 80%),
                    radial-gradient(ellipse 5% 6% at 45% 80%, #d4a017 0%, #8b6914 70%, transparent 80%),

                    /* Center cardamom-like garnish */
                    radial-gradient(ellipse 4% 5% at 50% 50%, #f7f1e3 0%, #d4b896 70%, transparent 80%),

                    /* Bowl base */
                    radial-gradient(circle at 50% 50%, #f7f1e3 0%, #e8dcc4 70%, #d4b896 100%)
                  `,
                }}
              />

              {/* Grain texture */}
              <div className="absolute inset-0 grain pointer-events-none" />
            </div>

            {/* Floating quality badge */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-mandaar text-cream w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-center p-3 shadow-[0_15px_30px_rgba(13,59,46,0.3)] rotate-12 z-10">
              <div>
                <div className="font-display text-2xl font-semibold leading-none">
                  100%
                </div>
                <div className="text-[9px] tracking-[0.15em] uppercase text-saffron mt-1">
                  Natural
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Storage Guide
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-mandaar font-normal tracking-tight mb-7">
              Keeping your <span className="italic text-saffron">favourites</span> fresh
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-warm-gray text-base leading-relaxed mb-9">
              A few simple practices to make sure every bite from your Mandaar
              order tastes as fresh as the day we sealed it.
            </p>
          </Reveal>

          <ul className="space-y-5 mb-10">
            {tips.map((tip, i) => (
              <Reveal key={tip.title} delay={240 + i * 80}>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-mandaar text-saffron flex items-center justify-center mt-0.5">
                    <CheckIcon size={14} strokeWidth={3} />
                  </span>
                  <div>
                    <div className="font-display text-mandaar text-lg font-medium mb-1">
                      {tip.title}
                    </div>
                    <div className="text-warm-gray text-sm leading-relaxed">
                      {tip.desc}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={600}>
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-mandaar text-cream px-9 py-4 rounded-full text-sm font-medium tracking-wide btn-magnetic hover:bg-mandaar-deep hover:shadow-[0_12px_30px_rgba(13,59,46,0.25)]"
            >
              Shop Fresh Dry Fruits
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
