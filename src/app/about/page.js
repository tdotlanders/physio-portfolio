import About from "@/components/sections/About";

export const metadata = {
  title: "About Me | Beatriz Nogueira - Physiotherapist",
  description:
    "Learn about Beatriz Nogueira's approach to physiotherapy, qualifications, certifications, and specializations in orthopedic rehabilitation, sports therapy, and manual therapy.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  );
}
