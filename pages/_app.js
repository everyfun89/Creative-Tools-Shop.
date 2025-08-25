// pages/_app.js
"use client";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [toast, setToast] = useState({ message: "", visible: false });

  // Functie om toast te tonen
  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 3000);
  };

  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} showToast={showToast} />

      {/* Toast pop-up */}
      {toast.visible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#7FB3FF] text-white px-6 py-3 rounded-xl shadow-lg animate-slide-up">
          {toast.message}
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translate(-50%, 100%); opacity: 0; }
          100% { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </SessionProvider>
  );
}
