import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Creative Tools</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}
