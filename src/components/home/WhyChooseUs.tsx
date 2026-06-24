const stats = [
  {
    value: "20K+",
    label: "Spaces Created",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "300+",
    label: "Happy Clients",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 p-8"
            >
              <h3 className="text-5xl font-light">{stat.value}</h3>

              <p className="mt-3 text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
