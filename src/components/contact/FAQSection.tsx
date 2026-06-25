import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I schedule a consultation?",
    answer: "Simply fill out our contact form and our team will reach out.",
  },
  {
    question: "Do you work internationally?",
    answer: "Yes, we work with clients worldwide.",
  },
  {
    question: "How long does a project take?",
    answer: "Timelines vary based on project scope.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-[#F8F6F3] py-32">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-16 text-center text-5xl font-serif">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq) => (
          <div key={faq.question} className="border-b py-6">
            <button className="flex w-full items-center justify-between">
              <span>{faq.question}</span>
              <ChevronDown />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
