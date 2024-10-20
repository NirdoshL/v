"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function PaymentVerification() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const searchParams = useSearchParams();
  const paymentID = searchParams.get("pidx");
  const transactionId = searchParams.get("transaction_id");
  const trans_code = searchParams.get("tidx");
  const productId = searchParams.get("purchase_order_id");

  const [error, setError] = useState<string | null>(null);

  const verifyPayment = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8000/payment/khalti/success?pidx=${paymentID}&purchase_order_id=${productId}&transaction_id=${transactionId}&transaction_code=${trans_code}`
      );
      if (response.status === 200) {
        setIsSuccess(true);
      } else {
        setError("Payment verification failed. Please try again.");
      }
    } catch (err: any) {
      console.log(err);
      setError(
        "An error occurred while verifying the payment. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Payment Verification</CardTitle>
          <CardDescription>Checking the status of your payment</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-4 text-lg font-medium">Verifying payment...</p>
            </div>
          )}
          {isSuccess && (
            <div className="flex flex-col items-center justify-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500" />
              <p className="mt-4 text-lg font-medium">Payment successful!</p>
            </div>
          )}
          {error && (
            <div className="text-center py-8">
              <p className="text-red-500">{error}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          {(!isSuccess || error) && (
            <Button onClick={verifyPayment} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying
                </>
              ) : isSuccess ? null : (
                "Try Again"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
