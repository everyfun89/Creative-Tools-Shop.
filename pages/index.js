"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchQ = typeof router.query?.q === "string" ? router.query.q : "";

  return (
    <main className="max-w-7xl mx-auto py-10 px-6">
      {/* Hero / Greeting */}
      {!session ? (
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-3">Welcome to CreativeTools</h1>
          <p className="text-gray-700 mb-6">
            Sign in or create an account to explore curated creative products.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/login"
              className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 bg-[#7FB3FF] text-white rounded-lg hover:bg-[#6aa1e0] transition"
            >
              Create account
            </Link>
          </div>
        </section>
      ) : (
        <section className="py-8">
          <h2 className="text-2xl font-bold">Hello, {session.user?.email}</h2>
          <p className="mt-2 text-gray-600">
            Welcome back — check the categories or your wishlist/cart.
          </p>
        </section>
      )}

      {/* Search results placeholder */}
      {searchQ ? (
        <section className="mt-8">
          <h3 className="text-xl font-semibold">
            Search results for “{searchQ}”
          </h3>
          <p className="text-gray-600 mt-2">
            No products found yet — product catalog coming soon.
          </p>
        </section>
      ) : null}

      {/* Categories section */}
      <section className="mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {["All", "Kids", "Adults", "Drawing", "Crafts", "Trends", "New"].map((c) => (
            <Link
              key={c}
              href={`/${c.toLowerCase()}`}
              className="p-4 bg-white border rounded-xl hover:shadow-md transition"
            >
              <div className="text-lg font-medium">{c}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
