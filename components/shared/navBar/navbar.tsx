import Link from "next/link";
import MobileNav from "./mobilenav";

export default function NavBar() {
  return (
    <header className="bg-white sticky top-0 z-20 ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Vastra
        </Link>
        <nav className="hidden md:flex space-x-10">
          <Link
            href="/products"
            className="text-gray-600 text-sm font-semibold tracking-wider uppercase hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/categories"
            className="text-gray-600 text-sm font-semibold tracking-wider uppercase hover:text-primary"
          >
            Categories
          </Link>
          <Link
            href="/deals"
            className="text-gray-600 text-sm font-semibold tracking-wider uppercase hover:text-primary"
          >
            Offers
          </Link>
          <Link
            href="/deals"
            className="text-gray-600 text-sm font-semibold tracking-wider uppercase hover:text-primary"
          >
            Contact Us
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
