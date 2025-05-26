"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-orange-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + ((i * 13) % 60)}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Enhanced Left Image */}
        <div className="w-full lg:w-1/2 group">
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-3xl blur-2xl transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Image container with advanced effects */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/10 group-hover:shadow-orange-500/20 transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-rotate-1">
              <Image
                src="/images/welcome.jpg"
                alt="Luxury Property"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Right Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Welcome badge with animation */}
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <h3 className="relative text-sm font-bold tracking-[0.3em] mb-2 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-orange-500 transition-all duration-500 cursor-default">
              W E L C O M E
            </h3>
          </div>

          {/* Main heading with stunning effects */}
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent hover:from-blue-700 hover:via-orange-600 hover:to-blue-700 transition-all duration-700 cursor-default transform hover:scale-105">
                TO GRAND OMEGA
              </span>
              <span className="block bg-gradient-to-r from-blue-700 via-orange-600 to-blue-700 bg-clip-text text-transparent hover:from-gray-900 hover:via-blue-800 hover:to-gray-900 transition-all duration-700 cursor-default transform hover:scale-105">
                CITY
              </span>
            </h2>

            {/* Animated accent line */}
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transform transition-all duration-500 hover:w-32"></div>
          </div>

          {/* Enhanced card with glassmorphism */}
          <div className="relative group">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-105"></div>

            <Card className="relative bg-white/80 backdrop-blur-xl shadow-2xl shadow-blue-500/5 border border-white/50 group-hover:shadow-orange-500/10 transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-translate-y-1">
              <CardContent className="p-8 lg:p-10">
                {/* Enhanced paragraph */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 transition-colors duration-500 group-hover:text-gray-800">
                  <span className="font-semibold bg-gradient-to-r from-blue-700 to-orange-600 bg-clip-text text-transparent">
                    Grand Omega City
                  </span>{" "}
                  is your trusted destination for premier real estate
                  opportunities. We specialize in showcasing{" "}
                  <span className="font-medium text-blue-700">
                    luxury properties
                  </span>{" "}
                  tailored for modern living — whether you&apos;re a buyer,
                  investor, or developer. Known for our{" "}
                  <span className="font-medium text-orange-600">
                    professionalism, market insight, and dedication
                  </span>
                  , we&apos;re here to help you find the perfect place to call
                  home or grow your investment portfolio.
                </p>

                {/* Stunning CTA button */}
                <div className="relative inline-block group/button">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl opacity-75 group-hover/button:opacity-100 transition-all duration-300 blur-sm group-hover/button:blur-md transform group-hover/button:scale-110"></div>

                  <Link href="/about">
                    <Button className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-orange-500 text-white font-bold px-8 py-6 text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-blue-500/25 hover:shadow-orange-500/25 flex items-center gap-3 group/button border-0">
                      <span>Learn More</span>

                      {/* Animated arrow */}

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
    </section>
  );
}
