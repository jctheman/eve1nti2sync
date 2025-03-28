
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section bg-gray-900 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Event Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ event organizers who are saving time, reducing costs, and delivering exceptional experiences with EventSync AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-brand-purple hover:bg-brand-lightPurple text-white px-8 py-6 text-lg w-full sm:w-auto">
                Schedule a Demo
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
