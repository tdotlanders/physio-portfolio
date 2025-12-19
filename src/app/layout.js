import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Beatriz Nogueira | Physiotherapist",
  description: "Evidence-based physiotherapy focused on recovery, mobility, and long-term wellness. Specializing in orthopedic rehabilitation, sports therapy, and manual therapy.",
  keywords: ["physiotherapist", "physical therapy", "rehabilitation", "sports therapy", "Lisbon", "Beatriz Nogueira"],
  authors: [{ name: "Beatriz Nogueira" }],
  openGraph: {
    title: "Beatriz Nogueira | Physiotherapist",
    description: "Evidence-based physiotherapy focused on recovery, mobility, and long-term wellness.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
