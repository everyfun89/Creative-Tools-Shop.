// pages/feedback.js
"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";

function Toast({ show, text }) {
  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 bottom-4 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="bg-black text-white px-4 py-2 rounded-xl text-sm shadow-lg">
        {text}
      </div>
    </div>
  );
}

export default function FeedbackPage() {
  const [list, setList] = useState([]);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [rating,setRating] = useState(5);
  const [message,setMessage] = useState("");
  const [status,setStatus] = useState(null);
  const [toast,setToast] = useState({show:false, text:""});

  async function load() {
    const r = await fetch("/api/feedback");
    const data = await r.json();
    setList(Array.isArray(data) ? data : []);
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
      setToast({show:true, text:"Thanks! Your feedback has been posted."});
      load();
      setTimeout(()=> setToast({show:false, text:""}), 3000);
    } else {
      setStatus("error");
      setToast({show:true, text:"Error submitting feedback."});
      setTimeout(()=> setToast({show:false, text:""}), 3000);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-4">Feedback</h1>

        <form onSubmit={submitFeedback} className="mb-8 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="flex-1 p-3 border rounded" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="flex-1 p-3 border rounded" />
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700">Rating</label>
            <select value={rating} onChange={e=>setRating(Number(e.target.value))} className="p-2 border rounded">
              {[5,4,3,2,1].map(n=> <option key={n} value={n}>{n} {n>1?"stars":"star"}</option>)}
            </select>
          </div>

          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Your feedback..." className="w-full p-3 border rounded" rows="4"/>

          <button className="px-5 py-2 bg-[#7FB3FF] text-white rounded" disabled={status==="sending"}>
            {status==="sending" ? "Sending…" : "Send feedback"}
          </button>
          {status === "error" && <div className="text-red-600 mt-2">Something went wrong.</div>}
        </form>

        <h2 className="text-xl font-semibold mb-3">All feedback</h2>
        <div className="space-y-4">
          {list.map(f => (
            <div key={f._id} className="p-4 border rounded-lg bg-white">
              <div className="flex justify-between items-center">
                <div className="font-medium">{f.name || "Anonymous"}</div>
                <div className="text-yellow-400">{'★'.repeat(f.rating || 0)}</div>
              </div>
              <div className="text-sm text-gray-700 mt-2">{f.message}</div>
              <div className="text-xs text-gray-400 mt-2">
                {f.createdAt ? new Date(f.createdAt).toLocaleString() : ""}
              </div>
            </div>
          ))}
          {list.length === 0 && (
            <div className="text-gray-600">No feedback yet.</div>
          )}
        </div>
      </main>
      <Toast show={toast.show} text={toast.text} />
    </div>
  );
}
