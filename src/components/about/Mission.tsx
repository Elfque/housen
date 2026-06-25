export default function MissionVision() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-4xl bg-white p-12">
            <span className="text-accent">OUR MISSION</span>

            <h3 className="mt-4 text-3xl">Transforming Living Experiences</h3>

            <p className="mt-6 text-neutral-600">
              To deliver exceptional spaces that enrich lives through innovation
              and craftsmanship.
            </p>
          </div>

          <div className="rounded-4xl bg-black p-12 text-white">
            <span className="text-accent">OUR VISION</span>

            <h3 className="mt-4 text-3xl">
              Defining The Future Of Luxury Living
            </h3>

            <p className="mt-6 text-neutral-300">
              Creating communities and spaces that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
