import { insights } from "../../data/insights";
import BlogCard from "./BlogCard";

export default function RelatedArticles({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const related = insights
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-5xl">Related Articles</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {related.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
