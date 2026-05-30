import Reveal from "@/components/Reveal";

export default function Heritage() {
  return (
    <section
      id="heritage"
      className="relative bg-mandaar text-cream px-6 md:px-14 py-24 md:py-32 overflow-hidden grain"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(212,160,23,0.12) 0%, transparent 40%), radial-gradient(circle at 85% 80%, rgba(212,160,23,0.08) 0%, transparent 40%)",
        }}
      />

      <div className="absolute top-12 right-12 w-32 h-32 paisley-bg opacity-15 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-12 w-40 h-40 paisley-bg opacity-15 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

        {/* ===== NEW HERITAGE VISUAL - clean saffron-on-green plaque ===== */}
        <Reveal variant="fade">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            {/* Vertical plaque shape with saffron-tinted background and ornate border */}
            <div
              className="absolute inset-0 rounded-[3rem] flex flex-col items-center justify-center text-center p-10 md:p-14"
              style={{
                background:
                  "linear-gradient(160deg, rgba(212,160,23,0.15) 0%, rgba(212,160,23,0.03) 50%, rgba(212,160,23,0.10) 100%)",
                border: "1px solid rgba(212,160,23,0.30)",
                boxShadow:
                  "inset 0 0 80px rgba(212,160,23,0.06), 0 30px 80px rgba(0,0,0,0.35)",
              }}
            >
              {/* Inner subtle frame */}
              <div
                className="absolute inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ border: "1px solid rgba(212,160,23,0.15)" }}
              />

              {/* Corner ornaments */}
              {[
                "top-7 left-7",
                "top-7 right-7 rotate-90",
                "bottom-7 right-7 rotate-180",
                "bottom-7 left-7 -rotate-90",
              ].map((pos, i) => (
                <svg
                  key={i}
                  className={`absolute ${pos} w-6 h-6 text-saffron/40 pointer-events-none`}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 2 L14 2 M2 2 L2 14 M2 7 Q 7 7 7 2"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle cx="2" cy="2" r="1.2" fill="currentColor" />
                </svg>
              ))}

              {/* Top ornamental flourish */}
              <div className="flex items-center gap-4 mb-6 md:mb-8 relative z-10">
                <div className="w-12 md:w-16 h-px bg-saffron/40" />
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  className="text-saffron"
                >
                  <path
                    d="M10 1 L11 7 L17 7 L12 11 L14 17 L10 14 L6 17 L8 11 L3 7 L9 7 Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="w-12 md:w-16 h-px bg-saffron/40" />
              </div>

              {/* Eyebrow */}
              <div className="text-saffron/80 text-[10px] tracking-[0.4em] uppercase mb-5 md:mb-6 relative z-10">
                Established
              </div>

              {/* Big saffron year */}
              <div className="font-display text-saffron text-[6.5rem] md:text-[8rem] font-light leading-none mb-4 relative z-10">
                2018
              </div>

              {/* Tagline */}
              <div className="text-cream/60 text-[10px] tracking-[0.35em] uppercase mb-7 md:mb-9 relative z-10">
                Year of Founding
              </div>

              {/* Subtle divider */}
              <div className="w-24 h-px bg-saffron/30 mb-5 md:mb-6 relative z-10" />

              {/* Location */}
              <div className="font-display italic text-cream/95 text-lg md:text-xl relative z-10 mb-5 md:mb-7">
                Udaipur, Rajasthan
              </div>

              {/* Bottom ornamental flourish */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 md:w-16 h-px bg-saffron/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-saffron/60" />
                <div className="w-12 md:w-16 h-px bg-saffron/40" />
              </div>
            </div>

            {/* Wax seal medallion - bottom right */}
            <div
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-center text-cream p-3 shadow-[0_15px_30px_rgba(139,58,46,0.6)] rotate-12 z-10"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #a85447, #8b3a2e 60%, #5c2519 100%)",
              }}
            >
              <div>
                <div className="font-display text-[10px] tracking-[0.2em] uppercase mb-0.5 text-saffron-light/90">
                  Hand
                </div>
                <div className="font-display italic text-base md:text-lg leading-none">
                  Picked
                </div>
                <div className="font-display text-[10px] tracking-[0.2em] uppercase mt-0.5 text-saffron-light/90">
                  Always
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="text-saffron text-xs font-medium tracking-[0.3em] uppercase mb-5">
              Our Approach
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05] font-light tracking-tight mb-7">
              Sourced direct,<br />
              <span className="italic text-saffron-light">sold honestly</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-cream/75 text-base md:text-lg leading-[1.8] mb-6">
              Mandaar opened in 2018, in a small shop on Bhupalpura Main Road,
              just steps from Gattani Hospital. The founding rule was simple:
              never sell a nut or dried fruit that hadn&apos;t been hand-graded
              and personally tasted first.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="text-cream/75 text-base md:text-lg leading-[1.8]">
              Today, we source directly from origin growers in Kashmir, Iran,
              California, Turkey, and Goa. Hand-graded with care. No middlemen,
              no shortcuts, no imported-then-resold. The same shop, the same
              standard.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="font-display italic text-saffron-light text-xl mt-8">
              - Mandaar
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
