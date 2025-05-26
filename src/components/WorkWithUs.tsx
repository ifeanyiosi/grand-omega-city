/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";

export default function WorkWithUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d6fb8] to-[#f5a623] opacity-20"></div>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect
            width="100"
            height="100"
            fill="url(#grid)"
            className="text-white/20"
          />
        </svg>
      </div>

      {/* Dynamic Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          transform: `scale(1.1) translate(${mousePosition.x * 0.01}px, ${
            mousePosition.y * 0.01
          }px)`,
        }}
      />

      {/* Advanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d6fb8]/80 via-slate-900/70 to-[#f5a623]/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f5a623]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#1d6fb8]/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-300"></div>
      </div>

      {/* Main Content */}
      <div
        className="relative h-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        onMouseMove={handleMouseMove}
      >
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-[#f5a623] rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
              Premier Real Estate Partner
            </span>
          </div>

          {/* Main Heading with Gradient Text */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-orange-100 bg-clip-text text-transparent">
              Work With
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1d6fb8] to-[#f5a623] bg-clip-text text-transparent">
              Grand Omega City
            </span>
          </h2>

          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed mb-6 font-light">
              At Grand Omega City, we partner with sellers, buyers, investors,
              and developers across premier urban locations.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Our commitment to integrity, expert market knowledge, and
              personalized service makes us the trusted choice for your real
              estate ambitions. Whether you&apos;re listing your property,
              seeking your dream home, or investing in future developments, our
              team is dedicated to guiding you every step of the way.
            </p>
          </div>

          {/* Enhanced CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-[#1d6fb8] rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#1d6fb8]/30">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1d6fb8]/0 to-[#f5a623]/0 group-hover:from-[#1d6fb8]/20 group-hover:to-[#f5a623]/20 rounded-xl transition-all duration-300"></div>
              </button>

              <button className="group px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30">
                <span className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
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
                  <span>Schedule Consultation</span>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-3 text-white/80">
                <div className="w-12 h-12 bg-[#1d6fb8]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#1d6fb8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Expert Guidance
                  </div>
                  <div className="text-sm text-white/60">
                    15+ Years Experience
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-white/80">
                <div className="w-12 h-12 bg-[#f5a623]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#f5a623]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Fast Results</div>
                  <div className="text-sm text-white/60">Average 30 Days</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-white/80">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    Client Satisfaction
                  </div>
                  <div className="text-sm text-white/60">98% Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1d6fb8] to-[#f5a623]"></div>
    </section>
  );
}
