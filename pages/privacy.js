// pages/privacy.js
import Header from "../components/Header";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#7FB3FF] mb-4">Privacy Policy</h1>

        <p className="text-gray-700 mb-4">Last updated: {new Date().toLocaleDateString()}.</p>

        <h2 className="text-xl font-semibold mt-4">1. Introduction</h2>
        <p className="text-gray-700">Creative Tools ("we", "us", "our") respects your privacy and is committed to protecting it through our compliance with this policy.</p>

        <h2 className="text-xl font-semibold mt-4">2. Information We Collect</h2>
        <p className="text-gray-700">We collect personal information you provide directly (for example, when you register, contact us, or leave feedback). This may include your name, email address, and content you submit.</p>

        <h2 className="text-xl font-semibold mt-4">3. How We Use Information</h2>
        <p className="text-gray-700">We use information to provide and improve our services, respond to inquiries, and communicate about updates and offers. We do not sell your personal data.</p>

        <h2 className="text-xl font-semibold mt-4">4. Data Retention</h2>
        <p className="text-gray-700">We retain your personal information for as long as necessary to provide services and as required by law.</p>

        <h2 className="text-xl font-semibold mt-4">5. Security</h2>
        <p className="text-gray-700">We implement reasonable security measures to protect your information, but no online transmission is completely secure.</p>

        <h2 className="text-xl font-semibold mt-4">6. Contact</h2>
        <p className="text-gray-700">Questions about this policy? Contact us at <a href="mailto:mamiemoema@gmail.com" className="text-[#7FB3FF]">mamiemoema@gmail.com</a>.</p>

        <p className="mt-8 text-gray-600">Back to <Link href="/" className="text-[#7FB3FF]">home</Link>.</p>
      </main>
    </div>
  );
}
