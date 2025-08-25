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
          <p className="text-gray-700">
            Sign in bovenaan om toegang te krijgen tot de webshop.
          </p>
        </section>
      ) : (
        <section className="py-8">
          <h2 className="text-2xl font-bold">Hello, {session.user?.email}</h2>
          <p className="mt-2 text-gray-600">
            Welcome back — gebruik het menu bovenaan om verder te gaan.
          </p>
        </section>
      )}
    </main>
  );
}
