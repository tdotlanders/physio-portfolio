import Portfolio from "@/components/sections/Portfolio";

export const metadata = {
  title: "Portfolio | Beatriz Nogueira - Physiotherapist",
  description:
    "View examples of Beatriz Nogueira's physiotherapy work, including rehabilitation sessions, sports therapy, and clinical practice.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <Portfolio />
    </div>
  );
}
