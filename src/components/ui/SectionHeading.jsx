"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  animate = true,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(!animate);
  const ref = useRef(null);

  useEffect(() => {
    if (!animate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animate]);

  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div
      ref={ref}
      className={`max-w-2xl mb-12 md:mb-16 ${alignmentClasses[align]} ${className}`}
    >
      <h2
        className={`text-[var(--neutral-900)] mb-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg text-[var(--neutral-500)] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-[var(--primary)] transition-all duration-700 delay-200 ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        } ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
        style={{
          transformOrigin:
            align === "right"
              ? "right"
              : align === "center"
              ? "center"
              : "left",
        }}
      />
    </div>
  );
}
