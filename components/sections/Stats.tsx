import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";

const stats = [
  { number: 38, label: "Years of Trust" },
  { number: 120, label: "Premium Varieties" },
  { number: 15000, label: "Happy Households" },
  { number: 50, label: "Cities Served" },
];

export default function Stats() {
  return (
    <section className="bg-snow border-b border-mandaar/5 px-6 md:px-14 py-10 md:py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl text-mandaar font-normal tracking-tight">
                <AnimatedCounter end={s.number} />
                <span className="italic text-saffron">+</span>
              </div>
              <div className="text-[11px] text-warm-gray tracking-[0.15em] uppercase mt-2">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
