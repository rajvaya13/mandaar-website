import Reveal from "@/components/Reveal";

type Category = {
  name: string;
  count: string;
  href: string;
  accentColor: string;
  bgGradient: string;
  bowl: string;
};

const categories: Category[] = [
  {
    name: "Dates",
    count: "18 varieties",
    href: "/shop/dates",
    accentColor: "#5c2e0b",
    bgGradient: "linear-gradient(135deg, #faf6ec 0%, #f0e4cc 100%)",
    bowl: `
      radial-gradient(ellipse 25% 30% at 30% 30%, #5c2e0b 0%, #3d1f06 60%, transparent 75%),
      radial-gradient(ellipse 8% 8% at 28% 26%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
      radial-gradient(ellipse 22% 28% at 60% 35%, #6b3818 0%, #4a240a 60%, transparent 75%),
      radial-gradient(ellipse 7% 7% at 58% 31%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
      radial-gradient(ellipse 28% 32% at 45% 70%, #5c2e0b 0%, #3d1f06 60%, transparent 75%),
      radial-gradient(ellipse 9% 9% at 43% 66%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
      radial-gradient(circle at 50% 50%, #3d2818 0%, #2a1808 80%, #1a1004 100%)
    `,
  },
  {
    name: "Cashews",
    count: "12 varieties",
    href: "/shop/cashews",
    accentColor: "#8b7050",
    bgGradient: "linear-gradient(135deg, #fff8ec 0%, #f5e8cf 100%)",
    bowl: `
      radial-gradient(ellipse 24% 18% at 30% 30%, #f0d4a0 0%, #c4a47a 70%, transparent 80%),
      radial-gradient(ellipse 8% 6% at 28% 26%, rgba(255, 245, 220, 0.65) 0%, transparent 100%),
      radial-gradient(ellipse 22% 16% at 60% 35%, #e8c89e 0%, #b89678 70%, transparent 80%),
      radial-gradient(ellipse 7% 5% at 58% 31%, rgba(255, 245, 220, 0.65) 0%, transparent 100%),
      radial-gradient(ellipse 26% 19% at 45% 70%, #f0d4a0 0%, #c4a47a 70%, transparent 80%),
      radial-gradient(ellipse 9% 6% at 43% 66%, rgba(255, 245, 220, 0.65) 0%, transparent 100%),
      radial-gradient(circle at 50% 50%, #8b7050 0%, #6b5435 80%, #4a3a20 100%)
    `,
  },
  {
    name: "Almonds",
    count: "9 varieties",
    href: "/shop/almonds",
    accentColor: "#8b4513",
    bgGradient: "linear-gradient(135deg, #fff3e8 0%, #f5d8b8 100%)",
    bowl: `
      radial-gradient(ellipse 16% 24% at 30% 30%, #d4854a 0%, #8b4513 70%, transparent 80%),
      radial-gradient(ellipse 5% 9% at 28% 26%, rgba(255, 220, 180, 0.55) 0%, transparent 100%),
      radial-gradient(ellipse 15% 23% at 60% 35%, #c4733a 0%, #7a3d10 70%, transparent 80%),
      radial-gradient(ellipse 5% 8% at 58% 31%, rgba(255, 220, 180, 0.55) 0%, transparent 100%),
      radial-gradient(ellipse 17% 25% at 45% 70%, #d4854a 0%, #8b4513 70%, transparent 80%),
      radial-gradient(ellipse 5% 9% at 43% 66%, rgba(255, 220, 180, 0.55) 0%, transparent 100%),
      radial-gradient(circle at 50% 50%, #6b3818 0%, #4a240a 80%, #2a1404 100%)
    `,
  },
  {
    name: "Pistachios",
    count: "7 varieties",
    href: "/shop/pistachios",
    accentColor: "#6b7d30",
    bgGradient: "linear-gradient(135deg, #f4f8e8 0%, #dde8c5 100%)",
    bowl: `
      radial-gradient(ellipse 18% 18% at 30% 30%, #b0c068 0%, #6b7d30 70%, transparent 80%),
      radial-gradient(ellipse 6% 6% at 28% 26%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
      radial-gradient(ellipse 17% 17% at 60% 35%, #a0b05a 0%, #5c6b30 70%, transparent 80%),
      radial-gradient(ellipse 5% 5% at 58% 31%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
      radial-gradient(ellipse 19% 19% at 45% 70%, #b0c068 0%, #6b7d30 70%, transparent 80%),
      radial-gradient(ellipse 6% 6% at 43% 66%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
      radial-gradient(circle at 50% 50%, #4a5520 0%, #3d4520 80%, #2a3015 100%)
    `,
  },
  {
    name: "Raisins",
    count: "11 varieties",
    href: "/shop/raisins",
    accentColor: "#8b6914",
    bgGradient: "linear-gradient(135deg, #fdf6e0 0%, #f0dcaa 100%)",
    bowl: `
      radial-gradient(ellipse 12% 13% at 30% 28%, #e8b840 0%, #8b6914 70%, transparent 80%),
      radial-gradient(ellipse 4% 5% at 28% 25%, rgba(255, 240, 180, 0.55) 0%, transparent 100%),
      radial-gradient(ellipse 11% 12% at 55% 32%, #d4a017 0%, #7a5510 70%, transparent 80%),
      radial-gradient(ellipse 4% 4% at 53% 29%, rgba(255, 240, 180, 0.55) 0%, transparent 100%),
      radial-gradient(ellipse 13% 14% at 42% 55%, #e8b840 0%, #8b6914 70%, transparent 80%),
      radial-gradient(ellipse 4% 5% at 40% 52%, rgba(255, 240, 180, 0.55) 0%, transparent 100%),
      radial-gradient(ellipse 11% 12% at 65% 70%, #d4a017 0%, #7a5510 70%, transparent 80%),
      radial-gradient(circle at 50% 50%, #6b4d10 0%, #4a3510 80%, #2a200a 100%)
    `,
  },
  {
    name: "Gift Hampers",
    count: "24 options",
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 60}>
              <a
                href={cat.href}
                className="group relative block aspect-square rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
                style={{ background: cat.bgGradient }}
              >
                {/* Top label */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className="text-[10px] font-semibold tracking-[0.15em] uppercase"
                    style={{ color: cat.accentColor }}
                  >
                    {cat.count}
                  </div>
                </div>

                {/* Center bowl visual */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  {cat.name === "Gift Hampers" ? (
                    <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                      {/* Elegant gift box illustration */}
                      <div
                        className="relative w-full h-full rounded-lg shadow-[0_15px_30px_rgba(139,58,46,0.3)]"
                        style={{
                          background:
                            "linear-gradient(135deg, #e8b94a 0%, #d4a017 50%, #8b6914 100%)",
                        }}
                      >
                        {/* Ribbon cross */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-3 -translate-x-1/2 bg-rust shadow-[inset_0_0_3px_rgba(0,0,0,0.4)]" />
                        <div className="absolute top-1/2 left-0 right-0 h-3 -translate-y-1/2 bg-rust shadow-[inset_0_0_3px_rgba(0,0,0,0.4)]" />
                        {/* Bow */}
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
                <div className="absolute inset-x-0 bottom-0 px-4 md:px-5 py-4 bg-gradient-to-t from-white/95 via-white/80 to-transparent">
                  <div className="font-display text-base md:text-lg font-medium text-mandaar leading-tight flex items-center justify-between">
                    {cat.name}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-mandaar opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
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
