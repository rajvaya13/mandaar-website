import Reveal from "@/components/Reveal";

type Category = {
  name: string;
  count: string;
  href: string;
  accentColor: string;
  bgGradient: string;
  bowl: string;
  badge?: string;
};

// 6 featured categories on homepage + Gift Hampers (7 total)
const categories: Category[] = [
  {
    name: "Mamra Almonds",
    count: "4 grades · Premium",
    href: "/shop?cat=mamra",
    accentColor: "#4a1808",
    bgGradient: "linear-gradient(135deg, #fdf0ea 0%, #f0c8b4 100%)",
    bowl: `
      radial-gradient(ellipse 14% 22% at 30% 30%, #9a4a20 0%, #5c2008 70%, transparent 80%),
      radial-gradient(ellipse 13% 21% at 60% 32%, #8b3d18 0%, #4a1808 70%, transparent 80%),
      radial-gradient(ellipse 15% 23% at 45% 60%, #9a4a20 0%, #5c2008 70%, transparent 80%),
      radial-gradient(ellipse 13% 21% at 70% 65%, #8b3d18 0%, #4a1808 70%, transparent 80%),
      radial-gradient(circle at 50% 50%, #4a1808 0%, #2a0f04 80%, #1a0802 100%)
    `,
    badge: "FINEST",
  },
  {
    name: "Cashews",
    count: "3 grades",
    href: "/shop?cat=cashews",
    accentColor: "#8b7050",
    bgGradient: "linear-gradient(135deg, #fff8ec 0%, #f5e8cf 100%)",
    bowl: `
      radial-gradient(ellipse 24% 18% at 30% 30%, #f0d4a0 0%, #c4a47a 70%, transparent 80%),
      radial-gradient(ellipse 22% 16% at 60% 35%, #e8c89e 0%, #b89678 70%, transparent 80%),
      radial-gradient(ellipse 26% 19% at 45% 70%, #f0d4a0 0%, #c4a47a 70%, transparent 80%),
      radial-gradient(circle at 50% 50%, #8b7050 0%, #6b5435 80%, #4a3a20 100%)
    `,
  },
  {
    name: "Pistachios",
    count: "3 grades",
    href: "/shop?cat=pistachios",
    accentColor: "#6b7d30",
    bgGradient: "linear-gradient(135deg, #f4f8e8 0%, #dde8c5 100%)",
    bowl: `
      radial-gradient(ellipse 18% 18% at 30% 30%, #b0c068 0%, #6b7d30 70%, transparent 80%),
      radial-gradient(ellipse 17% 17% at 60% 35%, #a0b05a 0%, #5c6b30 70%, transparent 80%),
      radial-gradient(ellipse 19% 19% at 45% 70%, #b0c068 0%, #6b7d30 70%, transparent 80%),
      radial-gradient(circle at 50% 50%, #4a5520 0%, #3d4520 80%, #2a3015 100%)
    `,
  },
  {
    name: "Walnuts",
    count: "3 varieties",
    href: "/shop?cat=walnuts",
    accentColor: "#6b4828",
    bgGradient: "linear-gradient(135deg, #fbf3e8 0%, #e8d4ba 100%)",
    bowl: `
      radial-gradient(ellipse 22% 20% at 30% 30%, #c89770 0%, #8b6240 70%, transparent 80%),
      radial-gradient(ellipse 20% 18% at 65% 35%, #b48058 0%, #7a4d28 70%, transparent 80%),
      radial-gradient(ellipse 24% 22% at 40% 65%, #c89770 0%, #8b6240 70%, transparent 80%),
      radial-gradient(circle at 50% 50%, #6b4828 0%, #4a3220 80%, #2a1c0a 100%)
    `,
  },
  {
    name: "Figs (Anjeer)",
    count: "2 grades",
    href: "/shop?cat=figs",
    accentColor: "#7a4d2a",
    bgGradient: "linear-gradient(135deg, #fdf2e8 0%, #f0d4b8 100%)",
    bowl: `
      radial-gradient(ellipse 22% 20% at 30% 30%, #c4956b 0%, #7a4d2a 70%, transparent 80%),
      radial-gradient(ellipse 20% 18% at 65% 35%, #b88556 0%, #6b3a18 70%, transparent 80%),
      radial-gradient(ellipse 24% 22% at 40% 65%, #c4956b 0%, #7a4d2a 70%, transparent 80%),
      radial-gradient(circle at 50% 50%, #5c3818 0%, #4a2810 80%, #2a1808 100%)
    `,
  },
  {
    name: "Raisins",
    count: "2 grades",
    href: "/shop?cat=raisins",
    accentColor: "#8b6914",
    bgGradient: "linear-gradient(135deg, #fdf6e0 0%, #f0dcaa 100%)",
    bowl: `
      radial-gradient(ellipse 12% 13% at 30% 28%, #e8b840 0%, #8b6914 70%, transparent 80%),
      radial-gradient(ellipse 11% 12% at 55% 32%, #d4a017 0%, #7a5510 70%, transparent 80%),
      radial-gradient(ellipse 13% 14% at 42% 55%, #e8b840 0%, #8b6914 70%, transparent 80%),
      radial-gradient(circle at 50% 50%, #6b4d10 0%, #4a3510 80%, #2a200a 100%)
    `,
  },
  {
    name: "Gift Hampers",
    count: "3 tiers",
    href: "/gift",
    accentColor: "#8b3a2e",
    bgGradient: "linear-gradient(135deg, #fff0ec 0%, #f5cfc5 100%)",
    bowl: "",
  },
];

