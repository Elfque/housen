import { useParams } from "react-router-dom";

import { insights } from "../../data/insights";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";

import ArticleHero from "./ArticleHero";
import AuthorCard from "./AuthorCard";
import RelatedArticles from "./RelatedArticle";
import ArticleContent from "./ArticleContent";
import { useEffect } from "react";

export default function InsightDetailsPage() {
  const { slug } = useParams();

  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <Navbar />

      <main>
        <ArticleHero article={article} />

        <div className="mx-auto max-w-4xl px-6 py-20">
          <AuthorCard author={article.author} />
          <ArticleContent blocks={article.content} />
        </div>

        <RelatedArticles currentSlug={article.slug} />
      </main>

      <Footer />
    </>
  );
}
