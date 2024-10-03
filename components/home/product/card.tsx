import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductsCard() {
  return (
    <Link className="my-2" href={``}>
      <section className="h-[240px] md:h-[360px] min-w-[180px] md:min-w-[210px] pb-10 text-start transform duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden border rounded">
        <Image
          className=" h-[140px] md:h-[200px] 2xl:h-[220px] w-full object-center object-cover"
          src={
            "https://images.unsplash.com/photo-1496226338867-3304059a5aa6?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          height={1000}
          width={1000}
        />
        <div className="flex flex-row justify-between items-center px-1">
          <div className="flex flex-col">
            <h1 className="text-md md:text-lg font-medium my-0.5 md:my-3 px-5 truncate">
              Vastra Wears
            </h1>
            <h2 className="text-sm md:text-lg font-medium text-gray-600  my-1.5 md:mb-3 px-5">
              Rs {0.0}
            </h2>
          </div>
          <div className="hidden md:block p-1 md:p-2 text-sm border-[1px] border-gray-300 bg-white text-green-500 rounded-xl">
            In Stock
          </div>
        </div>
        <div className="space-x-1 px-5 flex justify-start mt-1 md:mt-4">
          <Star className="w-4 h-4 mx-px fill-current text-orange-600" />
          <Star className="w-4 h-4 mx-px fill-current text-orange-600" />
          <Star className="w-4 h-4 mx-px fill-current text-orange-600" />
          <div className="relative w-4 h-4 mx-px">
            <Star className="w-4 h-4 text-gray-500 fill-gray-400" />
            <div className="absolute top-0 left-0 w-2 h-full overflow-hidden">
              <Star className="w-4 h-4 text-orange-600 fill-current" />
            </div>
          </div>
          <Star className="w-4 h-4 mx-px fill-current text-gray-400" />
        </div>
      </section>
    </Link>
  );
}
