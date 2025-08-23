// File: pages/index.js
"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

/* Inline Header component */
function Header() {
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

/* Inline FeaturedCategories component */
function FeaturedCategories() {
  const categories = [
    { label: "Alle", href: "/" },
    { label: "Dames", href: "/dames" },
    { label: "Heren", href: "/heren" },
    { label: "Wonen", href: "/wonen" },
    { label: "Sport", href: "/sport" },
    { label: "Sieraden", href: "/sieraden" },
    { label: "Trends", href: "/trends" },
    { label: "Crafts", href: "/crafts" },
    { label: "Drawing", href: "/drawing" },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-10">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Categorieën</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {categories.map((c) => (
          <Link key={c.label} href={c.href} className="group block rounded-xl border border-gray-200 bg-white p-4 hover:border-pastelBlue hover:shadow-md transition">
            <div className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center mb-3 group-hover:border-pastelBlue text-lg">
              🎨
            </div>
            <div className="text-sm font-medium text-gray-700 group-hover:text-pastelBlue">
              {c.label}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* Inline Reviews component */
function Reviews() {
  const reviews = [
    { name: "Sara", text: "Mooie kwaliteit en super snelle levering!", rating: 5 },
    { name: "Joris", text: "Creatieve selectie, de site is duidelijk en modern.", rating: 4 },
    { name: "Lena", text: "Heel blij met mijn aankoop. Aanrader!", rating: 5 },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Reviews</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-gray-900">{r.name}</p>
              <p className="text-yellow-500" aria-label={`${r.rating} sterren`}>
                {"★".repeat(r.rating)}<span className="text-gray-300">{"★".repeat(5 - r.rating)}</span>
              </p>
            </div>
            <p className="text-gray-600 text-sm">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Inline Footer component */
function Footer() {
  return (
    <footer className="bg-white text-gray-700 text-center p-6 border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto">
        <p className="mb-3">© {new Date().getFullYear()} Creative Tools. All rights reserved.</p>
        <nav className="flex justify-center gap-6 text-sm">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

/* Main page component (gebruikt inline components) */
export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Welkom</h1>
          <p className="text-lg mb-8 text-gray-700">
            Log in om de creatieve producten te ontdekken
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => signIn("google")}
              className="px-6 py-3 bg-white border border-gray-300 text-pastelBlue rounded-xl font-semibold hover:border-pastelBlue hover:shadow transition"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("email")}
              className="px-6 py-3 bg-white border border-gray-300 text-pastelBlue rounded-xl font-semibold hover:border-pastelBlue hover:shadow transition"
            >
              Sign in with Email
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Hello, {session.user?.email}
        </h2>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-pastelBlue text-white rounded-xl hover:opacity-90 transition mb-8"
        >
          Sign Out
        </button>

        <FeaturedCategories />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
