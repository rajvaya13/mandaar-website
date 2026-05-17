import {
  TruckIcon,
  ShieldCheckIcon,
  MapPinIcon,
  CreditCardIcon,
} from "lucide-react";

const features = [
  {
    icon: <TruckIcon size={22} strokeWidth={1.8} />,
    title: "Free Shipping",
    desc: "On orders above ₹999",
  },
  {
    icon: <ShieldCheckIcon size={22} strokeWidth={1.8} />,
    title: "100% Authentic",
    desc: "Direct from origin",
  },
  {
    icon: <MapPinIcon size={22} strokeWidth={1.8} />,
    title: "Pan-India Delivery",
    desc: "2-4 business days",
  },
  {
    icon: <CreditCardIcon size={22} strokeWidth={1.8} />,
    title: "Secure Checkout",
    desc: "UPI · Cards · Net Banking",
  },
];

export default function Features() {
  return (
    <section className="bg-snow border-y border-mandaar/10 px-6 md:px-14 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex items-center gap-4 group hover:translate-x-1 transition-transform"
          >
            <div className="w-12 h-12 bg-mandaar text-saffron rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-mandaar-deep transition-colors">
              {f.icon}
            </div>
            <div>
              <div className="font-display text-mandaar text-base font-medium leading-tight">
                {f.title}
              </div>
              <div className="text-warm-gray text-xs mt-0.5">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
