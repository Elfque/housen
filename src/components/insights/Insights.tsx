import Navbar from "../Navbar";
import Footer from "../Footer";

import InsightsHero from "./InsightHero";
// import FeaturedInsight from "./FeaturedInsight";
import InsightsGrid from "./InsightGrid";
// import NewsletterSection from "./NewsletterSection";
import FeaturedInsight from "./FeaturedInsight";
import Newsletter from "../articles/Newsletter";

export default function InsightsPage() {
  return (
    <>
      <Navbar />

      <main>
        <InsightsHero />
        <FeaturedInsight />
        <InsightsGrid />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
