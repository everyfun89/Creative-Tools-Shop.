// pages/feedback.js
"use client";
import { useEffect, useState } from "react";

export default function FeedbackPage() {
  const [list, setList] = useState([]);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [rating,setRating] = useState(5);
  const [message,setMessage] = useState("");
  const [status,setStatus] = useState(null);

  async function load() {
    const r = await fetch("/api/feedback");
    const data = await r.json();
    setList(data || []);
  }

  useEffect(()=>{ load(); }, []);

  async function submitFeedback(e) {
    e.preventDefault();
    setStatus("sending");
    const r = await fetch("/api/feedback", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ name, email, rating, message })
    });
    if (r.ok) {
      setStatus("ok");
      setName(""); setEmail(""); setMessage(""); setRating(5);
      load();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-4">Feedback</h1>

        <form onSubmit={submitFeedback} className="mb-8 space-y-3">
          <div className="flex gap-3">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="flex-1 p-3 border rounded" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="flex-1 p-3 border rounded" />
          </div>

          <div className="flex items-center gap-3">
            <label>Rating:</label>
            <select value={rating} onChange={e=>setRating(Number(e.target.value))} className="p-2 border rounded">
              {[5,4,3,2,1].map(n=> <option key={n} value={n}>{n} star{n>1?"s":""}</option>)}
            </select>
          </div>

          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Your feedback..." className="w-full p-3 border rounded" rows="4"/>

          <button className="px-5 py-2 bg-[#7FB3FF] text-white rounded">Send feedback</button>
          {status === "ok" && <div className="text-green-600 mt-2">Thanks! Your feedback is posted.</div>}
          {status === "error" && <div className="text-red-600 mt-2">Error submitting.</div>}
        </form>

        <h2 className="text-xl font-semibold mb-3">All feedback</h2>
        <div className="space-y-4">
          {list.map(f => (
            <div key={f._id} className="p-4 border rounded-lg bg-white">
              <div className="flex justify-between items-center">
                <div className="font-medium">{f.name || "Anonymous"}</div>
                <div className="text-yellow-400">{'★'.repeat(f.rating)}</div>
              </div>
              <div className="text-sm text-gray-700 mt-2">{f.message}</div>
              <div className="text-xs text-gray-400 mt-2">{new Date(f.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
