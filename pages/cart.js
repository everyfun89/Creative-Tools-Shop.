// pages/cart.js
import Header from "../components/Header";

export default function Cart() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-[#7FB3FF] mb-4">Your Cart</h1>
        <p className="text-gray-700">Your shopping cart is empty.</p>
      </main>
    </div>
  );
}
