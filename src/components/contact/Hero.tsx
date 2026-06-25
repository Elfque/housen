import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-sm uppercase tracking-[0.3em] text-[#C69C6D]">
          Contact Us
        </span>

        <h1 className="mt-6 max-w-4xl font-serif text-7xl leading-tight">
          Let's Start
          <br />A Conversation
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-neutral-500">
          Whether you're looking for your dream property, planning a project, or
          simply have questions, we're here to help.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <ContactCard
            icon={<Phone size={22} />}
            title="Call Us"
            value="+1 (555) 123-4567"
          />

          <ContactCard
            icon={<Mail size={22} />}
            title="Email"
            value="hello@housen.com"
          />

          <ContactCard
            icon={<MapPin size={22} />}
            title="Visit Us"
            value="New York, USA"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-4xl border p-8">
      <div className="mb-6 text-[#C69C6D]">{icon}</div>

      <h3 className="text-xl">{title}</h3>

      <p className="mt-2 text-neutral-500">{value}</p>
    </div>
  );
}
