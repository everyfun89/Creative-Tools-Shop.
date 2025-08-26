"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useSession } from "next-auth/react";

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  // Feedback ophalen bij mount
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch("/api/feedback");
        if (!res.ok) throw new Error("Failed to fetch feedback");
        const data = await res.json();
        setFeedbacks(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedback();
  }, []);

  // Feedback verzenden
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) return alert("You must be signed in to submit feedback");
    if (!message.trim()) return alert("Message cannot be empty");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: session.user.name || session.user.email, message }),
      });
      if (!res.ok) throw new Error("Failed to submit feedback");
      const newFeedback = await res.json();
      setFeedbacks((prev) => [newFeedback, ...prev]);
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting feedback");
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
          <p className="text-gray-600 mb-6">You must be signed in to leave feedback.</p>
        )}

        <section>
          {loading ? (
            <p>Loading feedback…</p>
          ) : feedbacks.length === 0 ? (
            <p className="text-gray-500">No feedback yet. Be the first to leave one!</p>
          ) : (
            feedbacks.map((f) => (
              <div key={f._id} className="border-b py-4">
                <p className="font-medium">{f.name}</p>
                <p className="text-gray-700">{f.message}</p>
                <p className="text-sm text-gray-500">
                  {f.createdAt ? new Date(f.createdAt).toLocaleString() : "Date unknown"}
                </p>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
