import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 font-sans">
      {/* Navigatiebalk */}
      <nav className="bg-white shadow-md p-4 flex justify-center space-x-6">
        <Link href="/privacy" className="text-pink-600 hover:text-pink-800 font-semibold">Privacy Policy</Link>
        <Link href="/trends" className="text-blue-600 hover:text-blue-800 font-semibold">Trends</Link>
        <Link href="/crafts" className="text-pink-600 hover:text-pink-800 font-semibold">Crafts</Link>
        <Link href="/drawing" className="text-blue-600 hover:text-blue-800 font-semibold">Drawing</Link>
        <Link href="/about" className="text-pink-600 hover:text-pink-800 font-semibold">About Us</Link>
      </nav>

      {/* Hero sectie */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">Creative Tools Shop</h1>
        <p className="text-xl md:text-2xl text-blue-600 mb-8">Everything for your crafts and drawing adventures!</p>
        <Link href="/products" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">Shop Now</Link>
      </section>

      {/* Feature sectie */}
      <section className="grid md:grid-cols-2 gap-10 p-10">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2 text-pink-600">Craft Supplies</h2>
          <p>All you need to make your DIY projects amazing.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Drawing Tools</h2>
          <p>Pencils, markers, paints, and more for your artistic creations.</p>
        </div>
      </section>
    </div>
  );
}
