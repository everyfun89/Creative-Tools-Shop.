// components/Header.js
"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [q, setQ] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  function onSearchSubmit(e) {
    e.preventDefault();
    const term = q.trim();
    router.push(term ? `/?q=${encodeURIComponent(term)}` : "/");
  }

  // Check router query for success messages
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

  return (
    <header className="sticky top-0 z-50">
      {/* Popup notification */}
      {showPopup && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-soft animate-slide-up z-50">
          {popupMessage}
        </div>
      )}

      {/* Top blue bar */}
      <div className="bg-[#7FB3FF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              CreativeTools
            </Link>

            {/* Search */}
            <form onSubmit={onSearchSubmit} className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  type="search"
                  placeholder="Search creative products…"
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
              </div>
            </form>

            {/* Actions */}
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

      {/* Nav row under the blue bar */}
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
