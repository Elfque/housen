import { Link } from "react-router-dom";

export default function FeaturedInsight() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/insights/architecture-trends-2026"
          className="group block overflow-hidden rounded-[40px]"
        >
          <div className="relative">
            <img
              src="/images/featured-insight.jpg"
              alt=""
              className="h-162.5 w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-12 left-12">
              <span className="rounded-full bg-white px-4 py-2 text-sm">
                Featured
              </span>

              <h2 className="mt-6 max-w-2xl text-5xl text-white">
                Designing The Future: Architecture Trends 2026
              </h2>

              <p className="mt-4 text-white/80">May 12, 2026 · 5 min read</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
