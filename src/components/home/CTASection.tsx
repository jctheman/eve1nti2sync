import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Company logos for the "500+ event organizers" section
const organizerLogos = [{
  name: "TechConf",
  logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
}, {
  name: "Industry Summit",
  logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
}, {
  name: "Annual Expo",
  logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
}, {
  name: "Global Conference",
  logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
}, {
  name: "Tech Summit",
  logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
}, {
  name: "Innovation Expo",
  logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
}];
const CTASection = () => {
  return <section className="section bg-gray-900 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Event Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">Join 500+ event organizers who are saving time, reducing costs, and delivering exceptional experiences with AIEventManager..</p>
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
        
        {/* Added: Logos of event organizers section */}
        
      </div>
    </section>;
};
export default CTASection;