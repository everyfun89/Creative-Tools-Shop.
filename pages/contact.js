// pages/contact.js
import { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      // tijdelijk: we sturen niks naar een server
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-6">Contact</h1>
        <p className="text-gray-700 mb-6">
          Send us a message and we will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full p-3 border rounded"
            rows="6"
            required
          />

          <button
            type="submit"
            className="px-6 py-3 bg-[#7FB3FF] text-white rounded"
          >
            Send
          </button>

          {status === "sending" && (
            <div className="text-gray-600 mt-2">Sending...</div>
          )}
          {status === "sent" && (
            <div className="text-green-600 mt-2">Message sent! ✅</div>
          )}
          {status === "error" && (
            <div className="text-red-600 mt-2">Failed to send message ❌</div>
          )}
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Back to <Link href="/" className="text-[#7FB3FF]">home</Link>.
        </p>
      </main>
    </div>
  );
}
