import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import BlogHero from "./BlogHero";
import Blogs from "./Blogs";
import Categories from "./Categories";
import FeaturedPosts from "./FeaturedPosts";
import Newsletter from "./Newsletter";

const ArticlesPage = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <FeaturedPosts />
      <Categories />
      <Blogs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ArticlesPage;
