// File: pages/index.js
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedCategories from "../components/FeaturedCategories";
import Reviews from "../components/Reviews";

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
