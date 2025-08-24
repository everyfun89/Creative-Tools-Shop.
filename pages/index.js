// pages/index.js
// Author: ChatGPT
"use client";
import Header from "../components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchQ = typeof router.query?.q === "string" ? router.query.q : "";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto py-10 px-6">
        {/* Hero / Greeting */}
        {!session ? (
          <section className="text-center py-16">
            <h1 className="text-4xl font-bold mb-3">Welcome to CreativeTools</h1>
            <p className="text-gray-700 mb-6">
              Sign in to explore curated creative products.
            </p>
          </section>
        ) : (
          <section className="py-8">
            <h2 className="text-2xl font-bold">Hello, {session.user?.email}</h2>
            <p className="mt-2 text-gray-600">
              Welcome back — check the categories or your wishlist/cart.
            </p>
          </section>
        )}

        {/* If user searched */}
        {searchQ ? (
          <section className="mt-8">
            <h3 className="text-xl font-semibold">Search results for “{searchQ}”</h3>
            <p className="text-gray-600 mt-2">
              No products found yet — product catalog coming soon.
            </p>
          </section>
        ) : null}
      </main>
    </div>
  );
}
