"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-7xl mx-auto py-10 px-6 w-full">
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
      <Footer />
    </div>
  );
}
