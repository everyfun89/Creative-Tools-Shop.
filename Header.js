// File: components/Header.js
import { Search, User, ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-pastelBlue">CreativeTools</div>

        {/* Search bar */}
        <div className="flex-1 max-w-xl mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Zoek creatieve producten..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pastelBlue"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        {/* Icons rechts */}
        <div className="flex items-center gap-6">
          <User className="cursor-pointer text-gray-600 hover:text-pastelBlue transition" />
          <ShoppingCart className="cursor-pointer text-gray-600 hover:text-pastelBlue transition" />
        </div>
      </div>

      {/* Menu-balk */}
      <nav className="bg-white border-t border-gray-200">
        <ul className="flex justify-center gap-10 py-3 text-gray-700 font-medium">
          <li className="hover:text-pastelBlue cursor-pointer">Alle</li>
          <li className="hover:text-pastelBlue cursor-pointer">Dames</li>
          <li className="hover:text-pastelBlue cursor-pointer">Heren</li>
          <li className="hover:text-pastelBlue cursor-pointer">Wonen</li>
          <li className="hover:text-pastelBlue cursor-pointer">Sport</li>
          <li className="hover:text-pastelBlue cursor-pointer">Sieraden</li>
          <li className="hover:text-pastelBlue cursor-pointer">Trends</li>
          <li className="hover:text-pastelBlue cursor-pointer">Crafts</li>
          <li className="hover:text-pastelBlue cursor-pointer">Drawing</li>
        </ul>
      </nav>
    </header>
  );
}
