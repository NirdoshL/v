import SectionHeader from "@/components/shared/header/sectionheader";
import React from "react";
import ProductsCard from "../product/card";
import { CarouselProvider } from "./carouselprovider";

export default function NewArrival() {
  return (
    <>
      <SectionHeader title="New Arrivals" link="" />
      <div className="w-full no-visible-scrollbar grid grid-rows-2 grid-flow-col overflow-x-auto lg:grid-rows-none lg:grid-flow-row-dense lg:hidden  gap-y-4 gap-x-0 place-items-center ">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
      <CarouselProvider
        array={[
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
          { image: "" },
        ]}
      />
    </>
  );
}
