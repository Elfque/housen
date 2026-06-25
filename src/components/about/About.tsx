import AboutHero from "./AboutHero";
import AboutCTA from "./CTA";
import MissionVision from "./Mission";
import Process from "./Process";
import Statistics from "./Stats";
import OurStory from "./Story";
import Team from "./Team";
import Navbar from "../Navbar";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Statistics />

      <Team />
      <Process />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;
