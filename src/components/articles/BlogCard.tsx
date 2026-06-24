type BlogCardProps = {
  title: string;
  image: string;
  category: string;
  date: string;
};

const BlogCard = ({ title, image, category, date }: BlogCardProps) => {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="aspect-5/3 w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <span className="mt-6 block text-[#C69C6D]">{category}</span>
      <h3 className="mt-2 text-2xl leading-snug">{title}</h3>
      <p className="mt-3 text-neutral-500">{date}</p>
    </article>
  );
};

export default BlogCard;
