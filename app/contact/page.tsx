"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
} from "lucide-react";

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
  </svg>
);

const hours = [
  { day: "Monday – Saturday", time: "10:00 AM – 9:30 PM" },
  { day: "Sunday", time: "11:00 AM – 8:00 PM" },
  { day: "Festival days", time: "Extended hours · check WhatsApp" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in touch"
        title={
          <>
            We&apos;d love to <span className="italic text-saffron">hear from you</span>
          </>
        }
        description="Drop by the store, send us a WhatsApp, or use the form below. We typically reply within 4 working hours."
      />

      <section className="bg-ivory px-6 md:px-14 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16">

          {/* === LEFT: STORE INFO === */}
          <div>
            <Reveal>
              <div className="bg-snow rounded-3xl p-8 md:p-10 shadow-card mb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-mandaar text-saffron flex items-center justify-center flex-shrink-0">
                    <MapPinIcon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-warm-gray text-xs font-medium tracking-[0.2em] uppercase mb-1">
                      Visit Our Store
                    </div>
                    <h3 className="font-display text-mandaar text-xl font-medium mb-2">
                      Mandaar Dry Fruits
                    </h3>
                    <address className="not-italic text-warm-gray text-sm leading-relaxed">
                      Shop No. 406, Bhupalpura Main Road, Udaipole<br />
                      Near Gattani Hospital, Udaipur - 313001<br />
                      Rajasthan, India
                    </address>
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="aspect-[16/9] rounded-2xl overflow-hidden relative"
                  style={{
                    background: `
                      radial-gradient(circle at 50% 50%, #faf6ec 0%, #e8dcc4 100%),
                      linear-gradient(135deg, #faf6ec 0%, #e8dcc4 100%)
                    `,
                  }}
                >
                  {/* Mock map streets pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-mandaar/30" />
                    <div className="absolute top-2/3 left-0 right-0 h-px bg-mandaar/30" />
                    <div className="absolute left-1/4 top-0 bottom-0 w-px bg-mandaar/30" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-px bg-mandaar/30" />
                    <div className="absolute top-[20%] left-[10%] right-[60%] h-px bg-mandaar/20 rotate-12 origin-left" />
                  </div>

                  {/* Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                    <div className="relative">
                      <div className="w-10 h-10 bg-rust rounded-full flex items-center justify-center text-cream shadow-[0_8px_16px_rgba(0,0,0,0.2)] animate-bounce">
                        <MapPinIcon size={20} fill="currentColor" />
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-rust rotate-45" />
                    </div>
                  </div>

                  {/* Open in Maps button */}
                  <a
                    href="https://www.google.com/maps/search/Mandaar+Dry+Fruits+Bhupalpura+Udaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-snow text-mandaar px-4 py-2 rounded-full text-xs font-semibold shadow-md hover:bg-cream transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Hours */}
            <Reveal delay={100}>
              <div className="bg-snow rounded-3xl p-8 md:p-10 shadow-card mb-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-mandaar text-saffron flex items-center justify-center flex-shrink-0">
                    <ClockIcon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-warm-gray text-xs font-medium tracking-[0.2em] uppercase mb-1">
                      Store Hours
                    </div>
                    <h3 className="font-display text-mandaar text-xl font-medium">
                      We&apos;re open
                    </h3>
                  </div>
                </div>
                <dl className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between items-center py-2 border-b border-mandaar/10 last:border-0"
                    >
                      <dt className="text-mandaar text-sm font-medium">
                        {h.day}
                      </dt>
                      <dd className="text-warm-gray text-sm">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* Quick contacts */}
            <Reveal delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <ContactQuick
                  icon={<PhoneIcon size={18} strokeWidth={1.8} />}
                  label="Call"
                  value="+91 99XXX XXXXX"
                  href="tel:+919999999999"
                />
                <ContactQuick
                  icon={<MailIcon size={18} strokeWidth={1.8} />}
                  label="Email"
                  value="hello@mandaar.in"
                  href="mailto:hello@mandaar.in"
                />
                <ContactQuick
                  icon={<WhatsAppIcon />}
                  label="WhatsApp"
                  value="Chat with us"
                  href="https://wa.me/919999999999"
                />
              </div>
            </Reveal>
          </div>

          {/* === RIGHT: CONTACT FORM === */}
          <Reveal delay={200}>
            <div className="bg-snow rounded-3xl p-8 md:p-10 shadow-card sticky top-32">
              <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-3">
                Send a message
              </div>
              <h2 className="font-display text-mandaar text-2xl md:text-3xl font-normal mb-2">
                Have a question?
              </h2>
              <p className="text-warm-gray text-sm mb-8">
                Bulk order, wedding hampers, or just curious about a product - write away.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-mandaar text-xs font-medium tracking-wide block mb-2">
                    Your name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Name"
                    className="w-full bg-cream-warm border border-mandaar/10 rounded-xl px-4 py-3 text-sm text-mandaar placeholder:text-warm-gray-light outline-none focus:border-mandaar transition-colors"
                  />
                </div>
                <div>
                  <label className="text-mandaar text-xs font-medium tracking-wide block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-cream-warm border border-mandaar/10 rounded-xl px-4 py-3 text-sm text-mandaar placeholder:text-warm-gray-light outline-none focus:border-mandaar transition-colors"
                  />
                </div>
                <div>
                  <label className="text-mandaar text-xs font-medium tracking-wide block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you'd like..."
                    className="w-full bg-cream-warm border border-mandaar/10 rounded-xl px-4 py-3 text-sm text-mandaar placeholder:text-warm-gray-light outline-none focus:border-mandaar transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-mandaar text-cream py-4 rounded-full text-sm font-semibold tracking-wide btn-magnetic hover:bg-mandaar-deep"
                >
                  {sent ? (
                    <>Message sent ✓</>
                  ) : (
                    <>
                      Send Message
                      <SendIcon size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactQuick({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-snow rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col items-start gap-2"
    >
      <div className="w-10 h-10 rounded-xl bg-mandaar/5 text-mandaar flex items-center justify-center">
        {icon}
      </div>
      <div className="text-warm-gray text-[10px] uppercase tracking-[0.15em] font-medium">
        {label}
      </div>
      <div className="font-display text-mandaar text-sm font-medium">
        {value}
      </div>
    </a>
  );
}
