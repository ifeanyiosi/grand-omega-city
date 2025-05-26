"use client";
import { testimonials } from "@/lib/testimonials";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

// Enhanced TestimonialCard Component
function EnhancedTestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-xl shadow-xl shadow-blue-500/5 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/15 transform hover:scale-[1.02] hover:-translate-y-2 cursor-pointer overflow-hidden">
      {/* Animated glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/40 to-orange-400/40 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: "3s",
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced profile image */}
      <div className="relative mb-6 group/img">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-all duration-500 transform scale-110"></div>

        <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white/50 group-hover:ring-blue-400/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={80}
            height={80}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </div>
      </div>

      {/* Enhanced quote */}
      <div className="relative mb-6">
        {/* Quote marks */}
        <div className="absolute -top-2 -left-2 text-4xl text-blue-500/20 group-hover:text-orange-500/30 transition-colors duration-500 font-serif">
          &quot;
        </div>
        <div className="absolute -bottom-2 -right-2 text-4xl text-blue-500/20 group-hover:text-orange-500/30 transition-colors duration-500 font-serif rotate-180">
          &quot;
        </div>

        <p className="relative text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300 italic font-medium">
          {testimonial.message}
        </p>
      </div>

      {/* Enhanced name and role */}
      <div className="relative z-10">
        <h4 className="font-bold text-xl mb-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-orange-600 transition-all duration-500 transform group-hover:scale-105">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 font-medium">
          {testimonial.role}
        </p>
      </div>

      {/* Animated bottom accent */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>

      {/* Card border glow */}
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-400/0 via-orange-400/0 to-blue-400/0 group-hover:from-blue-400/20 group-hover:via-orange-400/20 group-hover:to-blue-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 p-px">
        <div className="w-full h-full bg-transparent rounded-3xl"></div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="relative px-4 py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-orange-50/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-orange-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-tr from-orange-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/15 to-orange-400/15 rounded-full animate-pulse"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + ((i * 11) % 80)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced header section */}
        <div className="text-center mb-16">
          <div className="relative inline-block group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-110"></div>

            <h2 className="relative text-4xl md:text-6xl font-black text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent hover:from-blue-700 hover:via-orange-600 hover:to-blue-700 transition-all duration-700 cursor-default transform hover:scale-105 leading-tight">
              What Our Clients Say
            </h2>

            {/* Animated underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transition-all duration-500 group-hover:w-32"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Hear from homeowners, investors, and partners who trust{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-700 to-orange-600 bg-clip-text text-transparent">
              Grand Omega City
            </span>{" "}
            to deliver real estate excellence.
          </p>
        </div>

        {/* Enhanced testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="opacity-0 animate-[fadeInUp_0.8s_ease-out_both]"
              style={{
                animationDelay: `${index * 0.15 + 0.6}s`,
              }}
            >
              <EnhancedTestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Decorative bottom section */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-3 opacity-60">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "2s",
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-500 ml-2">
              Trusted by Hundreds
            </span>
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
    </main>
  );
}
