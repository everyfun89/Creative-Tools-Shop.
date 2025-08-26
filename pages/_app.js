import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div className="flex flex-col min-h-screen bg-white text-gray-900">
        {/* 1x Header */}
        <Header />

        {/* Page content */}
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SessionProvider>
  );
}
