import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Buying from "./components/Buying";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProperties />
      <About />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      {/* <Buying /> */}
      <Footer />
    </div>
  );
}

export default App;
