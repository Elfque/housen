export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <img
        src="/hero-house.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6">
        <div className="max-w-xl text-white">
          <h1 className="mb-6 text-6xl font-light leading-tight">
            Building Spaces
            <br />
            That Tell Stories.
          </h1>

          <p className="mb-8 text-lg text-white/80">
            We create timeless architecture that blends beauty, functionality
            and sustainability.
          </p>

          <button className="rounded-full bg-amber-200 px-8 py-4 font-medium text-black">
            Explore Properties
          </button>
        </div>
      </div>
    </section>
  );
}
