import { Lightbulb, ShieldCheck, Award, Leaf } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace forward-thinking design, modern technology, and creative solutions that redefine living spaces.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Trust is the foundation of every relationship we build with clients, partners, and communities.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Every detail matters. We pursue the highest standards in craftsmanship, service, and execution.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We create environmentally responsible spaces designed for future generations.",
  },
];

export default function Values() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mb-20 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-[#C69C6D]">
            Our Values
          </span>

          <h2 className="mt-6 font-serif text-5xl md:text-6xl">
            Principles That Guide
            <br />
            Everything We Build
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-500">
            Our values shape every decision, every design, and every
            relationship we create.
          </p>
        </div>

        {/* Values Grid */}

        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-4xl border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#C69C6D] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F6F3]">
                  <Icon size={28} className="text-[#C69C6D]" />
                </div>

                <h3 className="mt-8 text-3xl font-medium">{value.title}</h3>

                <p className="mt-4 leading-relaxed text-neutral-500">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
