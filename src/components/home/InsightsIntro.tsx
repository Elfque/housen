import { ArrowRight } from "lucide-react";

export default function InsightsIntro() {
  return (
    <div className="flex flex-col">
      <h2 className="font-serif text-4xl leading-tight text-[#1C1C1C]">
        Smart Real Estate <span className="italic font-normal">Insights</span>
      </h2>

      <p className="mt-5 max-w-55 leading-relaxed text-neutral-500">
        Tips, trends, and inspiration to help you make smarter property
        decisions.
      </p>

      <button className="mt-12 flex w-fit items-center gap-3 rounded-full border border-brown px-8 py-4 text-sm font-medium transition-all hover:bg-brown">
        Learn All Articles
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
