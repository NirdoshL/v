"use client";
import Buttonloader from "@/components/shared/loader/buttonloader";
import { copyTextToClipboard } from "@/hooks/copy-to-clipboard";
import Image from "next/image";
import React, { useState } from "react";

export default function CouponsPage() {
  const [isCopied, setIsCopied] = useState(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const handleCopyClick = (copyText: string) => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsDisabled(true);
        setIsCopied(true);

        setTimeout(() => {
          setIsDisabled(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 place-content-center place-items-center mx-auto">
      <div className="max-w-xs md:max-w-md lg:max-w-lg bg-gradient-to-br from-orange-600 to-red-600 text-white text-center py-10 px-20 rounded-lg shadow-md relative">
        <Image
          src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-32 w-32 mx-auto mb-4 rounded-lg"
          alt="prd-image"
          height={1000}
          width={1000}
        />
        <h3 className="text-2xl font-semibold mb-4">
          20% flat off on all rides within the city
          <br />
          using HDFC Credit Card
        </h3>
        <div className="flex items-center space-x-2 mb-6">
          <span
            id="cpnCode"
            className="border-dashed border text-white px-4 py-2 rounded-l"
          >
            STEALDEAL20
          </span>
          <button
            id="cpnBtn"
            disabled={isDisabled}
            onClick={() => handleCopyClick("hello")}
            className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer"
          >
            {!isCopied ? "Copy Code" : "Copied"}
            {!isCopied && isDisabled ? <Buttonloader /> : <></>}
          </button>
        </div>
        <p className="text-sm">Valid Till: 20Dec, 2025</p>

        <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
        <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
      </div>
      <div className="max-w-xs md:max-w-md lg:max-w-lg bg-gradient-to-br from-orange-600 to-red-600 text-white text-center py-10 px-20 rounded-lg shadow-md relative">
        <Image
          src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-32 w-32 mx-auto mb-4 rounded-lg"
          alt="prd-image"
          height={1000}
          width={1000}
        />
        <h3 className="text-2xl font-semibold mb-4">
          20% flat off on all rides within the city
          <br />
          using HDFC Credit Card
        </h3>
        <div className="flex items-center space-x-2 mb-6">
          <span
            id="cpnCode"
            className="border-dashed border text-white px-4 py-2 rounded-l"
          >
            STEALDEAL20
          </span>
          <button
            id="cpnBtn"
            disabled={isDisabled}
            onClick={() => handleCopyClick("hello")}
            className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer"
          >
            {!isCopied ? "Copy Code" : "Copied"}
            {!isCopied && isDisabled ? <Buttonloader /> : <></>}
          </button>
        </div>
        <p className="text-sm">Valid Till: 20Dec, 2025</p>

        <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
        <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
      </div>
    </div>
  );
}
