// pages/login.js
"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr] = useState(null);
  const [loading,setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); setErr(null);
    const res = await signIn("credentials", { redirect: false, email, password });
    setLoading(false);
    if (res?.error) setErr(res.error);
    else router.push("/");
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full p-8 border rounded-2xl">
        <h1 className="text-2xl font-bold mb-4">Sign in</h1>
        {err && <div className="mb-3 text-red-600">{err}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-3 border rounded" required/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 border rounded" required/>
          <button className="w-full py-3 bg-[#7FB3FF] text-white rounded" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="mt-4 text-sm">No account? <Link href="/register" className="text-[#7FB3FF]">Create one</Link></p>
      </div>
    </div>
  );
}
