import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Offer1s() {
  return (
    <div className="relative  overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-yellow-300 z-0">
        <div className="absolute right-0 top-0 w-3/4 h-full bg-yellow-200 rounded-bl-[100%]" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1496226338867-3304059a5aa6?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Child in winter coat sitting on snow"
            width={600}
            height={600}
            className="object-cover w-full h-[40vh]  md:h-[60vh] "
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            SEASON SPECIAL
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Winter Collection.
            <br />
            Grab Them Now!
          </h2>
          <p className="text-gray-600 mb-6">
            Cum sed purus felis, morbi diam mauris sollicitudin id aenean sed
            fusce pellentesque enim viverra luctus enim suspendisse feugiat
            convallis imperdiet.
          </p>
          <Button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded">
            SHOP COLLECTION
          </Button>
        </div>
      </div>
    </div>
  );
}
