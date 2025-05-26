/* eslint-disable @next/next/no-img-element */
// pages/about.tsx
import React from "react";
import Head from "next/head";
import {
  FaUserTie,
  FaHeart,
  FaHandshake,
  FaRegLightbulb,
} from "react-icons/fa";
import NewsletterSignup from "@/components/NewsletterSignup";

// Company values
const values = [
  {
    icon: <FaHeart className="h-8 w-8 text-amber-500" />,
    title: "Dedication",
    description:
      "We pour our hearts into building a community where families thrive and investors succeed.",
  },
  {
    icon: <FaHandshake className="h-8 w-8 text-amber-500" />,
    title: "Trust",
    description:
      "We operate with honesty and transparency, ensuring every client feels secure in their journey with us.",
  },
  {
    icon: <FaRegLightbulb className="h-8 w-8 text-amber-500" />,
    title: "Vision",
    description:
      "We reimagine urban living by creating a futuristic, well-planned environment for generations to come.",
  },
  {
    icon: <FaUserTie className="h-8 w-8 text-amber-500" />,
    title: "Professionalism",
    description:
      "With a team of experts, we deliver excellence in real estate development and customer service.",
  },
];

// Timeline milestones
const milestones = [
  {
    year: "2018",
    title: "The Grand Omega Vision",
    description:
      "The idea for Grand Omega City was born — a premium estate to redefine residential and investment living in Nigeria.",
  },
  {
    year: "2019",
    title: "Land Acquisition",
    description:
      "Strategic plots secured in high-potential areas, setting the foundation for growth and value.",
  },
  {
    year: "2020",
    title: "Site Planning & Layout",
    description:
      "Masterplans and estate designs developed with focus on aesthetics, accessibility, and sustainability.",
  },
  {
    year: "2021",
    title: "Development Begins",
    description:
      "Infrastructure construction kicks off: road networks, drainage, and green zones begin to take shape.",
  },
  {
    year: "2023",
    title: "Launch of Phase 1",
    description:
      "Grand Omega City Phase 1 launched, offering serviced plots to families, investors, and partners.",
  },
  {
    year: "2024",
    title: "Expanding Community Impact",
    description:
      "Over 2,000 plots allocated; community-focused programs initiated to support youth and local development.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About Us | Grand Omega City</title>
        <meta
          name="description"
          content="Learn about Grand Omega City's mission, values, and our journey to redefine residential living in Nigeria."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Banner */}
      <div className="relative py-24 bg-gray-900 mt-20">
        <div className="absolute inset-0 bg-amber-500/20 mix-blend-multiply" />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Grand Omega City isn’t just real estate — it’s a vision for the future of modern, vibrant community living.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-amber-500 font-semibold">OUR MISSION</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Building a Future-Forward Community
              </h2>
              <p className="text-gray-600 mb-4">
                At Grand Omega City, our mission is to provide an environment that fosters prosperity, security, and well-being. We aim to create more than homes — we build futures.
              </p>
              <p className="text-gray-600 mb-4">
                With thoughtful planning, modern infrastructure, and a commitment to excellence, we offer investors and residents an unmatched opportunity to thrive.
              </p>
              <p className="text-gray-600">
                Whether you’re purchasing your first plot, developing your dream home, or investing for the long-term, Grand Omega City is a place where vision meets value.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="rounded-lg overflow-hidden h-64 bg-gray-300">
                    <img
                      className="object-cover w-full lg:h-[256px] h-full"
                      src={`/omega-about-${n}.jpg`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What Guides Our Vision
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These values shape how we plan, build, and serve — creating a community built on trust and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              The Grand Omega Story
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From concept to community, our journey reflects a commitment to excellence, growth, and empowerment.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:order-last md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block text-amber-500 font-bold text-xl mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-amber-500 border-4 border-white"></div>
                  </div>
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0
                        ? "md:order-last md:pl-12"
                        : "md:pr-12 md:text-right"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="bg-gray-300 h-96 w-full">
                  <img
                    className="object-cover w-full lg:h-[384px] h-full"
                    src="/omega-community.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-amber-500 font-semibold">COMMUNITY</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Impact Beyond Plots
              </h2>
              <p className="text-gray-600 mb-6">
                At Grand Omega City, we believe true success is shared. That’s why we invest in people, not just properties.
              </p>
              <p className="text-gray-600 mb-6">
                From youth empowerment programs to eco-friendly estate policies, our efforts uplift residents and neighboring communities alike.
              </p>
              <p className="text-gray-600 mb-8">
                Together, we’re not just building structures — we’re shaping lives and laying the foundation for a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <NewsletterSignup />
    </div>
  );
}
