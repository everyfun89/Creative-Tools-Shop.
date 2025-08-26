// pages/feedback.js
"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [message, setMessage] = useState("");
  const { data: session } = useSession();

  // Feedback ophalen bij laden pagina
  useEffect(() => {
    async function fetchFeedbacks() {
      const res = await fetch("/api/feedback");
      if (res.ok) {
        const data = await res.json();
        setFeedbacks(data);
      }
    }
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) return alert("You must be signed in to submit feedback");

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: session.user.name || session.user.email, message }),
    });

    if (res.ok) {
      const newFeedback = await res.json();
      setFeedbacks((prev) => [newFeedback, ...prev]);
      setMessage("");
    } else {
      alert("Failed to submit feedback");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-6">Feedback</h1>

        {session ? (
          <form onSubmit={handleSubmit} className="mb-8">
            <textarea
              className="w-full border rounded-xl p-4 mb-2 focus:outline-none focus:ring-2 focus:ring-[#7FB3FF]"
              placeholder="Leave your feedback here…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#7FB3FF] text-white rounded-xl hover:bg-[#6aa1e0] transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <p className="text-gray-600 mb-6">
            You must be signed in to leave feedback.
          </p>
        )}

        <section>
          {feedbacks.map((f) => (
            <div key={f._id} className="border-b py-4">
              <p className="font-medium">{f.name}</p>
              <p className="text-gray-700">{f.message}</p>
              <p className="text-sm text-gray-500">
                {new Date(f.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </section>
      </main>

      <footer className="mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 bg-white border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Creative Tools
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm">Privacy</Link>
              <Link href="/about" className="text-sm">About</Link>
              <Link href="/contact" className="text-sm">Contact</Link>
              <Link href="/feedback" className="text-sm">Feedback</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
