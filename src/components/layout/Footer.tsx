import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-50 border-t">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold gradient-text">AIEventManager</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Revolutionizing event management with AI-powered solutions that streamline operations and enhance attendee experiences.
            </p>
            
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  Lead Scoring
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  Recommendations
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  Writing Assistance
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  Event Setup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  About Us
                </Link>
              </li>
              
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-purple transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} AIEventManager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;