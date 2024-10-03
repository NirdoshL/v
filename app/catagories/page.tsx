import ProductsCard from "@/components/home/product/card";
import SectionHeader from "@/components/shared/header/sectionheader";
import React from "react";

export default function CatagoryPage() {
  return (
    <div>
      <SectionHeader title="Catagory" linkclass="hidden" />
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:col-span-3 gap-4 md:gap-8">
        {[...Array(8)].map((_, idx) => (
          <ProductsCard key={idx} />
        ))}
      </ul>
    </div>
  );
}
