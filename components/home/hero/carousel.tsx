import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function CarouselImage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1496226338867-3304059a5aa6?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533758497366-3282e96d8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1496226338867-3304059a5aa6?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534120715301-09659b0c0147?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 md:py-12">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className={index === currentIndex ? "block" : "hidden"}
            >
              {/* eslint-disable @typescript-eslint/no-empty-interface  */}
              <img
                src={image}
                alt={`Product ${index + 1}`}
                width="600"
                height="400"
                className="object-cover w-full aspect-[3/2]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </CarouselPrevious>
        <CarouselNext
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </CarouselNext>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
