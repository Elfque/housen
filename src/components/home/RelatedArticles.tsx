const articles = [
  {
    id: 1,
    title: "How Location Impacts Property Value",
    image: "/images/testimonial-house-1.jpg",
    date: "Apr 28, 2024",
  },
  {
    id: 2,
    title: "Sustainable Homes: A Smarter Choice",
    image: "/images/testimonial-house-2.jpg",
    date: "Apr 15, 2024",
  },
  {
    id: 3,
    title: "Interior Design Trends to Watch",
    image: "/images/testimonial-house-3.jpg",
    date: "Apr 5, 2024",
  },
];

export default function RelatedArticles() {
  return (
    <div className="flex flex-col gap-6">
      {articles.map((article) => (
        <article
          key={article.id}
          className=" group flex gap-5 rounded-3xl transition-all hover:-translate-y-1"
        >
          <img
            src={article.image}
            alt={article.title}
            className="h-32 w-32 rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02] "
          />

          <div className="flex flex-col justify-center">
            <h4 className="leading-snug text-[#1C1C1C] transition-colors group-hover:text-brown ">
              {article.title}
            </h4>

            <span className="mt-4 text-sm text-neutral-500">
              {article.date}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
