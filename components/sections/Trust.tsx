import Reveal from "@/components/Reveal";

const badges = [
  { label: "FSSAI Certified", sub: "Lic. 12345678901234" },
  { label: "GST Registered", sub: "08AABCM1234X1Z5" },
  { label: "Google Verified", sub: "4.8 ★ on Maps" },
  { label: "Just Dial Top-Rated", sub: "Udaipur · 2024" },
];

export default function Trust() {
  return (
    <section className="bg-snow px-6 md:px-14 py-14 border-y border-mandaar/5">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-8">
            <p className="text-warm-gray text-xs font-medium tracking-[0.3em] uppercase">
              Certified & Trusted
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <Reveal key={b.label} delay={i * 80}>
              <div className="text-center py-5 px-3 rounded-2xl hover:bg-cream-warm transition-colors">
                <div className="font-display text-mandaar text-base md:text-lg font-medium">
                  {b.label}
                </div>
                <div className="text-warm-gray text-[11px] mt-1 tracking-wide">
                  {b.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
