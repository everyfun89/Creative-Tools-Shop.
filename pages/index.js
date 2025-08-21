import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    fetch("/api/products?sort=popular")
      .then((res) => res.json())
      .then((data) => setTrending(data));
  }, []);

  if (!session) {
    // Als de gebruiker niet ingelogd is, toon login-knoppen
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pastelBg">
        <h1 className="text-3xl font-bold mb-6 text-pastelBlue">Login</h1>
        <button
          onClick={() => signIn("google")}
          className="mb-4 px-6 py-2 bg-pastelBlue text-white rounded-xl hover:bg-pastelPink transition"
        >
          Login met Google
        </button>
        <button
          onClick={() => signIn("email")}
          className="px-6 py-2 bg-pastelBlue text-white rounded-xl hover:bg-pastelPink transition"
        >
          Login met e-mail
        </button>
      </div>
    );
  }

  // Als ingelogd, toon producten
  return (
    <div className="p-6">
      {/* Trending Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-pastelPink">
          Trending Products
        </h2>
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
                <h3 className="text-xl font-semibold mb-2 text-pastelBlue">
                  {product.name}
                </h3>
                <p className="mb-4 text-gray-600">{product.description}</p>
                <p className="font-bold text-pastelPink mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <button className="px-4 py-2 bg-pastelBlue text-white rounded-xl hover:bg-pastelPink transition">
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
