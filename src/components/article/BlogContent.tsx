import { QuoteBlock } from "./QuoteBlock";

export default function BlogContent() {
  return (
    <section className="pb-12">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-lg leading-9 text-neutral-700">
          Modern architecture continues to evolve, balancing innovation,
          sustainability, and human-centered design...
        </p>

        <h2 className="mt-16 text-4xl font-serif">Sustainable Luxury</h2>

        <p className="mt-6 text-lg leading-9 text-neutral-700">
          Sustainability is no longer optional. Luxury developments now
          integrate renewable materials and energy-efficient technologies from
          inception.
        </p>
        <QuoteBlock />
      </div>
    </section>
  );
}
