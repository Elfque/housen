export default function BlogHero() {
  return (
    <section className="pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <span className="text-[#C69C6D]">INSIGHTS</span>

            <h1 className="mt-6 text-7xl font-serif">
              Ideas, Trends & Inspiration For Better Living
            </h1>

            <p className="mt-6 text-lg text-neutral-500">
              Architecture, design and real estate insights.
            </p>
          </div>

          <img
            src="/images/testimonial-house-1.jpg"
            alt="Hero Image"
            className="rounded-4xl object-cover h-100"
          />
        </div>
      </div>
    </section>
  );
}

// <section className="pt-40 pb-24">
//   <div className="mx-auto max-w-7xl px-6">
//     <span className="text-sm uppercase tracking-[0.3em] text-[#C69C6D]">
//       Insights
//     </span>

//     <h1 className="mt-6 max-w-4xl font-serif text-3xl sm:text-5xl lg:text-7xl leading-tight">
//       Ideas, Trends & <br className="sm:block hidden" />
//       Inspiration For <br className="sm:block hidden" />
//       Better Living
//     </h1>

//     <p className="mt-8 max-w-2xl text-lg sm:text-xl text-neutral-500">
//       Explore architecture, design, sustainability, investment opportunities
//       and modern living.
//     </p>
//   </div>
// </section>
