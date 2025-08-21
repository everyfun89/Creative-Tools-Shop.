export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-pastelBg">
      <header className="bg-gradient-to-r from-pastelBlue to-pastelPink p-6 text-white text-center rounded-b-2xl shadow-soft">
        <h1 className="text-3xl font-bold">Creative Tools</h1>
        <nav className="mt-3 flex justify-center gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/trends" className="hover:underline">Trends</a>
          <a href="/crafts" className="hover:underline">Crafts</a>
          <a href="/drawing" className="hover:underline">Drawing</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </nav>
      </header>

      <main className="flex-1 p-6">{children}</main>

      <footer className="bg-pastelBlue text-white text-center p-4 rounded-t-2xl">
        © {new Date().getFullYear()} Creative Tools
      </footer>
    </div>
  );
}
