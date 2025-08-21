import { useState } from "react";
import { signInWithGoogle, signInWithEmail } from "../lib/auth"; // voorbeeld auth functies

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="px-4 md:px-12 py-8">
      {/* Hero / Login Section */}
      <section className="text-center py-16 bg-[#87d0fa] text-white rounded-2xl shadow-soft mb-10">
        <h1 className="text-4xl font-bold mb-6">Welkom bij Creative Tools</h1>
        <p className="text-lg mb-8">Log in om jouw creatieve tools te ontdekken</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={signInWithGoogle}
            className="px-6 py-3 bg-white text-[#87d0fa] rounded-xl font-semibold hover:bg-[#ffa8f4] hover:text-white transition"
          >
            Log in met Google
          </button>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-xl text-black"
            />
            <button
              onClick={() => signInWithEmail(email)}
              className="px-4 py-2 bg-[#ffa8f4] text-white rounded-xl hover:bg-[#87d0fa] transition"
            >
              Log in
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
