// File: components/Reviews.js
const reviews = [
  {
    name: "Sara",
    text: "Mooie kwaliteit en super snelle levering!",
    rating: 5,
  },
  {
    name: "Joris",
    text: "Creatieve selectie, de site is duidelijk en modern.",
    rating: 4,
  },
  {
    name: "Lena",
    text: "Heel blij met mijn aankoop. Aanrader!",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="max-w-7xl mx-auto mt-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Reviews</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-gray-900">{r.name}</p>
              <p className="text-yellow-500" aria-label={`${r.rating} sterren`}>
                {"★".repeat(r.rating)}
                <span className="text-gray-300">
                  {"★".repeat(5 - r.rating)}
                </span>
              </p>
            </div>
            <p className="text-gray-600 text-sm">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
