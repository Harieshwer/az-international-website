import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Az from "../assets/logo.png";

interface NavItem {
  name: string;
  href: string;
}

const whatsappNumber = "919949327605";
const defaultMessage = encodeURIComponent(
  "Hello, I am interested in your products."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-teal-700 shadow-md transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={Az}
                  alt="A-Z International Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-white">A-Z International</h1>
                <p className="text-xs text-teal-100">Nature's Finest Flavors</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-base font-medium hover:text-teal-300 transition"
                >
                  {link.name}
                </a>
              ))}

              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  className="w-5 h-5"
                  alt="WhatsApp"
                />
                WhatsApp
              </a>

              {/* Quote Button */}
              <a
                href="#contact"
                className="px-6 py-2.5 bg-white text-teal-700 rounded-full font-semibold hover:bg-teal-50 shadow-md transition"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl border-t border-gray-200">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-gray-800 font-medium hover:text-teal-600"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-green-500 text-white rounded-full text-center font-semibold hover:bg-green-600 transition"
              >
                WhatsApp
              </a>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-teal-600 text-white rounded-full text-center font-semibold hover:bg-teal-700 transition"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 shadow-xl rounded-full hover:bg-green-600 transition z-[999]"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>

      {/* Spacer to prevent content hiding under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
