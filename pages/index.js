import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const [trending, setTrending] = useState([]);

  // Redirect to login if not logged in
  if (!session) {
    if (typeof window !== "undefined") window.location.href = "/login";
    return null;
  }

  useEffect(() => {
    fetch("/api/products?sort=popular")
      .then((res) => res.json())
      .then((data) => setTrending(data));
  }, []);

  return (
    <div className="px-6 md:px-12 py-12 bg-[#87d0fa] min-h-screen">
      <section className="grid md:grid-cols-3 gap-8">
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
      </section>
    </div>
  );
}
