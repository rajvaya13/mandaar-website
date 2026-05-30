"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

const slides = [
  {
    eyebrow: "From The Aravalli Hills",
    title: ["A Taste of", "Rajasthani Royalty,", "delivered fresh."],
    desc: "Mandaar hand-picks the finest nuts and dried fruits, sourced directly from origin farms in Kashmir, Iran, California, and beyond, curated in the heart of Udaipur.",
  },
  {
    eyebrow: "Iran's Finest Grade",
    title: ["Mamra Almonds,", "the connoisseur's", "first choice."],
    desc: "Authentic Iranian Mamra in 4 grades, from ES to the rare A5. Denser, oilier, and sweeter than American almonds; hand-graded at our Udaipur warehouse.",
  },
  {
    eyebrow: "From Kashmir's Orchards",
    title: ["The lightest", "Kashmiri walnut", "halves you'll find."],
    desc: "Direct from Pampore's hill orchards. Cracked, sorted, and vacuum-sealed within 48 hours, the way real walnuts are meant to taste.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section className="relative pt-24 pb-0 px-3 md:px-6 bg-snow">
      <div className="relative w-full mx-auto rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden h-[88vh] min-h-[640px] max-h-[920px] shadow-[0_30px_80px_rgba(13,59,46,0.25)]">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 75% 50%, rgba(212, 160, 23, 0.20) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 30% 20%, rgba(26, 84, 67, 0.4) 0%, transparent 60%),
              linear-gradient(135deg, #082821 0%, #0d3b2e 35%, #1a5443 70%, #082821 100%)
            `,
          }}
        />

        <div className="absolute inset-0 paisley-bg opacity-[0.08] pointer-events-none" />

        <svg
          className="absolute top-8 left-8 w-32 h-32 text-saffron/15 hidden md:block pointer-events-none"
          viewBox="0 0 100 100"
        >
          <path
            d="M5 5 L95 5 M5 5 L5 95 M5 25 Q 25 25 25 5 M5 35 Q 35 35 35 5 M5 45 Q 45 45 45 5"
            stroke="currentColor"
            strokeWidth="0.4"
            fill="none"
          />
          <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          <circle cx="25" cy="25" r="1" fill="currentColor" />
          <circle cx="35" cy="35" r="1" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-16 right-8 w-32 h-32 text-saffron/15 hidden md:block pointer-events-none rotate-180"
          viewBox="0 0 100 100"
        >
          <path
            d="M5 5 L95 5 M5 5 L5 95 M5 25 Q 25 25 25 5 M5 35 Q 35 35 35 5 M5 45 Q 45 45 45 5"
            stroke="currentColor"
            strokeWidth="0.4"
            fill="none"
          />
          <circle cx="5" cy="5" r="1.5" fill="currentColor" />
          <circle cx="25" cy="25" r="1" fill="currentColor" />
          <circle cx="35" cy="35" r="1" fill="currentColor" />
        </svg>

        <div className="absolute inset-0 grain pointer-events-none opacity-60" />

        <div className="relative z-10 h-full grid lg:grid-cols-[1.1fr_1fr] gap-4 lg:gap-12 items-center px-7 md:px-14 lg:px-20">
          <div className="text-cream">
            <Reveal key={`eyebrow-${active}`}>
              <div className="inline-flex items-center gap-3 text-saffron-light text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase mb-6 md:mb-8 bg-saffron/10 backdrop-blur-sm border border-saffron/30 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
                {slide.eyebrow}
              </div>
            </Reveal>

            <Reveal key={`title-${active}`} delay={80}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] tracking-[-0.035em] font-light mb-6 md:mb-10">
                <span className="block">{slide.title[0]}</span>
                <span className="block italic text-saffron font-normal">
                  {slide.title[1]}
                </span>
                <span className="block relative">
                  {slide.title[2]}
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-[min(100%,420px)]"
                    viewBox="0 0 460 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 Q 115 2, 230 6 T 458 5"
                      stroke="#d4a017"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal key={`desc-${active}`} delay={180}>
              <p className="text-cream/75 text-base md:text-lg max-w-lg mb-8 md:mb-10 leading-relaxed">
                {slide.desc}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  href="/shop"
                  className="group inline-flex items-center justify-center gap-3 bg-cream text-mandaar px-7 md:px-9 py-4 rounded-full text-sm font-semibold tracking-wide btn-magnetic hover:bg-snow hover:shadow-[0_15px_40px_rgba(247,241,227,0.3)] w-fit"
                >
                  Shop Our Collection
                  <ArrowRightIcon
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/about"
                  className="font-display italic text-cream/90 text-base underline underline-offset-4 decoration-saffron decoration-2 hover:text-saffron transition-colors px-3 py-2 w-fit"
                >
                  Our story →
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={300}>
            <div className="relative w-full aspect-square max-w-[460px] mx-auto hidden lg:block">
              <div className="absolute inset-0 spin-slow">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <path
                      id="circle-text"
                      d="M 200,200 m -180,0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                    />
                  </defs>
                  <text className="fill-saffron/60" style={{ fontFamily: 'Fraunces, serif' }} fontSize="13" letterSpacing="3">
                    <textPath href="#circle-text">
                      • MANDAAR • UDAIPUR • EST. 2018 • RAJASTHAN • PREMIUM DRY FRUITS • DIRECT SOURCED •
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className="absolute inset-[14%] rounded-full border-2 border-saffron/20" />
              <div className="absolute inset-[16%] rounded-full border border-saffron/30" />

              <div
                className="absolute inset-[20%] rounded-full"
                style={{
                  border: "1px dashed rgba(212, 160, 23, 0.35)",
                }}
              />

              <div className="absolute inset-[24%] rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(ellipse 40% 30% at 50% 25%, rgba(255, 220, 150, 0.4) 0%, transparent 70%),
                      radial-gradient(ellipse 25% 30% at 35% 40%, #8b5a2b 0%, #5c2e0b 60%, transparent 75%),
                      radial-gradient(ellipse 8% 8% at 32% 35%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
                      radial-gradient(ellipse 22% 28% at 65% 45%, #7a3d18 0%, #4a240a 60%, transparent 75%),
                      radial-gradient(ellipse 7% 7% at 62% 40%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
                      radial-gradient(ellipse 25% 30% at 50% 70%, #8b4513 0%, #5c2e0b 60%, transparent 75%),
                      radial-gradient(ellipse 8% 8% at 47% 65%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
                      linear-gradient(135deg, #4a2510 0%, #2a1404 100%)
                    `,
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 30% at 50% 8%, rgba(255, 240, 200, 0.3) 0%, transparent 65%)",
                    boxShadow:
                      "inset 0 0 20px rgba(0, 0, 0, 0.6), inset 0 0 0 2px rgba(212, 160, 23, 0.3)",
                  }}
                />
              </div>

              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <div
                  key={deg}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-saffron/70"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-180px)`,
                  }}
                />
              ))}

              <div className="absolute bottom-0 left-0 bg-snow/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex items-center gap-3 float-slow z-20">
                <div
                  className="w-10 h-10 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #e8b94a, #8b6914)",
                    boxShadow: "inset 0 -3px 6px rgba(0,0,0,0.25)",
                  }}
                />
                <div>
                  <div className="font-semibold text-sm text-mandaar">
                    Mamra Badam
                  </div>
                  <div className="text-[11px] text-warm-gray">
                    Iran · From ₹4,099/kg
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 bg-snow/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] text-center float-slower z-20">
                <div className="text-saffron text-xs tracking-[3px] mb-0.5">
                  ★ ★ ★ ★ ★
                </div>
                <div className="text-[11px] text-warm-gray font-medium whitespace-nowrap">
                  Hand-picked Premium
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-[280px] mx-auto aspect-square lg:hidden mt-4">
              <div className="absolute inset-0 spin-slow">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <path id="circle-text-mob" d="M 200,200 m -170,0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0" />
                  </defs>
                  <text className="fill-saffron/60" style={{ fontFamily: 'Fraunces, serif' }} fontSize="15" letterSpacing="3">
                    <textPath href="#circle-text-mob">
                      • MANDAAR • UDAIPUR • EST. 2018 • PREMIUM •
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-[20%] rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(ellipse 25% 30% at 35% 40%, #8b5a2b 0%, #5c2e0b 60%, transparent 75%),
                      radial-gradient(ellipse 22% 28% at 65% 45%, #7a3d18 0%, #4a240a 60%, transparent 75%),
                      radial-gradient(ellipse 25% 30% at 50% 70%, #8b4513 0%, #5c2e0b 60%, transparent 75%),
                      linear-gradient(135deg, #4a2510 0%, #2a1404 100%)
                    `,
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute top-7 md:top-10 right-6 md:right-10 z-30 bg-mandaar-deep/80 backdrop-blur-sm border border-saffron/30 text-saffron px-4 py-2 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase items-center gap-2 hidden md:inline-flex">
          <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
          Free Shipping ₹999+
        </div>

        <div className="absolute bottom-12 md:bottom-14 left-7 md:left-14 lg:left-20 z-20 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? "w-10 h-2 bg-saffron"
                  : "w-2 h-2 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full h-8 md:h-12"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,60 C180,35 360,5 540,25 C720,45 900,15 1080,30 C1260,45 1380,20 1440,30 L1440,60 Z"
            fill="#fbfaf7"
          />
        </svg>
      </div>
    </section>
  );
}
