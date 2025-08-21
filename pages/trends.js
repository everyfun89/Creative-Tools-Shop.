import { useEffect, useState } from 'react';

export default function Trends() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products?sort=popular') // API moet producten sorteren op populariteit
      .then(res => res.json())
      .then(data => setTrendingProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 p-10">
      <h1 className="text-4xl text-center font-bold text-pink-600 mb-10">Trending Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {trendingProducts.map(product => (
          <div key={product._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover rounded-lg mb-4"/>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{product.name}</h2>
            <p className="mb-4">{product.description}</p>
            <p className="font-bold mb-4">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
