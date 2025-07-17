"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-[#1D6FB8]/10 border-b border-[#1D6FB8]/10"
          : "bg-[#1D6FB8]/10 backdrop-blur-sm"
      }`}
    >
      {/* Subtle animated accent */}
      <div className="absolute inset-0 bg-[#1D6FB8]/5 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo with clean hover effect */}
        <div className="relative group flex items-center">
          <div
            className={`absolute inset-0 rounded-lg transition-all duration-300 ${
              scrolled ? "bg-[#1D6FB8]/10" : "bg-white/10"
            } blur-xl group-hover:blur-2xl group-hover:scale-110 opacity-0 group-hover:opacity-100`}
          ></div>

          {/* Responsive logo images */}
          <Link href="/" className="relative flex items-center space-x-2">
            <img
              src="/icons/sm-logo.png"
              alt="Logo"
              className="h-10 w-auto block md:hidden transition-transform duration-300 group-hover:scale-110"
            />
            <img
              src="/icons/big-logo.png"
              alt="Grand Omega City Logo"
              className="hidden md:block h-12 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              {/* Clean hover background */}
              <div className="absolute inset-0 bg-[#1D6FB8]/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></div>

              <Link
                href={link.href}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full group-hover:scale-105 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#1D6FB8] hover:shadow-lg hover:shadow-[#1D6FB8]/20"
                    : "text-white/90 hover:text-white hover:shadow-lg hover:shadow-white/20"
                } transform hover:-translate-y-0.5`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Clean underline animation */}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#1D6FB8] transform -translate-x-1/2 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative p-2 rounded-xl transition-all duration-300 hover:scale-110 group"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {/* Clean button background */}
          <div className="absolute inset-0 bg-[#1D6FB8]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

          <div className="relative">
            {menuOpen ? (
              <X
                size={28}
                className={`transition-all duration-300 ${
                  scrolled ? "text-[#1D6FB8]" : "text-white"
                } hover:rotate-90`}
              />
            ) : (
              <Menu
                size={28}
                className={`transition-all duration-300 ${
                  scrolled ? "text-[#1D6FB8]" : "text-white"
                } hover:rotate-12`}
              />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen transition-all duration-500 z-40 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Clean background */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-[#1D6FB8]/5"></div>

        {/* Minimal accent elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-[#1D6FB8]/20 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 20}%`,
                top: `${25 + i * 15}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative px-8 pt-24 space-y-6">
          {navLinks.map((link, index) => (
            <div
              key={link.name}
              className={`transform transition-all duration-500 ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group relative block py-4 px-6 text-xl font-bold text-gray-800 hover:text-[#1D6FB8] transition-all duration-300 rounded-2xl hover:bg-[#1D6FB8]/5 hover:scale-105 hover:shadow-xl hover:shadow-[#1D6FB8]/10 hover:-translate-y-1"
              >
                {/* Clean border animation */}
                <div className="absolute inset-0 border-2 border-[#1D6FB8] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>

                <span className="relative flex items-center justify-between">
                  {link.name}
                  <div className="w-0 h-0.5 bg-[#1D6FB8] transition-all duration-300 group-hover:w-8 rounded-full"></div>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
