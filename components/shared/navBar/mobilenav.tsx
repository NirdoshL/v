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

const cartItems = [
  { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
  { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
  { id: 3, name: "Product 3", price: 39.99, quantity: 3 },
];
export default function MobileNav({}) {
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
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-8">
            <Link
              href="/products"
              className="text-gray-600 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-gray-600 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/deals"
              className="text-gray-600 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Deals
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            className=" relative text-center text-sm mx-0 md:mx-6 flex"
            variant="ghost"
            size="icon"
            aria-label="Cart"
          >
            <ShoppingBasket className="h-[38px] w-[38px] mx-0 md:mx-1" />
            <div className="h-5 w-5 text-xs absolute text-white grid bg-brandcolor rounded-full place-items-center font-bold p-0.5 top-0 right-0">
              0
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
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
        <Button>Sign In</Button>
      </div>
    </div>
  );
}
