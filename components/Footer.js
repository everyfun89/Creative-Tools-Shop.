import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Creative Tools
          </div>

          {/* Footer links */}
          <div className="flex gap-4 flex-wrap">
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy
            </Link>
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact
            </Link>
            <Link href="/feedback" className="text-sm hover:underline">
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
