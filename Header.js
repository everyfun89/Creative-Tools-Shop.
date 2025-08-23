// File: components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pastelBlue">
          Creative Tools
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/">All</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/adults">Adults</Link>
          <Link href="/drawing">Drawing</Link>
          <Link href="/crafts">Crafts</Link>
          <Link href="/trends">Trends</Link>
          <Link href="/new">New</Link>
        </nav>

        {/* eventueel een zoekbalk */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pastelBlue"
          />
        </div>
      </div>
    </header>
  );
}
