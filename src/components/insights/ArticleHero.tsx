import type { Insight } from "../../types/insight";

type Props = {
  article: Insight;
};

export default function ArticleHero({ article }: Props) {
  return (
    <section className="pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <span className="rounded-full bg-[#E8D4BB] px-4 py-2">
          {article.category}
        </span>

        <h1 className="mt-8 max-w-4xl font-serif text-7xl leading-tight">
          {article.title}
        </h1>

        <div className="mt-6 flex gap-4 text-neutral-500">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <img
          src={article.image}
          alt={article.title}
          className="mt-12 h-162.5 w-full rounded-[40px] object-cover"
        />
      </div>
    </section>
  );
}
