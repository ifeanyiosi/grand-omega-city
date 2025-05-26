
import { Property } from "@/types";
import Image from "next/image";

interface PropertyDetailsModalProps {
  property: Property | null;
  onClose: () => void;
}

const PropertyDetailsModal = ({
  property,
  onClose,
}: PropertyDetailsModalProps) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="h-64 md:h-96 relative">
            <Image
              src={property.images[0]}
              alt={property.title}
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {property.title}
          </h2>
          <p className="text-gray-600 mb-4">{property.location}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-gray-100 px-4 py-2 rounded-md">
              <span className="block text-sm text-gray-500">Price</span>
              <span className="font-semibold text-indigo-600">
                ${property.price.toLocaleString()}
              </span>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-md">
              <span className="block text-sm text-gray-500">Bedrooms</span>
              <span className="font-semibold">{property.bedrooms}</span>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-md">
              <span className="block text-sm text-gray-500">Bathrooms</span>
              <span className="font-semibold">{property.bathrooms}</span>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-md">
              <span className="block text-sm text-gray-500">Area</span>
              <span className="font-semibold">{property.area} sq ft</span>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-md">
              <span className="block text-sm text-gray-500">Type</span>
              <span className="font-semibold">{property.type}</span>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-md">
              <span className="block text-sm text-gray-500">Status</span>
              <span className="font-semibold">{property.status}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{property.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Contact Realtor</h3>
            <div className="flex items-center mb-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                <Image
                  src={property.realtor.avatar}
                  alt={property.realtor.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{property.realtor.name}</h4>
                <p className="text-sm text-gray-600">
                  {property.realtor.email}
                </p>
              </div>
            </div>
            <a
              href={`tel:${property.realtor.phone}`}
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-indigo-700 transition"
            >
              Call: {property.realtor.phone}
            </a>
            <a
              href={`mailto:${property.realtor.email}`}
              className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsModal;
