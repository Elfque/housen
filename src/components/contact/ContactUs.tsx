import Footer from "../Footer";
import Navbar from "../Navbar";
import ContactCTA from "./ContactCTA";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
import ContactHero from "./Hero";
import OfficeLocations from "./OfficeLocations";

const ContactUs = () => {
  return (
    <div>
      <Navbar />

      <ContactHero />
      <ContactSection />
      <OfficeLocations />
      <FAQSection />
      <ContactCTA />

      <Footer />
    </div>
  );
};

export default ContactUs;
