const steps = ["Consultation", "Planning", "Design", "Development", "Delivery"];
export default function Process() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-20 text-center text-5xl font-serif">How We Work</h2>

        <div className="grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
