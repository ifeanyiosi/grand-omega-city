"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Resources", href: "/resources" },
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
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-blue-100/50"
          : "bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20 backdrop-blur-sm"
      }`}
    >
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo with glow effect */}
        <div className="relative group flex items-center">
          <div
            className={`absolute inset-0 rounded-lg transition-all duration-300 ${
              scrolled ? "bg-blue-500/10" : "bg-white/10"
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
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 blur-sm"></div>

              <Link
                href={link.href}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full group-hover:scale-105 ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                    : "text-white/90 hover:text-orange-300 hover:shadow-lg hover:shadow-white/25"
                } transform hover:-translate-y-0.5`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Animated underline */}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transform -translate-x-1/2 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button with animation */}
        <button
          className="md:hidden relative p-2 rounded-xl transition-all duration-300 hover:scale-110 group"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>

          <div className="relative">
            {menuOpen ? (
              <X
                size={28}
                className={`transition-all duration-300 ${
                  scrolled ? "text-blue-600" : "text-white"
                } hover:rotate-90`}
              />
            ) : (
              <Menu
                size={28}
                className={`transition-all duration-300 ${
                  scrolled ? "text-blue-600" : "text-white"
                } hover:rotate-12`}
              />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu with stunning animations */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen transition-all duration-500 z-40 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-orange-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-orange-500/5"></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
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
                className="group relative block py-4 px-6 text-xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 p-px">
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>

                <span className="relative flex items-center justify-between">
                  {link.name}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300 group-hover:w-8 rounded-full"></div>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
