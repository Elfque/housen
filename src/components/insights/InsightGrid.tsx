import { Link } from "react-router-dom";
import { insights } from "../../data/insights";

export default function InsightsGrid() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex gap-4">
          <button className="rounded-full bg-black px-6 py-3 text-white">
            All
          </button>

          <button className="rounded-full border px-6 py-3">
            Architecture
          </button>

          <button className="rounded-full border px-6 py-3">Design</button>

          <button className="rounded-full border px-6 py-3">Investment</button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((article) => (
            <Link
              key={article.slug}
              to={`/insights/${article.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-4xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <span className="mt-6 block text-[#C69C6D]">
                {article.category}
              </span>

              <h3 className="mt-2 text-2xl">{article.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
