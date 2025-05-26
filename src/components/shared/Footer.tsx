"use client";

import { useState } from "react";

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press & Media", href: "/press" },
        { name: "Awards", href: "/awards" },
      ],
    },
    services: {
      title: "Services",
      links: [
        { name: "Buy Properties", href: "/buy" },
        { name: "Sell Properties", href: "/sell" },
        { name: "Rent Properties", href: "/rent" },
        { name: "Investment", href: "/investment" },
        { name: "Property Management", href: "/management" },
        { name: "Commercial Real Estate", href: "/commercial" },
      ],
    },

    resources: {
      title: "Resources",
      links: [
        { name: "Market Reports", href: "/reports" },
        { name: "Property Valuations", href: "/valuations" },
        { name: "Buying Guide", href: "/guides/buying" },
        { name: "Selling Guide", href: "/guides/selling" },
        { name: "Investment Tips", href: "/guides/investment" },
        { name: "Blog", href: "/blog" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Support Center", href: "/support" },
        { name: "Schedule Consultation", href: "/consultation" },
        { name: "Live Chat", href: "/chat" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/grandomegacity",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/grandomegacity",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/grandomegacity",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/grandomegacity",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.148-1.188C4.613 15.101 4.29 14.165 4.29 13.02s.322-2.081 1.011-2.78c.7-.698 1.851-1.188 3.148-1.188s2.448.49 3.148 1.188c.689.699 1.011 1.635 1.011 2.78s-.322 2.081-1.011 2.78c-.7.698-1.851 1.188-3.148 1.188zm7.718-3.425c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm2.265-2.405c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/grandomegacity",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="footerGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#footerGrid)" />
        </svg>
      </div>

      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1d6fb8] to-[#f5a623]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1d6fb8] to-[#f5a623] bg-clip-text text-transparent mb-4">
                Grand Omega City
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Your premier real estate partner for buying, selling, and
                investing in luxury properties across prime urban locations.
                Experience excellence in every transaction.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <svg
                  className="w-5 h-5 text-[#1d6fb8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <svg
                  className="w-5 h-5 text-[#f5a623]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hello@grandomegacity.com</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-300">
                <svg
                  className="w-5 h-5 text-[#1d6fb8] mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  123 Premium Boulevard
                  <br />
                  Downtown District, City 12345
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-[#f5a623] transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-700 pt-12 mb-12">
          <div className="max-w-2xl">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-slate-300 mb-6">
              Get the latest market insights and exclusive property
              opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#1d6fb8] focus:ring-2 focus:ring-[#1d6fb8]/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#1d6fb8] to-[#f5a623] text-white font-semibold rounded-lg hover:from-[#1d6fb8]/90 hover:to-[#f5a623]/90 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#1d6fb8] hover:to-[#f5a623] transition-all duration-300 transform hover:scale-110"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.name}
                  >
                    <div
                      className={`transition-colors duration-300 ${
                        hoveredSocial === index
                          ? "text-white"
                          : "text-slate-400"
                      }`}
                    >
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-slate-400 hover:text-[#f5a623] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-slate-400 hover:text-[#f5a623] transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-slate-400 hover:text-[#f5a623] transition-colors duration-300"
              >
                Cookie Policy
              </a>
              <a
                href="/accessibility"
                className="text-slate-400 hover:text-[#f5a623] transition-colors duration-300"
              >
                Accessibility
              </a>
            </div>

            {/* Copyright */}
            <div className="text-slate-400 text-sm text-center lg:text-right">
              <p>&copy; {currentYear} Grand Omega City. All rights reserved.</p>
              <p className="mt-1">Licensed Real Estate Brokerage</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
