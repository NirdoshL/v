"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const cartItems = [
  { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
  { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
  { id: 3, name: "Product 3", price: 39.99, quantity: 3 },
];
export default function MobileNav({}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full">
          <SheetHeader>
            <SheetTitle>Vastra Wears</SheetTitle>
            <Card className="rounded">
              <CardContent className="w-full h-[20vh] px-0 py-0 rounded">
                <Image
                  src={
                    "https://icms-image.slatic.net/images/ims-web/b5ae47b5-3b77-4c21-abe6-b161b1a9c0b4.jpg"
                  }
                  alt={"image"}
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover rounded"
                />
              </CardContent>
            </Card>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-8">
            <Link
              href="/products"
              className={cn(
                " hover:text-primary bg-gray-100 px-4 py-2 rounded",
                pathname === "/products"
                  ? "text-gray-900 font-bold"
                  : "font-semibold text-gray-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/categories"
              className={cn(
                " hover:text-primary bg-gray-100 px-4 py-2 rounded",
                pathname === "/categories"
                  ? "text-gray-900 font-bold"
                  : "font-semibold text-gray-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/offers"
              className={cn(
                " hover:text-primary bg-gray-100 px-4 py-2 rounded",
                pathname === "/offers"
                  ? "text-gray-900 font-bold"
                  : "font-semibold text-gray-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              Offers
            </Link>
            <Link
              href="/login"
              className={cn(
                " hover:text-primary bg-gray-100 px-4 py-2 rounded",
                pathname === "/login"
                  ? "text-gray-900 font-bold"
                  : "font-semibold text-gray-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            className=" relative text-center text-sm mx-0 md:mx-6 flex hover:bg-transparent"
            variant="ghost"
            size="icon"
            aria-label="Cart"
          >
            <ShoppingBasket className="h-[28px] w-[28px] md:h-[38px] md:w-[38px] mx-0 md:mx-1 text-primary md:text-white" />
            <div className="h-5 w-5 text-xs absolute text-white grid bg-green-500 rounded-full place-items-center font-bold p-0.5 top-0 right-0">
              0
            </div>
            <div className="absolute top-0 right-0 h-5 w-5 rounded-full border-2 border-white animate-ping"></div>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <div className="mt-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-semibold">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Total</h3>
                <p className="font-semibold">
                  $
                  {cartItems
                    .reduce(
                      (total, item) => total + item.quantity * item.price,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <Button className="w-full mt-4">Checkout</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="md:block hidden">
        <Button className="px-4 py-2 bg-white hover:bg-white/90 text-brandcolor font-semibold tracking-wide">
          Sign In
        </Button>
      </div>
    </div>
  );
}
