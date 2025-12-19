"use client";

import { useEffect, useRef, useState } from "react";

export default function Timeline({ items }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [items]);

  const getIcon = (type) => {
    switch (type) {
      case "degree":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        );
      case "certification":
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
    }
  };

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-[var(--neutral-200)]" />

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => {
          const isVisible = visibleItems.includes(index);
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`relative flex items-start gap-4 md:gap-0 ${
                isVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline Node */}
              <div
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[var(--primary)] flex items-center justify-center text-[var(--primary)] z-10 transition-all duration-500 ${
                  isVisible ? "scale-100" : "scale-75"
                }`}
              >
                {getIcon(item.type)}
              </div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                } transition-all duration-500 ${
                  isVisible
                    ? "translate-x-0"
                    : isEven
                    ? "-translate-x-4"
                    : "translate-x-4"
                }`}
              >
                <span className="inline-block px-3 py-1 text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/10 rounded-full mb-2">
                  {item.year}
                </span>
                <h4 className="text-lg font-semibold text-[var(--neutral-900)] mb-1">
                  {item.title}
                </h4>
                <p className="text-[var(--neutral-500)]">{item.institution}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
