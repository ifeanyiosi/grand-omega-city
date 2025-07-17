import HeroSection from "@/components/Home/HeroSection";
import WelcomeSection from "@/components/Home/WelcomeSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import PropertyCarousel from "@/components/PropertyCarousel";
import TestimonialsPage from "@/components/TestimonialSection";
import WorkWithUs from "@/components/WorkWithUs";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <PropertyCarousel />
      <TestimonialsPage />
      <WorkWithUs />
      <NewsletterSignup />
    </div>
  );
}
