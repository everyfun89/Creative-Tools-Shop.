import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 p-10">
      <h1 className="text-4xl text-center font-bold text-pink-600 mb-10">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover rounded-lg mb-4"/>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{product.name}</h2>
            <p className="mb-4">{product.description}</p>
            <p className="font-bold mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/cart" className="text-blue-600 hover:underline font-semibold">Go to Cart</Link>
      </div>
    </div>
  );
}
