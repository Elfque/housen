import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="rounded-4xl bg-white p-10 shadow-sm">
      <h2 className="font-serif text-5xl">
        Let's Talk About
        <br />
        Your Project
      </h2>

      <form className="mt-10 space-y-6">
        <Input label="Full Name" placeholder="Your full name" />

        <Input label="Email Address" placeholder="We'll get back to you here" />

        <div className="grid gap-6 md:grid-cols-2">
          <Input label="Company Name" placeholder="Who do you represent?" />

          <Input label="Subject" placeholder="What's this about?" />
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium">Message</label>

          <textarea
            rows={6}
            placeholder="Tell us how we can help"
            className="w-full rounded-2xl border border-[#E8E2DA] px-5 py-4 outline-none"
          />
        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-accent py-5 font-medium text-white">
          Send Message
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium">{label}</label>

      <input
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-[#E8E2DA]
          px-5
          py-4
          outline-none
        "
      />
    </div>
  );
}
