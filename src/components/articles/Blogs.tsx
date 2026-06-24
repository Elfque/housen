import { featuredArticles } from "../../data/articles";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2">
      {featuredArticles.map((item) => (
        <BlogCard
          key={item.id}
          title={item.title}
          image={item.image}
          category={item.category}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Blogs;
