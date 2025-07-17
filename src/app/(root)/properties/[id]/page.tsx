/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined, FaArrowLeft } from "react-icons/fa";

type Property = {
  id: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  image: string;
  description: string;
  yearBuilt: number;
  lotSize: number;
  propertyType: string;
};

export default function PropertyDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get property ID safely from route parameters
  const propertyId = params?.id as string;

  // Fetch property details from Firestore
  useEffect(() => {
    if (!propertyId) return;

    const fetchProperty = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "properties", propertyId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProperty({
            id: docSnap.id,
            title: data.title,
            price: data.price,
            bedrooms: data.bedrooms,
            bathrooms: data.bathrooms,
            sqft: data.sqft,
            address: data.address,
            image: data.image,
            description: data.description || "No description available",
            yearBuilt: data.yearBuilt || 0,
            lotSize: data.lotSize || 0,
            propertyType: data.propertyType || "Unknown",
          });
        } else {
          setError("Property not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch property details");
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20 text-center">
        <p>Loading property details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!property) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="mb-6">
        <Link
          href="/properties"
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <FaArrowLeft className="mr-2" /> Back to Properties
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Property Image */}
        <div className="relative h-96 w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>

        {/* Property Details */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {property.title}
              </h1>
              <p className="text-gray-600 mt-1">{property.address}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-3xl font-bold text-blue-600">
                ${property.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Property Features */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
              <FaBed className="text-blue-500 mr-2" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
              <FaBath className="text-blue-500 mr-2" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
              <FaRulerCombined className="text-blue-500 mr-2" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Property Details
              </h2>
              <ul className="space-y-2">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium">{property.propertyType}</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Year Built</span>
                  <span className="font-medium">{property.yearBuilt}</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Lot Size</span>
                  <span className="font-medium">
                    {property.lotSize.toLocaleString()} sqft
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-8">
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
