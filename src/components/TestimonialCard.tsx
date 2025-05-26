import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={80}
        height={80}
        className="rounded-full object-cover mb-4"
      />
      <p className="text-gray-600 mb-4 italic">&quot;{testimonial.message}&quot;</p>
      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
      <p className="text-sm text-gray-500">{testimonial.role}</p>
    </div>
  );
}
