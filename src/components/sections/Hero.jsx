"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neutral-50)] via-white to-[var(--neutral-100)]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 md:right-20 w-64 h-64 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 md:left-20 w-96 h-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(var(--neutral-400) 1px, transparent 1px),
            linear-gradient(90deg, var(--neutral-400) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10 text-center py-32 md:py-40">
        {/* Pre-title */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
          Accepting New Patients
        </div>

        {/* Name */}
        <h1
          className={`text-[var(--neutral-900)] mb-4 transition-all duration-700 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {siteConfig.name}
        </h1>

        {/* Title */}
        <p
          className={`text-xl md:text-2xl text-[var(--primary)] font-medium mb-6 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {siteConfig.title}
        </p>

        {/* Tagline */}
        <p
          className={`text-lg md:text-xl text-[var(--neutral-500)] max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {siteConfig.tagline}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button href="/appointments" size="lg">
            Schedule Appointment
          </Button>
          <Button href="/about" variant="secondary" size="lg">
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-[var(--neutral-400)]">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-[var(--neutral-300)] flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-[var(--primary)] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
