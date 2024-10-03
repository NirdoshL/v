import React from "react";
import Link from "next/link";
import { MapPin, Ticket } from "lucide-react";

function TopBar() {
  return (
    <div className="h-10 flex bg-white md:bg-[#ff4f00] sticky justify-center md:justify-between items-center md:px-4 top-0 z-20">
      <div title="Geographical Map">
        <Link
          href={""}
          className="flex text-xs md:text-sm py-1 px-2 items-center justify-evenly cursor-pointer w-full md:w-[200px] rounded-lg"
        >
          <Ticket className="h-5 w-5 text-center bottom-0 font-bold text-slate-800 md:text-secondary md:mr-1" />
          <p className="w-full md:w-[200px] truncate">
            <span className=" text-slate-800 md:text-secondary font-bold px-0.5">
              Available Coupons
            </span>
          </p>
        </Link>
      </div>
      <div className="ml-auto flex items-center px-2 md:px-0 gap-x-6">
        <Link
          href="/payment-methods"
          title="Our Mission"
          className="hidden md:flex px-0.5 md:px-2 my-3 text-xs md:text-sm font-semibold md:font-medium border-e-[1.5px] border-e-slate-200 text-center md:text-secondary"
        >
          Payment Methods
        </Link>
        <Link
          href="/ourmission"
          title="Our Mission"
          className="flex px-0.5 md:px-2 my-3 text-xs md:text-sm font-semibold md:font-medium border-e-[1.5px] border-e-slate-200 text-center md:text-secondary"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          title="Contact Us"
          className="flex px-0.5 md:px-2 my-3 text-xs md:text-sm font-semibold md:font-medium border-e-[1.5px] border-e-slate-200 text-center md:text-secondary"
        >
          Contact Us
        </Link>
        <Link
          href="/faqs"
          title="Frequently Asked Questions"
          className="flex px-0.5 md:px-2 my-3 text-xs md:text-sm font-semibold md:font-medium text-center md:text-secondary"
        >
          FAQs
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
