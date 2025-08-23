// components/Header.js
import Link from "next/link";
import { ShoppingCart, Heart, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-500">
        CreativeTools
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link href="/">All</Link>
        <Link href="/kids">Kids</Link>
        <Link href="/adults">Adults</Link>
        <Link href="/drawing">Drawing</Link>
        <Link href="/crafts">Crafts</Link>
        <Link href="/trends">Trends</Link>
        <Link href="/new">New</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Search size={22} />
        </button>

        {/* Wishlist */}
        <Link href="/wishlist" className="p-2 rounded-full hover:bg-gray-100">
          <Heart size={22} />
        </Link>

        {/* Cart */}
        <Link href="/cart" className="p-2 rounded-full hover:bg-gray-100">
          <ShoppingCart size={22} />
        </Link>
      </div>
    </header>
  );
}
