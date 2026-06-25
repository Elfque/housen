export default function AboutHero() {
  return (
    <section className="pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-sm uppercase tracking-[0.3em] text-accent">
          About Us
        </span>

        <div className="mt-6 grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-7xl leading-tight">
              Building Spaces
              <br />
              That Inspire
              <br />
              Generations
            </h1>

            <p className="mt-8 max-w-xl text-lg text-neutral-500">
              We create exceptional living experiences through thoughtful
              architecture, premium craftsmanship, and innovative design.
            </p>
          </div>

          <img
            src="/images/about-hero.jpg"
            alt=""
            className="h-150 w-full rounded-[40px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
