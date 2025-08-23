// File: components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-pastelBlue text-white text-center p-4 rounded-t-2xl shadow-soft mt-12">
      <p>© {new Date().getFullYear()} Creative Tools. All rights reserved.</p>
      <nav className="mt-2 flex justify-center gap-6 text-sm">
        <a href="/privacy" className="hover:underline">
          Privacy
        </a>
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </footer>
  );
}
