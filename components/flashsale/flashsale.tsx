import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionHeader from "../shared/header/sectionheader";

export default function FlashSale() {
  return (
    <>
      <SectionHeader mainClassName="sm:hidden" title="Flash Sale" link="" />
      <div className="flex justify-between gap-4">
        {[...Array(3)].map((_, idx) => (
          <Link key={idx} className="sm:hidden" href={``}>
            <section className="h-[160px] min-w-[105px] max-w-[120px] pb-10 text-start transform duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden border rounded">
              <Image
                className=" h-[100px] w-full object-center object-cover rounded"
                src={
                  "https://images.unsplash.com/photo-1496226338867-3304059a5aa6?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt=""
                height={1000}
                width={1000}
              />

              <h2 className="text-sm md:text-lg font-medium text-gray-600  mb-3 px-5">
                Rs 00.00
              </h2>
              <s className="text-sm md:text-lg font-medium text-gray-600  mb-3 px-5">
                Rs 50.00
              </s>
            </section>
          </Link>
        ))}
      </div>
    </>
  );
}
