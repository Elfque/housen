import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "../../types/insight";

type Props = {
  article: Insight;
};

export default function BlogCard({ article }: Props) {
  return (
    <Link to={`/insights/${article.slug}`} className="group block">
      <article>
        <div className="overflow-hidden rounded-[28px]">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="mt-6">
          <span className="text-sm font-medium text-[#C69C6D]">
            {article.category}
          </span>

          <h3 className="mt-3 text-2xl font-medium leading-snug text-[#1C1C1C]">
            {article.title}
          </h3>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-neutral-500">{article.date}</span>

            <ArrowUpRight
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={18}
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
