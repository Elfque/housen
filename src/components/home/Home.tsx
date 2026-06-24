import CTA from "./CTA";
import FeaturedProperties from "./FeaturedProperties";
import Footer from "./Footer";
import Hero from "./Hero";
import Insights from "./Insights";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <Insights />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
