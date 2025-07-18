import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeDivider from "./components/MarqueeDivider";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeDivider />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <TestimonialSection />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
