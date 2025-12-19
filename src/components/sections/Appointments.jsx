import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { appointmentInfo } from "@/lib/constants";

export default function Appointments() {
  return (
    <section className="section-padding bg-[var(--neutral-50)]">
      <div className="container-custom">
        <SectionHeading
          title={appointmentInfo.title}
          subtitle={appointmentInfo.description}
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Session Types */}
          {appointmentInfo.sessions.map((session, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--neutral-200)] hover:shadow-md hover:border-[var(--primary)]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full">
                  {session.duration}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--neutral-900)] mb-2">
                {session.type}
              </h3>
              <p className="text-[var(--neutral-500)] text-sm">
                {session.description}
              </p>
            </div>
          ))}
        </div>

        {/* Booking CTA */}
        <div className="bg-[var(--primary)] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to Start Your Recovery?
          </h3>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Book your appointment online in just a few clicks. I offer both
            in-person sessions at my clinic and convenient online consultations.
          </p>

          {/* Zappy Booking Placeholder */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <div className="flex items-center justify-center gap-3 text-white/60 mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-lg font-medium">Zappy Booking Widget</span>
            </div>
            <p className="text-white/50 text-sm mb-6">
              Your Zappy scheduling widget will appear here once connected.
            </p>
            {/* Placeholder for iframe - uncomment and add your Zappy URL when ready
            <iframe
              src="YOUR_ZAPPY_BOOKING_URL"
              className="w-full min-h-[400px] border-0 rounded-lg"
              title="Book an Appointment"
            />
            */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={appointmentInfo.bookingUrl}
              variant="white"
              size="lg"
              external
            >
              Book via Zappy
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Contact Me Instead
            </Button>
          </div>

          {/* Location Info */}
          <div className="mt-8 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8">
            {appointmentInfo.location.inPerson && (
              <div className="flex items-center gap-2 text-white/80">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>In-Person Sessions Available</span>
              </div>
            )}
            {appointmentInfo.location.online && (
              <div className="flex items-center gap-2 text-white/80">
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
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Online Sessions Available</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
