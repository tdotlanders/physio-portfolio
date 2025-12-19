import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <Services limit={4} />

      {/* CTA Section */}
      <section className="section-padding bg-[var(--neutral-50)]">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Ready to Take the First Step?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Whether you're recovering from an injury, managing chronic pain,
                or looking to improve your mobility, I'm here to help you on
                your journey to better health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/appointments" variant="white" size="lg">
                  Schedule Your Appointment
                </Button>
                <Button
                  href="/about"
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Learn About My Approach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-t border-[var(--neutral-200)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                8+
              </p>
              <p className="text-[var(--neutral-500)] text-sm mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                500+
              </p>
              <p className="text-[var(--neutral-500)] text-sm mt-1">
                Patients Helped
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                5
              </p>
              <p className="text-[var(--neutral-500)] text-sm mt-1">
                Certifications
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                98%
              </p>
              <p className="text-[var(--neutral-500)] text-sm mt-1">
                Patient Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
