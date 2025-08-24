// pages/feedback.js
// Author: ChatGPT
"use client";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("/api/feedback")
      .then(res => res.json())
      .then(data => setFeedbacks(data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold mb-6">Feedback</h1>
        {feedbacks.length === 0 ? (
          <p className="text-gray-600">No feedback submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {feedbacks.map(f => (
              <li key={f._id} className="border p-4 rounded-lg bg-gray-50">
                <strong>{f.name}</strong> ({f.rating}/5)
                <p>{f.message}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
