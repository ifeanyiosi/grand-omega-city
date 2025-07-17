// app/properties/page.tsx or page.jsx
import PropertiesPage from "@/components/PropertiesPgaeComponents";
import React, { Suspense } from "react";


export default function PropertiesWrapperPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <PropertiesPage />
    </Suspense>
  );
}
