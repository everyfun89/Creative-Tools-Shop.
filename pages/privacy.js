import Header from "../components/Header";
import Link from "next/link";

export default function Privacy() {
  const today =
    typeof window !== "undefined"
      ? new Date().toLocaleDateString()
      : "2025-01-01";

  return (
    <div className="min-h-screen bg-white">
      <Header />  {/* ✅ Header teruggezet */}

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">Last updated: {today}.</p>

        {/* rest blijft hetzelfde */}
      </main>
    </div>
  );
}
