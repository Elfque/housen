import Navbar from "../Navbar";
import BlogHero from "./Hero";
import Cover from "./Cover";
import BlogContent from "./BlogContent";
import ReadingProgress from "./ReadingProgress";
import ImageSection from "./ImageSection";
import Footer from "../Footer";

const Article = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <Cover />
      <BlogContent />
      <ImageSection />
      <ReadingProgress />
      <Footer />
    </div>
  );
};

export default Article;
