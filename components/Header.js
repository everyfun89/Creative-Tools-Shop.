// components/Header.js
"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ShoppingCart, Heart, Search } from "lucide-react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-[#7FB3FF]">CreativeTools</Link>

        <div className="flex-1 max-w-2xl mx-6">
          <label htmlFor="site-search" className="sr-only">Search</label>
          <div className="relative">
            <input
              id="site-search"
              type="search"
              placeholder="Search creative products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7FB3FF]"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={16} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/wishlist" className="p-2 rounded-full hover:bg-gray-100 text-gray-700">
            <Heart size={20} />
          </Link>

          <Link href="/cart" className="p-2 rounded-full hover:bg-gray-100 text-gray-700">
            <ShoppingCart size={20} />
          </Link>

          {session ? (
            <>
              <span className="hidden sm:inline text-sm text-gray-700">{session.user?.email}</span>
              <button onClick={() => signOut()} className="px-3 py-1 bg-[#7FB3FF] text-white rounded-md text-sm">Sign out</button>
            </>
          ) : (
            <Link href="/login" className="px-3 py-1 border border-gray-200 rounded-md text-sm hover:border-[#7FB3FF]">Login</Link>
          )}
        </div>
      </div>

      <nav className="bg-white border-t border-gray-100">
        <ul className="flex justify-center gap-6 py-3 text-gray-700 font-medium">
          <li><Link href="/">All</Link></li>
          <li><Link href="/kids">Kids</Link></li>
          <li><Link href="/adults">Adults</Link></li>
          <li><Link href="/drawing">Drawing</Link></li>
          <li><Link href="/crafts">Crafts</Link></li>
          <li><Link href="/trends">Trends</Link></li>
          <li><Link href="/new">New</Link></li>
        </ul>
      </nav>
    </header>
  );
}
