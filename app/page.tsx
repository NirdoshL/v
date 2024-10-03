"use client";
import React from "react";
import ProductsCard from "@/components/home/product/card";
import PageWrap from "@/components/shared/wrap/pagewrap";
import SectionWrap from "@/components/shared/wrap/sectionwrap";
import SectionHeader from "@/components/shared/header/sectionheader";
import HeroSection from "@/components/home/hero/hero";
import Offer1s from "@/components/home/offers/offer1";
import FlashSale from "@/components/flashsale/flashsale";

export default function Home() {
  return (
    <PageWrap>
      <SectionWrap>
        <HeroSection />
        <FlashSale />
        <SectionHeader title="New Arrival" link="#" />
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:col-span-3 gap-4 md:gap-8">
          {[...Array(5)].map((_, idx) => (
            <ProductsCard key={idx} />
          ))}
        </ul>
        <Offer1s />
        <SectionHeader title="Just For You" link="#" />
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:col-span-3 gap-4 md:gap-8">
          {[...Array(8)].map((_, idx) => (
            <ProductsCard key={idx} />
          ))}
        </ul>
      </SectionWrap>
    </PageWrap>
  );
}
