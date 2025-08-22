// File: pages/index.js
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    // Niet ingelogd → toon login
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#87d0fa] px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-6 text-white">Welcome to Creative Tools</h1>
        <p className="text-lg mb-8 text-white">Sign in to start exploring our creative products</p>
        <div className="flex gap-4">
          <button
            onClick={() => signIn("google")}
            className="px-6 py-3 bg-white text-[#87d0fa] rounded-xl font-semibold hover:bg-[#ffa8f4] transition"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("email")}
            className="px-6 py-3 bg-white text-[#87d0fa] rounded-xl font-semibold hover:bg-[#ffa8f4] transition"
          >
            Sign in with Email
          </button>
        </div>
      </div>
    );
  }

  // Ingelogd → toon homepage content
  return (
    <div className="px-6 md:px-12 py-12">
      <h2 className="text-2xl font-bold text-[#87d0fa] mb-6">Hello, {session.user.email}</h2>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-[#ffa8f4] text-white rounded-xl hover:bg-[#87d0fa] transition mb-8"
      >
        Sign Out
      </button>
      {/* Hier kun je je producten of andere content laten zien */}
      <p className="text-gray-700">Your trending products and other homepage content will appear here.</p>
    </div>
  );
}
