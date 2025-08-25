"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="max-w-7xl mx-auto py-10 px-6 bg-white">
      {/* Hero / Greeting */}
      {!session ? (
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-3">Welcome to CreativeTools</h1>
          <p className="text-gray-700 mb-6">
            Explore curated creative products.
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

      {/* Verwijder search resultaten en knoppen onder hero */}
    </main>
  );
}
