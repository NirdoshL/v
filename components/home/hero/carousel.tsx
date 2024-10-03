"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselView() {
  return (
    <section className="w-full h-full text-white">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
        <div className="hidden md:flex col-span-1 flex-col gap-y-2 mt-8 md:h-[300px] lg:h-[360px]">
          <div className="h-56 ripple-container relative group w-full rounded-xl">
            <Image
              alt="offer"
              height={2000}
              width={2000}
              className="h-56 w-full rounded-xl bg-center object-cover"
              src={
                "https://images.unsplash.com/photo-1695459590088-d6fd3cc97cfa?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <h1 className="text-md font-semibold">5% off on mens shoes</h1>
              <p className="text-sm font-medium">Gamma Store</p>
            </div>
          </div>
          <div className="h-56 ripple-container relative group w-full rounded-xl">
            <Image
              alt="offer"
              height={2000}
              width={2000}
              className="h-56 w-full rounded-xl bg-center object-cover"
              src={
                "https://images.unsplash.com/photo-1709551264845-e9dddd775388?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <h1 className="text-md font-semibold">10% off on Facewash</h1>
              <p className="text-sm font-medium">Delta Store</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                playOnInit: true,
                delay: 3000,
              }),
            ]}
            className="md:mt-8"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-lg shadow-lg h-44 md:h-[300px] lg:h-[360px]">
                  <Image
                    src="https://icms-image.slatic.net/images/ims-web/a70da661-25ff-45d3-84c8-4144c4db85d6.jpg"
                    alt="Product 1"
                    width={2000}
                    height={2000}
                    className="absolute hidden lg:block inset-0 h-full w-full object-cover bg-center rounded-lg"
                  />
                  <Image
                    src="https://icms-image.slatic.net/images/ims-web/b5ae47b5-3b77-4c21-abe6-b161b1a9c0b4.jpg"
                    alt="Product 1"
                    width={2000}
                    height={2000}
                    className="absolute lg:hidden inset-0 h-full w-full object-cover bg-center rounded-lg"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end"></div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-lg shadow-lg h-44 md:h-[300px] lg:h-[360px]">
                  <Image
                    src="https://icms-image.slatic.net/images/ims-web/e9e21645-a1eb-4f62-9705-d107a6061a2b.jpg"
                    alt="Product 2"
                    width={2000}
                    height={2000}
                    className="absolute hidden lg:block inset-0 h-full w-full object-cover bg-center rounded-lg"
                  />
                  <Image
                    src="https://icms-image.slatic.net/images/ims-web/39ed5434-24ad-461f-93f7-df1384a67d33.jpg"
                    alt="Product 2"
                    width={2000}
                    height={2000}
                    className="absolute lg:hidden block inset-0 h-full w-full object-cover bg-center rounded-lg"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end"></div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-lg shadow-lg h-44 md:h-[300px] lg:h-[360px]">
                  <Image
                    src="https://icms-image.slatic.net/images/ims-web/dc8daebb-d3a3-4c65-89a4-719052e1bb05.jpg"
                    alt="Product 1"
                    width={2000}
                    height={2000}
                    className="absolute hidden lg:block inset-0 h-full w-full object-cover bg-center rounded-lg"
                  />
                  <Image
                    src="https://icms-image.slatic.net/images/ims-web/2fd3369d-f5e3-4de1-ac6a-10971b5d3925.jpg"
                    alt="Product 1"
                    width={2000}
                    height={2000}
                    className="absolute lg:hidden inset-0 h-full w-full object-cover bg-center rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end"></div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="hidden md:flex col-span-1 flex-col gap-y-2 mt-8 md:h-[300px] lg:h-[360px]">
          <div className="h-56 ripple-container relative group w-full rounded-xl">
            <Image
              alt="offer"
              height={2000}
              width={2000}
              className="h-56 w-full rounded-xl bg-center object-cover"
              src={
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <h1 className="text-md font-semibold">50% off for kids</h1>
              <p className="text-sm font-medium">Alpha Store</p>
            </div>
          </div>
          <div className="h-56 ripple-container relative group w-full rounded-xl">
            <Image
              alt="offer"
              height={2000}
              width={2000}
              className="h-56 w-full rounded-xl bg-center object-cover"
              src={
                "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <h1 className="text-md font-semibold">
                20% off for Red Polka Dot Dress
              </h1>
              <p className="text-sm font-medium">Beta Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
