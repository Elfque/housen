const stats = [
  {
    number: "500+",
    label: "Projects Completed",
  },
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "120+",
    label: "Team Members",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
];

export default function Statistics() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-4xl border p-10">
              <h3 className="text-5xl font-light">{item.number}</h3>

              <p className="mt-3 text-neutral-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
