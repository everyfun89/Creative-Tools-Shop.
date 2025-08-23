// pages/contact.js
"use client";
import { useState } from "react";

export default function Contact() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [status,setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ name, email, message })
    });
    if (res.ok) {
      setStatus("sent");
      setName(""); setEmail(""); setMessage("");
    } else {
      const data = await res.json();
      setStatus(data?.error || "error");
    }
  }

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-4">Contact</h1>
        <p className="text-gray-700 mb-6">
          Use this email for questions: <a href="mailto:mamiemoema@gmail.com" className="text-[#7FB3FF]">mamiemoema@gmail.com</a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="w-full p-3 border rounded" required/>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Your email" className="w-full p-3 border rounded" required/>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Your message" className="w-full p-3 border rounded" rows="6" required/>
          <div>
            <button className="px-6 py-3 bg-[#7FB3FF] text-white rounded">Send message</button>
          </div>
        </form>

        <div className="mt-6">
          {status === "sending" && <div className="text-gray-600">Sending...</div>}
          {status === "sent" && <div className="text-green-600">Message sent! We'll get back to you.</div>}
          {status === "error" && <div className="text-red-600">Failed to send message.</div>}
        </div>
      </div>
    </div>
  );
}
