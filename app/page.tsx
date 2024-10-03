"use client";
import React from "react";
import NavBar from "@/components/shared/navBar/navbar";
import Footer from "@/components/shared/footer/footer";
import ProductsCard from "@/components/home/product/card";
import PageWrap from "@/components/shared/wrap/pagewrap";
import SectionWrap from "@/components/shared/wrap/sectionwrap";
import SectionHeader from "@/components/shared/header/sectionheader";
import HeroSection from "@/components/home/hero/hero";
import Offer1s from "@/components/home/offers/offer1";
import NewArrival from "@/components/home/newarrival/newarrival";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <NavBar />
      {/* page content */}
      <PageWrap>
        <SectionWrap>
          <HeroSection />
        </SectionWrap>
        <SectionWrap>
          <NewArrival />
        </SectionWrap>
        <SectionWrap>
          <Offer1s />
        </SectionWrap>
        <SectionWrap>
          <SectionHeader title="Just For You" link="#" />
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:col-span-3 gap-4 md:gap-8">
            {[...Array(8)].map((_, idx) => (
              <ProductsCard key={idx} />
            ))}
          </ul>
        </SectionWrap>
      </PageWrap>
      {/* Footer */}
      <Footer />
    </div>
  );
}
