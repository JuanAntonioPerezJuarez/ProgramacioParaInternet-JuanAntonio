
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = scrollPosition > 50 
    ? "fixed top-0 left-0 right-0 bg-challenger-black bg-opacity-90 shadow-lg z-50 transition-all duration-300"
    : "fixed top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent z-50 transition-all duration-300";

  const navLinks = [
    { name: "Timeline", href: "#timeline", icon: "clock" },
    { name: "Gallery", href: "#gallery", icon: "image" },
    { name: "Performance", href: "#performance", icon: "chart-bar" },
    { name: "Compare", href: "#compare", icon: "car" },
    { name: "Sound Lab", href: "#sound", icon: "music" },
  ];

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-racing text-challenger-red">Challenger</span>
          <span className="text-xl font-titillium text-white ml-1">Experience</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-challenger-red font-titillium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-challenger-black bg-opacity-95 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-white hover:text-challenger-red font-titillium transition-colors duration-200"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
