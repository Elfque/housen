import Footer from "../Footer";
import Navbar from "../Navbar";
import ContactSection from "./ContactSection";
import ContactHero from "./Hero";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F3] min-h-screen">
        <ContactHero />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;
