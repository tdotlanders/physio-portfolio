import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import { aboutContent, credentials } from "@/lib/constants";

export default function About({ showTimeline = true }) {
  return (
    <section className="section-padding bg-[var(--neutral-50)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Photo & Quick Info */}
          <div className="order-2 lg:order-1">
            {/* Photo Placeholder */}
            <div className="relative mb-8">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[var(--neutral-200)] to-[var(--neutral-300)] overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-[var(--primary)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-[var(--neutral-500)] text-sm">
                      Professional photo placeholder
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[var(--primary)]/10 -z-10" />
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--neutral-200)]">
              <h3 className="text-lg font-semibold text-[var(--neutral-900)] mb-4">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutContent.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Bio & Credentials */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              title="About Me"
              subtitle={aboutContent.intro}
              align="left"
            />

            <div className="space-y-4 mb-12">
              {aboutContent.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[var(--neutral-600)] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Credentials Timeline */}
            {showTimeline && (
              <div>
                <h3 className="text-xl font-semibold text-[var(--neutral-900)] mb-6">
                  Education & Certifications
                </h3>
                <Timeline items={credentials} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
