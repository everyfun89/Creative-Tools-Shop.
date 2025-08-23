// File: components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-pastelBlue">
          <Link href="/">CreativeTools</Link>
        </div>

        <div className="flex-1 max-w-2xl mx-6">
          <label htmlFor="site-search" className="sr-only">Zoek op site</label>
          <div className="relative">
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Zoek creatieve producten..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pastelBlue"
              aria-label="Zoek creatieve producten"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.5a7.5 7.5 0 010 14.15z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="text-gray-700 hover:text-pastelBlue">Inloggen</Link>
          <Link href="/cart" className="text-gray-700 hover:text-pastelBlue">Winkelwagen</Link>
        </div>
      </div>

      <nav className="bg-white border-t border-gray-100">
        <ul className="flex justify-center gap-8 py-3 text-gray-700 font-medium">
          <li><Link href="/">Alle</Link></li>
          <li><Link href="/dames">Dames</Link></li>
          <li><Link href="/heren">Heren</Link></li>
          <li><Link href="/wonen">Wonen</Link></li>
          <li><Link href="/sport">Sport</Link></li>
          <li><Link href="/sieraden">Sieraden</Link></li>
          <li><Link href="/trends">Trends</Link></li>
          <li><Link href="/crafts">Crafts</Link></li>
          <li><Link href="/drawing">Drawing</Link></li>
        </ul>
      </nav>
    </header>
  );
}
