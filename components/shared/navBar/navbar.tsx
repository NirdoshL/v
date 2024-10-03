import Link from "next/link";
import MobileNav from "./mobilenav";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function NavBar() {
  return (
    <header className="bg-white sticky top-0 z-20">
      <div className="container mx-auto px-4 py-4 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Vastra
        </Link>
        <nav className="hidden md:flex space-x-10">
          <Link
            href="/products"
            className="text-gray-900 text-lg font-semibold tracking-tight capitalize hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/categories"
            className="text-gray-900 text-lg font-semibold tracking-tight capitalize hover:text-primary"
          >
            Categories
          </Link>
          <Link
            href="/deals"
            className="text-gray-900 text-lg font-semibold tracking-tight capitalize hover:text-primary"
          >
            Offers
          </Link>
          <Link
            href="/deals"
            className="text-gray-900 text-lg font-semibold tracking-tight capitalize hover:text-primary"
          >
            Contact Us
          </Link>
        </nav>
        <Input
          className={cn(
            "md:hidden placeholder:text-center w-full h-10 relative text-sm sm:text-base z-10 border-none bg-transparent text-black rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20 mx-2"
          )}
          placeholder="Search By Name"
        />
        <MobileNav />
      </div>
    </header>
  );
}
