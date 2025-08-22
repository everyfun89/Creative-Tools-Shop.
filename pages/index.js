// File: pages/index.js
"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedCategories from "../components/FeaturedCategories";
import Reviews from "../components/Reviews";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-green-200 px-6 md:px-12">
        <Header />
        <h1 className="text-4xl font-bold mb-6 text-black">Welkom</h1>
        <p className="text-lg mb-8 text-black">Log in om de creatieve producten te ontdekken</p>
        <div className="flex gap-4">
          <button onClick={() => signIn("google")} className="px-6 py-3 bg-white text-blue-500 rounded-xl font-semibold hover:bg-pink-200 transition">
            Sign in with Google
          </button>
          <button onClick={() => signIn("email")} className="px-6 py-3 bg-white text-blue-500 rounded-xl font-semibold hover:bg-pink-200 transition">
            Sign in with Email
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-12 bg-gradient-to-b from-blue-200 to-green-200">
      <Header />
      <h2 className="text-2xl font-bold text-black mb-6">Hello, {session.user.email}</h2>
      <button onClick={() => signOut()} className="px-4 py-2 bg-pink-200 text-white rounded-xl hover:bg-blue-500 transition mb-8">
        Sign Out
      </button>
      <FeaturedCategories />
      <Reviews />
      <Footer />
    </div>
  );
}
