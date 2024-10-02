import CarouselImage from "./carousel";

export default function HeroSection() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 p-6">
          <div className="hidden md:block">
            <p className="text-red-500 font-semibold mb-4">
              FLAT 30% OFF + CASHBACK! *
            </p>
            <h1 className="text-4xl font-bold text-purple-900 mb-4">
              Baby Essential Fashion & Nursery
            </h1>
            <p className="text-gray-600 mb-4">
              Fermentum, cursus ultrices porttitor tincidunt suscipit quam
              facilisis sit massa pellentesque mi quis elit elementum tristique
              urna.
            </p>
            <p className="text-sm text-gray-500">
              * Enim cras quam et nullam risus nec tincidunt mattis nunc.
            </p>
            <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="md:hidden">
            <CarouselImage />
          </div>
          <div className="hidden md:block">
            <CarouselImage />
          </div>
        </div>
      </div>
    </div>
  );
}
