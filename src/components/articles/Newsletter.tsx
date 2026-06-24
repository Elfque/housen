const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[40px] bg-black p-8 text-center text-white sm:p-12 lg:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Stay Inspired
          </h2>

          <p className="mt-4 text-sm text-neutral-400 sm:text-base lg:mt-6">
            Get architecture and real estate insights delivered monthly.
          </p>

          <div className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row sm:gap-0 lg:mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-neutral-600 bg-black px-6 py-4 text-sm text-white placeholder-neutral-400 outline-none focus:border-[#C69C6D] sm:rounded-l-full sm:rounded-r-none sm:text-base"
            />

            <button className="rounded-full border border-[#C69C6D] bg-[#C69C6D] px-8 py-4 text-sm font-medium transition hover:bg-[#b08a5d] sm:rounded-l-none sm:rounded-r-full sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
