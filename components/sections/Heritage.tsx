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

        {/* === HERITAGE VISUAL — vintage certificate with year 2018 === */}
        <Reveal variant="fade">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-sm bg-cream shadow-[0_30px_80px_rgba(0,0,0,0.4)] grain">
              <div className="absolute inset-3 border-2 border-mandaar/80 rounded-sm">
                <div className="absolute inset-2 border border-saffron/60 rounded-sm" />
              </div>

              {[
                "top-4 left-4",
                "top-4 right-4 rotate-90",
                "bottom-4 right-4 rotate-180",
                "bottom-4 left-4 -rotate-90",
              ].map((pos, i) => (
                <svg
                  key={i}
                  className={`absolute ${pos} w-8 h-8 text-mandaar`}
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M2 2 L18 2 M2 2 L2 18 M2 8 Q 8 8 8 2 M5 14 Q 14 14 14 5"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    fill="none"
                  />
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </svg>
              ))}

              <div className="absolute inset-0 flex flex-col items-center justify-center text-mandaar p-12 text-center">
                <div className="text-[9px] tracking-[0.4em] uppercase mb-4 text-mandaar/60">
                  Certificate of
                </div>
                <div className="font-display italic text-3xl md:text-4xl mb-8 text-rust">
                  Origin
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-px bg-mandaar/40" />
                  <svg width="20" height="20" viewBox="0 0 20 20" className="text-saffron">
                    <path
                      d="M10 1 L11 7 L17 7 L12 11 L14 17 L10 14 L6 17 L8 11 L3 7 L9 7 Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="w-12 h-px bg-mandaar/40" />
                </div>

                <div className="font-display text-7xl md:text-8xl font-light leading-none mb-4 text-mandaar">
                  2018
                </div>

                <div className="text-[11px] tracking-[0.3em] uppercase mb-8 text-mandaar/60">
                  The Year We Opened
                </div>

                <div className="border-t border-mandaar/20 pt-6 mt-auto">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-mandaar/70 mb-1">
                    Sourced & Curated In
                  </div>
                  <div className="font-display italic text-xl text-rust">
                    Udaipur, Rajasthan
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-0 pointer-events-none rounded-sm opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(139, 90, 43, 0.1) 70%, rgba(139, 90, 43, 0.2) 100%)",
                }}
              />
            </div>

            {/* Wax seal */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-center text-cream p-3 shadow-[0_15px_30px_rgba(139,58,46,0.6)] rotate-12 z-10"
              style={{
                background: "radial-gradient(circle at 30% 30%, #a85447, #8b3a2e 60%, #5c2519 100%)",
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
              Mandaar opened in 2018, in a small shop on Bhupalpura Main Road —
              just steps from Gattani Hospital. The founding rule was simple:
              never sell a date, nut, or dried fruit that hadn&apos;t been
              hand-graded and personally tasted first.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="text-cream/75 text-base md:text-lg leading-[1.8]">
              Today, we source directly from origin growers in Kashmir, Iran,
              Jordan, Turkey, and California. Hand-graded with care. No
              middlemen, no shortcuts, no imported-then-resold. The same shop,
              the same standard.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="font-display italic text-saffron-light text-xl mt-8">
              — Mandaar
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
