import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "The shop opens",
    desc: "Mandaar opens on Bhupalpura Main Road in Udaipur, near Gattani Hospital. One founding rule from day one: every product is hand-graded and personally tasted before going on the shelves.",
  },
  {
    year: "The Years Since",
    title: "Building direct partnerships",
    desc: "Trip by trip, supplier by supplier — we replace middlemen with farmer-direct relationships. Kashmiri walnut growers in Pampore. Jordanian Medjoul date farms in the Jordan Valley. Iranian pistachio orchards in Kerman. Turkish apricot growers in Malatya.",
  },
  {
    year: "2026",
    title: "Mandaar goes online",
    desc: "Eight years after opening, Mandaar launches online — the same hand-picked, hand-graded products, now shipping across India in 2–4 days.",
  },
];

const values = [
  "Hand-picked directly from origin farms — no middlemen",
  "Vacuum-sealed within hours of arrival at our warehouse",
  "Every batch tasted and graded by the owner before being sold",
  "100% natural — no sulphur, no added sugar, no preservatives",
  "FSSAI certified, GST registered, fully traceable supply chain",
  "If you're not happy with any order, we replace it. No questions.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Heritage" }]}
        eyebrow="Our Story"
        title={
          <>
            Sourced direct, <span className="italic text-saffron">sold honestly</span>
          </>
        }
        description="Mandaar opened in 2018 with one promise: source the finest dry fruits directly from origin farms, and sell only what we'd serve at our own table."
      />

      {/* === FOUNDER STORY === */}
      <section className="bg-ivory px-6 md:px-14 py-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="space-y-6 text-warm-gray leading-[1.85] text-base md:text-lg">
              <p>
                It started in 2018, on a quiet stretch of Bhupalpura Main Road
                in Udaipur — a few hundred metres from Gattani Hospital, in a
                shop no bigger than a small living room.
              </p>
              <p>
                The founding rule was simple: every date, every nut, every
                batch had to be hand-graded and personally tasted by the owner
                before it could go on the shelves. If it didn&apos;t pass, it
                didn&apos;t sell — it went straight back to the supplier.
              </p>
              <p>
                Customers came at first from the next neighbourhood, then from
                across Udaipur, and word travelled — to Mount Abu, Chittor, even
                Jaipur. The shop is still on the same road.
              </p>
              <p>
                What&apos;s grown since: we now travel ourselves to Kashmir
                each October for the walnut harvest, to Pampore where
                light-coloured halves come straight from the cold-press shed.
                We&apos;ve flown to Jordan to walk the Medjoul date farms in
                the Jordan Valley. Our pistachios come from a single grower in
                Kerman, Iran. Apricots from Malatya in eastern Turkey.
              </p>
              <p>
                No middlemen. No imported-then-resold. Every product on our
                shelves can be traced back to the farm where it grew, and most
                of the time, to the person who picked it.
              </p>
              <p>
                Eight years on. One shop. One standard. The same founding rule.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="font-display italic text-saffron text-2xl text-center mt-12">
              — Mandaar
            </div>
          </Reveal>
        </div>
      </section>

      {/* === TIMELINE === */}
      <section className="bg-snow px-6 md:px-14 py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-4">
                Our Timeline
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-mandaar font-normal tracking-tight">
                From a single shop, <span className="italic text-saffron">step by step</span>
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[11px] md:left-1/2 top-2 bottom-2 w-px bg-mandaar/15 md:-translate-x-px" />

            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={m.year} delay={i * 100}>
                  <div className="relative mb-14 md:mb-20 last:mb-0">
                    <div className="absolute left-[11px] md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-saffron border-4 border-snow shadow-md z-10" />

                    <div className="md:hidden pl-10">
                      <div className="font-display text-saffron text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                        {m.year}
                      </div>
                      <h3 className="font-display text-xl text-mandaar font-medium mb-3">
                        {m.title}
                      </h3>
                      <p className="text-warm-gray text-sm leading-relaxed">
                        {m.desc}
                      </p>
                    </div>

                    <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-start">
                      <div
                        className={
                          isEven
                            ? "text-right pr-4"
                            : "col-start-2 text-left pl-4"
                        }
                      >
                        <div className="font-display text-5xl lg:text-7xl font-light text-mandaar/15 leading-none">
                          {m.year}
                        </div>
                      </div>

                      <div
                        className={
                          isEven
                            ? "col-start-2 pl-4"
                            : "row-start-1 text-right pr-4"
                        }
                      >
                        <div className="font-display text-saffron text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                          {m.year}
                        </div>
                        <h3 className="font-display text-2xl text-mandaar font-medium mb-3">
                          {m.title}
                        </h3>
                        <p className="text-warm-gray text-base leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* === VALUES === */}
      <section className="bg-mandaar text-cream px-6 md:px-14 py-24 grain">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-saffron text-xs font-medium tracking-[0.3em] uppercase mb-4">
                What we promise
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight">
                The Mandaar <span className="italic text-saffron-light">guarantee</span>
              </h2>
            </div>
          </Reveal>

          <ul className="space-y-5 max-w-2xl mx-auto">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-saffron text-mandaar-deep flex items-center justify-center mt-0.5">
                    <CheckIcon size={16} strokeWidth={3} />
                  </span>
                  <span className="text-cream/85 text-base md:text-lg leading-relaxed pt-0.5">
                    {v}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
