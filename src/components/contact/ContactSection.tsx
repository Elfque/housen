import ContactForm from "./ContactForm";
import OfficeInfo from "./OfficeInfo";

export default function ContactSection() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <ContactForm />

          <OfficeInfo />
        </div>
      </div>
    </section>
  );
}
