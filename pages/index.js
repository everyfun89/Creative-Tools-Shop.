import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch('/api/products?sort=popular')
      .then(res => res.json())
      .then(data => setTrending(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 p-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-pink-600">Creative Tools</h1>
        <nav className="space-x-4">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/trends">Trends</Link>
          <Link href="/crafts">Crafts</Link>
          <Link href="/drawing">Drawing</Link>
          <Link href="/about">About Us</Link>
        </nav>
      </header>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Trending Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {trending.map(product => (
            <div key={product._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold mb-2 text-pink-600">{product.name}</h3>
              <p className="mb-4">{product.description}</p>
              <p className="font-bold mb-4">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
