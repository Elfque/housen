export default function CTA() {
  return (
    <section className="relative py-32">
      <img
        src="/cta-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <h2 className="text-6xl font-light">
          Start Your Journey
          <br />
          To Smarter Living
        </h2>

        <button className="mt-8 rounded-full bg-amber-200 px-8 py-4 text-black">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}
