"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function CheckoutPage() {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = 99.99;
  const shipping = 9.99;
  const total = subtotal + shipping - discount;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Vastra Checkout</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="john@gmail.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="pnone" placeholder="98*******" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main St" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="NY" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="10001" required />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="w-full flex flex-col gap-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ordered Items</CardTitle>
            </CardHeader>
            <CardContent className="relative h-[40vh] md:max-h-[60vh] overflow-y-auto">
              <div className=" flex items-center gap-6 rounded-lg bg-background p-4 shadow-sm transition-all duration-300 border hover:shadow-md">
                <div className="absolute top-2 right-10 text-white bg-brandcolor rounded h-8 max-w-[300px] px-2 py-1">
                  30% Off
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1625697674238-a25bf60b657b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="aspect-square rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">Mens Hoodies</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-600">
                      Rs 999
                    </span>
                    <span className="text-sm font-medium line-through text-muted-foreground">
                      Rs 899
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-6 rounded-lg bg-background p-4 shadow-sm transition-all duration-300 border hover:shadow-md">
                <div className="absolute top-2 right-10 text-white bg-brandcolor rounded h-8 max-w-[300px] px-2 py-1">
                  30% Off
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1625697674238-a25bf60b657b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="aspect-square rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">Mens Hoodies</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-600">
                      Rs 999
                    </span>
                    <span className="text-sm font-medium line-through text-muted-foreground">
                      Rs 899
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-6 rounded-lg bg-background p-4 shadow-sm transition-all duration-300 border hover:shadow-md">
                <div className="absolute top-2 right-10 text-white bg-brandcolor rounded h-8 max-w-[300px] px-2 py-1">
                  30% Off
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1625697674238-a25bf60b657b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="aspect-square rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">Mens Hoodies</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-600">
                      Rs 999
                    </span>
                    <span className="text-sm font-medium line-through text-muted-foreground">
                      Rs 899
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center gap-6 rounded-lg bg-background p-4 shadow-sm transition-all duration-300 border hover:shadow-md">
                <div className="absolute top-2 right-10 text-white bg-brandcolor rounded h-8 max-w-[300px] px-2 py-1">
                  30% Off
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1625697674238-a25bf60b657b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="aspect-square rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">Mens Hoodies</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-600">
                      Rs 999
                    </span>
                    <span className="text-sm font-medium line-through text-muted-foreground">
                      Rs 899
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start space-y-4">
              <div className="grid w-full gap-2">
                <Label htmlFor="coupon">Coupon Code</Label>
                <div className="flex space-x-2">
                  <Input
                    id="coupon"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button
                    className="bg-brandcolor hover:bg-brandcolor/80 focus:bg-brandcolor/90"
                    onClick={handleApplyCoupon}
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <Button className="w-full bg-brandcolor hover:bg-brandcolor/80 focus:bg-brandcolor/90">
                Place Order
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
