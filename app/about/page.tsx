import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "lucide-react";

const milestones = [
  {
    year: "1987",
    title: "The first shop opens",
    desc: "Our grandfather opens a small dry fruits shop on Bhupalpura Main Road, near Gattani Hospital. He insists every product be tasted before being sold.",
  },
  {
    year: "1998",
    title: "First direct sourcing trip",
    desc: "We travel to Kashmir for the first time, returning with walnuts directly from Pampore farmers. The middleman is cut out for good.",
  },
  {
    year: "2010",
    title: "International origins",
    desc: "Direct sourcing partnerships established with growers in Jordan (Medjoul dates), Iran (pistachios), and Turkey (apricots).",
  },
  {
    year: "2019",
    title: "Family hands take over",
    desc: "The third generation joins. We add vacuum-sealing, climate-controlled storage, and pan-India shipping while keeping every quality standard.",
  },
  {
    year: "2026",
    title: "Mandaar online",
    desc: "Three generations later, the same shop on Bhupalpura Road now ships across India through this website. Same standard. Same family.",
  },
];

const values = [
  "Hand-picked directly from origin farms — no middlemen",
  "Vacuum-sealed within hours of arrival at our warehouse",
  "Each batch tasted and graded by family members before sale",
  "100% natural, no sulphur, no added sugar, no preservatives",
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
            Three generations of <span className="italic text-saffron">care</span>
          </>
        }
        description="Mandaar isn't a business decision. It's a 38-year-old family promise."
      />

      {/* === FOUNDER STORY === */}
      <section className="bg-ivory px-6 md:px-14 py-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="space-y-6 text-warm-gray leading-[1.85] text-base md:text-lg">
              <p>
                It started in 1987, on a quiet stretch of Bhupalpura Main Road in
                Udaipur — a few hundred metres from Gattani Hospital, in a shop
                no bigger than a small living room.
              </p>
              <p>
                Our grandfather had a simple rule: he wouldn&apos;t sell a single
                date he hadn&apos;t personally tasted. He would sit on a small
                wooden stool by the entrance, open every fresh sack that
                arrived from suppliers, and decide right there whether it was
                going on the shelves — or going straight back. Customers
                started coming from the next neighbourhood, then from across
                Udaipur, and eventually from Mount Abu, Chittor, even Jaipur.
              </p>
              <p>
                The shop is still on the same road. The wooden stool is still
                inside.
              </p>
              <p>
                What&apos;s changed: we now travel ourselves to Kashmir each
                October for the walnut harvest, to Pampore where light-coloured
                halves come straight from the cold-press shed. We&apos;ve flown
                to Jordan to walk the Medjoul date farms in the Jordan Valley.
                Our pistachios come from a single grower in Kerman, Iran.
                Apricots from Malatya in eastern Turkey.
              </p>
              <p>
                No middlemen. No imported-then-resold. Every product on our
                shelves can be traced back to the farm where it grew, and most
                of the time, to the person who picked it.
              </p>
              <p>
                Three generations have passed since 1987. The shop, the family
                name, and the standard have not.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="font-display italic text-saffron text-2xl text-center mt-12">
              — The Mandaar family
            </div>
          </Reveal>
        </div>
      </section>

      {/* === TIMELINE — REWRITTEN === */}
      <section className="bg-snow px-6 md:px-14 py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-4">
                Our Timeline
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-mandaar font-normal tracking-tight">
                38 years, <span className="italic text-saffron">one shop</span>
              </h2>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] md:left-1/2 top-2 bottom-2 w-px bg-mandaar/15 md:-translate-x-px" />

            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={m.year} delay={i * 100}>
                  <div className="relative mb-14 md:mb-20 last:mb-0">
                    {/* Dot */}
                    <div className="absolute left-[11px] md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-saffron border-4 border-snow shadow-md z-10" />

                    {/* Mobile layout: single column with left padding */}
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

                    {/* Desktop layout: two columns with alternating sides */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-start">
                      {/* Big year number side */}
                      <div
                        className={
                          isEven
                            ? "text-right pr-4"
                            : "col-start-2 text-left pl-4"
                        }
                      >
                        <div className="font-display text-7xl lg:text-8xl font-light text-mandaar/15 leading-none">
                          {m.year}
                        </div>
                      </div>

                      {/* Content side */}
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
