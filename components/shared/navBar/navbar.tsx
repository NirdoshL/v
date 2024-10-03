"use client";
import React from "react";
import Link from "next/link";
import MobileNav from "./mobilenav";
import TopBar from "./topbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
      <TopBar />
      <header className="bg-secondary md:bg-[#ff4f00] sticky top-10 z-20 mb-2">
        <div className="max-w-[1600px] mx-auto px-4 py-4 h-20 flex items-start justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-primary md:text-secondary"
          >
            Vastra
          </Link>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className={cn(
                " text-lg tracking-tight capitalize hover:text-brand/80",
                pathname === "/"
                  ? "text-primary font-bold"
                  : "text-gray-900  md:text-secondary font-semibold"
              )}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={cn(
                " text-lg font-semibold tracking-tight capitalize hover:text-brand/80",
                pathname === "/products"
                  ? "text-primary"
                  : "text-gray-900  md:text-secondary"
              )}
            >
              Products
            </Link>
            <Link
              href="/catagories"
              className={cn(
                " text-lg font-semibold tracking-tight capitalize hover:text-brand/80",
                pathname === "/catagories"
                  ? "text-primary"
                  : "text-gray-900  md:text-secondary"
              )}
            >
              Catagories
            </Link>
            <Link
              href="/offers"
              className={cn(
                " text-lg font-semibold tracking-tight capitalize hover:text-brand/80",
                pathname === "/offers"
                  ? "text-primary"
                  : "text-gray-900  md:text-secondary"
              )}
            >
              Offers
            </Link>
            <Link
              href="/contact"
              className={cn(
                " text-lg font-semibold tracking-tight capitalize hover:text-brand/80",
                pathname === "/contact"
                  ? "text-primary"
                  : "text-gray-900  md:text-secondary"
              )}
            >
              Contact Us
            </Link>
          </nav>

          <MobileNav />
        </div>
      </header>
    </>
  );
}
