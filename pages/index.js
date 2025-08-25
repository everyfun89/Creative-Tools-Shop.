"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col">
      {/* MENU */}
      <nav className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center space-x-6">
          <Link href="/" className="text-white font-semibold hover:text-gray-200">
            All
          </Link>
          <Link href="/kids" className="text-white font-semibold hover:text-gray-200">
            Kids
          </Link>
          <Link href="/adults" className="text-white font-semibold hover:text-gray-200">
            Adults
          </Link>
          <Link href="/drawing" className="text-white font-semibold hover:text-gray-200">
            Drawing
          </Link>
          <Link href="/crafts" className="text-white font-semibold hover:text-gray-200">
            Crafts
          </Link>
          <Link href="/trends" className="text-white font-semibold hover:text-gray-200">
            Trends
          </Link>
          <Link href="/new" className="text-white font-semibold hover:text-gray-200">
            New
          </Link>
          <Link href="/organizers" className="text-white font-semibold hover:text-gray-200">
            Organizers
          </Link>
          <Link href="/handy" className="text-white font-semibold hover:text-gray-200">
            Handy
          </Link>
          <Link href="/christmas" className="text-white font-semibold hover:text-gray-200">
            Christmas
          </Link>
          <Link href="/birthday" className="text-white font-semibold hover:text-gray-200">
            Birthday
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-7xl mx-auto py-10 px-6 bg-white w-full">
        {!session ? (
          <section className="text-center py-16">
            <h1 className="text-4xl font-bold mb-3">Welcome to CreativeTools</h1>
            <p className="text-gray-700">
              Sign in above to access the webshop.
            </p>
          </section>
        ) : (
          <section className="py-8">
            <h2 className="text-2xl font-bold">Hello, {session.user?.email}</h2>
            <p className="mt-2 text-gray-600">
              Welcome back — use the menu above to explore categories.
            </p>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          © {new Date().getFullYear()} CreativeTools. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
