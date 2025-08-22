// File: components/Header.js
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleClick = (path) => {
    if (!session) {
      router.push("/");
    } else {
      router.push(path);
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="font-bold text-xl cursor-pointer" onClick={() => router.push("/")}>LOGO</div>
      <nav className="flex gap-4">
        {["Home", "Tekenen", "Knutselen", "DIY", "Aanbiedingen", "About Us", "Contact"].map((label) => (
          <button key={label} onClick={() => handleClick(`/${label.toLowerCase().replace(" ", "")}`)} className="hover:underline">
            {label}
          </button>
        ))}
      </nav>
      <div className="flex gap-2">
        <button onClick={() => handleClick("/favorites")}>❤</button>
        <button onClick={() => handleClick("/cart")}>🛒</button>
      </div>
    </header>
  );
}
