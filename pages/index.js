// pages/index.js
"use client";
import Header from "../components/Header";
import Link from "next/link";
import { useSession } from "next-auth/react";

/* Categories & Reviews inline */
function Categories() {
  const cats = ["All","Kids","Adults","Drawing","Crafts","Trends","New"];
  return (
    <section className="max-w-7xl mx-auto mt-10 px-6">
      <h3 className="text-xl font-semibold text-gray-900">Categories</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {cats.map(c => (
          <Link key={c} href={`/${c.toLowerCase()}`} className="p-4 bg-white border rounded-xl hover:shadow-md">
            <div className="text-lg">{c}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const rev = [
    {name:"Sarah", text:"Great quality and super fast delivery!", rating:5},
    {name:"John", text:"Creative selection, clean and modern site.", rating:4},
    {name:"Lena", text:"Very happy with my purchase!", rating:5}
  ];
  return (
    <section className="max-w-7xl mx-auto mt-10 px-6">
      <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {rev.map((r,i)=>(
          <div key={i} className="p-4 bg-white border rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="font-medium">{r.name}</div>
              <div className="text-yellow-400">{"★".repeat(r.rating)}</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto py-10">
        <div className="px-6">
          {!session ? (
            <div className="text-center py-16">
              <h1 className="text-4xl font-bold mb-4">Welcome</h1>
              <p className="text-gray-700 mb-6">Create an account or sign in to explore creative products.</p>
              <div className="flex justify-center gap-4">
                <Link href="/login" className="px-6 py-3 border rounded-lg">Sign in</Link>
                <Link href="/register" className="px-6 py-3 bg-[#7FB3FF] text-white rounded-lg">Register</Link>
              </div>
            </div>
          ) : (
            <div className="py-8">
              <h2 className="text-2xl font-bold">Hello, {session.user?.email}</h2>
              <p className="mt-2 text-gray-600">Welcome back — check categories or your wishlist/cart.</p>
            </div>
          )}
        </div>

        <Categories />
        <Reviews />
      </main>

      <footer className="mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 bg-white border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} Creative Tools</div>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm">Privacy</Link>
              <Link href="/about" className="text-sm">About</Link>
              <Link href="/contact" className="text-sm">Contact</Link>
              <Link href="/feedback" className="text-sm">Feedback</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
