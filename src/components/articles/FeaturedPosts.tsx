const FeaturedPosts = () => {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <article className="overflow-hidden rounded-xl md:rounded-[20px] lg:rounded-[40px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-80 md:h-122.5 w-full object-cover"
          />

          <div className="bg-[#0F0F0F] p-4 sm:p-8 md:p-12 text-white">
            <span className="text-[#C69C6D]">Architecture</span>

            <h2 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl">
              Designing The Future: Architecture Trends 2026
            </h2>

            <div className="mt-2 sm:mt-4 text-neutral-400">
              May 12, 2026 · 5 min read
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
