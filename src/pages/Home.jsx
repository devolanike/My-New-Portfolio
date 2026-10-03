import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import TechnicalSkills from "../components/TechnicalSkills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TechnicalSkills />
      <Projects />
      <Experience />
      <AboutMe />
    </>
  );
};

export default Home;
