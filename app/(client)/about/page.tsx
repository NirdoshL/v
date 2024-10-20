import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="/assets/clothes.avif"
              alt="Vastra Wears Store"
              width={1000}
              height={1000}
              className="h-[400px] w-[600px] rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2023, Vastra Wears has been at the forefront of
              fashion, providing high-quality clothing to our discerning
              customers. Our journey began with a simple idea: to make stylish,
              comfortable, and affordable clothing accessible to everyone.
            </p>
            <p>
              Over the years, we&apos;ve grown from a small local boutique to a
              renowned online retailer, serving fashion enthusiasts across the
              globe. Despite our growth, we&apos;ve never lost sight of our core
              values: quality, style, and customer satisfaction.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-center max-w-2xl mx-auto">
            At Vastra Wears, our mission is to empower individuals to express
            themselves through fashion. We believe that clothing is more than
            just fabric – it&apos;s a form of self-expression, a confidence
            booster, and a way to make a statement without saying a word.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p>
                We source the finest materials and partner with skilled artisans
                to ensure every piece meets our high standards.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Style</h3>
              <p>
                Our team of designers stays ahead of trends to bring you the
                latest in fashion, from classic to contemporary.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>
                We&apos;re committed to reducing our environmental impact
                through ethical sourcing and eco-friendly practices.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Join the Vastra Family
          </h2>
          <p className="mb-4">
            We&apos;re more than just a clothing store – we&apos;re a community
            of fashion lovers. Join us and be part of something special.
          </p>
          <Button className="bg-brandcolor hover:bg-brandcolor/70" asChild>
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
