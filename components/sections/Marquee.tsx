const items = [
  "Free Shipping over ₹999",
  "✦",
  "Fresh from Udaipur",
  "✦",
  "Hand-picked Premium Grade",
  "✦",
  "Pan-India Delivery in 2-4 days",
  "✦",
  "Direct from Origin Farms",
  "✦",
  "Vacuum-sealed Fresh",
  "✦",
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-mandaar text-cream py-5 overflow-hidden border-y border-saffron/20 relative">
      <div className="marquee-track flex whitespace-nowrap">
        {repeated.map((text, i) => (
          <span
            key={i}
            className={`px-8 text-sm tracking-[0.15em] uppercase ${
              text === "✦" ? "text-saffron" : "font-medium"
            }`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
