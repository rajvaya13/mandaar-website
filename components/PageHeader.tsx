import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs?: Crumb[];
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative pt-32 md:pt-36 pb-16 md:pb-20 px-6 md:px-14 bg-snow overflow-hidden">
      {/* Ambient saffron glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,160,23,0.10) 0%, transparent 65%)",
        }}
      />
      <div className="absolute bottom-0 left-0 w-32 h-32 paisley-bg opacity-30 rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {breadcrumbs && (
          <Reveal>
            <nav className="flex items-center justify-center gap-2 text-warm-gray text-xs mb-7">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-mandaar transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-mandaar">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRightIcon size={12} strokeWidth={1.5} />
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal delay={60}>
            <div className="text-rust text-xs font-medium tracking-[0.3em] uppercase mb-5 inline-flex items-center gap-3">
              <span className="w-6 h-px bg-rust" />
              {eyebrow}
              <span className="w-6 h-px bg-rust" />
            </div>
          </Reveal>
        )}

        <Reveal delay={120}>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em] text-mandaar font-light mb-6">
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={200}>
            <p className="text-warm-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
