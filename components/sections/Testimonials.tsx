import Reveal from "@/components/Reveal";

const testimonials = [
  {
    initials: "PA",
    name: "Priya Agarwal",
    location: "Mumbai, Maharashtra",
    text: "Bought the Maharaja hamper for our Diwali clients. The packaging alone got compliments. The Medjoul dates? Unreal. Already reordered twice.",
  },
  {
    initials: "RJ",
    name: "Rohit Jhunjhunwala",
    location: "Bangalore, Karnataka",
    text: "Been buying from Mandaar since I was a child visiting Udaipur. Now they ship to Bangalore in 2 days. Same quality, same trust, just easier.",
  },
  {
    initials: "SK",
    name: "Sneha Kapoor",
    location: "Delhi NCR",
    text: "The walnuts are genuinely Kashmiri - you can taste the difference. My mother insists we get them only from here now. Worth every rupee.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-ivory px-6 md:px-14 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Customer Stories
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-mandaar font-normal tracking-tight">
              Loved by families{" "}
              <span className="italic text-saffron">across India</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="relative bg-snow rounded-3xl p-8 md:p-9 shadow-card hover:shadow-card-hover hover:-translate-y-2 hover:border-saffron/30 transition-all duration-500 h-full border border-transparent">
                {/* Decorative quote mark */}
                <span className="font-display text-[6rem] text-saffron/30 leading-[0.5] absolute top-8 right-7 select-none">
                  &ldquo;
                </span>

                <div className="text-saffron text-sm tracking-[3px] mb-5 relative z-10">
                  ★ ★ ★ ★ ★
                </div>
                <p className="font-display text-lg leading-relaxed text-zinc-900 mb-7 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-mandaar/10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-saffron to-rust text-cream flex items-center justify-center font-display font-medium shadow-md">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-medium text-mandaar text-sm">
                      {t.name}
                    </div>
                    <div className="text-warm-gray text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
