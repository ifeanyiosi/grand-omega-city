"use client";

import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PropertyCarousel() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-white via-blue-50/20 to-orange-50/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/8 to-orange-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-orange-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating geometric elements */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/15 to-orange-400/15 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + ((i * 12) % 70)}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced header section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          {/* Portfolio title with stunning effects */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110"></div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent hover:from-blue-700 hover:via-orange-600 hover:to-blue-700 transition-all duration-700 cursor-default transform hover:scale-105">
                Portfolio
              </h2>

              {/* Animated subtitle */}
              <p className="text-lg text-gray-600 font-medium opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_both]">
                Discover Our Premium Properties
              </p>

              {/* Dynamic underline */}
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transform transition-all duration-500 group-hover:w-24"></div>
            </div>
          </div>

          {/* Enhanced View All button */}
          <div className="relative group/btn">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-500/20 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-all duration-300 blur-lg transform group-hover/btn:scale-110"></div>

            <Link href="/properties">
              <Button
                variant="outline"
                className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-400 text-gray-700 hover:text-blue-600 font-bold px-8 py-6 text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-gray-500/10 hover:shadow-blue-500/20 flex items-center gap-3 group-hover/btn:bg-white"
              >
                <span>View All</span>

                {/* Animated arrow */}

                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Enhanced properties grid with staggered animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 3).map((property, index) => (
            <div
              key={property.id}
              className="opacity-0 animate-[fadeInUp_0.8s_ease-out_both]"
              style={{
                animationDelay: `${index * 0.2 + 0.5}s`,
              }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2 opacity-60">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full animate-pulse"
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
