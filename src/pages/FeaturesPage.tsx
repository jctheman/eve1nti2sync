
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeatureHero from "@/components/features/FeatureHero";
import FeatureDetail from "@/components/features/FeatureDetail";
import CTASection from "@/components/home/CTASection";

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FeatureHero />
        <FeatureDetail />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
