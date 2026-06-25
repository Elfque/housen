import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="pt-40 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_600px]">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-accent">
              Contact Us
            </span>

            <h1 className="mt-6 font-serif text-7xl leading-[1.1] text-[#1B1B1B]">
              Get in Touch
              <br />
              with Our Team
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-500">
              We're here to answer your questions, discuss your project, and
              help you find the perfect property or investment.
            </p>
          </div>

          <div className="grid grid-cols-3 rounded-4xl border border-[#E8E2DA] bg-white">
            <InfoCard
              icon={<Phone size={24} />}
              title="Call Us"
              value="+1 (555) 123-4567"
              subtitle="Mon - Fri, 9AM - 6PM"
            />

            <InfoCard
              icon={<Mail size={24} />}
              title="Email Us"
              value="hello@housen.com"
              subtitle="Response within 24h"
            />

            <InfoCard
              icon={<MapPin size={24} />}
              title="Visit Us"
              value="123 Madison Avenue"
              subtitle="New York, NY"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="p-8">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F6F3] text-accent">
        {icon}
      </div>

      <h3 className="font-medium">{title}</h3>

      <p className="mt-3 font-semibold text-[#1B1B1B]">{value}</p>

      <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
    </div>
  );
}
