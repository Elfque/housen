export default function ContactForm() {
  return (
    <div className="rounded-[40px] bg-[#F8F6F3] p-10">
      <h2 className="mb-10 text-4xl font-serif">Send Us A Message</h2>

      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <input
            placeholder="First Name"
            className="rounded-2xl border bg-white px-5 py-4"
          />

          <input
            placeholder="Last Name"
            className="rounded-2xl border bg-white px-5 py-4"
          />
        </div>

        <input
          placeholder="Email Address"
          className="w-full rounded-2xl border bg-white px-5 py-4"
        />

        <input
          placeholder="Subject"
          className="w-full rounded-2xl border bg-white px-5 py-4"
        />

        <textarea
          rows={6}
          placeholder="Tell us about your project..."
          className="w-full rounded-2xl border bg-white px-5 py-4"
        />

        <button
          type="submit"
          className="
            rounded-full
            bg-accent
            px-8
            py-4
            text-black
            font-medium
          "
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
