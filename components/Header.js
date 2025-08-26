"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { useState, useEffect } from "react";
import Fuse from "fuse.js";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [q, setQ] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [results, setResults] = useState([]);

  // Voorbeeldpagina's en producten
  const pages = [
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Wishlist", url: "/wishlist" },
    { name: "Privacy Policy", url: "/privacy" },
  ];
  const products = [
    // { name: "Cool Brush", url: "/products/cool-brush" },
  ];

  const itemsToSearch = [...products, ...pages];

  // Fuse.js opties
  const fuse = new Fuse(itemsToSearch, {
    keys: ["name"],
    threshold: 0.4, // hoe lager, hoe strenger
    ignoreLocation: true,
  });

  function onSearchSubmit(e) {
    e.preventDefault();
    if (results.length > 0) {
      router.push(results[0].url);
    } else {
      const term = q.trim();
      router.push(term ? `/?q=${encodeURIComponent(term)}` : "/");
    }
    setQ("");
    setResults([]);
  }

  useEffect(() => {
    if (router.query?.success) {
      if (router.query.success === "login") {
        setPopupMessage("Successfully logged in!");
      } else if (router.query.success === "register") {
        setPopupMessage("Account successfully created!");
      }
      setShowPopup(true);
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [router.query]);

  // Fuzzy search bij elke letter
  useEffect(() => {
    const term = q.trim();
    if (!term) {
      setResults([]);
      return;
    }
    const fuzzyResults = fuse.search(term).map(r => r.item);
    setResults(fuzzyResults);
  }, [q]);

  return (
    <header className="sticky top-0 z-50">
      {showPopup && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-soft animate-slide-up z-50">
          {popupMessage}
        </div>
      )}

      <div className="bg-[#7FB3FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between gap-4">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              CreativeTools
            </Link>

            <form onSubmit={onSearchSubmit} className="flex-1 max-w-2xl relative">
              <div className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  type="search"
                  placeholder="Search products or pages…"
                  className="w-full h-10 pl-10 pr-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/70"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  aria-label="Submit search"
                >
                  <Search size={18} />
                </button>

                {results.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white text-black border rounded mt-1 max-h-60 overflow-y-auto shadow-md">
                    {results.map((item, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          router.push(item.url);
                          setQ("");
                          setResults([]);
                        }}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </form>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/wishlist" className="p-2 rounded-lg hover:bg-white/15" aria-label="Wishlist">
                <Heart size={20} />
              </Link>
              <Link href="/cart" className="p-2 rounded-lg hover:bg-white/15" aria-label="Cart">
                <ShoppingCart size={20} />
              </Link>

              {session ? (
                <>
                  <span className="hidden md:inline text-sm">{session.user?.email}</span>
                  <button
                    onClick={() => signOut()}
                    className="px-3 py-1.5 bg-white text-[#0F172A] rounded-lg text-sm font-medium hover:bg-white/90"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="px-3 py-1.5 bg-white text-[#0F172A] rounded-lg text-sm font-medium hover:bg-white/90"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="flex flex-wrap gap-2 sm:gap-3 py-3">
            {[
              { label: "All", href: "/" },
              { label: "Kids", href: "/kids" },
              { label: "Adults", href: "/adults" },
              { label: "Drawing", href: "/drawing" },
              { label: "Crafts", href: "/crafts" },
              { label: "Trends", href: "/trends" },
              { label: "New", href: "/new" },
              { label: "Organizers", href: "/organizers" },
              { label: "Handy", href: "/handy" },
              { label: "Christmas", href: "/christmas" },
              { label: "Birthday", href: "/birthday" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block px-4 py-2 rounded-full border border-gray-200 hover:border-[#7FB3FF] hover:text-[#0F172A] transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
