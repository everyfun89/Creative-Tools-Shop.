import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#7FB3FF] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Titel */}
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">Creative Tools</a>
        </Link>

        {/* Navigatie */}
        <nav className="space-x-6">
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/privacy" legacyBehavior>
            <a className="hover:underline">Privacy</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:underline">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
