import Link from "next/link";
import { ArrowRightIcon, GiftIcon, SparklesIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

const tiers = [
  { price: 1499, label: "Classic", desc: "8 varieties" },
  { price: 2999, label: "Regal", desc: "14 varieties" },
  { price: 4999, label: "Maharaja", desc: "22 varieties" },
];

export default function Gifting() {
  return (
    <section id="gift" className="bg-cream-warm px-6 md:px-14 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative paisley */}
      <div className="absolute top-10 right-10 w-48 h-48 paisley-bg opacity-30 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-32 h-32 paisley-bg opacity-30 rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">

        {/* ===== NEW ELEGANT GIFT VISUAL ===== */}
        <Reveal variant="fade">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden flex items-center justify-center p-8 md:p-14 shadow-[0_30px_80px_rgba(13,59,46,0.25)]"
            style={{
              background: `
                radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212, 160, 23, 0.15) 0%, transparent 70%),
                linear-gradient(135deg, #1a5443 0%, #0d3b2e 60%, #082821 100%)
              `,
            }}
          >
            {/* Grain */}
            <div className="absolute inset-0 grain pointer-events-none" />

            {/* Decorative dot grid */}
            <div className="absolute inset-0 paisley-bg opacity-20" />

            {/* Floating sparkles */}
            <SparklesIcon
              size={20}
              className="absolute top-10 left-12 text-saffron/40 float-slow"
              strokeWidth={1.5}
            />
            <SparklesIcon
              size={14}
              className="absolute top-1/3 right-16 text-saffron/30 float-slower"
              strokeWidth={1.5}
            />
            <SparklesIcon
              size={16}
              className="absolute bottom-20 right-1/3 text-saffron/40 float-slow"
              strokeWidth={1.5}
            />

            {/* ELEGANT GIFT BOX (replaces cartoon version) */}
            <div className="relative w-1/2 md:w-2/5 aspect-square float-slow">
              {/* Drop shadow */}
              <div className="absolute -bottom-3 left-4 right-4 h-8 bg-black/30 rounded-full blur-xl" />

              {/* Box body with patterned wrapping */}
              <div
                className="absolute inset-0 rounded-md overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.15)] -rotate-[5deg]"
                style={{
                  background: `
                    repeating-linear-gradient(135deg,
                      transparent 0,
                      transparent 14px,
                      rgba(255, 255, 255, 0.06) 14px,
                      rgba(255, 255, 255, 0.06) 16px
                    ),
                    linear-gradient(135deg, #e8b94a 0%, #d4a017 50%, #8b6914 100%)
                  `,
                }}
              >
                {/* Subtle damask diamond pattern overlay */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-25"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern id="damask" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M10 2 L18 10 L10 18 L2 10 Z"
                        fill="none"
                        stroke="#5c2e0b"
                        strokeWidth="0.5"
                      />
                      <circle cx="10" cy="10" r="1" fill="#5c2e0b" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#damask)" />
                </svg>

                {/* Vertical ribbon */}
                <div
                  className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2"
                  style={{
                    background: "linear-gradient(180deg, #5c2519 0%, #8b3a2e 50%, #5c2519 100%)",
                    boxShadow: "inset 0 0 6px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)",
                  }}
                />

                {/* Horizontal ribbon */}
                <div
                  className="absolute top-1/2 left-0 right-0 h-8 -translate-y-1/2"
                  style={{
                    background: "linear-gradient(90deg, #5c2519 0%, #8b3a2e 50%, #5c2519 100%)",
                    boxShadow: "inset 0 0 6px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)",
                  }}
                />

                {/* Center medallion on ribbon */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-cream shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)] z-10"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #a85447, #5c2519)",
                  }}
                >
                  <span className="font-display text-base font-medium leading-none">M</span>
                </div>
              </div>

              {/* Elegant bow (more refined than cartoon) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 -rotate-[5deg] z-20">
                <svg width="80" height="50" viewBox="0 0 80 50" className="drop-shadow-md">
                  <defs>
                    <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a85447" />
                      <stop offset="50%" stopColor="#8b3a2e" />
                      <stop offset="100%" stopColor="#5c2519" />
                    </linearGradient>
                  </defs>
                  {/* Left bow loop */}
                  <path
                    d="M40 25 Q 15 5 8 25 Q 15 45 40 25 Z"
                    fill="url(#ribbon)"
                    stroke="#3d1810"
                    strokeWidth="0.5"
                  />
                  {/* Right bow loop */}
                  <path
                    d="M40 25 Q 65 5 72 25 Q 65 45 40 25 Z"
                    fill="url(#ribbon)"
                    stroke="#3d1810"
                    strokeWidth="0.5"
                  />
                  {/* Center knot */}
                  <ellipse cx="40" cy="25" rx="6" ry="9" fill="#5c2519" />
                  <ellipse cx="40" cy="25" rx="3" ry="9" fill="#3d1810" opacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute top-6 left-6 bg-snow/95 backdrop-blur text-mandaar px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
              <GiftIcon size={14} />
              Free Personalised Card
            </div>

            {/* Floating label bottom right */}
            <div className="absolute bottom-6 right-6 bg-saffron/95 backdrop-blur text-mandaar-deep px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
              <SparklesIcon size={14} />
              Bulk Discount Available
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Premium Gifting
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-mandaar font-normal tracking-tight mb-6">
              Hampers that say<br />
              <span className="italic text-saffron">&ldquo;you matter&rdquo;</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-warm-gray text-base leading-relaxed mb-8">
              From wedding sangeets to Diwali corporate gifts - our hand-curated
              hampers come in brass-finish tins, handwoven trays, and traditional
              thalis. Personalised cards included.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-9">
            {tiers.map((t, i) => (
              <Reveal key={t.label} delay={240 + i * 80}>
                <div className="bg-snow border border-mandaar/10 rounded-2xl py-5 px-3 md:px-4 text-center cursor-pointer hover:border-saffron hover:shadow-card-hover hover:-translate-y-1 transition-all">
                  <div className="font-display text-mandaar text-base md:text-xl font-medium mb-1">
                    ₹{t.price.toLocaleString("en-IN")}
                  </div>
                  <div className="text-warm-gray text-[10px] uppercase tracking-[0.1em] mb-1">
                    {t.label}
                  </div>
                  <div className="text-warm-gray-light text-[10px]">
                    {t.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <Link
              href="/gift"
              className="group inline-flex items-center gap-3 bg-mandaar text-cream px-9 py-4 rounded-full text-sm font-medium tracking-wide btn-magnetic hover:bg-mandaar-deep hover:shadow-[0_12px_30px_rgba(13,59,46,0.25)]"
            >
              Explore Gift Hampers
              <ArrowRightIcon
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
