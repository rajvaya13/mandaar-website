"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  variant?: "slide" | "fade";
};

export default function Reveal({ children, delay = 0, variant = "slide" }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // FAILSAFE: Always reveal after 1.2s regardless of scroll position.
    // This prevents blank sections when content is below the fold during
    // full-page screenshots, or if IntersectionObserver fails for any reason.
    const failsafe = setTimeout(() => setIsVisible(true), 1200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          clearTimeout(failsafe);
        }
      },
      {
        // Trigger as soon as ANY pixel of the element is in view (or close to it)
        rootMargin: "0px 0px 50px 0px",
        threshold: 0.01,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const transform =
    variant === "fade"
      ? "translateY(0)"
      : isVisible
      ? "translateY(0)"
      : "translateY(20px)";

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform,
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