export default function Categories() {
  return (
    <section className="px-6 md:px-14 py-20 md:py-28 bg-snow">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Shop By Category
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-mandaar font-normal tracking-tight">
              From the finest <span className="italic text-saffron">origins</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 60}>
              <a
                href={cat.href}
                className="group relative block aspect-square rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
                style={{ background: cat.bgGradient }}
              >
                {/* Top labels */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
                  <div
                    className="text-[10px] font-semibold tracking-[0.15em] uppercase"
                    style={{ color: cat.accentColor }}
                  >
                    {cat.count}
                  </div>
                </div>

                {/* Premium badge for Mamra */}
                {cat.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-mandaar text-saffron text-[9px] font-bold px-2 py-0.5 rounded tracking-wider">
                    {cat.badge}
                  </div>
                )}

                {/* Center bowl visual */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  {cat.name === "Gift Hampers" ? (
                    <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                      <div
                        className="relative w-full h-full rounded-lg shadow-[0_15px_30px_rgba(139,58,46,0.3)]"
                        style={{
                          background:
                            "linear-gradient(135deg, #e8b94a 0%, #d4a017 50%, #8b6914 100%)",
                        }}
                      >
                        <div className="absolute left-1/2 top-0 bottom-0 w-3 -translate-x-1/2 bg-rust shadow-[inset_0_0_3px_rgba(0,0,0,0.4)]" />
                        <div className="absolute top-1/2 left-0 right-0 h-3 -translate-y-1/2 bg-rust shadow-[inset_0_0_3px_rgba(0,0,0,0.4)]" />
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-5">
                          <div className="absolute inset-0 bg-rust rounded-t-full" />
                          <div className="absolute top-1 -left-1 w-3 h-3 bg-rust rounded-full -rotate-[30deg]" />
                          <div className="absolute top-1 -right-1 w-3 h-3 bg-rust rounded-full rotate-[30deg]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-3/4 h-3/4 rounded-full bowl-base group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: cat.bowl }}
                    />
                  )}
                </div>

                {/* Bottom label */}
                <div className="absolute inset-x-0 bottom-0 px-3 md:px-4 py-3 bg-gradient-to-t from-white/95 via-white/85 to-transparent">
                  <div className="font-display text-sm md:text-base font-medium text-mandaar leading-tight flex items-center justify-between">
                    <span className="truncate pr-1">{cat.name}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-mandaar opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
