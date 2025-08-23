// pages/feedback.js
"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function FeedbackPage() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  // tijdelijk: voorbeeld feedback
  useEffect(() => {
    setFeedbackList([
      { id: 1, name: "Sarah", rating: 5, message: "Great service!" },
      { id: 2, name: "John", rating: 4, message: "Very nice site." },
    ]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate API
      const newFeedback = {
        id: Date.now(),
        name: name || "Anonymous",
        email,
        rating,
        message,
      };
      setFeedbackList([newFeedback, ...feedbackList]);
      setName("");
      setEmail("");
      setRating(5);
      setMessage("");
      setStatus("ok");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-6">Feedback</h1>

        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div className="flex gap-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="flex-1 p-3 border rounded"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="flex-1 p-3 border rounded"
            />
          </div>

          <div className="flex items-center gap-3">
            <label>Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="p-2 border rounded"
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n} star{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your feedback..."
            className="w-full p-3 border rounded"
            rows="4"
          />

          <button type="submit" className="px-5 py-2 bg-[#7FB3FF] text-white rounded">
            Send Feedback
          </button>

          {status === "sending" && <div className="text-gray-600 mt-2">Sending...</div>}
          {status === "ok" && <div className="text-green-600 mt-2">Thanks! Your feedback is posted.</div>}
          {status === "error" && <div className="text-red-600 mt-2">Error submitting feedback.</div>}
        </form>

        <h2 className="text-xl font-semibold mb-3">All Feedback</h2>
        <div className="space-y-4">
          {feedbackList.map((f) => (
            <div key={f.id} className="p-4 border rounded-lg bg-white">
              <div className="flex justify-between items-center">
                <div className="font-medium">{f.name}</div>
                <div className="text-yellow-400">{'★'.repeat(f.rating)}</div>
              </div>
              <div className="text-sm text-gray-700 mt-2">{f.message}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
