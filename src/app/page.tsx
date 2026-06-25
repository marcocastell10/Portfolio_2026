import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectGallery from "../components/ProjectGallery";
import AboutPreview from "../components/AboutPreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectGallery />
        <AboutPreview />
      </main>
      <Footer />
    </>
  );
}
