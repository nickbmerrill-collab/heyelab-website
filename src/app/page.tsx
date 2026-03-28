import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Ventures from "@/components/Ventures";
import Gallery from "@/components/Gallery";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen grid-bg">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Ventures />
      <Gallery />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
