// File: components/FeaturedCategories.js
export default function FeaturedCategories() {
  const categories = [
    { label: "Alle", href: "#" },
    { label: "Dames", href: "#" },
    { label: "Heren", href: "#" },
    { label: "Wonen", href: "#" },
    { label: "Sport", href: "#" },
    { label: "Sieraden", href: "#" },
    { label: "Trends", href: "/trends" },
    { label: "Crafts", href: "/crafts" },
    { label: "Drawing", href: "/drawing" },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-10">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Categorieën
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {categories.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="group block rounded-xl border border-gray-200 bg-white p-4 hover:border-pastelBlue hover:shadow-md transition"
          >
            <div className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center mb-3 group-hover:border-pastelBlue">
              <span aria-hidden>🎨</span>
            </div>
            <div className="text-sm font-medium text-gray-700 group-hover:text-pastelBlue">
              {c.label}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
