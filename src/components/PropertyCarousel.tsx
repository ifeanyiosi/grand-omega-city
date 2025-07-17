"use client";

import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Home, MapPin } from "lucide-react";

export default function PropertyCarousel() {
  // Get only the top 3 properties
  const topProperties = properties.slice(0, 3);

  return (
    <section className="relative py-12 md:py-20 lg:py-24 px-4 bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1D6FB8]/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-64 h-64 bg-[#1D6FB8]/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Minimal floating elements */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#1D6FB8]/15 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 25}%`,
              top: `${15 + ((i * 12) % 70)}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced header section - Responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 lg:mb-12 gap-6">
          {/* Portfolio title */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#1D6FB8]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110"></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <Home className="w-6 h-6 md:w-8 md:h-8 text-[#1D6FB8]" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 hover:text-[#1D6FB8] transition-all duration-700 cursor-default transform hover:scale-105">
                  Featured Properties
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-gray-600 font-medium opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_both] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1D6FB8]" />
                Discover Our Premium Collection
              </p>

              {/* Clean underline */}
              <div className="absolute -bottom-2 left-0 w-12 md:w-16 h-1 bg-[#1D6FB8] rounded-full transform transition-all duration-500 group-hover:w-20 md:group-hover:w-24"></div>
            </div>
          </div>

          {/* Enhanced View All button - Responsive */}
          <div className="relative group/btn w-full sm:w-auto">
            <div className="absolute inset-0 bg-[#1D6FB8]/10 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-all duration-300 blur-lg transform group-hover/btn:scale-110"></div>

            <Link href="/properties" className="block w-full sm:w-auto">
              <Button
                variant="outline"
                className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-[#1D6FB8] text-gray-700 hover:text-[#1D6FB8] font-bold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-gray-500/10 hover:shadow-[#1D6FB8]/20 flex items-center justify-center gap-3 group-hover/btn:bg-white w-full sm:w-auto"
              >
                <span>View All Properties</span>

                {/* Animated arrow */}
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />

                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Properties grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topProperties.map((property, index) => (
            <div
              key={property.id}
              className="opacity-0 animate-[fadeInUp_0.8s_ease-out_both] group cursor-pointer"
              style={{
                animationDelay: `${index * 0.2 + 0.5}s`,
              }}
            >
              {/* Wrap PropertyCard in Link to navigate to /properties */}
              <Link href="/properties" className="block h-full">
                <div className="h-full transition-all duration-300 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
                  <PropertyCard property={property} />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Stats section - Responsive */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 bg-[#1D6FB8]/5 rounded-2xl backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-black text-[#1D6FB8] mb-2">
              500+
            </div>
            <div className="text-sm md:text-base text-gray-600 font-medium">
              Properties Listed
            </div>
          </div>
          <div className="text-center p-6 bg-[#1D6FB8]/5 rounded-2xl backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-black text-[#1D6FB8] mb-2">
              98%
            </div>
            <div className="text-sm md:text-base text-gray-600 font-medium">
              Client Satisfaction
            </div>
          </div>
          <div className="text-center p-6 bg-[#1D6FB8]/5 rounded-2xl backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-black text-[#1D6FB8] mb-2">
              24/7
            </div>
            <div className="text-sm md:text-base text-gray-600 font-medium">
              Support Available
            </div>
          </div>
        </div>

        {/* Clean decorative elements */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <div className="flex items-center gap-2 opacity-60">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-[#1D6FB8] rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: "2s",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
