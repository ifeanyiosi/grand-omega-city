"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-24 px-4 bg-gray-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1D6FB8]/8 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#1D6FB8]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Minimal floating elements */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#1D6FB8]/20 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + ((i * 15) % 60)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Image - Responsive */}
          <div className="w-full order-2 lg:order-1 group">
            <div className="relative">
              {/* Clean glow effect */}
              <div className="absolute inset-0 bg-[#1D6FB8]/10 rounded-3xl blur-2xl transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Image container with modern effects */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#1D6FB8]/10 group-hover:shadow-[#1D6FB8]/20 transition-all duration-700 transform group-hover:scale-[1.02]">
                <Image
                  src="/images/welcome.jpg"
                  alt="Luxury Property"
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-[#1D6FB8]/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Responsive */}
          <div className="w-full order-1 lg:order-2 space-y-6 lg:space-y-8">
            {/* Welcome badge */}
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-[#1D6FB8]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <h3 className="relative text-xs sm:text-sm font-bold tracking-[0.3em] mb-2 text-[#1D6FB8] hover:text-[#1D6FB8]/80 transition-all duration-500 cursor-default">
                W E L C O M E
              </h3>
            </div>

            {/* Main heading - Responsive typography */}
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6 lg:mb-8 leading-tight">
                <span className="block text-gray-900 hover:text-[#1D6FB8] transition-all duration-700 cursor-default transform hover:scale-105">
                  TO GRAND OMEGA
                </span>
                <span className="block text-[#1D6FB8] hover:text-gray-900 transition-all duration-700 cursor-default transform hover:scale-105">
                  CITY
                </span>
              </h2>

              {/* Clean accent line */}
              <div className="absolute -bottom-2 left-0 w-16 sm:w-20 h-1 bg-[#1D6FB8] rounded-full transform transition-all duration-500 hover:w-24 sm:hover:w-32"></div>
            </div>

            {/* Enhanced card - Responsive */}
            <div className="relative group">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-[#1D6FB8]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-105"></div>

              <Card className="relative bg-white/90 backdrop-blur-xl shadow-2xl shadow-[#1D6FB8]/5 border border-white/80 group-hover:shadow-[#1D6FB8]/10 transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  {/* Enhanced paragraph - Responsive text */}
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 lg:mb-8 transition-colors duration-500 group-hover:text-gray-800">
                    <span className="font-semibold text-[#1D6FB8]">
                      Grand Omega City
                    </span>{" "}
                    is your trusted destination for premier real estate
                    opportunities. We specialize in showcasing{" "}
                    <span className="font-medium text-[#1D6FB8]">
                      luxury properties
                    </span>{" "}
                    tailored for modern living — whether you&apos;re a buyer,
                    investor, or developer. Known for our{" "}
                    <span className="font-medium text-gray-800">
                      professionalism, market insight, and dedication
                    </span>
                    , we&apos;re here to help you find the perfect place to call
                    home or grow your investment portfolio.
                  </p>

                  {/* Stats section - Responsive */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 lg:mb-8">
                    <div className="flex items-center gap-3 p-3 bg-[#1D6FB8]/5 rounded-xl">
                      <Award className="w-5 h-5 text-[#1D6FB8]" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Premium
                        </p>
                        <p className="text-xs text-gray-600">Properties</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#1D6FB8]/5 rounded-xl">
                      <Users className="w-5 h-5 text-[#1D6FB8]" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Trusted
                        </p>
                        <p className="text-xs text-gray-600">Service</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#1D6FB8]/5 rounded-xl">
                      <TrendingUp className="w-5 h-5 text-[#1D6FB8]" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Growth
                        </p>
                        <p className="text-xs text-gray-600">Focused</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA button - Responsive */}
                  <div className="relative inline-block group/button">
                    <div className="absolute inset-0 bg-[#1D6FB8] rounded-2xl opacity-75 group-hover/button:opacity-100 transition-all duration-300 blur-sm group-hover/button:blur-md transform group-hover/button:scale-110"></div>

                    <Link href="/about">
                      <Button className="relative bg-[#1D6FB8] hover:bg-[#1D6FB8]/90 text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-[#1D6FB8]/25 hover:shadow-[#1D6FB8]/35 flex items-center gap-3 group/button border-0 w-full sm:w-auto justify-center">
                        <span>Learn More</span>

                        {/* Animated arrow */}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/button:translate-x-1" />

                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
