"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video with enhanced effects */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transform scale-105 transition-transform duration-[20s] hover:scale-110"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-black/40 to-orange-900/60 animate-pulse"></div>

        {/* Dynamic light rays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]"></div>
      </div>

      {/* Enhanced overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-orange-600/10 z-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-15 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + ((i * 7) % 60)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content with stunning animations */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <div className="text-white max-w-4xl mx-auto">
          {/* Main heading with gradient text and animations */}
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight animate-[fadeInUp_1s_ease-out]">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent hover:from-orange-300 hover:via-white hover:to-blue-300 transition-all duration-700 cursor-default">
                Find Your
              </span>
              <span className="block bg-gradient-to-r from-blue-300 via-white to-orange-300 bg-clip-text text-transparent hover:from-white hover:via-orange-200 hover:to-blue-200 transition-all duration-700 cursor-default transform hover:scale-105">
                Dream Home
              </span>
            </h1>

            {/* Animated underline */}
            <div className="mx-auto w-32 h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 rounded-full animate-[expandWidth_2s_ease-out_1s_both]"></div>
          </div>

          {/* Enhanced description */}
          <p className="text-xl md:text-2xl mb-12 leading-relaxed font-light animate-[fadeInUp_1s_ease-out_0.3s_both] text-white/90 hover:text-white transition-colors duration-300">
            Discover premium properties with{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text text-transparent">
              Grand Omega City
            </span>{" "}
            — where luxury meets comfort and dreams become reality.
          </p>

          {/* Stunning CTA buttons */}
          <div className="flex justify-center flex-wrap gap-6 animate-[fadeInUp_1s_ease-out_0.6s_both]">
            {/* Primary CTA */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur-sm group-hover:blur-md transform group-hover:scale-110"></div>
              <Link
                href="/properties"
                className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-700 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-blue-500/25 hover:shadow-orange-500/25 flex items-center gap-2 group"
              >
                <span>Browse Properties</span>
                <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"></div>
              </Link>
            </div>

            {/* Secondary CTA */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-200 rounded-2xl opacity-90 group-hover:opacity-100 transition-all duration-300 blur-sm group-hover:blur-md transform group-hover:scale-110"></div>
              <Link
                href="/contact"
                className="relative bg-white/95 backdrop-blur-sm text-blue-700 hover:text-orange-600 font-bold px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-white/25 hover:shadow-orange-500/25 flex items-center gap-2 group border-2 border-white/50 hover:border-orange-300/50"
              >
                <span>Contact Agent</span>
                <div className="w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"></div>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-[fadeInUp_1s_ease-out_1s_both]">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-[scrollBounce_2s_ease-in-out_infinite]"></div>
            </div>
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

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200vw) skewX(-12deg);
          }
        }

        @keyframes scrollBounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}
