import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { portfolioImages } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="My Work"
          subtitle="A glimpse into my practice—real sessions, real progress, real results. Every patient's journey is unique."
        />

        <GalleryGrid images={portfolioImages} />

        {/* Trust Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--neutral-400)] max-w-xl mx-auto">
            All images are shared with patient consent. Privacy and dignity are
            always my priority.
          </p>
        </div>
      </div>
    </section>
  );
}
