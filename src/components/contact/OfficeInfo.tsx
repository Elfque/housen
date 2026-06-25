import { Clock3, Building2 } from "lucide-react";

export default function OfficeInfo() {
  return (
    <div className="space-y-8">
      <div className="rounded-4xl bg-black p-8 text-white">
        <Building2 className="mb-6 text-[#C69C6D]" />

        <h3 className="text-2xl">Head Office</h3>

        <p className="mt-4 text-neutral-400">
          123 Madison Avenue
          <br />
          New York, NY 10001
        </p>
      </div>

      <div className="rounded-4xl border p-8">
        <Clock3 className="mb-6 text-[#C69C6D]" />

        <h3 className="text-2xl">Working Hours</h3>

        <div className="mt-4 space-y-3 text-neutral-500">
          <p>Monday - Friday: 9AM - 6PM</p>
          <p>Saturday: 10AM - 4PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
