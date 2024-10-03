"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductsCard from "../product/card";

interface carouseltypes {
  image: string;
}
type props = {
  array: carouseltypes[];
};

export function CarouselProvider({ array }: props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full hidden lg:block lg:max-w-[820px] xl:max-w-[1120px] 2xl:max-w-[1440px] mx-auto"
    >
      <CarouselContent className="">
        {array.map((content, index) => (
          <CarouselItem key={index} className="lg:basis-1/4 xl:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-0.5">
                  <ProductsCard />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
