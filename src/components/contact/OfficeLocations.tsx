export default function OfficeLocations() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-5xl font-serif">
          Visit Our Office
        </h2>

        <div className="overflow-hidden rounded-4xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63414.67078469185!2d3.34839742372766!3d6.59499231000251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b937fe07fab45%3A0x7eca42d0f92f3248!2sOjota%20Bus%20Stop!5e0!3m2!1sen!2sng!4v1782379450472!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-137.5 w-full"
          />
        </div>
      </div>
    </section>
  );
}
