
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";
import TrustedBy from "@/components/home/TrustedBy";
import CTASection from "@/components/home/CTASection";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import AIProductShowcase from "@/components/home/AIProductShowcase";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <Features />
        <AIProductShowcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
