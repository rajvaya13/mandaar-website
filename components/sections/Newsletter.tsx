"use client";

import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 3500);
  };

  return (
    <section className="bg-snow px-6 md:px-14 py-24 md:py-28">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="relative bg-mandaar text-cream rounded-[2rem] px-8 md:px-16 py-14 md:py-20 overflow-hidden grain shadow-[0_30px_80px_rgba(13,59,46,0.2)]">
            {/* Decorative glows */}
            <div
              className="absolute -top-20 -right-20 w-80 h-80 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,160,23,0.20) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute -bottom-24 -left-16 w-72 h-72 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)",
              }}
            />

            <div className="relative z-10 text-center">
              <div className="text-saffron text-xs font-medium tracking-[0.3em] uppercase mb-4">
                The Inner Circle
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-5">
                First taste of{" "}
                <span className="italic text-saffron-light">new arrivals</span>
              </h2>
              <p className="text-cream/70 text-base max-w-lg mx-auto mb-9 leading-relaxed">
                Recipes from our kitchen, exclusive subscriber pricing, and
                early access to fresh arrivals each season.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-cream/10 border border-cream/15 text-cream placeholder:text-cream/40 px-5 py-3.5 rounded-full text-sm outline-none focus:border-saffron transition-colors"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-saffron text-mandaar-deep px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide btn-magnetic hover:bg-saffron-light"
                >
                  {done ? "Subscribed ✓" : "Subscribe"}
                  {!done && (
                    <ArrowRightIcon
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  )}
                </button>
              </form>

              <p className="text-cream/40 text-[11px] mt-5 tracking-wide">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
