import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">EventSync AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-brand-purple transition-colors">
              Home
            </Link>
            <Link to="/features" className="font-medium text-gray-700 hover:text-brand-purple transition-colors">
              Features
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-brand-purple transition-colors">AboutUs</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-brand-purple transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" className="font-medium">Schedule Demo</Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-brand-purple hover:bg-brand-lightPurple text-white">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-brand-purple transition-colors px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/features" className="font-medium text-gray-700 hover:text-brand-purple transition-colors px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-brand-purple transition-colors px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-brand-purple transition-colors px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Schedule Demo</Button>
                </Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brand-purple hover:bg-brand-lightPurple">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Navbar;