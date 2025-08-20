import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Case Studies", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg" : ""
      }`}
    >
      {/* Curved / Diagonal Background */}
      {!isScrolled && (
        <div
          className="absolute inset-0 h-[100px] lg:h-[150px] bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)", // diagonal shape
          }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? "h-[70px]" : "h-[90px] lg:h-[110px]"
          }`}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-orange-600 font-bold text-xl">G</span>
              </div>
              <div className="font-montserrat text-white">
                <span className="text-xl font-bold">Ghail</span>
                <div className="text-xs font-medium tracking-widest opacity-80">
                  TECH SOLUTIONS
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact + Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="hidden lg:flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+233 242076797</span>
            </a>
            <a
              href="mailto:contact@ghailsolutions.com"
              className="hidden lg:flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Contact Us</span>
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-r from-orange-500 to-orange-600 shadow-md"
          >
            <div className="px-4 py-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 ${
                    location.pathname === item.path
                      ? "bg-white/20 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
