"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col">
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
