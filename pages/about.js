// pages/about.js
import Header from "../components/Header";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-4">About Creative Tools</h1>
        <p className="text-gray-700 mb-4">
          Creative Tools is a curated marketplace for artists and makers. We believe in simple, beautiful tools that help people create.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Our Story</h2>
        <p className="text-gray-700 mb-4">Founded by creatives, for creatives. Our mission is to bring high-quality tools and inspiring products to makers worldwide.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Values</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Quality & Craftsmanship</li>
          <li>Community & Support</li>
          <li>Transparency & Trust</li>
        </ul>

        <p className="mt-8 text-gray-600">Back to <Link href="/" className="text-[#7FB3FF]">home</Link>.</p>
      </main>
    </div>
  );
}
