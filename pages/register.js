// pages/register.js
"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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

export default function Register() {
  const router = useRouter();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState(null);
  const [loading,setLoading] = useState(false);
  const [toast,setToast] = useState({show:false, text:""});

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); setMsg(null);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({name,email,password})
      });
      const data = await res.json().catch(()=> ({}));
      if (!res.ok) {
        setMsg(data?.error || "Registration failed");
      } else {
        setToast({show:true, text:"Account successfully created"});
        setTimeout(()=> setToast({show:false, text:""}), 3000);
        setTimeout(()=> router.push("/login"), 800);
      }
    } catch (err) {
      setMsg("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full p-8 border rounded-2xl">
        <h1 className="text-2xl font-bold mb-4">Create account</h1>
        {msg && <div className="mb-3 text-red-600">{msg}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" className="w-full p-3 border rounded" required/>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-3 border rounded" required/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 border rounded" required/>
          <button className="w-full py-3 bg-[#7FB3FF] text-white rounded" disabled={loading}>
            {loading ? "Creating…" : "Create account"}
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-[#7FB3FF]">Sign in</Link>
        </p>
      </div>
      <Toast show={toast.show} text={toast.text} />
    </div>
  );
}
