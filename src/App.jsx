import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Hero />
      </AnimatePresence>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
