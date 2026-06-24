const categories = [
  "All",
  "Architecture",
  "Interior Design",
  "Investment",
  "Sustainability",
  "Lifestyle",
];

const Categories = () => {
  return (
    <div className="mb-6 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          className="rounded-full border border-neutral-600 px-6 py-3 duration-300 hover:border-neutral-800 hover:bg-neutral-600 hover:text-white"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
