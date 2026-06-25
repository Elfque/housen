export default function Team() {
  return (
    <section className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center text-5xl font-serif">
          Meet Our Leadership
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-4xl">
              <img
                src={`/images/team-${index + 1}.jpg`}
                alt=""
                className="h-112.5 w-full object-cover"
              />

              <div className="bg-white p-8">
                <h3 className="text-2xl">Executive Name</h3>

                <p className="mt-2 text-neutral-500">Managing Director</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
