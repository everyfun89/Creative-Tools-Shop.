// pages/terms.js
import Header from "../components/Header";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-4">Terms of Service</h1>

        <p className="text-gray-700 mb-4">
          Last updated: {new Date().toLocaleDateString()}.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Agreement to Terms</h2>
        <p className="text-gray-700">
          By accessing or using Creative Tools, you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Use of the Service</h2>
        <p className="text-gray-700">
          You agree to use our services only for lawful purposes and in accordance with these terms.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Limitation of Liability</h2>
        <p className="text-gray-700">
          We are not responsible for damages resulting from the use of our services, to the extent permitted by law.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Changes to Terms</h2>
        <p className="text-gray-700">
          We may update these terms at any time. Continued use of the service means you accept the new terms.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Contact</h2>
        <p className="text-gray-700">
          Questions about these terms? Contact us at{" "}
          <a
            href="mailto:mamiemoema@gmail.com"
            className="text-[#7FB3FF]"
          >
            mamiemoema@gmail.com
          </a>.
        </p>

        <p className="mt-8 text-gray-600">
          Back to <Link href="/" className="text-[#7FB3FF]">home</Link>.
        </p>
      </main>
    </div>
  );
}
