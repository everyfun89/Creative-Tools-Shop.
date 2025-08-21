// Home.jsx
// Homepage component van de website
// - Bovenste snelkoppelingsvak netjes afgerond
// - Onderliggend vak verwijderd
// - Tekst 'trends' verwijderd
// - Login mogelijkheid met Google of e-mail
// Kleuren: hoofdkleur #87d0fa, detailkleur #ffa8f4

import { useEffect, useState } from "react";

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch("/api/products?sort=popular")
      .then((res) => res.json())
      .then((data) => setTrending(data));
  }, []);

  return (
    <div className="px-6 md:px-12">
      {/* Hero / Snelkoppelingsvak */}
      <section className="text-center py-12 bg-[#87d0fa] text-white rounded-3xl shadow-soft mb-10">
        <h1 className="text-4xl font-bold mb-2">Creative Tools</h1>
        <p className="text-lg">Ontdek de meest creatieve en trending producten</p>
        {/* Login buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-2 bg-white text-[#87d0fa] rounded-xl font-semibold hover:bg-[#ffa8f4] hover:text-white transition">
            Login met Google
          </button>
          <button className="px-6 py-2 bg-white text-[#87d0fa] rounded-xl font-semibold hover:bg-[#ffa8f4] hover:text-white transition">
            Login met e-mail
          </button>
        </div>
      </section>

      {/* Trending Products */}
      <section>
        <div className="grid md:grid-cols-3 gap-8">
          {trending.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-soft overflow-hidden hover:scale-105 transform transition duration-200"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-[#87d0fa]">
                  {product.name}
                </h3>
                <p className="mb-4 text-gray-600">{product.description}</p>
                <p className="font-bold text-[#ffa8f4] mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <button className="px-4 py-2 bg-[#87d0fa] text-white rounded-xl hover:bg-[#ffa8f4] transition">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
