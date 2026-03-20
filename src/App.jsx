import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
    </div>
  );
}

export default App;
