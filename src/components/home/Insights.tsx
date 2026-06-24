import InsightsIntro from "./InsightsIntro";
import RelatedArticles from "./RelatedArticles";
import FeaturedArticleCarousel from "./FeaturedArticleCarousel";

export default function Insights() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr_320px] max-w-full">
          <InsightsIntro />

          <FeaturedArticleCarousel />

          <RelatedArticles />
        </div>
      </div>
    </section>
  );
}
