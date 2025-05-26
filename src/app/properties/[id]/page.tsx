import { useRouter } from "next/navigation";

export default function PropertyDetails() {
  const { id } = useRouter().query;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Property Details for ID: {id}</h1>
      {/* Fetch and show full property info here */}
    </div>
  );
}
