import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerAccordion from "@/components/CareerAccordion";
import Ventures from "@/components/Ventures";
import Gallery from "@/components/Gallery";
import Philosophy from "@/components/Philosophy";
import Bitcoin from "@/components/Bitcoin";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen grid-bg">
      <Navigation />
      <Hero />
      <About />
      <CareerAccordion />
      <Ventures />
      <Gallery />
      <Philosophy />
      <Bitcoin />
      <Contact />
      <Footer />
    </main>
  );
}
