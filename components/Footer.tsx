import Link from "next/link";

const shopLinks = [
  { label: "All Products", href: "/shop" },
  { label: "Dates", href: "/shop/dates" },
  { label: "Nuts", href: "/shop/nuts" },
  { label: "Gift Hampers", href: "/gift" },
  { label: "Bulk Orders", href: "/contact" },
];

const companyLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Sourcing", href: "/sourcing" },
  { label: "Visit Our Store", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const helpLinks = [
  { label: "Track Order", href: "/track" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

// Inline brand SVGs (lucide no longer ships brand logos)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="bg-mandaar-deep text-cream px-6 md:px-14 pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 pb-14 border-b border-cream/10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-medium mb-4 tracking-tight">
              <span className="text-saffron">●</span> Mandaar
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm mb-5">
              Udaipur&apos;s most-trusted name in premium dry fruits since 1987.
              Three generations of craft, curation, and care - now delivered to
              your doorstep.
            </p>
            <address className="not-italic text-cream/60 text-xs leading-relaxed max-w-sm mb-6">
              Shop No. 406, Bhupalpura Main Road, Udaipole<br />
              Near Gattani Hospital, Udaipur - 313001<br />
              Rajasthan, India
            </address>
            <div className="flex gap-3">
              <SocialButton icon={<InstagramIcon />} label="Instagram" />
              <SocialButton icon={<FacebookIcon />} label="Facebook" />
              <SocialButton icon={<WhatsAppIcon />} label="WhatsApp" />
            </div>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Help" links={helpLinks} />
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:justify-between gap-3 text-xs text-cream/50">
          <div>© 2026 Mandaar Dry Fruits · Bhupalpura, Udaipur 313001</div>
          <div className="font-display italic">
            Made with <span className="text-rust-light">♥</span> in the City of Lakes
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-saffron text-xs font-semibold tracking-[0.2em] uppercase mb-6">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-cream/75 text-sm hover:text-saffron transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className="w-10 h-10 rounded-full bg-cream/10 hover:bg-saffron hover:text-mandaar-deep flex items-center justify-center transition-colors"
    >
      {icon}
    </button>
  );
}
