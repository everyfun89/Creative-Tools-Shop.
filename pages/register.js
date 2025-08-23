// pages/register.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState(null);
  const [loading,setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); setMsg(null);
    const res = await fetch("/api/register", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({name,email,password}) });
    const data = await res.json();
    setLoading(false);
    if (res.ok) router.push("/login");
    else setMsg(data?.error || "Registration failed");
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
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>
        <p className="mt-4 text-sm">Already have an account? <Link href="/login" className="text-[#7FB3FF]">Sign in</Link></p>
      </div>
    </div>
  );
}
