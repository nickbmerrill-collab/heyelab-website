import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Opportunity from "@/components/Opportunity";
import About from "@/components/About";
import PrivateCompute from "@/components/PrivateCompute";
import CaseStudies from "@/components/CaseStudies";
import PilotSignup from "@/components/PilotSignup";
import WhoWeAre from "@/components/WhoWeAre";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen grid-bg">
      <Navigation />
      <Hero />
      <Opportunity />
      <About />
      <PrivateCompute />
      <CaseStudies />
      <PilotSignup />
      <WhoWeAre />
      <Contact />
      <Footer />
    </main>
  );
}
