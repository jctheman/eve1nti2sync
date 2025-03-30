
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
      <div className="container-custom relative py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About AIEventManager
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're transforming the event industry with AI-powered solutions that streamline operations and enhance experiences.
          </p>
          <Link to="/contact">
            <Button className="bg-brand-purple hover:bg-brand-lightPurple text-white px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
