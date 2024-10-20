"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

type EsewaProps = {
  name: string;
  email: string;
  place: string;
  street1: string;
  street2: string;
  cartId: string;
};

export default function EsewaPay({
  name,
  email,
  place,
  street1,
  street2,
  cartId,
}: EsewaProps) {
  const handlePayment = async () => {
    const url = "http://localhost:8000/payment/esewa/create";
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
          esewaCall(responseData.data);
        }
      } else {
        toast(`Failed to fetch:${response.status}, ${response.statusText}`);
      }
    } catch (err) {
      toast(`Error While Making Payment: ${err}`);
    }
  };

  const esewaCall = (formData: any) => {
    const path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";
    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in formData) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", formData[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <Button
      onClick={() => handlePayment()}
      className="w-full bg-green-600 hover:bg-green-600/80 focus:bg-green-600/90"
    >
      Pay Via Esewa
    </Button>
  );
}
