import ContactForm from "./ContactForm";
import OfficeLocations from "./OfficeLocations";

export default function ContactSection() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_550px]">
          <ContactForm />

          <OfficeLocations />
        </div>
      </div>
    </section>
  );
}
