"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

type KhaltiProps = {
  name: string;
  email: string;
  place: string;
  street1: string;
  street2: string;
  cartId: string;
};

export default function KhaltiPay({
  name,
  email,
  place,
  street1,
  street2,
  cartId,
}: KhaltiProps) {
  const handlePayment = async () => {
    const url = "http://localhost:8000/payment/khalti/create";
    const data = {
      name: name,
      email: email,
      place: place,
      street1: street1,
      street2: street2,
      cartId: cartId,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData) {
          khaltiCall(responseData.data);
        }
      } else {
        toast(`Failed to fetch:${response.status}, ${response.statusText}`);
      }
    } catch (err) {
      toast(`Error While Making Payment: ${err}`);
    }
  };

  const khaltiCall = (data: any) => {
    console.log(data);
    window.location.href = data.data.payment_url;
  };

  return (
    <Button
      onClick={() => handlePayment()}
      className="w-full bg-violet-600 hover:bg-violet-600/80 focus:bg-violet-600/90"
    >
      Pay Via Khalti
    </Button>
  );
}
