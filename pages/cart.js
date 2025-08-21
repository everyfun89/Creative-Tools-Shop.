import { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleCheckout = () => {
    alert('Stripe checkout placeholder – implement Stripe here!');
    // Hier kan later de Stripe API integratie komen
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 p-10">
      <h1 className="text-4xl text-center font-bold text-pink-600 mb-10">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-blue-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-blue-600">{product.name}</h2>
                <p className="text-gray-700">${product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-2xl font-bold text-pink-600">
            Total: ${total.toFixed(2)}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
