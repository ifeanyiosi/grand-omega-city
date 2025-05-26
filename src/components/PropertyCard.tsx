import { Property } from "@/types";
import Image from "next/image";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group relative bg-white rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/15 transform hover:scale-[1.02] hover:-translate-y-2 cursor-pointer">
      {/* Animated glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>

      {/* Image container with advanced effects */}
      <div className="relative overflow-hidden">
        {/* Image with zoom effect */}
        <Image
          src={property.image}
          alt={property.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Floating price badge */}
        <div className="absolute top-4 right-4 transform translate-y-[-100px] group-hover:translate-y-0 transition-all duration-500 delay-200">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur-sm opacity-75"></div>
            <div className="relative bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/50">
              <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                {property.price}
              </p>
            </div>
          </div>
        </div>

        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-300"></div>
      </div>

      {/* Enhanced content section */}
      <div className="relative p-6 space-y-4">
        {/* Property name with gradient effect */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 transform group-hover:scale-105">
          {property.name}
        </h3>

        {/* Location with enhanced styling */}
        <div className="flex items-center gap-2">
          {/* Location pin icon */}
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-medium">
            {property.location}
          </p>
        </div>

        {/* Price with stunning effects - moved to hover overlay, keeping original here for fallback */}
        <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <p className="text-2xl font-black bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            {property.price}
          </p>
        </div>

        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
      </div>

      {/* Hover overlay with call-to-action */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-200">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl blur-sm opacity-75"></div>
            <button className="relative bg-white/95 backdrop-blur-sm text-blue-700 font-bold px-6 py-3 rounded-2xl hover:bg-white transition-all duration-300 transform hover:scale-105 border border-white/50">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Card border glow effect */}
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-400/0 via-orange-400/0 to-blue-400/0 group-hover:from-blue-400/30 group-hover:via-orange-400/30 group-hover:to-blue-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 p-px">
        <div className="w-full h-full bg-transparent rounded-3xl"></div>
      </div>

      {/* Floating particles on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "2s",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
